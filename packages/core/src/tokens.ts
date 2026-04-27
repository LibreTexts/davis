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
 *
 * Interactive state convention for solid-fill elements:
 * - Hover  → 600 shade  (e.g. primary-600, danger-600)
 * - Active → 700 shade  (e.g. primary-700, danger-700)
 * See INTERACTIVE for named aliases of these values.
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

/**
 * Surface tokens for backgrounds.
 *
 * Static surfaces:
 * - DEFAULT / muted / subtle — structural backgrounds (pages, cards, sidebars)
 *
 * Interactive surface states (for "on-white" elements: ghost/outline buttons,
 * menu items, table rows, nav links — anything on a white or light background):
 * - hover    — subtle tint on pointer entry; neutral-100
 * - active   — slightly deeper tint on press; neutral-200
 * - disabled — muted background for unavailable form fields; neutral-100
 *              Always pair with opacity-50 and cursor-not-allowed.
 *
 * Note: hover and disabled share the same hex value intentionally — their
 * semantic difference is communicated by cursor, opacity, and aria attributes.
 */
export const SURFACE = {
  DEFAULT: '#FFFFFF',
  muted: '#F9FAFB',
  subtle: '#F4F4F5',
  hover: '#F4F4F5',    // neutral-100 — hover state for white-surface interactive elements
  active: '#E4E4E7',   // neutral-200 — pressed/active state on white surfaces
  disabled: '#F4F4F5', // neutral-100 — disabled form field backgrounds (use with opacity-50)
} as const;

/**
 * Named aliases for interactive states on solid-fill (colored) UI elements.
 *
 * These formalize the 600 = hover / 700 = active convention that is implicit
 * throughout the COLORS palette. Use these in documentation and tooling;
 * in Tailwind class names continue to use `{color}-600` / `{color}-700`
 * until Tailwind v4 theme aliasing supports arbitrary key names.
 *
 * For neutral / ghost / outline elements on white surfaces, use SURFACE
 * interactive tokens (surface-hover, surface-active, surface-disabled) instead.
 */
export const INTERACTIVE = {
  primaryHover:    '#106098', // primary-600
  primaryActive:   '#0f4b75', // primary-700
  secondaryHover:  '#0e5181', // secondary-600
  secondaryActive: '#0d3f63', // secondary-700
  tertiaryHover:   '#335c80', // tertiary-600
  tertiaryActive:  '#294761', // tertiary-700
  successHover:    '#1a5b2b', // success-600
  successActive:   '#164623', // success-700
  warningHover:    '#A14D1B', // warning-600
  warningActive:   '#863E16', // warning-700
  dangerHover:     '#C42828', // danger-600
  dangerActive:    '#A32222', // danger-700
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
  color: '#127BC4',  // primary-500
  offset: '2px',
  /** Filled background for focused options within listboxes and comboboxes. */
  listHighlightBg: '#127BC4',   // primary-500 — 4.5:1 contrast with listHighlightText
  listHighlightText: '#FFFFFF', // white
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
 * | Token       | Value | Use                                                   |
 * |-------------|-------|-------------------------------------------------------|
 * | disabled    | 0.5   | Disabled controls and text (pair with surface-disabled for form fields) |
 * | placeholder | 0.6   | Placeholder text in inputs                            |
 * | overlay     | 0.5   | Modal/drawer backdrop overlays                        |
 * | hoverLight  | 0.04  | Subtle hover background tint (alpha overlay approach) |
 * | hoverMedium | 0.08  | Medium hover background tint (alpha overlay approach) |
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

// ─── Border Color ────────────────────────────────────────────────

/**
 * Semantic border color tokens.
 *
 * Two categories with distinct WCAG 2.2 obligations:
 *
 * **Decorative** — visually separate content areas (dividers, card edges,
 * table rules). These do not convey the boundary of a UI component, so
 * WCAG SC 1.4.11 Non-text Contrast does NOT apply. Lighter shades (200–300)
 * are acceptable here.
 *
 * **Interactive / Functional** — mark the visual boundary of a UI component
 * that the user must be able to perceive and operate (inputs, selects,
 * textareas, checkboxes, radio buttons). These MUST meet SC 1.4.11: ≥3:1
 * contrast against all adjacent colors.
 *
 * neutral-500 (#71717A) is the minimum compliant shade at 4.83:1 against
 * white. Use `strong` (neutral-600, 7.73:1) for hover emphasis on fields.
 *
 * | Token    | Value   | Shade        | Contrast vs. white | Use                                   |
 * |----------|---------|--------------|--------------------|---------------------------------------|
 * | subtle   | #E4E4E7 | neutral-200  | 1.27:1             | Hairline dividers, tight separators   |
 * | muted    | #D4D4D8 | neutral-300  | 1.48:1             | Card edges, panels, table rules       |
 * | DEFAULT  | #71717A | neutral-500  | 4.83:1 ✓ WCAG AA   | Default input / field border          |
 * | strong   | #52525B | neutral-600  | 7.73:1 ✓ WCAG AA   | Hover state for field borders         |
 */
export const BORDER_COLOR = {
  subtle:  '#E4E4E7',  // neutral-200 — decorative only
  muted:   '#D4D4D8',  // neutral-300 — decorative only
  DEFAULT: '#71717A',  // neutral-500 — 4.83:1 — functional field borders
  strong:  '#52525B',  // neutral-600 — 7.73:1 — field border hover state
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

// ─── Tailwind Default Color Overrides ──────────────────────────────

/**
 * Hex equivalents of Tailwind v4 default color palettes.
 *
 * Tailwind v4 defines its built-in palettes using oklch(), which some
 * accessibility tools (e.g. ANDI from SSA) cannot parse for color
 * contrast checking. These hex values are mathematically equivalent
 * conversions that ensure maximum tool compatibility.
 *
 * Davis's own semantic palettes (primary, secondary, tertiary, success,
 * warning, danger, neutral) are already hex and are NOT included here.
 * Only Tailwind's built-in families that Davis does not override are listed.
 *
 * Generated from tailwindcss v4.2.2 theme.css.
 */
export const TAILWIND_HEX_OVERRIDES = {
  red: {
    50: '#fef2f2',
    100: '#ffe2e2',
    200: '#ffc9c9',
    300: '#ffa2a2',
    400: '#ff6467',
    500: '#fb2c36',
    600: '#e7000b',
    700: '#c10007',
    800: '#9f0712',
    900: '#82181a',
    950: '#460809',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd4',
    200: '#ffd6a7',
    300: '#ffb86a',
    400: '#ff8904',
    500: '#ff6900',
    600: '#f54900',
    700: '#ca3500',
    800: '#9f2d00',
    900: '#7e2a0c',
    950: '#441306',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c6',
    200: '#fee685',
    300: '#ffd230',
    400: '#ffb900',
    500: '#fe9a00',
    600: '#e17100',
    700: '#bb4d00',
    800: '#973c00',
    900: '#7b3306',
    950: '#461901',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c2',
    200: '#fff085',
    300: '#ffdf20',
    400: '#fdc700',
    500: '#f0b100',
    600: '#d08700',
    700: '#a65f00',
    800: '#894b00',
    900: '#733e0a',
    950: '#432004',
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfcca',
    200: '#d8f999',
    300: '#bbf451',
    400: '#9ae600',
    500: '#7ccf00',
    600: '#5ea500',
    700: '#497d00',
    800: '#3c6300',
    900: '#35530e',
    950: '#192e03',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#b9f8cf',
    300: '#7bf1a8',
    400: '#05df72',
    500: '#00c950',
    600: '#00a63e',
    700: '#008236',
    800: '#016630',
    900: '#0d542b',
    950: '#032e15',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d0fae5',
    200: '#a4f4cf',
    300: '#5ee9b5',
    400: '#00d492',
    500: '#00bc7d',
    600: '#009966',
    700: '#007a55',
    800: '#006045',
    900: '#004f3b',
    950: '#002c22',
  },
  teal: {
    50: '#f0fdfa',
    100: '#cbfbf1',
    200: '#96f7e4',
    300: '#46ecd5',
    400: '#00d5be',
    500: '#00bba7',
    600: '#009689',
    700: '#00786f',
    800: '#005f5a',
    900: '#0b4f4a',
    950: '#022f2e',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cefafe',
    200: '#a2f4fd',
    300: '#53eafd',
    400: '#00d3f2',
    500: '#00b8db',
    600: '#0092b8',
    700: '#007595',
    800: '#005f78',
    900: '#104e64',
    950: '#053345',
  },
  sky: {
    50: '#f0f9ff',
    100: '#dff2fe',
    200: '#b8e6fe',
    300: '#74d4ff',
    400: '#00bcff',
    500: '#00a6f4',
    600: '#0084d1',
    700: '#0069a8',
    800: '#00598a',
    900: '#024a70',
    950: '#052f4a',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bedbff',
    300: '#8ec5ff',
    400: '#51a2ff',
    500: '#2b7fff',
    600: '#155dfc',
    700: '#1447e6',
    800: '#193cb8',
    900: '#1c398e',
    950: '#162456',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c6d2ff',
    300: '#a3b3ff',
    400: '#7c86ff',
    500: '#615fff',
    600: '#4f39f6',
    700: '#432dd7',
    800: '#372aac',
    900: '#312c85',
    950: '#1e1a4d',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6ff',
    300: '#c4b4ff',
    400: '#a684ff',
    500: '#8e51ff',
    600: '#7f22fe',
    700: '#7008e7',
    800: '#5d0ec0',
    900: '#4d179a',
    950: '#2f0d68',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d4ff',
    300: '#dab2ff',
    400: '#c27aff',
    500: '#ad46ff',
    600: '#9810fa',
    700: '#8200db',
    800: '#6e11b0',
    900: '#59168b',
    950: '#3c0366',
  },
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f6cfff',
    300: '#f4a8ff',
    400: '#ed6aff',
    500: '#e12afb',
    600: '#c800de',
    700: '#a800b7',
    800: '#8a0194',
    900: '#721378',
    950: '#4b004f',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fccee8',
    300: '#fda5d5',
    400: '#fb64b6',
    500: '#f6339a',
    600: '#e60076',
    700: '#c6005c',
    800: '#a3004c',
    900: '#861043',
    950: '#510424',
  },
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#ffccd3',
    300: '#ffa1ad',
    400: '#ff637e',
    500: '#ff2056',
    600: '#ec003f',
    700: '#c70036',
    800: '#a50036',
    900: '#8b0836',
    950: '#4d0218',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cad5e2',
    400: '#90a1b9',
    500: '#62748e',
    600: '#45556c',
    700: '#314158',
    800: '#1d293d',
    900: '#0f172b',
    950: '#020618',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5dc',
    400: '#99a1af',
    500: '#6a7282',
    600: '#4a5565',
    700: '#364153',
    800: '#1e2939',
    900: '#101828',
    950: '#030712',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#9f9fa9',
    500: '#71717b',
    600: '#52525c',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a6a09b',
    500: '#79716b',
    600: '#57534d',
    700: '#44403b',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  },
} as const;
