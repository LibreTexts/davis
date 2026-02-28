---
title: Colors
description: The Davis color system with semantic colors and WCAG AA contrast verification
---

# Colors

The Davis color system uses seven semantic colors, each with a full 50-950 shade range. The 500 shade is the base value. All shades are verified for **WCAG AA contrast** against white where applicable.

---

## Semantic Colors

| Color | Base (500) | Use |
|-------|-----------|-----|
| **Primary** | `#127BC4` | Actions, links, focus rings, interactive elements |
| **Secondary** | `#8553FE` | Secondary actions, accents, tags |
| **Tertiary** | `#5F65F5` | Tertiary accents, decorative elements |
| **Success** | `#338650` | Success states, confirmations, positive actions |
| **Warning** | `#BB5C21` | Warnings, caution states |
| **Danger** | `#DC3838` | Errors, destructive actions, validation |
| **Neutral** | `#18181B` | Text, borders, backgrounds (full gray scale) |

---

## Color Palettes

{% all-colors /%}

---

## Surface Tokens

Surface tokens provide semantic background colors:

{% surface-tokens /%}

| Token | Value | Use |
|-------|-------|-----|
| `surface` | `#FFFFFF` | Default page/card background |
| `surface-muted` | `#F9FAFB` | Subtle background differentiation |
| `surface-subtle` | `#F4F4F5` | Sidebar, footer, secondary areas |

---

## Usage Guidelines

### When to use each color

- **Primary** — Main call-to-action buttons, links, active/selected states, focus rings. This is the "do something" color.
- **Secondary** — Secondary buttons, tags, accent highlights where primary would be too dominant.
- **Tertiary** — Decorative accents, non-critical UI elements.
- **Success** — Confirmation messages, successful operations, positive badges.
- **Warning** — Non-blocking alerts, caution notices, pending states.
- **Danger** — Error messages, destructive action buttons, form validation errors.
- **Neutral** — Body text (900), secondary text (600), borders (200-300), disabled states (400), backgrounds (50-100).

### Shade usage patterns

| Shade range | Common use |
|------------|------------|
| 50-100 | Tinted backgrounds (alerts, badges, hover states) |
| 200-300 | Borders, dividers |
| 400 | Placeholder text, disabled elements |
| 500 | Default / base — icons, badges |
| 600 | Hover states for 500-level elements |
| 700 | Active/pressed states, dark text on light tinted backgrounds |
| 800-950 | High-contrast text, dark mode backgrounds |

### WCAG AA Contrast Pairings

For **normal text** (minimum 4.5:1 ratio):

| Foreground | Background | Meets AA? |
|-----------|------------|-----------|
| primary-500 | white | Yes |
| primary-700+ | white | Yes |
| success-500 | white | Yes |
| danger-500 | white | Yes |
| warning-500 | white | Yes |
| neutral-600+ | white | Yes |
| white | primary-500+ | Yes |
| white | danger-500+ | Yes |

For **large text** (minimum 3:1 ratio): shades 400+ on white generally pass.
