---
title: Custom Components
description: How to build custom components that fit seamlessly with Davis' design system.
---

# Custom Components

Davis is designed to be adopted as-is whenever possible, and only overriden when absolutely unavoidable. If the default design system components don't meet your needs, you can build custom components while still leveraging the core design tokens and conventions. This guide covers how to build new components that fit seamlessly with Davis.

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

For a complete list of Davis' CSS properties, see the generated source files:

- `@libretexts/davis-core/base.css` — `--davis-*` prefixed properties for runtime theming
- `@libretexts/davis-core/theme.css` — Tailwind `@theme` block generating all utility classes

Both files are auto-generated from `tokens.ts` and are human-readable.
