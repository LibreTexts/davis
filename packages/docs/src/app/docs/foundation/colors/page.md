---
title: Colors
description: The Davis color system with semantic colors and WCAG AA contrast verification
---

# Colors

The Davis color system uses seven semantic colors, each with a full 50-950 shade range. The 500 shade is the base value.

---

## UI Element Semantic Tokens

| Color | Base (500) | Use |
|-------|-----------|-----|
| **Primary** | `#127BC4` | Actions, links, focus rings, interactive elements |
| **Secondary** | `#0F67A6` | Secondary actions, accents, tags |
| **Tertiary** | `#4076a4` | Tertiary accents, decorative elements |
| **Success** | `#207537` | Success states, confirmations, positive actions |
| **Warning** | `#BB5C21` | Warnings, caution states |
| **Danger** | `#DC3838` | Errors, destructive actions, validation |
| **Neutral** | `#18181B` | Text, borders, backgrounds (full gray scale) |

**Only the 500+ shades are compliant with WCAG 2.2 AA success criterion** for non-text elements (minimum 3:1 contrast) against white (#FFF) backgrounds. As a general principle, avoid using shades other than the base 500 whenever possible to ensure consistency and accessibility. If you must use a lighter shade, always verify contrast ratios on white backgrounds.

These colors should **never** be used as text as
they do not promote readability or accessibility. The UI element colors are primarily intended for buttons, links, badges, tags, and other interactive or accent elements rather than body text.

---

## Text Semantic Tokens
| Color | Base (500) | Use |
|-------|-----------|-----|
| **Text** | `#162032` | Primary text color (WCAG AAA compliant against white) |
| **Neutral** | `#71717A` | Secondary text, disabled states, captions |
| **White** | `#FFFFFF` | Text on a background of any of the UI Element colors |

The general principle for text colors is to use the `text` color for primary content and the `neutral` color for secondary or less important text. The `white` color should only be used for text when placed on top of one of the darker UI element colors (primary, secondary, tertiary, success, warning, danger, etc.) to ensure sufficient contrast.

---

## Surface Semantic Tokens

Surface tokens provide semantic background colors:

{% surface-tokens /%}

| Token | Value | Use |
|-------|-------|-----|
| `surface` | `#FFFFFF` | Default page/card background |
| `surface-muted` | `#F9FAFB` | Subtle background differentiation |
| `surface-subtle` | `#F4F4F5` | Sidebar, footer, secondary areas |

If using a non-default surface token, ONLY `text` or `text-neutral` should be used for foreground text to ensure sufficient contrast.

---

## Interactive State Tokens

These tokens standardize how surfaces respond to user interaction. They apply to "on-white" elements — ghost/outline buttons, menu items, table rows, nav links, accordion triggers, and any element that sits on a white or light background.

| Token | Value | Tailwind class | Use |
|-------|-------|----------------|-----|
| `surface-hover` | `#F4F4F5` (neutral-100) | `bg-surface-hover` | Background tint on pointer entry |
| `surface-active` | `#E4E4E7` (neutral-200) | `bg-surface-active` | Background tint on press/click |
| `surface-disabled` | `#F4F4F5` (neutral-100) | `bg-surface-disabled` | Background for unavailable form fields — always pair with `opacity-50` and `cursor-not-allowed` |

**Why `surface-hover` and `surface-disabled` share a hex value:** These tokens communicate *intent*, not just color. Contextual signals — cursor change, `opacity-50`, `aria-disabled`, and `pointer-events: none` — disambiguate disabled states from hovered elements at runtime.

For solid-fill semantic color elements (primary, secondary, danger, etc. buttons), interactive states use the established shade convention rather than the surface tokens:

| State | Shade | Example |
|-------|-------|---------|
| Hover | 600 | `hover:bg-primary-600` (`#106098`) |
| Active/Press | 700 | `active:bg-primary-700` (`#0f4b75`) |

This pattern applies to all seven semantic color families. See `INTERACTIVE` in `packages/core/src/tokens.ts` for the full named alias reference.

---

## Border Color Semantic Tokens

Border colors are split into two categories with different WCAG 2.2 obligations.

**Decorative borders** (dividers, card edges, table rules) visually separate content but do not mark the boundary of an operable UI component. WCAG SC 1.4.11 Non-text Contrast does not apply to them — lighter neutral shades are acceptable.

**Functional borders** (inputs, selects, textareas, checkboxes, radio buttons) define the perceivable boundary of a UI component and **must meet SC 1.4.11: ≥3:1 contrast** against all adjacent colors. Against a white (`#FFFFFF`) background, `neutral-500` (`#71717A`, 4.83:1) is the minimum compliant shade.

| Token | Value | Shade | Contrast vs. white | Use |
|-------|-------|-------|--------------------|-----|
| `border-color-subtle` | `#E4E4E7` | neutral-200 | 1.27:1 | Hairline dividers, tight separators |
| `border-color-muted` | `#D4D4D8` | neutral-300 | 1.48:1 | Card edges, panels, table rules |
| `border-color` | `#71717A` | neutral-500 | **4.83:1 ✓** | Default input / field border |
| `border-color-strong` | `#52525B` | neutral-600 | **7.73:1 ✓** | Hover state for field borders |

Disabled form fields are exempt from SC 1.4.11 per the WCAG specification and continue to use `neutral-300` at reduced opacity.

---

## Usage Guidelines

### When to use each color

- **Primary** — Main call-to-action buttons, links, active/selected states, focus rings. This is the "do something" color.
- **Secondary** — Secondary buttons, tags, accent highlights where primary would be too dominant.
- **Tertiary** — Decorative accents, non-critical UI elements.
- **Success** — Confirmation messages, successful operations, positive badges.
- **Warning** — Non-blocking alerts, caution notices, pending states.
- **Danger** — Error messages, destructive action buttons, form validation errors.
- **Neutral** — Borders, dividers, and disabled states.
- **Text** — Primary text color (WCAG AAA compliant against white).

### Shade Usage

As noted earlier, the 500 shade is the base color and should be used for most applications. The **600 shade is the standard hover state** and the **700 shade is the standard active/pressed state** for solid-fill colored elements. Lighter shades (50-400) are generally not recommended for UI elements due to contrast issues but can be very sparingly used for large background areas or decorative purposes. For white-surface elements (ghost buttons, menus, table rows), use the dedicated `surface-hover` and `surface-active` tokens instead of raw shade values.

If you're making use of the Davis React or Vue libraries, the components and their variants will automatically apply the appropriate shades based on the design system guidelines, so you can focus on using the semantic color tokens without worrying about specifying shade values. Thus, it's recommended to stick to these variants and avoid manually applying shades (or any styling, for that matter) unless you have a specific need that isn't covered by the existing components.

### WCAG AA Text Contrast Pairings

For **UI elements** with **normal text** (minimum 4.5:1 ratio, 16px+), the following combinations of background and foreground semantic colors meet [WCAG 2.2 AA standards](https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum). **UI elements** with **large text** (minimum 3:1 ratio, 24px+ or 19px bold) will also meet WCAG AA standards with the same combinations. For more information on font size in the Davis Design System, see the [Typography page](/docs/foundation/typography).

| Background | Foreground | Meets AA? |
|-----------|------------|-----------|
| primary-500 | text-white | Yes |
| secondary-500 | text-white | Yes |
| tertiary-500 | text-white | Yes |
| success-500 | text-white | Yes |
| warning-500 | text-white | Yes |
| danger-500 | text-white | Yes |
| neutral-600+ | text-white | Yes |
| white | text | Yes |
| white | text-neutral | Yes |

---

## Full Color Palettes

{% all-colors /%}