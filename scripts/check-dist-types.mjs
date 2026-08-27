#!/usr/bin/env node
/**
 * Asserts every publishable workspace actually ships the declaration file its
 * package.json advertises. The Vue packages silently published without types
 * for several releases because `vite build` wiped the `vue-tsc` output; this
 * guard makes that failure loud.
 */
import { readdirSync, existsSync, readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const packagesDir = join(root, "packages");

// Optional filter: `node scripts/check-dist-types.mjs vue vue-table` checks only
// those workspace directories. With no arguments every publishable package is
// checked, which requires all of them to have been built first.
const only = new Set(process.argv.slice(2));

const failures = [];
const checked = [];

for (const dir of readdirSync(packagesDir)) {
  if (only.size > 0 && !only.has(dir)) continue;

  const pkgPath = join(packagesDir, dir, "package.json");
  if (!existsSync(pkgPath)) continue;

  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
  if (pkg.private) continue;

  const declared = new Set();
  if (pkg.types) declared.add(pkg.types);
  if (pkg.typings) declared.add(pkg.typings);
  for (const entry of Object.values(pkg.exports ?? {})) {
    if (entry && typeof entry === "object" && typeof entry.types === "string") {
      declared.add(entry.types);
    }
  }

  if (declared.size === 0) {
    console.log(`- ${pkg.name}: no types declared, skipping`);
    continue;
  }

  for (const rel of declared) {
    const abs = join(packagesDir, dir, rel);
    if (existsSync(abs)) {
      checked.push(`${pkg.name} -> ${rel}`);
    } else {
      failures.push(`${pkg.name}: package.json points at "${rel}" but that file does not exist after build`);
    }
  }
}

for (const ok of checked) console.log(`ok  ${ok}`);

if (failures.length > 0) {
  console.error("\nMissing type declarations:");
  for (const f of failures) console.error(`  x ${f}`);
  console.error("\nThe package would publish without types. Check that the package's");
  console.error("vite config sets `build.emptyOutDir: false` so it does not delete the");
  console.error("declarations emitted by tsc/vue-tsc in the preceding build step.");
  process.exit(1);
}

if (checked.length === 0) {
  console.error("\nNo publishable packages matched. Check the directory names passed as arguments.");
  process.exit(1);
}

console.log(`\nAll ${checked.length} declared type entrypoints present.`);
