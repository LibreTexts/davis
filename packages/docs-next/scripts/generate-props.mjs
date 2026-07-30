/**
 * Self-documenting prop tables.
 *
 * Extracts prop metadata (name, type, default, description, required) directly
 * from the component *source* — React via react-docgen-typescript, Vue via
 * vue-docgen-api — so the docs cannot drift from the library. JSDoc comments on
 * props become the descriptions.
 *
 * For the rare case docgen can't fully resolve a type (e.g. Button's
 * polymorphic `ButtonProps<C>` generic), a hand-written override file is merged
 * on top. Overrides are the exception, not the rule.
 *
 * Output: src/generated/props.json  ->  { [slug]: { react: Row[], vue: Row[] } }
 * where Row = { name, type, default, description, required }
 *
 * Run automatically by `predev` / `prebuild`; never edited by hand.
 */
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import reactDocgen from "react-docgen-typescript";
import { parse as parseVue } from "vue-docgen-api";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../../..");
const reactDir = resolve(repoRoot, "packages/react/src/components");
const vueDir = resolve(repoRoot, "packages/vue/src/components");
const outDir = resolve(__dirname, "../src/generated");
const overridesPath = resolve(__dirname, "props.overrides.json");

/**
 * Which components to document, and where their source lives in each package.
 * Grows one line per component as the migration proceeds.
 */
const COMPONENTS = [
  { slug: "button", react: "button.tsx", vue: "Button.vue" },
];

// --- React -----------------------------------------------------------------
const reactParser = reactDocgen.withDefaultConfig({
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Keep only props declared in Davis source — drop inherited DOM/React props.
  propFilter: (prop) =>
    !prop.parent || !/node_modules/.test(prop.parent.fileName),
});

/** Expand a literal-union enum into a readable `"a" | "b"` string. */
function reactType(t) {
  if (!t) return "";
  if (t.name === "enum" && Array.isArray(t.value)) {
    const vals = t.value.map((v) => v.value).filter((v) => v !== "undefined");
    if (vals.length && vals.length <= 12) return vals.join(" | ");
  }
  return t.name;
}

function reactProps(file) {
  const full = resolve(reactDir, file);
  if (!existsSync(full)) return [];
  const parsed = reactParser.parse([full]);
  const comp = parsed[0];
  if (!comp) return [];
  return Object.values(comp.props)
    .filter((p) => p.name !== "ref") // synthetic, not a documented prop
    .map((p) => ({
      name: p.name,
      type: reactType(p.type),
      default: p.defaultValue?.value ?? "",
      description: (p.description ?? "").trim(),
      required: Boolean(p.required),
    }));
}

// --- Vue --------------------------------------------------------------------
async function vueProps(file) {
  const full = resolve(vueDir, file);
  if (!existsSync(full)) return [];
  const doc = await parseVue(full);
  return (doc.props ?? []).map((p) => ({
    name: p.name,
    type: p.type?.name ?? "",
    default: p.defaultValue?.value ?? "",
    description: (p.description ?? "").trim(),
    required: Boolean(p.required),
  }));
}

// --- Build ------------------------------------------------------------------
const overrides = existsSync(overridesPath)
  ? JSON.parse(readFileSync(overridesPath, "utf8"))
  : {};

/** Merge override rows over generated rows, keyed by prop name. */
function applyOverrides(generated, override) {
  if (!override) return generated;
  const byName = new Map(generated.map((r) => [r.name, r]));
  for (const row of override) byName.set(row.name, { ...byName.get(row.name), ...row });
  return [...byName.values()];
}

const out = {};
for (const c of COMPONENTS) {
  const ov = overrides[c.slug] ?? {};
  out[c.slug] = {
    react: applyOverrides(reactProps(c.react), ov.react),
    vue: applyOverrides(await vueProps(c.vue), ov.vue),
  };
  console.log(
    `[props] ${c.slug}: react=${out[c.slug].react.length} vue=${out[c.slug].vue.length}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "props.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`[props] wrote ${resolve(outDir, "props.json")}`);
