---
title: Theming & Customization
description: How to override tokens, extend the color palette, and build custom components
---

# Theming & Customization

Davis is designed to be adopted as-is or adapted per project. This guide covers three levels of customization:

1. **Override CSS custom properties** — Remap the default brand colors and surfaces without touching Davis internals.
2. **Extend the color palette** — Add project-specific semantic colors as Tailwind utilities.
3. **Build custom components** — Create new components that follow Davis conventions.

---

## Override CSS Custom Properties

Davis exposes its semantic tokens as CSS custom properties on `:root`. Override any of them in your project's CSS to rebrand without forking the design system.

```css
/* app/globals.css (or equivalent) */

:root {
  /* Replace the primary brand color */
  --davis-color-primary: #6d28d9;
  --color-primary:       #6d28d9;
  --color-primary-600:   #5b21b6;

  /* Replace surface colors */
  --davis-surface:       #fafaf9;
  --color-surface:       #fafaf9;
  --color-surface-muted: #f5f5f4;

  /* Replace the focus ring color */
  --davis-ring-color:    #6d28d9;
  --ring-color:          #6d28d9;
}
```

### Which properties to override

| Purpose | CSS Variable | Scope |
|---|---|---|
| Primary brand color | `--davis-color-primary`, `--color-primary` | Buttons, links, focus rings |
| Primary hover state | `--color-primary-600` | Hover backgrounds |
| Focus ring | `--davis-ring-color`, `--ring-color` | All interactive elements |
| Page background | `--davis-surface` | App shell, Card backgrounds |
| Muted background | `--davis-surface-muted` | Sidebars, table headers |
| Default border radius | `--davis-radius` | All components with rounded corners |

{% callout type="warning" title="Override both prefixes" %}
Davis components use both the `--davis-*` custom properties (from `base.css`) and the unprefixed Tailwind `@theme` properties (from `theme.css`). When overriding a token, set both. For example, `--davis-color-primary` and `--color-primary`.
{% /callout %}

---

## Extend the Color Palette

To add a project-specific semantic color (e.g. a "brand" teal) that generates Tailwind utilities, add it to your `@theme` block in your CSS:

```css
/* app/globals.css */
@import "@libretexts/davis-core/theme.css";

@theme {
  /* Add a project-specific brand color */
  --color-brand-50:  #f0fdfa;
  --color-brand-100: #ccfbf1;
  --color-brand-200: #99f6e4;
  --color-brand-300: #5eead4;
  --color-brand-400: #2dd4bf;
  --color-brand-500: #14b8a6;
  --color-brand-600: #0d9488;
  --color-brand-700: #0f766e;
  --color-brand-800: #115e59;
  --color-brand-900: #134e4a;
  --color-brand:     #14b8a6;
}
```

This generates `bg-brand`, `text-brand`, `border-brand`, `bg-brand-500`, `text-brand-600`, and all the standard Tailwind color utilities for your new palette.

### Recommended shade values

Use a full 50–900 range so your color integrates consistently with the rest of the Davis palette. The `--color-brand` (bare) value should match your 500-level shade — this is what `bg-brand`, `text-brand`, etc. resolve to.

---

## Build Custom Components

When building a new component for your project, follow these conventions to stay consistent with Davis.

### 1. Use `tailwind-variants` for style logic

```tsx
import { tv } from 'tailwind-variants';

const myComponent = tv({
  base: 'rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200',
  variants: {
    variant: {
      solid:   'bg-primary text-white hover:bg-primary-600',
      outline: 'border border-primary text-primary hover:bg-primary-50',
    },
  },
  defaultVariants: {
    variant: 'solid' as const,
  },
});
```

### 2. Wire up focus-visible

Every interactive element must show a visible focus indicator for keyboard and assistive technology users:

```tsx
// Buttons and controls
'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'

// Inputs
'focus:outline-2 focus:-outline-offset-2 focus:outline-primary'
```

### 3. Accept a `className` override

Allow consumers to extend or override styles by forwarding `className` to the root element:

```tsx
import clsx from 'clsx';

export function MyComponent({ className, ...props }: MyComponentProps) {
  return (
    <div className={clsx(myComponent(), className)} {...props} />
  );
}
```

### 4. Full example

```tsx
"use client";

import clsx from 'clsx';
import { tv } from 'tailwind-variants';

const chip = tv({
  base: [
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
    'text-xs font-medium',
    'border transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  ].join(' '),
  variants: {
    selected: {
      true:  'bg-primary text-white border-primary',
      false: 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary',
    },
  },
  defaultVariants: {
    selected: false as const,
  },
});

export type ChipProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Chip({ children, selected = false, onClick, className }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(chip({ selected }), className)}
    >
      {children}
    </button>
  );
}
```

---

## Token Reference

For a complete list of available CSS custom properties, see the generated source files:

- `@libretexts/davis-core/base.css` — `--davis-*` prefixed properties for runtime theming
- `@libretexts/davis-core/theme.css` — Tailwind `@theme` block generating all utility classes

Both files are auto-generated from `tokens.ts` and are human-readable.
