---
title: Typography
description: Davis typography system with Major Third scale and semantic heading hierarchy
---

# Typography

Davis uses a **Major Third** typographic scale (ratio 1.250, base 16px) to create clear visual hierarchy. The scale is intentionally compact — capped at `text-4xl` — to keep interfaces readable without oversized headings.

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

The Major Third scale multiplies each step by 1.250x:

| Token | Tailwind Class | Size | Line Height | Use |
|-------|---------------|------|-------------|-----|
| `xs` | `text-xs` | 0.640rem (10.2px) | 1rem | Captions, fine print |
| `sm` | `text-sm` | 0.800rem (12.8px) | 1.25rem | Labels, helper text, badges |
| `base` | `text-base` | 1rem (16px) | 1.5rem | Body text, buttons, inputs |
| `lg` | `text-lg` | 1.250rem (20px) | 1.75rem | Lead text, h5, h6 |
| `xl` | `text-xl` | 1.563rem (25px) | 2rem | h4 |
| `2xl` | `text-2xl` | 1.953rem (31.3px) | 2.25rem | h3 |
| `3xl` | `text-3xl` | 2.441rem (39.1px) | 2.75rem | h2 |
| `4xl` | `text-4xl` | 3.052rem (48.8px) | 3.25rem | h1, page titles |

**Note:** `text-5xl` through `text-9xl` are not available. The scale caps at `text-4xl` to prevent abnormally large headings that can disrupt layout and readability. If you truly need larger display text, consider using `text-4xl` with a custom font size or weight for emphasis, but use this sparingly.

### Visual Scale

{% type-scale /%}

---

## Heading Hierarchy

Headings are styled in `base.css` with appropriate sizes and weights:

{% heading-hierarchy /%}

### Heading guidelines

- **h1** (`text-4xl`, weight 700) — One per page. Page title or hero text.
- **h2** (`text-3xl`, weight 700) — Major sections within a page.
- **h3** (`text-2xl`, weight 600) — Subsections.
- **h4** (`text-xl`, weight 600) — Card titles, form section headers.
- **h5/h6** (`text-lg`, weight 600) — Minor headings, sidebar sections.

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

- **Body text** (`text-base`): 1.5rem line height (24px) — 1.5x ratio for optimal readability.
- **Small text** (`text-sm`, `text-xs`): Tighter line heights (1.25rem, 1rem) for compact UI elements.
- **Large headings** (`text-3xl`, `text-4xl`): Proportionally tighter line heights to reduce visual gap between lines.

---

## Usage Tips

- Use `text-base` for body content — it's the foundation of the scale.
- Use semantic heading elements (`h1`–`h6`) with their default styles rather than applying `text-*` classes to divs.
- Avoid using more than 3 font sizes on a single page section to maintain visual calm.
- Pair `text-sm` with `text-gray-500` for secondary/helper text.
