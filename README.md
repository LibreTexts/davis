<div align="center">
<img src="https://cdn.libretexts.net/Logos/libretexts_full.png" alt="LibreTexts Logo" width="500"
height="150" />
</div>

# Davis Design System

An accessibility-first, opinionated design system with full TypeScript support for React and Vue, built on top of HeadlessUI and Tailwind CSS.

## Architecture

This is a monorepo containing four packages:

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

#### `@libretexts/davis-docs`
Documentation site built with Next.js, showcasing usage guides and Storybook examples.

## Workspace Structure

```
davis/
├── packages/
│   ├── core/          # Shared variants and utilities
│   ├── react/         # React components
│   ├── vue/           # Vue components
│   └── docs/          # Documentation site
│
├── package.json       # Root workspace config
└── tsconfig.base.json # Shared TypeScript config
```

## Design Tokens & Theming

### 🎨 Single Source of Truth

All Davis design tokens (colors, typography, spacing, shadows, etc.) are defined **once** in `packages/core/src/tokens.ts` and automatically generate all configuration files.

```
tokens.ts (EDIT THIS)
    ↓ npm run generate:configs
    ↓
    ├─→ tailwind.preset.cjs    (Tailwind v3 config)
    ├─→ theme.css              (Tailwind v4 theme)
    ├─→ base.css               (Global base styles)
    └─→ base.scoped.css        (Scoped base styles)
```

### 📁 Understanding the Files

| File | Purpose | Provides | Scope | Tailwind Version |
|------|---------|----------|-------|------------------|
| **`tailwind.preset.cjs`** | Tailwind v3 config | Utility classes (`bg-primary`, etc.) | N/A | v3 |
| **`theme.css`** | Tailwind v4 theme | Utility classes (`bg-primary`, etc.) | N/A | v4 |
| **`base.css`** | Global base styles | CSS vars, resets, heading styles, focus | Global (`:root`) | Any |
| **`base.scoped.css`** | Scoped base styles | CSS vars, resets, heading styles, focus | Scoped (`.davis`) | Any |

> ⚠️ **All CSS files are auto-generated from `tokens.ts`** — Do not edit manually!

#### What Each File Provides

|  | `theme.css` | `base.css` | `base.scoped.css` |
|--|-------------|-----------|-------------------|
| **Tailwind utilities** (`bg-primary`, `text-sm`) | ✅ | ❌ | ❌ |
| **CSS custom properties** (`var(--davis-color-primary)`) | ❌ | ✅ | ✅ |
| **Heading styles** (`h1`, `h2`, etc.) | ❌ | ✅ Global | ✅ Scoped to `.davis` |
| **Typography defaults** (`html` font) | ❌ | ✅ Global | ✅ Scoped to `.davis` |
| **Focus management** | ❌ | ✅ Global | ✅ Scoped to `.davis` |
| **Reduced motion** | ❌ | ✅ Global | ✅ Scoped to `.davis` |

#### Detailed Descriptions

<details>
<summary><strong>tailwind.preset.cjs</strong> - Tailwind v3 Configuration</summary>

- **For:** Tailwind CSS v3 users
- **Purpose:** Tailwind v3 configuration preset
- **Used by:** `@libretexts/davis-react`
- **Import:** Add to `tailwind.config.js` `presets` array

</details>

<details>
<summary><strong>theme.css</strong> - Tailwind v4 Theme</summary>

- **For:** Tailwind CSS v4 users
- **Purpose:** Configures Tailwind v4 utility classes via `@theme` directive
- **Provides:** `bg-primary`, `text-sm`, `shadow-md`, `rounded-lg`, etc.
- **Does NOT include:** Base styles, resets, or heading styles
- **Used by:** `@libretexts/davis-docs`
- **Import:** `@import '@libretexts/davis-core/theme.css';`

</details>

<details>
<summary><strong>base.css</strong> - Global Base Styles</summary>

- **For:** Full integration scenarios
- **Purpose:** Global CSS resets and base styles
- **Provides:**
  - CSS custom properties at `:root` (e.g., `var(--davis-color-primary)`)
  - Global typography defaults on `html`
  - Heading hierarchy styles (`h1`-`h6`)
  - Focus ring management
  - Reduced motion support
- **Scope:** Global (affects entire page)
- **Import:** `@import '@libretexts/davis-core/base.css';`

</details>

<details>
<summary><strong>base.scoped.css</strong> - Scoped Base Styles</summary>

- **For:** Embedded/standalone scenarios
- **Purpose:** Same as `base.css` but scoped under `.davis` selector
- **Provides:** All of `base.css` functionality without global scope
- **Prevents:** Style leakage when Davis is embedded in other applications or you're perfoming a gradual migration to Davis
- **Use case:** Widgets, iframes, or when Davis shares the page with other design systems
- **Requires:** Wrapping Davis components in `<div class="davis">...</div>`
- **Import:** `@import '@libretexts/davis-core/base.scoped.css';`

</details>

### 🔧 For Contributors

#### Modifying Design Tokens

1. **Edit** `packages/core/src/tokens.ts`
2. **Regenerate** configs:
   ```bash
   cd packages/core
   npm run generate:configs
   ```
3. **Verify** changes in all generated files
4. **Commit** both `tokens.ts` and generated files

See `packages/core/scripts/README.md` for detailed architecture documentation.

### 📦 For Consuming Applications

#### Scenario 1: Full Integration (Tailwind v4)

```css
/* Your app's main CSS file */
@import 'tailwindcss';
@import '@libretexts/davis-core/theme.css';    /* ← Tailwind utilities */
@import '@libretexts/davis-core/base.css';     /* ← Base styles */

@plugin '@tailwindcss/typography'; /* Optional: Tailwind Typography plugin for non-controlled/dynamic HTML, Markdown, etc. content */
```

```tsx
// Now use Tailwind utilities powered by Davis tokens
<div className="bg-primary text-white shadow-lg rounded-lg">
  <h1>Using Davis theme!</h1>
</div>
```

#### Scenario 2: Full Integration (Tailwind v3)

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@libretexts/davis-core/tailwind.preset')
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
```

```css
/* Your app's main CSS file */
@import '@libretexts/davis-core/base.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Scenario 3: Embedded/Widget Mode

```html
<!-- Host app with its own styles -->
<div class="host-app">
  <h1>Host App Heading</h1>

  <!-- Davis component isolated in .davis scope -->
  <div class="davis">
    <h1>Davis Heading</h1>
    <!-- Davis styles only apply here -->
  </div>
</div>
```

```css
/* Widget CSS */
@import '@libretexts/davis-core/base.scoped.css';
/* All Davis styles scoped under .davis */
```

#### Scenario 4: CSS Variables Only

If you just need access to design tokens via CSS custom properties:

```css
@import '@libretexts/davis-core/base.css';
/* or */
@import '@libretexts/davis-core/base.scoped.css';
```

```css
/* Now use CSS variables */
.my-component {
  color: var(--davis-color-primary);
  font-family: var(--davis-font-family);
  border-radius: var(--davis-radius);
}
```

#### Scenario 5: Gradual Migration from Another Design System

Use **scoped mode** to run both systems side-by-side during the transition.

##### Step 1: Install Davis

```bash
npm install @libretexts/davis-core @libretexts/davis-react
```

##### Step 2: Import Scoped Styles

```css
/* app.css or global styles */
@import '@libretexts/davis-core/base.scoped.css';

/* Keep your existing design system imports */
@import '@mantine/core/styles.css'; /* Example: Mantine */
```

##### Step 3: Wrap New Davis Components

```tsx
// App.tsx
import { MantineProvider } from '@mantine/core'; // Existing
import { Button } from '@libretexts/davis-react'; // New Davis component

export function App() {
  return (
    <MantineProvider>
      <div className="app">
        {/* Existing Mantine components work as-is */}
        <Header>
          <MantineButton>Old Button</MantineButton>
        </Header>

        {/* New Davis components wrapped in .davis scope */}
        <main className="davis">
          <Button variant="primary">New Davis Button</Button>
          <h1>This heading uses Davis styles</h1>
        </main>

        {/* Mix both as needed during migration */}
        <aside>
          <MantineCard>Still using Mantine here</MantineCard>
        </aside>
      </div>
    </MantineProvider>
  );
}
```

##### Step 4: Migrate Page-by-Page or Component-by-Component

**Option A: Migrate entire pages**
```tsx
// Old page (still using Mantine)
export function SettingsPage() {
  return (
    <div>
      <MantineButton>Save</MantineButton>
    </div>
  );
}

// New page (fully Davis)
export function DashboardPage() {
  return (
    <div className="davis">
      <Button>Save</Button>
      <Card>Dashboard content</Card>
    </div>
  );
}
```

**Option B: Migrate individual components**
```tsx
// Wrapper component for gradual migration
export function NavigationBar() {
  return (
    <nav>
      {/* Old Mantine menu */}
      <MantineMenu>...</MantineMenu>

      {/* New Davis user menu */}
      <div className="davis">
        <Menu>
          <MenuButton>Account</MenuButton>
          <MenuItems>...</MenuItems>
        </Menu>
      </div>
    </nav>
  );
}
```

##### Step 5: Eventually Switch to Full Integration

Once migration is complete, switch from scoped to global mode:

1. **Remove** the old design system:
   ```bash
   npm uninstall @mantine/core @mantine/hooks
   ```

2. **Replace** `base.scoped.css` with `base.css`:
   ```css
   /* Before: Scoped mode */
   @import '@libretexts/davis-core/base.scoped.css';

   /* After: Full integration */
   @import '@libretexts/davis-core/base.css';
   /* If using Tailwind v4 */
   @import '@libretexts/davis-core/theme.css';
   ```

3. **Remove** `.davis` wrapper divs:
   ```tsx
   // Before: Scoped
   <div className="davis">
     <Button>Click me</Button>
   </div>

   // After: Global
   <Button>Click me</Button>
   ```

4. **Add** Tailwind config (if using Tailwind v3):
   ```js
   // tailwind.config.js
   module.exports = {
     presets: [require('@libretexts/davis-core/tailwind.preset')],
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
   }
   ```

##### Migration Checklist

- [ ] Install Davis packages
- [ ] Import `base.scoped.css` in global styles
- [ ] Create migration plan (page-by-page or component-by-component)
- [ ] Wrap new Davis components in `.davis` containers
- [ ] Test for style conflicts between systems
- [ ] Gradually replace old components with Davis equivalents
- [ ] Monitor bundle size (remove old dependencies as you go)
- [ ] Switch to `base.css` when migration is complete
- [ ] Remove `.davis` wrapper divs
- [ ] Uninstall old design system packages
- [ ] Update Tailwind config for full Davis integration (if using Tailwind v3)

##### Tips for Smooth Migration

**Avoid Conflicts:**
- Use `.davis` scope consistently for all Davis components
- Don't mix Davis and old design system components in the same container without scoping
- Test heading styles carefully (both systems style `h1`-`h6`)

**Performance:**
- Remove old design system CSS imports from pages/components as you migrate them
- Don't wait until the end to remove dependencies—clean up incrementally

### 🎯 Quick Reference

| Your Setup | Import |
|------------|--------|
| **Next.js + Tailwind v4** | `theme.css` + `base.css` |
| **React + Tailwind v3** | `tailwind.preset.cjs` + `base.css` |
| **Vue + Tailwind v3** | `tailwind.preset.cjs` + `base.css` |
| **Embedded widget** | `base.scoped.css` |
| **CSS-only** | `base.css` or `base.scoped.css` |
| **Migrating from another design system** | `base.scoped.css` (during migration) → `base.css` (when complete) |

## Development

### Prerequisites

- Node.js 20+
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

# Build only docs
npm run build -w @libretexts/davis-docs
```

### ⚠️ Common Issues

#### "bg-primary is not defined" or colors not working

**Problem:** Tailwind utilities like `bg-primary`, `text-secondary-500` are not being imported.

**Solution:**
- **Tailwind v4:** Import `theme.css` in your CSS file
- **Tailwind v3:** Add Davis preset to `tailwind.config.js`

```css
/* Tailwind v4 */
@import '@libretexts/davis-core/theme.css';
```

```js
/* Tailwind v3 */
module.exports = {
  presets: [require('@libretexts/davis-core/tailwind.preset')],
}
```

#### Headings look wrong or unstyled

**Problem:** `<h1>`, `<h2>`, etc. don't have Davis typography.

**Solution:** Import `base.css` (or `base.scoped.css` for scoped mode)

```css
@import '@libretexts/davis-core/base.css';
```

#### Davis styles leaking into host application

**Problem:** When embedding Davis components, styles affect the host app.

**Solution:** Use `base.scoped.css` instead of `base.css` and wrap Davis components in `.davis` container

```html
<div class="davis">
  <!-- Davis components here -->
</div>
```

## Design Principles

1. **Accessibility First**: Built on HeadlessUI for rock-solid a11y foundations
2. **Opinionated Defaults**: A well-curated set of components and variants to reduce decision fatigue and promote consistency
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
