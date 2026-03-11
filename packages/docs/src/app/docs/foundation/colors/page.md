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

As noted earlier, the 500 shade is the base color and should be used for most applications. The 600-800 shades can be used for hover/active states. Lighter shades (50-400) are generally not recommended for UI elements due to contrast issues but can be very sparingly used for large background areas or decorative purposes.

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