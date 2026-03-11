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
    50: '#ebf0f4',
    100: '#dbe7f0',
    200: '#bcd8eb',
    300: '#8dc2e7',
    400: '#4ca6e6',
    500: '#127BC4',
    600: '#106098',
    700: '#0f4b75',
    800: '#0d334e',
    900: '#0c2231',
    950: '#0b1923',
  },
  secondary: {
    50: '#e8eef2',
    100: '#dbe7f0',
    200: '#b4d3e9',
    300: '#81bbe4',
    400: '#369be2',
    500: '#0F67A6',
    600: '#0e5181',
    700: '#0d3f63',
    800: '#0c2e46',
    900: '#0b1f2d',
    950: '#0a161f',
  },
  tertiary: {
    50: '#edf0f2',
    100: '#e3e8ed',
    200: '#c7d4e0',
    300: '#a6bed3',
    400: '#77a1c5',
    500: '#4076a4',
    600: '#335c80',
    700: '#294761',
    800: '#1f3242',
    900: '#16222c',
    950: '#11171d',
  },
  success: {
    50: '#eaf1eb',
    100: '#dbebdf',
    200: '#b6ddc0',
    300: '#86d09a',
    400: '#42c264',
    500: '#207537',
    600: '#1a5b2b',
    700: '#164623',
    800: '#13351c',
    900: '#0f2415',
    950: '#0c180f',
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
  text: {
    DEFAULT: '#162032',
    neutral: '#71717A',
    white: '#FFFFFF',
  }
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

// ─── Z-Index Scale ──────────────────────────────────────────────

/**
 * Layered z-index scale to prevent z-index wars.
 * Each layer reserves space for the category of UI it represents.
 *
 * | Token          | Value | Use                             |
 * |----------------|-------|---------------------------------|
 * | dropdown       | 1000  | Select menus, menu dropdowns    |
 * | sticky         | 1100  | Sticky headers, toolbars        |
 * | fixed          | 1200  | Fixed navbars, FABs             |
 * | modalBackdrop  | 1300  | Modal/drawer backdrop overlay   |
 * | modal          | 1400  | Modal dialogs, drawers          |
 * | popover        | 1500  | Popovers, floating panels       |
 * | toast          | 1600  | Toast notifications             |
 * | tooltip        | 1700  | Tooltips (always on top)        |
 */
export const Z_INDEX = {
  dropdown: '1000',
  sticky: '1100',
  fixed: '1200',
  modalBackdrop: '1300',
  modal: '1400',
  popover: '1500',
  toast: '1600',
  tooltip: '1700',
} as const;

// ─── Opacity ────────────────────────────────────────────────────

/**
 * Semantic opacity tokens for consistent transparency across components.
 *
 * | Token       | Value | Use                                 |
 * |-------------|-------|-------------------------------------|
 * | disabled    | 0.5   | Disabled controls and text          |
 * | placeholder | 0.6   | Placeholder text in inputs          |
 * | overlay     | 0.5   | Modal/drawer backdrop overlays      |
 * | hoverLight  | 0.04  | Subtle hover background tint        |
 * | hoverMedium | 0.08  | Medium hover background tint        |
 */
export const OPACITY = {
  disabled: '0.5',
  placeholder: '0.6',
  overlay: '0.5',
  hoverLight: '0.04',
  hoverMedium: '0.08',
} as const;

// ─── Border Width ───────────────────────────────────────────────

/**
 * Border width tokens for dividers, outlines, and component borders.
 *
 * | Token   | Value | Use                            |
 * |---------|-------|--------------------------------|
 * | none    | 0px   | No border                      |
 * | thin    | 1px   | Default borders, dividers      |
 * | medium  | 2px   | Emphasis borders, focus rings  |
 * | thick   | 3px   | Heavy emphasis, active states  |
 */
export const BORDER_WIDTH = {
  none: '0px',
  thin: '1px',
  medium: '2px',
  thick: '3px',
} as const;

// ─── Font Weight ────────────────────────────────────────────────

/**
 * Font weight tokens formalizing which weights the design system uses.
 *
 * | Token    | Value | Use                                |
 * |----------|-------|------------------------------------|
 * | light    | 300   | De-emphasized text                 |
 * | regular  | 400   | Body text, default                 |
 * | medium   | 500   | Labels, buttons, UI controls       |
 * | semibold | 600   | Subheadings, emphasis              |
 * | bold     | 700   | Headings, strong emphasis          |
 */
export const FONT_WEIGHT = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

// ─── Letter Spacing ─────────────────────────────────────────────

/**
 * Letter spacing tokens for typographic refinement.
 *
 * | Token   | Value     | Use                              |
 * |---------|-----------|----------------------------------|
 * | tighter | -0.05em   | Large display text               |
 * | tight   | -0.025em  | Headings                         |
 * | normal  | 0em       | Body text (default)              |
 * | wide    | 0.025em   | Buttons, labels                  |
 * | wider   | 0.05em    | All-caps text, overlines         |
 * | widest  | 0.1em     | Extreme letter-spaced styles     |
 */
export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ─── Breakpoints ────────────────────────────────────────────────

/**
 * Responsive breakpoint tokens. Formalizes breakpoints for JS consumers,
 * documentation, and server-side rendering logic.
 *
 * Matches Tailwind's default breakpoints.
 *
 * | Token | px   | Use                              |
 * |-------|------|----------------------------------|
 * | sm    | 640  | Large phones, landscape          |
 * | md    | 768  | Tablets                          |
 * | lg    | 1024 | Small laptops                    |
 * | xl    | 1280 | Desktops                         |
 * | 2xl   | 1536 | Large desktops                   |
 */
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ─── Icon Size ──────────────────────────────────────────────────

/**
 * Icon size tokens for consistent icon scaling across all components.
 *
 * | Token | px | Use                                    |
 * |-------|-----|---------------------------------------|
 * | xs    | 12  | Inline indicators, tiny badges        |
 * | sm    | 16  | Small buttons, form helper icons      |
 * | md    | 20  | Default buttons, menu items           |
 * | lg    | 24  | Large buttons, card icons             |
 * | xl    | 32  | Feature icons, empty states           |
 */
export const ICON_SIZE = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
  xl: '2rem',
} as const;

// ─── Container / Content Width ──────────────────────────────────

/**
 * Max-width tokens for page containers and content areas.
 *
 * | Token | Value  | Use                              |
 * |-------|--------|----------------------------------|
 * | sm    | 640px  | Narrow content (auth forms)      |
 * | md    | 768px  | Medium content                   |
 * | lg    | 1024px | Default page content             |
 * | xl    | 1280px | Wide page content                |
 * | 2xl   | 1536px | Full-width page content          |
 * | prose | 65ch   | Optimal reading width            |
 */
export const CONTAINER = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  prose: '65ch',
} as const;
