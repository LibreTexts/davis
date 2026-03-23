---
title: Skip Link
description: Accessibility utility that lets keyboard users skip repetitive navigation
---

# Skip Link

The Skip Link component renders a hidden anchor at the top of the page that becomes visible when focused. It allows keyboard and screen reader users to jump directly to the main content area, bypassing repeated navigation elements on every page load. This satisfies **WCAG 2.4.1 Bypass Blocks (Level A)**.

Place `<SkipLink />` as the very first child of your layout — before your navigation, header, or any other content.

---

## Installation

{% framework-tabs %}
{% tab framework="react" %}
```bash
npm install @libretexts/davis-react
```
{% /tab %}
{% tab framework="vue" %}
```bash
npm install @libretexts/davis-vue
```

{% callout type="info" title="Coming Soon" %}
Vue components are in development. This documentation will be updated when components are available.
{% /callout %}
{% /tab %}
{% /framework-tabs %}

---

## Basic Usage

Add `SkipLink` as the first element in your layout and give your main content landmark a matching `id`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { SkipLink } from '@libretexts/davis-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <nav>...</nav>
      <main id="main-content">
        {children}
      </main>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { SkipLink } from '@libretexts/davis-vue';
</script>

<template>
  <SkipLink />
  <nav>...</nav>
  <main id="main-content">
    <slot />
  </main>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

By default, `SkipLink` links to `#main-content` and displays the label **"Skip to main content"**.

---

## Custom Target

If your main landmark uses a different `id`, pass it via `targetId`. You can also replace the default label text by passing `children`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<SkipLink targetId="page-content">Skip to page content</SkipLink>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<SkipLink target-id="page-content">Skip to page content</SkipLink>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

Make sure the target element exists in the DOM and has a matching `id`:

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<main id="page-content">
  {children}
</main>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<main id="page-content">
  <slot />
</main>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Next.js App Router Example

In a Next.js App Router project, add `SkipLink` to your root `layout.tsx`:

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { SkipLink } from '@libretexts/davis-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <header>
          <nav>...</nav>
        </header>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
Coming soon
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `targetId` | `string` | `'main-content'` | The `id` of the element to scroll to on activation |
| `children` | `ReactNode` | `'Skip to main content'` | Visible link label text |
| `className` | `string` | - | Additional CSS classes |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `target-id` | `string` | `'main-content'` | The `id` of the element to scroll to on activation |
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

- The link is **visually hidden** until it receives keyboard focus, preventing it from appearing in the visual layout for mouse users
- On focus (via **Tab** key), it becomes visible with high-contrast styling so keyboard users can clearly see and activate it
- Screen readers **always announce** the skip link regardless of its visual state — it is never removed from the accessibility tree
- Activating the link (**Enter** or **Space**) moves keyboard focus directly to the target element, not just the scroll position
- Satisfies **WCAG 2.4.1 Bypass Blocks (Level A)**

**Best practices:**
- Always place `SkipLink` as the absolute first focusable element on the page
- Ensure the `targetId` element exists and is a meaningful landmark (e.g., `<main>`)
- Do not add `tabIndex="-1"` to the target element unless you also manage focus programmatically — browsers handle focus on named anchors automatically
- One skip link per page is sufficient for most sites; add additional skip links only if there are multiple distinct regions worth skipping to (e.g., a sidebar)
