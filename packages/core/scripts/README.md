# Design Token & Variant Build Scripts

## Overview

`generate-tailwind-configs.mjs` reads the two sources of truth in `src/` and produces all CSS output files in `dist/`. It runs automatically as the second step of `npm run build`.

## Sources of truth

| File | Generates |
|---|---|
| `src/tokens.ts` | `theme.css`, `base.css`, `base.scoped.css`, `base.v4.css` |
| `src/variants.ts` | `safelist.css` |

## Usage

```bash
# Full build (tsc + generate)
npm run build

# Regenerate CSS files only (requires tsc to have run first)
npm run generate:configs
```

## Files

- **`generate-tailwind-configs.mjs`** — Main generation script. See the package `README.md` for a description of each output file.
- **`../src/tokens.ts`** — Source of truth for all design tokens. Edit this to change colors, typography, spacing, etc.
- **`../src/variants.ts`** — Source of truth for all component variant class strings. Edit this to change how components look.
