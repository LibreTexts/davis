/**
 * Davis Design System — Design Tokens
 *
 * ⚠️ SINGLE SOURCE OF TRUTH — All design token values are defined here.
 *
 * This file generates:
 * - tailwind.preset.cjs (Tailwind v3 config)
 * - src/theme.css (Tailwind v4 theme)
 *
 * After modifying this file, run: npm run generate:configs
 *
 * Typography: Major Third scale (ratio 1.250, base 16px)
 * Colors: Full 50-950 shade ranges, WCAG AA verified against white
 * Spacing: 4px base grid (uses Tailwind default scale)
 */

// ─── Typography ──────────────────────────────────────────────────

export const FONT_FAMILY_SANS = [
  'Atkinson Hyperlegible',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
] as const;

/**
 * Major Third typographic scale (ratio 1.250, base 16px)
 *
 * | Token | rem   | px   | Line height | Use                    |
 * |-------|-------|------|-------------|------------------------|
 * | xs    | 0.640 | 10.2 | 1rem        | Captions, fine print   |
 * | sm    | 0.800 | 12.8 | 1.25rem     | Labels, helper text    |
 * | base  | 1.000 | 16.0 | 1.5rem      | Body text, buttons     |
 * | lg    | 1.250 | 20.0 | 1.75rem     | Lead text, h5, h6      |
 * | xl    | 1.563 | 25.0 | 2rem        | h4                     |
 * | 2xl   | 1.953 | 31.3 | 2.25rem     | h3                     |
 * | 3xl   | 2.441 | 39.1 | 2.75rem     | h2                     |
 * | 4xl   | 3.052 | 48.8 | 3.25rem     | h1, page titles        |
 */
export const FONT_SIZE = {
  xs: ['0.640rem', { lineHeight: '1rem' }],
  sm: ['0.800rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.250rem', { lineHeight: '1.75rem' }],
  xl: ['1.563rem', { lineHeight: '2rem' }],
  '2xl': ['1.953rem', { lineHeight: '2.25rem' }],
  '3xl': ['2.441rem', { lineHeight: '2.75rem' }],
  '4xl': ['3.052rem', { lineHeight: '3.25rem' }],
} as const;

// ─── Colors ──────────────────────────────────────────────────────

/**
 * Full 50-950 shade ranges for all semantic colors.
 * 500-level values match the original DEFAULT colors.
 * Shades verified for WCAG AA contrast against white.
 *
 * Mapping from previous token names:
 * - primary.hover → primary.600
 * - primary.dark  → primary.700
 */
export const COLORS = {
  primary: {
    50: '#EFF6FC',
    100: '#DCEEF9',
    200: '#B3D9F2',
    300: '#80BDE8',
    400: '#4A9ED9',
    500: '#127BC4',
    600: '#0F6FA2',
    700: '#0B4A76',
    800: '#0A3D62',
    900: '#083350',
    950: '#052135',
  },
  secondary: {
    50: '#F0FDFC',
    100: '#CCFBF6',
    200: '#9AF5ED',
    300: '#5FE8DD',
    400: '#2ECFCA',
    500: '#0D8483',
    600: '#0A6C6B',
    700: '#0B5756',
    800: '#0D4545',
    900: '#103939',
    950: '#052222',
  },
  tertiary: {
    50: '#EDEDFE',
    100: '#E0E1FD',
    200: '#C6C8FB',
    300: '#A5A8F8',
    400: '#8287F7',
    500: '#5F65F5',
    600: '#4A4FDB',
    700: '#3B3FB8',
    800: '#323695',
    900: '#2C2F7A',
    950: '#1B1D4D',
  },
  success: {
    50: '#EEFBF3',
    100: '#D6F5E2',
    200: '#B0EBC8',
    300: '#7CD9A5',
    400: '#4DC37E',
    500: '#338650',
    600: '#2A7043',
    700: '#235A37',
    800: '#1F482E',
    900: '#1A3B27',
    950: '#0D2116',
  },
  warning: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#F59542',
    500: '#BB5C21',
    600: '#A14D1B',
    700: '#863E16',
    800: '#6C3214',
    900: '#592B14',
    950: '#30130A',
  },
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F07272',
    500: '#DC3838',
    600: '#C42828',
    700: '#A32222',
    800: '#872222',
    900: '#712222',
    950: '#3E0E0E',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
    950: '#09090B',
  },
} as const;

/** Surface tokens for backgrounds */
export const SURFACE = {
  DEFAULT: '#FFFFFF',
  muted: '#F9FAFB',
  subtle: '#F4F4F5',
} as const;

// ─── Spacing ─────────────────────────────────────────────────────

/**
 * Spacing is based on a 4px grid using Tailwind's default scale.
 *
 * | Tailwind | rem    | px  | Use                              |
 * |---------|--------|-----|----------------------------------|
 * | 0.5     | 0.125  | 2   | Tight inline spacing             |
 * | 1       | 0.25   | 4   | Minimum spacing                  |
 * | 1.5     | 0.375  | 6   | Compact component padding        |
 * | 2       | 0.5    | 8   | Small component padding, gaps    |
 * | 3       | 0.75   | 12  | Default component padding        |
 * | 4       | 1      | 16  | Card padding, form gaps          |
 * | 6       | 1.5    | 24  | Section spacing                  |
 * | 8       | 2      | 32  | Large section spacing            |
 * | 12      | 3      | 48  | Page section gaps                |
 * | 16      | 4      | 64  | Page gutters                     |
 * | 20      | 5      | 80  | Hero/feature section spacing     |
 * | 24      | 6      | 96  | Max page section spacing         |
 *
 * Uses Tailwind's default spacing scale — no overrides needed.
 */
export const SPACING_GUIDE = {
  'inline-tight': { tailwind: '0.5', rem: '0.125', px: 2 },
  'minimum': { tailwind: '1', rem: '0.25', px: 4 },
  'compact-padding': { tailwind: '1.5', rem: '0.375', px: 6 },
  'small-padding': { tailwind: '2', rem: '0.5', px: 8 },
  'component-padding': { tailwind: '3', rem: '0.75', px: 12 },
  'card-padding': { tailwind: '4', rem: '1', px: 16 },
  'section-spacing': { tailwind: '6', rem: '1.5', px: 24 },
  'large-section': { tailwind: '8', rem: '2', px: 32 },
  'page-section-gap': { tailwind: '12', rem: '3', px: 48 },
  'page-gutter': { tailwind: '16', rem: '4', px: 64 },
  'hero-spacing': { tailwind: '20', rem: '5', px: 80 },
  'max-section': { tailwind: '24', rem: '6', px: 96 },
} as const;

// ─── Border Radius ───────────────────────────────────────────────

export const RADIUS = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.375rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

// ─── Elevation / Shadows ─────────────────────────────────────────

/**
 * Shadow scale with subtler opacity (0.05-0.07) than Tailwind defaults.
 *
 * Elevation levels:
 * - Level 0: none — Flat elements (disabled, inline)
 * - Level 1: sm / DEFAULT — Cards, dropdowns at rest
 * - Level 2: md — Hovered cards, active dropdowns
 * - Level 3: lg — Dialogs, popovers, floating panels
 * - Level 4: xl / 2xl — Reserved for rare high-emphasis overlays
 */
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// ─── Focus Ring ──────────────────────────────────────────────────

export const FOCUS_RING = {
  width: '2px',
  style: 'solid',
  color: '#127BC4',
  offset: '2px',
} as const;

// ─── Motion ─────────────────────────────────────────────────────

/**
 * Motion tokens for transitions and animations.
 * Used with `prefers-reduced-motion` to disable animations for users
 * who are sensitive to motion.
 */
export const MOTION = {
  durationFast: '150ms',
  durationDefault: '200ms',
  durationSlow: '300ms',
  durationNone: '0ms',
  easeDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
} as const;

// ─── Target Size ────────────────────────────────────────────────

/**
 * Minimum interactive target sizes per WCAG 2.2.
 * - minimum: 24×24 CSS px — WCAG 2.5.8 Target Size (Minimum) (AA)
 * - comfortable: 44×44 CSS px — WCAG 2.5.5 Target Size (Enhanced) (AAA)
 */
export const TARGET_SIZE = {
  minimum: '24px',
  comfortable: '44px',
} as const;
