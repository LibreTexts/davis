#!/usr/bin/env node
/**
 * Generates Tailwind CSS configuration files from tokens.ts
 *
 * This ensures tokens.ts is the single source of truth for all design tokens.
 * Run this script whenever tokens.ts changes.
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Import the compiled tokens from dist (run after tsc build)
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const {
  COLORS, SURFACE, FONT_FAMILY_SANS, FONT_SIZE, RADIUS, SHADOWS, FOCUS_RING, MOTION, TARGET_SIZE,
  Z_INDEX, OPACITY, BORDER_WIDTH, FONT_WEIGHT, LETTER_SPACING, BREAKPOINTS, ICON_SIZE, CONTAINER,
} = await import('../dist/index.js');

// ─── Helpers ─────────────────────────────────────────────────────────

/** Font family stack as a CSS-ready comma-separated string */
const fontFamilyCSS = Array.from(FONT_FAMILY_SANS).join(', ');

/**
 * Generates --color-{name}-{shade} CSS variables for a color palette.
 * Skips the 'DEFAULT' key — that is handled separately as the bare --color-{name} variable.
 */
function colorShadeVars(name, shades, indent = '  ') {
  return Object.entries(shades)
    .filter(([shade]) => shade !== 'DEFAULT')
    .map(([shade, color]) => `${indent}--color-${name}-${shade}: ${color};`)
    .join('\n');
}

/**
 * Returns the bare --color-{name} variable, pointing to the 500 shade for
 * numeric-shade palettes or the DEFAULT key for named-shade objects (e.g. text).
 */
function colorDefaultVar(name, shades, indent = '  ') {
  const value = shades[500] ?? shades['DEFAULT'];
  return value ? `${indent}--color-${name}: ${value};` : '';
}

// ─── Generate Tailwind v4 Theme ──────────────────────────────────────

function generateTailwindV4Theme() {
  const fontSizeVars = Object.entries(FONT_SIZE)
    .map(([size, [value, { lineHeight }]]) =>
      `  --font-size-${size}: ${value};\n  --font-size-${size}--line-height: ${lineHeight};`
    )
    .join('\n\n');

  const colorVars = Object.entries(COLORS)
    .map(([name, shades]) => {
      const shadeLines = colorShadeVars(name, shades);
      const defaultLine = colorDefaultVar(name, shades);
      const heading = `  /* ${name.charAt(0).toUpperCase() + name.slice(1)} */`;
      return [heading, shadeLines, defaultLine].filter(Boolean).join('\n');
    })
    .join('\n\n');

  const radiusVars = Object.entries(RADIUS)
    .map(([size, value]) =>
      size === 'DEFAULT'
        ? `  --radius-DEFAULT: ${value};\n  --radius: ${value};`
        : `  --radius-${size}: ${value};`
    )
    .join('\n');

  const shadowVars = Object.entries(SHADOWS)
    .map(([size, value]) =>
      size === 'DEFAULT' ? `  --shadow: ${value};` : `  --shadow-${size}: ${value};`
    )
    .join('\n');

  const theme = `/**
 * Davis Design System — Tailwind CSS v4 Theme
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Theme configuration for Tailwind CSS v4 using @theme directive.
 * Import this file in your CSS to get all Davis design tokens.
 */

@theme {
  /* ─── Typography ──────────────────────────────────────────── */

  --font-sans: ${fontFamilyCSS};

  /* Major Third typographic scale (ratio 1.250, base 16px) */
${fontSizeVars}

  /* ─── Colors ──────────────────────────────────────────────── */

${colorVars}

  /* Surface */
${Object.entries(SURFACE).map(([key, value]) => {
  const varName = key === 'DEFAULT' ? '--color-surface' : `--color-surface-${key}`;
  return `  ${varName}: ${value};`;
}).join('\n')}

  /* ─── Border Radius ───────────────────────────────────────── */

${radiusVars}

  /* ─── Shadows ─────────────────────────────────────────────── */

${shadowVars}

  /* ─── Focus Ring ──────────────────────────────────────────── */

  --ring-color: ${FOCUS_RING.color};

  /* ─── Motion ─────────────────────────────────────────────── */

  --duration-fast: ${MOTION.durationFast};
  --duration-default: ${MOTION.durationDefault};
  --duration-slow: ${MOTION.durationSlow};

  --ease-default: ${MOTION.easeDefault};
  --ease-in: ${MOTION.easeIn};
  --ease-out: ${MOTION.easeOut};

  /* ─── Target Size (WCAG 2.2) ─────────────────────────────── */

  --davis-target-size-minimum: ${TARGET_SIZE.minimum};
  --davis-target-size-comfortable: ${TARGET_SIZE.comfortable};

  /* ─── Z-Index ──────────────────────────────────────────────── */

${Object.entries(Z_INDEX).map(([name, value]) => `  --z-index-${name}: ${value};`).join('\n')}

  /* ─── Opacity ──────────────────────────────────────────────── */

${Object.entries(OPACITY).map(([name, value]) => `  --opacity-${name}: ${value};`).join('\n')}

  /* ─── Border Width ─────────────────────────────────────────── */

${Object.entries(BORDER_WIDTH).map(([name, value]) => `  --border-width-${name}: ${value};`).join('\n')}

  /* ─── Font Weight ──────────────────────────────────────────── */

${Object.entries(FONT_WEIGHT).map(([name, value]) => `  --font-weight-${name}: ${value};`).join('\n')}

  /* ─── Letter Spacing ───────────────────────────────────────── */

${Object.entries(LETTER_SPACING).map(([name, value]) => `  --letter-spacing-${name}: ${value};`).join('\n')}

  /* ─── Breakpoints ──────────────────────────────────────────── */

${Object.entries(BREAKPOINTS).map(([name, value]) => `  --breakpoint-${name}: ${value};`).join('\n')}

  /* ─── Icon Size ────────────────────────────────────────────── */

${Object.entries(ICON_SIZE).map(([name, value]) => `  --icon-size-${name}: ${value};`).join('\n')}

  /* ─── Container / Content Width ────────────────────────────── */

${Object.entries(CONTAINER).map(([name, value]) => `  --container-${name}: ${value};`).join('\n')}
}
`;

  // Write to both src/ (for repo visibility) and dist/ (consumed via package exports)
  writeFileSync(join(rootDir, 'src', 'theme.css'), theme);
  writeFileSync(join(rootDir, 'dist', 'theme.css'), theme);
  console.log('✓ Generated theme.css');
}

// ─── Generate Tailwind v4 Base CSS ──────────────────────────────────

function generateTailwindV4BaseCSS() {
  const fontFamilyValue = Array.from(FONT_FAMILY_SANS)
    .map(f => (f.includes(' ') ? `'${f}'` : f))
    .join(', ');

  const css = `/**
 * Davis Design System — Tailwind CSS v4 Base Styles
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Base styles for Tailwind CSS v4 (no @layer wrapper).
 * Contains typography defaults, heading hierarchy, focus management,
 * and reduced motion support.
 *
 * Usage (after @import "tailwindcss"):
 *   @import "@libretexts/davis-core/theme.css";
 *   @import "@libretexts/davis-core/base.v4.css";
 */

/* ─── Typography Defaults ───────────────────────────────── */

html {
  font-family: ${fontFamilyValue};
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── Heading Hierarchy (Major Third Scale) ─────────────────── */

h1 {
  font-size: ${FONT_SIZE['4xl'][0]};
  line-height: ${FONT_SIZE['4xl'][1].lineHeight};
  font-weight: 700;
  letter-spacing: -0.025em;
}

h2 {
  font-size: ${FONT_SIZE['3xl'][0]};
  line-height: ${FONT_SIZE['3xl'][1].lineHeight};
  font-weight: 700;
  letter-spacing: -0.02em;
}

h3 {
  font-size: ${FONT_SIZE['2xl'][0]};
  line-height: ${FONT_SIZE['2xl'][1].lineHeight};
  font-weight: 600;
}

h4 {
  font-size: ${FONT_SIZE.xl[0]};
  line-height: ${FONT_SIZE.xl[1].lineHeight};
  font-weight: 600;
}

h5 {
  font-size: ${FONT_SIZE.lg[0]};
  line-height: ${FONT_SIZE.lg[1].lineHeight};
  font-weight: 600;
}

h6 {
  font-size: ${FONT_SIZE.lg[0]};
  line-height: ${FONT_SIZE.lg[1].lineHeight};
  font-weight: 600;
}

/* ─── Focus Management ──────────────────────────────────────── */

*:focus-visible {
  outline: ${FOCUS_RING.width} ${FOCUS_RING.style} ${FOCUS_RING.color};
  outline-offset: ${FOCUS_RING.offset};
}

*:focus:not(:focus-visible) {
  outline: none;
}

/* ─── Reduced Motion ──────────────────────────────────────────── */
/* Disables transitions and animations for users who prefer        */
/* reduced motion. Respects prefers-reduced-motion: reduce.        */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

  writeFileSync(join(rootDir, 'dist', 'base.v4.css'), css);
  console.log('✓ Generated dist/base.v4.css');
}

// ─── Generate Base CSS ───────────────────────────────────────────────

function generateBaseCSS() {
  const fontFamilyValue = Array.from(FONT_FAMILY_SANS)
    .map(f => (f.includes(' ') ? `'${f}'` : f))
    .join(', ');

  const css = `/**
 * Davis Design System — Base Styles
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Framework-agnostic base CSS for consuming packages.
 * Contains CSS custom properties, typography defaults, heading hierarchy,
 * and focus-visible patterns.
 *
 * Scope: global (affects entire page via :root).
 * For scoped/embedded usage, import base.scoped.css instead.
 */

@layer base {
  /* ─── CSS Custom Properties ─────────────────────────────────── */

  :root {
    /* Colors */
    --davis-color-primary: ${COLORS.primary[500]};
    --davis-color-secondary: ${COLORS.secondary[500]};
    --davis-color-tertiary: ${COLORS.tertiary[500]};
    --davis-color-success: ${COLORS.success[500]};
    --davis-color-warning: ${COLORS.warning[500]};
    --davis-color-danger: ${COLORS.danger[500]};
    --davis-color-neutral: ${COLORS.neutral[900]};

    /* Surface */
${Object.entries(SURFACE).map(([key, value]) => {
  const varName = key === 'DEFAULT' ? '--davis-surface' : `--davis-surface-${key}`;
  return `    ${varName}: ${value};`;
}).join('\n')}

    /* Typography */
    --davis-font-family: ${fontFamilyValue};

    /* Border Radius */
    --davis-radius: ${RADIUS.DEFAULT};

    /* Focus Ring */
    --davis-ring-width: ${FOCUS_RING.width};
    --davis-ring-color: ${FOCUS_RING.color};
    --davis-ring-offset: ${FOCUS_RING.offset};

    /* Motion */
    --davis-motion-duration-fast: ${MOTION.durationFast};
    --davis-motion-duration-default: ${MOTION.durationDefault};
    --davis-motion-duration-slow: ${MOTION.durationSlow};
    --davis-motion-ease-default: ${MOTION.easeDefault};
    --davis-motion-ease-in: ${MOTION.easeIn};
    --davis-motion-ease-out: ${MOTION.easeOut};

    /* Target Size (WCAG 2.2) */
    --davis-target-size-minimum: ${TARGET_SIZE.minimum};
    --davis-target-size-comfortable: ${TARGET_SIZE.comfortable};

    /* Z-Index */
${Object.entries(Z_INDEX).map(([name, value]) => `    --davis-z-${name}: ${value};`).join('\n')}

    /* Opacity */
${Object.entries(OPACITY).map(([name, value]) => `    --davis-opacity-${name}: ${value};`).join('\n')}

    /* Border Width */
${Object.entries(BORDER_WIDTH).map(([name, value]) => `    --davis-border-width-${name}: ${value};`).join('\n')}

    /* Font Weight */
${Object.entries(FONT_WEIGHT).map(([name, value]) => `    --davis-font-weight-${name}: ${value};`).join('\n')}

    /* Letter Spacing */
${Object.entries(LETTER_SPACING).map(([name, value]) => `    --davis-letter-spacing-${name}: ${value};`).join('\n')}

    /* Breakpoints */
${Object.entries(BREAKPOINTS).map(([name, value]) => `    --davis-breakpoint-${name}: ${value};`).join('\n')}

    /* Icon Size */
${Object.entries(ICON_SIZE).map(([name, value]) => `    --davis-icon-size-${name}: ${value};`).join('\n')}

    /* Container / Content Width */
${Object.entries(CONTAINER).map(([name, value]) => `    --davis-container-${name}: ${value};`).join('\n')}
  }

  /* ─── Typography Defaults ───────────────────────────────────── */

  html {
    font-family: var(--davis-font-family);
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ─── Heading Hierarchy (Major Third Scale) ─────────────────── */

  h1 {
    font-size: ${FONT_SIZE['4xl'][0]};
    line-height: ${FONT_SIZE['4xl'][1].lineHeight};
    font-weight: 700;
    letter-spacing: -0.025em;
  }

  h2 {
    font-size: ${FONT_SIZE['3xl'][0]};
    line-height: ${FONT_SIZE['3xl'][1].lineHeight};
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h3 {
    font-size: ${FONT_SIZE['2xl'][0]};
    line-height: ${FONT_SIZE['2xl'][1].lineHeight};
    font-weight: 600;
  }

  h4 {
    font-size: ${FONT_SIZE.xl[0]};
    line-height: ${FONT_SIZE.xl[1].lineHeight};
    font-weight: 600;
  }

  h5 {
    font-size: ${FONT_SIZE.lg[0]};
    line-height: ${FONT_SIZE.lg[1].lineHeight};
    font-weight: 600;
  }

  h6 {
    font-size: ${FONT_SIZE.lg[0]};
    line-height: ${FONT_SIZE.lg[1].lineHeight};
    font-weight: 600;
  }

  /* ─── Focus Management ──────────────────────────────────────── */

  *:focus-visible {
    outline: var(--davis-ring-width) solid var(--davis-ring-color);
    outline-offset: var(--davis-ring-offset);
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* ─── Reduced Motion ──────────────────────────────────────── */

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}
`;

  writeFileSync(join(rootDir, 'src', 'base.css'), css);
  writeFileSync(join(rootDir, 'dist', 'base.css'), css);
  console.log('✓ Generated base.css');
}

// ─── Generate Scoped Base CSS ────────────────────────────────────────

function generateScopedBaseCSS() {
  const fontFamilyValue = Array.from(FONT_FAMILY_SANS)
    .map(f => (f.includes(' ') ? `'${f}'` : f))
    .join(', ');

  const css = `/**
 * Davis Design System — Scoped Base Styles
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Variant of base.css where every rule is scoped under \`.davis\`.
 * Prevents style leakage when Davis components are embedded in host applications.
 *
 * Wrap Davis components in a \`.davis\` container to activate these styles.
 */

/* ─── CSS Custom Properties (scoped to .davis) ───────────────── */

.davis {
  /* Colors */
  --davis-color-primary: ${COLORS.primary[500]};
  --davis-color-secondary: ${COLORS.secondary[500]};
  --davis-color-tertiary: ${COLORS.tertiary[500]};
  --davis-color-success: ${COLORS.success[500]};
  --davis-color-warning: ${COLORS.warning[500]};
  --davis-color-danger: ${COLORS.danger[500]};
  --davis-color-neutral: ${COLORS.neutral[900]};

  /* Surface */
${Object.entries(SURFACE).map(([key, value]) => {
  const varName = key === 'DEFAULT' ? '--davis-surface' : `--davis-surface-${key}`;
  return `  ${varName}: ${value};`;
}).join('\n')}

  /* Typography */
  --davis-font-family: ${fontFamilyValue};

  /* Border Radius */
  --davis-radius: ${RADIUS.DEFAULT};

  /* Focus Ring */
  --davis-ring-width: ${FOCUS_RING.width};
  --davis-ring-color: ${FOCUS_RING.color};
  --davis-ring-offset: ${FOCUS_RING.offset};

  /* Motion */
  --davis-motion-duration-fast: ${MOTION.durationFast};
  --davis-motion-duration-default: ${MOTION.durationDefault};
  --davis-motion-duration-slow: ${MOTION.durationSlow};
  --davis-motion-ease-default: ${MOTION.easeDefault};
  --davis-motion-ease-in: ${MOTION.easeIn};
  --davis-motion-ease-out: ${MOTION.easeOut};

  /* Target Size (WCAG 2.2) */
  --davis-target-size-minimum: ${TARGET_SIZE.minimum};
  --davis-target-size-comfortable: ${TARGET_SIZE.comfortable};

  /* Z-Index */
${Object.entries(Z_INDEX).map(([name, value]) => `  --davis-z-${name}: ${value};`).join('\n')}

  /* Opacity */
${Object.entries(OPACITY).map(([name, value]) => `  --davis-opacity-${name}: ${value};`).join('\n')}

  /* Border Width */
${Object.entries(BORDER_WIDTH).map(([name, value]) => `  --davis-border-width-${name}: ${value};`).join('\n')}

  /* Font Weight */
${Object.entries(FONT_WEIGHT).map(([name, value]) => `  --davis-font-weight-${name}: ${value};`).join('\n')}

  /* Letter Spacing */
${Object.entries(LETTER_SPACING).map(([name, value]) => `  --davis-letter-spacing-${name}: ${value};`).join('\n')}

  /* Breakpoints */
${Object.entries(BREAKPOINTS).map(([name, value]) => `  --davis-breakpoint-${name}: ${value};`).join('\n')}

  /* Icon Size */
${Object.entries(ICON_SIZE).map(([name, value]) => `  --davis-icon-size-${name}: ${value};`).join('\n')}

  /* Container / Content Width */
${Object.entries(CONTAINER).map(([name, value]) => `  --davis-container-${name}: ${value};`).join('\n')}
}

/* ─── Scoped Preflight replacements ──────────────────────────── */
/* Initialize box model and Tailwind internals within .davis so   */
/* utility classes work correctly without the global Preflight.   */

.davis *,
.davis *::before,
.davis *::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

/* ─── Typography Defaults (scoped) ───────────────────────────── */

.davis {
  font-family: var(--davis-font-family);
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ─── Heading Hierarchy (Major Third Scale, scoped) ──────────── */

.davis h1 {
  font-size: ${FONT_SIZE['4xl'][0]};
  line-height: ${FONT_SIZE['4xl'][1].lineHeight};
  font-weight: 700;
  letter-spacing: -0.025em;
}

.davis h2 {
  font-size: ${FONT_SIZE['3xl'][0]};
  line-height: ${FONT_SIZE['3xl'][1].lineHeight};
  font-weight: 700;
  letter-spacing: -0.02em;
}

.davis h3 {
  font-size: ${FONT_SIZE['2xl'][0]};
  line-height: ${FONT_SIZE['2xl'][1].lineHeight};
  font-weight: 600;
}

.davis h4 {
  font-size: ${FONT_SIZE.xl[0]};
  line-height: ${FONT_SIZE.xl[1].lineHeight};
  font-weight: 600;
}

.davis h5 {
  font-size: ${FONT_SIZE.lg[0]};
  line-height: ${FONT_SIZE.lg[1].lineHeight};
  font-weight: 600;
}

.davis h6 {
  font-size: ${FONT_SIZE.lg[0]};
  line-height: ${FONT_SIZE.lg[1].lineHeight};
  font-weight: 600;
}

/* ─── Focus Management (scoped) ──────────────────────────────── */

.davis *:focus-visible {
  outline: var(--davis-ring-width) solid var(--davis-ring-color);
  outline-offset: var(--davis-ring-offset);
}

.davis *:focus:not(:focus-visible) {
  outline: none;
}

/* ─── Reduced Motion (scoped) ────────────────────────────────── */

@media (prefers-reduced-motion: reduce) {
  .davis *,
  .davis *::before,
  .davis *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

  writeFileSync(join(rootDir, 'src', 'base.scoped.css'), css);
  writeFileSync(join(rootDir, 'dist', 'base.scoped.css'), css);
  console.log('✓ Generated base.scoped.css');
}

// ─── Generate Tailwind v4 Safelist ──────────────────────────────────

function generateSafelist() {
  // variants.ts is the single source of truth for all component utility classes.
  // We parse its string literals directly so the safelist is always in sync —
  // no manual maintenance required.
  const source = readFileSync(join(rootDir, 'src', 'variants.ts'), 'utf-8');

  // Extract every single- and double-quoted string literal, then split on
  // whitespace to get individual class tokens. Non-class tokens (e.g. 'primary',
  // 'sm', 'default') are included harmlessly — Tailwind ignores anything that
  // doesn't resolve to a known utility.
  const tokens = new Set();
  const pattern = /'([^'\n\\]*)'|"([^"\n\\]*)"/g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    const content = match[1] ?? match[2];
    if (content.trim()) {
      content.split(/\s+/).filter(Boolean).forEach(t => tokens.add(t));
    }
  }

  const css = `/**
 * Davis Design System — Tailwind v4 Component Safelist
 *
 * AUTO-GENERATED from variants.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' in packages/core to regenerate.
 *
 * In PostCSS-based consumer builds (Next.js, etc.), @source file directives
 * inside @imported CSS are not propagated to the root Tailwind compilation.
 * This file uses @source inline() — which IS propagated — to guarantee every
 * utility class emitted by component variants is present in the final bundle.
 */
@source inline("${[...tokens].join(' ')}");
`;

  writeFileSync(join(rootDir, 'dist', 'safelist.css'), css);
  console.log('✓ Generated dist/safelist.css');
}

// ─── Main ────────────────────────────────────────────────────────────

try {
  if (!existsSync(join(rootDir, 'dist'))) {
    mkdirSync(join(rootDir, 'dist'));
  }

  generateTailwindV4Theme();
  generateTailwindV4BaseCSS();
  generateBaseCSS();
  generateScopedBaseCSS();
  generateSafelist();

  console.log('\n✨ All configs and base styles generated successfully!');
} catch (error) {
  console.error('❌ Error generating files (did you run npm run build?):', error);
  process.exit(1);
}
