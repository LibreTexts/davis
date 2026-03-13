#!/usr/bin/env node
/**
 * Generates Tailwind CSS configuration files from tokens.ts
 *
 * This ensures tokens.ts is the single source of truth for all design tokens.
 * Run this script whenever tokens.ts changes.
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Import the compiled tokens from dist (run after tsc build)
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const {
  COLORS, SURFACE, FONT_FAMILY_SANS, FONT_SIZE, RADIUS, SHADOWS, MOTION, TARGET_SIZE,
  Z_INDEX, OPACITY, BORDER_WIDTH, FONT_WEIGHT, LETTER_SPACING, BREAKPOINTS, ICON_SIZE, CONTAINER,
} = await import(
  '../dist/index.js'
);

// ─── Generate Tailwind v3 Preset ─────────────────────────────────────

function generateTailwindV3Preset() {
  const colorEntries = (colorObj) =>
    Object.entries(colorObj)
      .map(([shade, color]) => `          ${shade}: '${color}',`)
      .join('\n');

  const preset = `/**
 * Davis Design System — Tailwind CSS Preset
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * The runtime source of truth for any app or package using the design system.
 * Import via: presets: [require("@libretexts/davis-core/tailwind.preset")]
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // Top-level overrides (replace Tailwind defaults)
    fontSize: ${JSON.stringify(FONT_SIZE, null, 6)},

    boxShadow: ${JSON.stringify(SHADOWS, null, 6)},

    extend: {
      colors: {
        primary: {
          DEFAULT: '${COLORS.primary[500]}',
${colorEntries(COLORS.primary)}
        },
        secondary: {
          DEFAULT: '${COLORS.secondary[500]}',
${colorEntries(COLORS.secondary)}
        },
        tertiary: {
          DEFAULT: '${COLORS.tertiary[500]}',
${colorEntries(COLORS.tertiary)}
        },
        success: {
          DEFAULT: '${COLORS.success[500]}',
${colorEntries(COLORS.success)}
        },
        warning: {
          DEFAULT: '${COLORS.warning[500]}',
${colorEntries(COLORS.warning)}
        },
        danger: {
          DEFAULT: '${COLORS.danger[500]}',
${colorEntries(COLORS.danger)}
        },
        neutral: {
          DEFAULT: '${COLORS.neutral[900]}',
${colorEntries(COLORS.neutral)}
        },
        text: {
          DEFAULT: '${COLORS.text.DEFAULT}',
          neutral: '${COLORS.text.neutral}',
          white: '${COLORS.text.white}',
        },
        surface: {
          DEFAULT: '${SURFACE.DEFAULT}',
          muted: '${SURFACE.muted}',
          subtle: '${SURFACE.subtle}',
        },
      },

      fontFamily: {
        sans: ${JSON.stringify(Array.from(FONT_FAMILY_SANS))},
      },

      ringColor: {
        DEFAULT: '${COLORS.primary[500]}',
      },

      borderRadius: ${JSON.stringify(RADIUS, null, 8)},

      zIndex: ${JSON.stringify(Z_INDEX, null, 8)},

      opacity: ${JSON.stringify(OPACITY, null, 8)},

      borderWidth: ${JSON.stringify(BORDER_WIDTH, null, 8)},

      fontWeight: ${JSON.stringify(FONT_WEIGHT, null, 8)},

      letterSpacing: ${JSON.stringify(LETTER_SPACING, null, 8)},

      maxWidth: ${JSON.stringify(CONTAINER, null, 8)},
    },
  },
};
`;

  const outputPath = join(rootDir, 'tailwind.preset.cjs');
  writeFileSync(outputPath, preset);
  console.log('✓ Generated tailwind.preset.cjs');
}

// ─── Generate Tailwind v4 Theme ──────────────────────────────────────

function generateTailwindV4Theme() {
  const fontSizeVars = Object.entries(FONT_SIZE)
    .map(([size, [value, { lineHeight }]]) => {
      return `  --font-size-${size}: ${value};\n  --font-size-${size}--line-height: ${lineHeight};`;
    })
    .join('\n\n');

  const colorVars = Object.entries(COLORS)
    .map(([name, shades]) => {
      const shadeVars = Object.entries(shades)
        .map(([shade, color]) => `  --color-${name}-${shade}: ${color};`)
        .join('\n');

      // Add DEFAULT mapping to 500 shade or "DEFAULT" shade if available
      const defaultVar = shades[500] ? `  --color-${name}: ${shades[500]};` : shades["DEFAULT"] ? `  --color-${name}: ${shades["DEFAULT"]};` : '';

      return `  /* ${name.charAt(0).toUpperCase() + name.slice(1)} */\n${shadeVars}\n${defaultVar}`;
    })
    .join('\n\n');

  const radiusVars = Object.entries(RADIUS)
    .map(([size, value]) => {
      if (size === 'DEFAULT') {
        return `  --radius-DEFAULT: ${value};\n  --radius: ${value};`;
      }
      return `  --radius-${size}: ${value};`;
    })
    .join('\n');

  const shadowVars = Object.entries(SHADOWS)
    .map(([size, value]) => {
      if (size === 'DEFAULT') {
        return `  --shadow: ${value};`;
      }
      return `  --shadow-${size}: ${value};`;
    })
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

  --font-sans: ${Array.from(FONT_FAMILY_SANS).join(', ')};

  /* Major Third typographic scale (ratio 1.250, base 16px) */
${fontSizeVars}

  /* ─── Colors ──────────────────────────────────────────────── */

${colorVars}

  /* Surface */
  --color-surface: #FFFFFF;
  --color-surface-muted: #F9FAFB;
  --color-surface-subtle: #F4F4F5;

  /* ─── Border Radius ───────────────────────────────────────── */

${radiusVars}

  /* ─── Shadows ─────────────────────────────────────────────── */

${shadowVars}

  /* ─── Focus Ring ──────────────────────────────────────────── */

  --ring-color: ${COLORS.primary[500]};

  /* ─── Motion ─────────────────────────────────────────────── */

  --davis-motion-duration-fast: ${MOTION.durationFast};
  --davis-motion-duration-default: ${MOTION.durationDefault};
  --davis-motion-duration-slow: ${MOTION.durationSlow};

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

  const outputPath = join(rootDir, 'dist', 'theme.css');
  writeFileSync(outputPath, theme);
  console.log('✓ Generated dist/theme.css');
}

// ─── Generate Base CSS ───────────────────────────────────────────────

function generateBaseCSS() {
  const css = `/**
 * Davis Design System — Base Styles
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Framework-agnostic base CSS imported by consuming packages.
 * Contains CSS custom properties, typography defaults, heading hierarchy,
 * and focus-visible patterns.
 *
 * Does NOT include @tailwind directives — each consuming package adds those
 * to its own stylesheet.
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
    --davis-surface: #FFFFFF;
    --davis-surface-muted: #F9FAFB;
    --davis-surface-subtle: #F4F4F5;

    /* Typography */
    --davis-font-family: ${Array.from(FONT_FAMILY_SANS).map(f =>
      f.includes(' ') ? `'${f}'` : f
    ).join(', ')};

    /* Border Radius */
    --davis-radius: ${RADIUS.DEFAULT};

    /* Focus Ring */
    --davis-ring-width: 2px;
    --davis-ring-color: ${COLORS.primary[500]};
    --davis-ring-offset: 2px;

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
  /* Disables transitions and animations for users who prefer    */
  /* reduced motion. Respects prefers-reduced-motion: reduce.    */

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

  const outputPath = join(rootDir, 'dist', 'base.css');
  writeFileSync(outputPath, css);
  console.log('✓ Generated dist/base.css');
}

// ─── Generate Scoped Base CSS ────────────────────────────────────────

function generateScopedBaseCSS() {
  const css = `/**
 * Davis Design System — Scoped Base Styles
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Standalone variant of base.css where every rule is scoped under \`.davis\`.
 * This prevents style leakage into host applications.
 *
 * Used by the standalone CSS bundle — the full-integration base.css is unchanged.
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
  --davis-surface: #FFFFFF;
  --davis-surface-muted: #F9FAFB;
  --davis-surface-subtle: #F4F4F5;

  /* Typography */
  --davis-font-family: ${Array.from(FONT_FAMILY_SANS).map(f =>
    f.includes(' ') ? `'${f}'` : f
  ).join(', ')};

  /* Border Radius */
  --davis-radius: ${RADIUS.DEFAULT};

  /* Focus Ring */
  --davis-ring-width: 2px;
  --davis-ring-color: ${COLORS.primary[500]};
  --davis-ring-offset: 2px;

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
/* These --tw-* variables are normally set by Tailwind's Preflight on *.
   Since we disable Preflight in standalone mode, we initialize them here
   so ring, shadow, transform, and filter utilities work correctly.       */

.davis *,
.davis *::before,
.davis *::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

.davis *,
.davis ::before,
.davis ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
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

/* ─── Reduced Motion (scoped) ────────────────────────────── */

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

  const outputPath = join(rootDir, 'dist', 'base.scoped.css');
  writeFileSync(outputPath, css);
  console.log('✓ Generated dist/base.scoped.css');
}

// ─── Generate Tailwind v4 Base CSS ──────────────────────────────────

function generateTailwindV4BaseCSS() {
  const css = `/**
 * Davis Design System — Tailwind CSS v4 Base Styles
 *
 * AUTO-GENERATED from tokens.ts — DO NOT EDIT MANUALLY
 * Run 'npm run generate:configs' to regenerate
 *
 * Base styles for Tailwind CSS v4 (without @layer directive).
 * Contains typography defaults, heading hierarchy, focus management,
 * and reduced motion support.
 *
 * Import this along with theme.css for full v4 support:
 * @import "@libretexts/davis-core/theme.css";
 * @import "@libretexts/davis-core/base.v4.css";
 */

/* ─── Typography Defaults ───────────────────────────────── */

html {
  font-family: ${Array.from(FONT_FAMILY_SANS).map(f =>
    f.includes(' ') ? `'${f}'` : f
  ).join(', ')};
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
  outline: 2px solid ${COLORS.primary[500]};
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

/* ─── Reduced Motion ──────────────────────────────────────── */
/* Disables transitions and animations for users who prefer    */
/* reduced motion. Respects prefers-reduced-motion: reduce.    */

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

  const outputPath = join(rootDir, 'dist', 'base.v4.css');
  writeFileSync(outputPath, css);
  console.log('✓ Generated dist/base.v4.css');
}

// ─── Main ────────────────────────────────────────────────────────────

try {
  // Ensure the dist directory exists
  if (!existsSync(join(rootDir, 'dist'))) {
    mkdirSync(join(rootDir, 'dist'));
  }

  generateTailwindV4Theme();
  generateTailwindV4BaseCSS();
  console.log('\n✨ All configs and base styles generated successfully!');
} catch (error) {
  console.error('❌ Error generating files (did you run npm run build?):', error);
  process.exit(1);
}
