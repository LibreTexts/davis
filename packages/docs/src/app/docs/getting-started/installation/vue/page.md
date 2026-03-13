---
title: Vue Installation
description: Install and set up Davis for Vue 3+ applications
---

# Vue Installation

Get started with Davis in your Vue application. This guide covers installation for Vue 3+ projects including Nuxt and other Vue frameworks.

{% callout type="info" title="Coming Soon" %}
Vue components are currently in development. This documentation will be updated when the component library is available. You can use `@libretexts/davis-core` for design tokens in the meantime - see the [Tokens Only Installation](/docs/getting-started/installation/tokens-only) guide.
{% /callout %}

---

## Install Packages

Once available, install the Davis Vue package:

```bash
npm install @libretexts/davis-vue
```

The `@libretexts/davis-vue` package will automatically include `@libretexts/davis-core` as a dependency, so you'll get both components and design tokens in one installation.

### Peer Dependencies

Install required peer dependencies:

```bash
npm install @headlessui/vue vue tailwindcss
```

---

## Import Styles

In your app's CSS entry file, add:

```css
@import 'tailwindcss';
@import "@libretexts/davis-vue/styles.css";
```

`@libretexts/davis-vue/styles.css` will handle the Tailwind v4 theme, base styles, and component class sources in one import (same pattern as the React package).

---

## Load Fonts

Davis uses **Atkinson Hyperlegible** for optimal legibility. You can load it via Google Fonts or self-host it for better performance and privacy.

### Option 1: Google Fonts CDN (Quick Start)

```css
/* In your main CSS file */
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
```

### Option 2: Nuxt Font Optimization (Recommended)

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Atkinson Hyperlegible': [400, 700],
    },
    display: 'swap',
  },
});
```

See the [Fonts](/docs/getting-started/fonts) guide for self-hosting, performance optimization, and more framework-specific instructions.

---

## Quick Start Example

Once components are available, usage will look like this:

```vue
<script setup>
import { Button, Input, Card } from '@libretexts/davis-vue';
</script>

<template>
  <Card>
    <CardHeader>
      <h2>Sign In</h2>
    </CardHeader>
    <CardBody>
      <div class="space-y-4">
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" />
        <Button full-width>Sign In</Button>
      </div>
    </CardBody>
  </Card>
</template>
```

---

## Current Availability

While Vue components are in development, you can:

1. **Use design tokens** - Install `@libretexts/davis-core` for the full design token system
2. **Build custom components** - Use Tailwind utilities with Davis tokens
3. **Follow development** - Watch the GitHub repository for Vue component releases

See the [Tokens Only Installation](/docs/getting-started/installation/tokens-only) guide to get started with design tokens today.

---

## Next Steps

Explore our design foundations to start using Davis design tokens:

- [Architecture](/docs/foundation/architecture) - Understand the package structure
- [Colors](/docs/foundation/colors) - Seven semantic colors with full shade ranges
- [Typography](/docs/foundation/typography) - Major Third typographic scale
- [Spacing](/docs/foundation/spacing) - 4px grid spacing system
- [Layout](/docs/foundation/layout) - Page structure and responsive patterns
- [Accessibility](/docs/guides/accessibility) - WCAG 2.2 AA guidelines
