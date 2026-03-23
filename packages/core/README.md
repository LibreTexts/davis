# @libretexts/davis-core

Framework-agnostic foundation of the Davis Design System. Contains all design tokens, component variant definitions, and the CSS files that consumers need to integrate Davis into their Tailwind v4 projects.

`tokens.ts` and `variants.ts` are the **single source of truth** for the entire design system. All other files in `dist/` are derived from them automatically at build time - none of these are maintained by hand.

---

## Sources of truth

### `src/tokens.ts`

Defines every design token as a typed TypeScript constant: color palettes, typography scale, spacing guide, border radii, shadows, focus ring, motion durations/easings, z-index layers, opacity levels, border widths, font weights, letter spacing, breakpoints, icon sizes, and container widths.

Consumed by:
- `generate-tailwind-configs.mjs` → produces `theme.css`, `base.css`, `base.scoped.css`, and `base.v4.css`
- Any JavaScript/TypeScript code that needs raw token values (e.g. dynamic styles, tests, documentation)

### `src/variants.ts`

Defines every component's visual variants using [`tailwind-variants`](https://www.tailwind-variants.org/). These are framework-agnostic — the same variant functions are consumed by both `@libretexts/davis-react` and `@libretexts/davis-vue`.

Consumed by:
- React and Vue component packages (import and call the exported `tv()` functions to get class strings)
- `generate-tailwind-configs.mjs` → produces `safelist.css`

---

## `dist/` file reference

### JavaScript

| File | Description |
|---|---|
| `index.js` | Package entry point. Re-exports everything from `tokens.js` and `variants.js`. |
| `tokens.js` | Compiled `tokens.ts` — all design token constants. |
| `variants.js` | Compiled `variants.ts` — all `tailwind-variants` component variant functions. |
| `*.d.ts` | TypeScript declaration files for the above. |
| `*.map` | Source maps for debugging. |

### CSS — theme & base

| File | Description |
|---|---|
| `theme.css` | Tailwind v4 `@theme` block. Registers all Davis design tokens as Tailwind CSS variables (`--color-primary`, `--font-sans`, `--shadow-md`, etc.) so they are available as utility classes (`bg-primary`, `font-sans`, `shadow-md`). **Import this before any Davis component styles.** |
| `base.v4.css` | Global base styles for Tailwind v4 projects. Sets typography defaults on `html`, defines the heading hierarchy (Major Third scale), installs the global `*:focus-visible` ring, and resets animations under `prefers-reduced-motion`. Import after `@import "tailwindcss"` and `theme.css`. |
| `base.css` | Same base styles as `base.v4.css` but wrapped in `@layer base` for Tailwind v3 projects and CSS-in-JS setups that manage layer order explicitly. Also exposes all tokens as `--davis-*` CSS custom properties on `:root` for use outside of Tailwind utilities. |
| `base.scoped.css` | Variant of `base.css` where every rule is scoped under the `.davis` class. Use this when embedding Davis components inside a host application to prevent style leakage — wrap your Davis component tree in `<div class="davis">`. |

### CSS — safelist

| File | Description |
|---|---|
| `safelist.css` | Auto-generated `@source inline()` containing every utility class string found in `variants.ts`. This solves a specific Tailwind v4 limitation: `@source` file-scanning directives inside `@import`ed CSS are not propagated in PostCSS-based build tools (Next.js, etc.), but `@source inline()` is. By importing this file, consumers get full component styling without needing to add manual `@source` paths or `content` entries. |

---

## How files are generated

All CSS outputs are produced by `scripts/generate-tailwind-configs.mjs`, which runs automatically as part of `npm run build`:

```
tsc  →  dist/index.js, tokens.js, variants.js, *.d.ts
generate-tailwind-configs.mjs  →  theme.css, base.css, base.scoped.css, base.v4.css, safelist.css
```

To regenerate only the CSS files without a full TypeScript recompile:

```bash
npm run generate:configs
```

> The script imports the compiled `dist/index.js`, so `tsc` must have run at least once beforehand.

---

## Usage in a Tailwind v4 project

```css
/* your-app/globals.css */
@import "tailwindcss";
@import "@libretexts/davis-react/styles.css";
```

The react package's `styles.css` handles importing `theme.css`, `base.v4.css`, and `safelist.css` from this package, so consuming apps only need the single import above.

If you are integrating `davis-core` directly (without a framework package):

```css
@import "tailwindcss";
@import "@libretexts/davis-core/theme.css";
@import "@libretexts/davis-core/base.v4.css";
@import "@libretexts/davis-core/safelist.css";
```
