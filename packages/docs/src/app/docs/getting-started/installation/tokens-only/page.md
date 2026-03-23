---
title: Tokens Only Installation
description: Install Davis design tokens without framework-specific components
---

# Tokens Only Installation

Install the Davis design system core package to access design tokens, Tailwind configuration, and base styles without framework-specific components. This is ideal for:

- Building custom component libraries
- Using frameworks other than React or Vue
- Maximum flexibility with minimal dependencies
- Gradually adopting Davis in existing projects

---

## Install Package

Install the core package:

```bash
npm install @libretexts/davis-core
```

This package is framework-agnostic and includes:
- Design tokens (colors, typography, spacing, layout)
- CSS custom properties
- Tailwind v4 theme (`theme.css`) and base styles (`base.v4.css`)
- Component variant functions via `tailwind-variants` (`variants.ts`)
- Auto-generated component safelist (`safelist.css`)

---

## Import Styles

In your app's CSS entry file, import Tailwind and the Davis core styles:

```css
@import 'tailwindcss';
@import "@libretexts/davis-core/theme.css";
@import "@libretexts/davis-core/base.v4.css";
```

- **`theme.css`** — Registers all Davis design tokens as Tailwind v4 utilities: `bg-primary`, `text-sm`, `shadow-md`, `rounded-lg`, etc.
- **`base.v4.css`** — CSS custom properties, heading scale, focus rings, typography defaults

### Using component variants

If you are building your own components with the variant functions exported from `@libretexts/davis-core` (see [Building Custom Components](#building-custom-components) below), also import the component safelist:

```css
@import 'tailwindcss';
@import "@libretexts/davis-core/theme.css";
@import "@libretexts/davis-core/base.v4.css";
@import "@libretexts/davis-core/safelist.css";
```

`safelist.css` is auto-generated from `variants.ts` at build time and uses `@source inline()` to guarantee every utility class emitted by the variant functions is included in your CSS bundle — including in PostCSS-based builds (Next.js, etc.) where `@source` file scanning of imported CSS is not propagated.

---

## Load Fonts

Davis uses **Atkinson Hyperlegible** for optimal legibility. Load it via Google Fonts:

```css
/* In your main CSS file */
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
```

For self-hosting and framework-specific font loading, see the [Fonts](/docs/getting-started/fonts) guide.

---

## Using Design Tokens

### Via Tailwind Utilities

Use Davis design tokens through Tailwind utility classes:

```html
<!-- Colors -->
<button class="bg-primary-500 text-white hover:bg-primary-600">
  Click me
</button>

<!-- Typography -->
<h1 class="text-4xl font-bold text-text">
  Heading
</h1>
<p class="text-base text-text-neutral">
  Body text with neutral color
</p>

<!-- Spacing -->
<div class="p-4 space-y-3">
  <div class="mt-6 mb-8">Content</div>
</div>

<!-- Combined -->
<div class="rounded-lg shadow-md bg-surface p-6 border border-neutral-200">
  <h2 class="text-2xl font-semibold text-text mb-4">Card Title</h2>
  <p class="text-text-neutral">Card content</p>
</div>
```

### Via CSS Custom Properties

Davis tokens are also available as CSS custom properties:

```css
.my-component {
  background-color: var(--color-primary-500);
  color: var(--color-text-white);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  font-family: var(--font-sans);
}

.my-heading {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
}
```

---

## Building Custom Components

With Davis tokens, you can build your own components that align with the design system:

```tsx
// Custom Button Component (React example)
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

function Button({ variant = 'primary', children }: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
    danger: 'bg-danger-500 hover:bg-danger-600 text-white',
  };

  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]}
      `}
    >
      {children}
    </button>
  );
}
```

---

## Example: Complete Page

Here's a complete example using only design tokens:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Davis Tokens Example</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="bg-surface font-sans">
  <div class="max-w-4xl mx-auto p-6">
    <header class="mb-8">
      <h1 class="text-5xl font-bold text-text mb-2">
        Welcome to Davis
      </h1>
      <p class="text-xl text-text-neutral">
        Design system built with accessibility in mind
      </p>
    </header>

    <main class="space-y-6">
      <div class="bg-white rounded-lg shadow-md p-6 border border-neutral-200">
        <h2 class="text-2xl font-semibold text-text mb-4">
          Getting Started
        </h2>
        <p class="text-text-neutral mb-4">
          Davis provides a complete design token system including colors,
          typography, spacing, and more.
        </p>
        <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Learn More
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-surface-subtle p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-text mb-2">Accessible</h3>
          <p class="text-sm text-text-neutral">WCAG 2.2 AA compliant</p>
        </div>
        <div class="bg-surface-subtle p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-text mb-2">Consistent</h3>
          <p class="text-sm text-text-neutral">Unified design language</p>
        </div>
        <div class="bg-surface-subtle p-4 rounded-lg">
          <h3 class="text-lg font-semibold text-text mb-2">Flexible</h3>
          <p class="text-sm text-text-neutral">Use with any framework</p>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

---

## Upgrading to Components

When you're ready to use pre-built components:

1. Install the appropriate component library:
   - React: `npm install @libretexts/davis-react`
   - Vue: `npm install @libretexts/davis-vue` (coming soon)

2. The component libraries include `davis-core` as a dependency, so your existing token usage will continue to work

3. Start replacing custom components with Davis components gradually

See [Architecture](/docs/foundation/architecture) for more details on the package structure.

---

## Next Steps

Explore our design foundations to learn about all available tokens:

- [Architecture](/docs/foundation/architecture) - Understand the package structure
- [Colors](/docs/foundation/colors) - Seven semantic colors with full shade ranges
- [Typography](/docs/foundation/typography) - Major Third typographic scale
- [Spacing](/docs/foundation/spacing) - 4px grid spacing system
- [Layout](/docs/foundation/layout) - Page structure and responsive patterns
- [Accessibility](/docs/guides/accessibility) - WCAG 2.2 AA guidelines
