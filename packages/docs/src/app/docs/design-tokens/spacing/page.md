---
title: Spacing
description: Davis 4px grid spacing system for consistent visual rhythm
---

# Spacing

Davis uses a **4px base grid** powered by Tailwind's default spacing scale. All spacing values are multiples of 4px (0.25rem), ensuring consistent rhythm across the entire interface.

---

## Visual Scale

{% spacing-scale /%}

---

## Spacing Guide

{% spacing-guide /%}

---

## Usage Recommendations

### Component-level spacing

| Context | Tailwind class | Value |
|---------|---------------|-------|
| Tight inline spacing (icons, badges) | `gap-1` / `p-1` | 4px |
| Compact padding (small buttons, tags) | `px-2 py-1` | 8px / 4px |
| Default button padding | `px-6 py-2` | 24px / 8px |
| Input padding | `px-3 py-2` | 12px / 8px |
| Card padding (default) | `p-6` | 24px |
| Card padding (compact) | `p-4` | 16px |

### Form spacing

| Context | Tailwind class | Value |
|---------|---------------|-------|
| Gap between label and input | `gap-1.5` | 6px |
| Gap between form fields | `space-y-4` | 16px |
| Gap between form sections | `space-y-8` | 32px |
| Form action buttons gap | `gap-3` | 12px |

### Page-level spacing

| Context | Tailwind class | Value |
|---------|---------------|-------|
| Content max-width | `max-w-4xl` | 896px |
| Wide content max-width | `max-w-6xl` | 1152px |
| Page horizontal padding | `px-4 sm:px-6 lg:px-8` | 16-32px |
| Section vertical spacing | `py-8 sm:py-12` | 32-48px |
| Page top/bottom margin | `py-8` | 32px |

---

## The 4px Grid

Every spacing value in the system is a multiple of 4px:

```
4px  → 0.25rem  → Tailwind: 1
8px  → 0.5rem   → Tailwind: 2
12px → 0.75rem  → Tailwind: 3
16px → 1rem     → Tailwind: 4
20px → 1.25rem  → Tailwind: 5
24px → 1.5rem   → Tailwind: 6
32px → 2rem     → Tailwind: 8
```

**Why 4px?** A 4px grid provides fine-grained control while maintaining visual consistency. It's small enough for compact UI elements but large enough to create perceptible spacing differences between adjacent values.

---

## Tips

- **Prefer `gap` over margin** — Use `gap-*` on flex/grid containers rather than margin on children. It's cleaner and avoids margin collapse issues.
- **Use `space-y-*` for stacks** — Vertical lists of items benefit from `space-y-4` or `space-y-6`.
- **Stay on the grid** — Avoid arbitrary values like `p-[7px]`. If the spacing doesn't feel right, move to the next grid value up or down.
- **Scale with breakpoints** — Increase spacing at larger breakpoints: `gap-4 md:gap-6 lg:gap-8`.
