---
title: Typography
description: Davis typography system with a hand-tuned reading scale and semantic heading hierarchy
---

# Typography

Davis uses a **hand-tuned reading scale** (base 17px, a11y floor 12px) to create clear visual hierarchy. Rather than deriving every step from a single fixed ratio, each size is tuned individually: the ceiling is clamped so headings stay readable, body text is sized for comfortable long-form reading, and nothing falls below a 12px accessibility floor.

---

## Font Family

The primary font is **Atkinson Hyperlegible**, with a system font stack fallback:

```
Atkinson Hyperlegible, ui-sans-serif, system-ui, -apple-system,
BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

Atkinson Hyperlegible was designed by the Braille Institute specifically for legibility and accessibility, making it ideal for Davis's a11y-first approach. See the [Fonts guide](/docs/getting-started/fonts) for loading instructions.

---

## Type Scale

Each step is tuned individually rather than derived from one ratio:

| Token | Tailwind Class | Size | Line Height | Use |
|-------|---------------|------|-------------|-----|
| `xs` | `text-xs` | 0.750rem (12px) | 1rem | Captions, fine print |
| `sm` | `text-sm` | 0.875rem (14px) | 1.25rem | Labels, helper text, badges, h6 |
| `base` | `text-base` | 1.0625rem (17px) | 1.625rem | Body text, buttons, inputs, h5 |
| `lg` | `text-lg` | 1.1875rem (19px) | 1.75rem | Lead text, h4 |
| `xl` | `text-xl` | 1.375rem (22px) | 2rem | h3 |
| `2xl` | `text-2xl` | 1.500rem (24px) | 2rem | h2 |
| `3xl` | `text-3xl` | 1.875rem (30px) | 2.25rem | h1, page titles |
| `4xl` | `text-4xl` | 2.250rem (36px) | 2.5rem | Display text (use sparingly) |

**Note:** `text-5xl` through `text-9xl` are not available. The scale caps at `text-4xl` (36px) for display text, which should be used sparingly and only outside of normal heading hierarchy.

### Visual Scale

{% type-scale /%}

---

## Heading Hierarchy

Headings are styled in `base.css` with appropriate sizes and weights:

{% heading-hierarchy /%}

### Heading guidelines

- **h1** (`text-3xl`, weight 700) — One per page. Page title or hero text.
- **h2** (`text-2xl`, weight 700) — Major sections within a page.
- **h3** (`text-xl`, weight 600) — Subsections.
- **h4** (`text-lg`, weight 600) — Card titles, form section headers.
- **h5** (`text-base`, weight 600) — Minor headings, sidebar sections.
- **h6** (`text-sm`, weight 600) — Fine-grained labels, nested section titles.

---

## Font Weight Guidelines

| Weight | Class | Use |
|--------|-------|-----|
| 400 (Regular) | `font-normal` | Body text, descriptions |
| 500 (Medium) | `font-medium` | Buttons, labels, navigation |
| 600 (Semibold) | `font-semibold` | h3–h6, card titles, emphasis |
| 700 (Bold) | `font-bold` | h1–h2, strong emphasis |

---

## Line Height

Every font size token includes a paired line height for comfortable reading:

- **Body text** (`text-base`): 1.625rem line height (26px) — roughly 1.53x for comfortable long-form reading.
- **Small text** (`text-sm`, `text-xs`): Tighter line heights (1.25rem, 1rem) for compact UI elements.
- **Large headings** (`text-2xl`, `text-3xl`, `text-4xl`): Proportionally tighter line heights to reduce visual gap between lines.

---

## Usage Tips

- Use `text-base` for body content — it's the foundation of the scale.
- Use semantic heading elements (`h1`–`h6`) with their default styles rather than applying `text-*` classes to divs.
- Avoid using more than 3 font sizes on a single page section to maintain visual calm.
- Pair `text-sm` with `text-gray-500` for secondary/helper text.
