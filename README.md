<div align="center">
<img src="https://cdn.libretexts.net/Logos/libretexts_full.png" alt="LibreTexts Logo" width="500"
height="150" />
</div>

# Davis UI Library

An accessibility-first UI component library for React and Vue, built on top of HeadlessUI with opinionated styling using Tailwind CSS.

## Architecture

This is a monorepo containing three packages:

### 📦 Packages

#### `@libretexts/davis-core`

Framework-agnostic package containing:

- Shared variant definitions (using `tailwind-variants`)
- Utility functions (e.g., `cn` for className merging)
- Shared TypeScript types
- Design tokens and constants

#### `@libretexts/davis-react`

React implementation using `@headlessui/react`

#### `@libretexts/davis-vue`

Vue 3 implementation using `@headlessui/vue`

## Workspace Structure

```
davis/
├── packages/
│   ├── core/          # Shared variants and utilities
│   ├── react/         # React components
│   └── vue/           # Vue components
├── package.json       # Root workspace config
└── tsconfig.base.json # Shared TypeScript config
```

## Development

### Prerequisites

- Node.js 18+
- npm 9+ (for workspace protocol support)

### Installation

```bash
npm install
```

### Building

```bash
# Build all packages
npm run build

# Build in watch mode
npm run dev

# Type check all packages
npm run typecheck
```

### Package-specific commands

```bash
# Build only React package
npm run build -w @libretexts/davis-react

# Build only Vue package
npm run build -w @libretexts/davis-vue

# Build only core package
npm run build -w @libretexts/davis-core
```

## Design Principles

1. **Accessibility First**: Built on HeadlessUI for rock-solid a11y foundations
2. **Customizable**: Tailwind-based styling allows easy customization
3. **Type-safe**: Full TypeScript support across all packages
4. **Framework Agnostic Core**: Share variant definitions between React and Vue
5. **Tree-shakeable**: Optimized bundle size with ESM and proper exports

## Adding New Components

### 1. Define variants in `@libretexts/davis-core`

```typescript
// packages/core/src/variants/my-component.ts
import { tv, type VariantProps } from "tailwind-variants";

export const myComponentVariants = tv({
  base: "...",
  variants: {
    // variant classes
  },
  defaultVariants: {
    // defaults
  },
});

export type MyComponentVariantProps = VariantProps<typeof myComponentVariants>;
```

### 2. Export from core

```typescript
// packages/core/src/index.ts
export { myComponentVariants } from "./variants/my-component";
export type { MyComponentVariantProps } from "./variants/my-component";
```

### 3. Implement in React

```tsx
// packages/react/src/components/MyComponent.tsx
import {
  cn,
  myComponentVariants,
  type MyComponentVariantProps,
} from "@libretexts/davis-core";

export interface MyComponentProps extends MyComponentVariantProps {
  // component-specific props
}

export const MyComponent = ({
  variant,
  size,
  className,
  ...props
}: MyComponentProps) => {
  return (
    <div className={cn(myComponentVariants({ variant, size }), className)}>
      {/* implementation */}
    </div>
  );
};
```

### 4. Implement in Vue

```vue
<!-- packages/vue/src/components/MyComponent.vue -->
<script setup lang="ts">
import {
  cn,
  myComponentVariants,
  type MyComponentVariantProps,
} from "@libretexts/davis-core";

interface MyComponentProps extends MyComponentVariantProps {
  // component-specific props
}

const props = defineProps<MyComponentProps>();
</script>

<template>
  <div
    :class="
      cn(
        myComponentVariants({ variant: props.variant, size: props.size }),
        props.className,
      )
    "
  >
    <!-- implementation -->
  </div>
</template>
```

## License

MIT © LibreTexts, Inc.
