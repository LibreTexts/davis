/**
 * Codemod: Markdoc `page.md` (old Next.js docs) -> Starlight MDX.
 *
 * Usage:  node scripts/migrate-markdoc.mjs <slug> [<slug> ...]
 *
 * Transforms performed:
 *  - Preserves frontmatter (title/description).
 *  - Drops the leading `# H1` (Starlight renders the title from frontmatter)
 *    and standalone `---` thematic breaks used as section dividers.
 *  - `{% framework-tabs %}`      -> <Tabs syncKey="framework">
 *  - `{% tab framework="react" %}` -> <TabItem label="React"> (etc.)
 *  - `{% callout type title %}`  -> <Aside type title> (info->note, warning->caution)
 *  - Removes the stale "Coming Soon" / "in Progress" callouts and bare
 *    "Coming soon" lines — Vue components exist now.
 *  - Replaces the hand-written `## Props` tables with <PropsTable> so props
 *    come from source and can't drift.
 *
 * The result keeps the narrative (usage, "when to use", accessibility) and code
 * examples; live <Example> blocks are layered in per-component afterwards.
 */
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../../..");
const srcRoot = resolve(repoRoot, "packages/docs/src/app/docs/components");
const outRoot = resolve(__dirname, "../src/content/docs/components");

const ASIDE_TYPE = {
  info: "note",
  note: "note",
  tip: "tip",
  success: "tip",
  warning: "caution",
  caution: "caution",
  danger: "danger",
  error: "danger",
};

function attr(str, name) {
  const m = str.match(new RegExp(`${name}="([^"]*)"`));
  return m ? m[1] : undefined;
}

function migrate(slug) {
  const src = resolve(srcRoot, slug, "page.md");
  const raw = readFileSync(src, "utf8");

  // Split frontmatter from body.
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const frontmatter = fm ? fm[0].trim() : "---\n---";
  let body = fm ? raw.slice(fm[0].length) : raw;

  // 1. Drop stale "Coming Soon"/"in Progress" callouts and bare lines.
  body = body.replace(
    /\{%\s*callout[^%]*title="[^"]*(?:Coming Soon|in Progress)[^"]*"\s*%\}[\s\S]*?\{%\s*\/callout\s*%\}\n?/gi,
    "",
  );
  body = body.replace(/^[ \t]*Coming soon\.?[ \t]*$/gim, "");

  // 2. Replace the whole `## Props` section with generated tables.
  const propsBlock =
    `## Props\n\n` +
    `<Tabs syncKey="framework">\n` +
    `  <TabItem label="React">\n    <PropsTable component="${slug}" framework="react" />\n  </TabItem>\n` +
    `  <TabItem label="Vue">\n    <PropsTable component="${slug}" framework="vue" />\n  </TabItem>\n` +
    `</Tabs>\n`;
  body = body.replace(/##\s+Props\b[\s\S]*?(?=\n##\s|\n#\s|$)/, propsBlock);

  // 3. Convert remaining Markdoc tags to Starlight MDX components.
  body = body.replace(/\{%\s*callout\s+([^%]*?)\s*%\}/g, (_m, a) => {
    const type = ASIDE_TYPE[(attr(a, "type") || "note").toLowerCase()] || "note";
    const title = attr(a, "title");
    return title ? `<Aside type="${type}" title="${title}">` : `<Aside type="${type}">`;
  });
  body = body.replace(/\{%\s*\/callout\s*%\}/g, "</Aside>");
  body = body.replace(/\{%\s*framework-tabs\s*%\}/g, '<Tabs syncKey="framework">');
  body = body.replace(/\{%\s*\/framework-tabs\s*%\}/g, "</Tabs>");
  body = body.replace(
    /\{%\s*tab\s+framework="react"\s*%\}/g,
    '<TabItem label="React">',
  );
  body = body.replace(
    /\{%\s*tab\s+framework="vue"\s*%\}/g,
    '<TabItem label="Vue">',
  );
  body = body.replace(/\{%\s*\/tab\s*%\}/g, "</TabItem>");

  // 4. Drop the leading H1 and standalone `---` dividers; tidy blank lines.
  body = body.replace(/^#\s+.*$/m, "");
  body = body.replace(/^[ \t]*---[ \t]*$/gm, "");
  body = body.replace(/\n{3,}/g, "\n\n").trim();

  // 5. Assemble imports (only what's used) + frontmatter + body.
  const starlight = ["Tabs", "TabItem"];
  if (body.includes("<Aside")) starlight.push("Aside");
  const imports =
    `import { ${starlight.join(", ")} } from "@astrojs/starlight/components";\n` +
    `import PropsTable from "../../../components/PropsTable.astro";`;

  const out = `${frontmatter}\n\n${imports}\n\n${body}\n`;
  mkdirSync(outRoot, { recursive: true });
  const dest = resolve(outRoot, `${slug}.mdx`);
  writeFileSync(dest, out);
  console.log(`[migrate] ${slug} -> ${dest.replace(repoRoot + "/", "")}`);
}

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error("Usage: node scripts/migrate-markdoc.mjs <slug> [<slug> ...]");
  process.exit(1);
}
for (const slug of slugs) migrate(slug);
