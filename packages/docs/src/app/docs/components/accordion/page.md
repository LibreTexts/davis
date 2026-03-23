---
title: Accordion
description: Collapsible content sections with keyboard navigation and ARIA support
---

# Accordion

The Accordion component organizes content into collapsible sections, letting users reveal only what they need. It supports three visual variants, three sizes, and a compound component API that keeps your markup expressive and accessible by default.

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

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Accordion } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Accordion>
      <Accordion.Item defaultOpen>
        <Accordion.Trigger>What is Davis?</Accordion.Trigger>
        <Accordion.Panel>Davis is a design system for LibreTexts.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>How do I install it?</Accordion.Trigger>
        <Accordion.Panel>Run npm install @libretexts/davis-react</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Accordion } from '@libretexts/davis-vue';
</script>

<template>
  <Accordion>
    <Accordion.Item :default-open="true">
      <Accordion.Trigger>What is Davis?</Accordion.Trigger>
      <Accordion.Panel>Davis is a design system for LibreTexts.</Accordion.Panel>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Trigger>How do I install it?</Accordion.Trigger>
      <Accordion.Panel>Run npm install @libretexts/davis-vue</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Variants

Three variants control the visual framing of the accordion container and its items.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
{/* Default: bordered container around all items */}
<Accordion variant="default">
  <Accordion.Item>
    <Accordion.Trigger>Default variant</Accordion.Trigger>
    <Accordion.Panel>Wrapped in a single rounded border.</Accordion.Panel>
  </Accordion.Item>
</Accordion>

{/* Flush: no outer border, only dividers between items */}
<Accordion variant="flush">
  <Accordion.Item>
    <Accordion.Trigger>Flush variant</Accordion.Trigger>
    <Accordion.Panel>Edge-to-edge with divider lines only.</Accordion.Panel>
  </Accordion.Item>
</Accordion>

{/* Bordered: each item has its own individual border */}
<Accordion variant="bordered">
  <Accordion.Item>
    <Accordion.Trigger>Bordered variant</Accordion.Trigger>
    <Accordion.Panel>Each item is independently bordered.</Accordion.Panel>
  </Accordion.Item>
</Accordion>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Accordion variant="default">...</Accordion>
<Accordion variant="flush">...</Accordion>
<Accordion variant="bordered">...</Accordion>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

**When to use each variant:**
- **default** - General-purpose FAQs and content sections with a unified container
- **flush** - Full-width layouts where the accordion should span edge-to-edge (e.g., sidebar panels)
- **bordered** - When each item needs visual separation independent of its neighbors

---

## Sizes

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Accordion size="sm">
  <Accordion.Item>
    <Accordion.Trigger>Small accordion</Accordion.Trigger>
    <Accordion.Panel>Compact padding, smaller text.</Accordion.Panel>
  </Accordion.Item>
</Accordion>

<Accordion size="md">
  <Accordion.Item>
    <Accordion.Trigger>Medium accordion</Accordion.Trigger>
    <Accordion.Panel>Default size for most use cases.</Accordion.Panel>
  </Accordion.Item>
</Accordion>

<Accordion size="lg">
  <Accordion.Item>
    <Accordion.Trigger>Large accordion</Accordion.Trigger>
    <Accordion.Panel>More generous padding, larger text.</Accordion.Panel>
  </Accordion.Item>
</Accordion>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Accordion size="sm">...</Accordion>
<Accordion size="md">...</Accordion>
<Accordion size="lg">...</Accordion>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Default Open Items

Use the `defaultOpen` prop on `Accordion.Item` to have a section expanded on initial render.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Accordion>
  <Accordion.Item defaultOpen>
    <Accordion.Trigger>This section starts open</Accordion.Trigger>
    <Accordion.Panel>Visible immediately on page load.</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>This section starts closed</Accordion.Trigger>
    <Accordion.Panel>Hidden until the user expands it.</Accordion.Panel>
  </Accordion.Item>
</Accordion>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Accordion>
  <Accordion.Item :default-open="true">
    <Accordion.Trigger>This section starts open</Accordion.Trigger>
    <Accordion.Panel>Visible immediately on page load.</Accordion.Panel>
  </Accordion.Item>
</Accordion>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

### Accordion

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'flush' \| 'bordered'` | `'default'` | Visual style of the accordion container |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls padding and font size |
| `className` | `string` | - | Additional CSS classes |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'flush' \| 'bordered'` | `'default'` | Visual style of the accordion container |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls padding and font size |
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

### Accordion.Item

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultOpen` | `boolean` | `false` | Whether this item is expanded on initial render |
| `className` | `string` | - | Additional CSS classes |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `default-open` | `boolean` | `false` | Whether this item is expanded on initial render |
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

### Accordion.Trigger

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Trigger label content |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

### Accordion.Panel

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Expanded panel content |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

The Accordion component is built on Headless UI's Disclosure primitive and meets WCAG 2.1 AA requirements:

- Each `Accordion.Trigger` renders as a `<button>` element — fully keyboard operable
- **Space** or **Enter** toggles the open/closed state of a trigger
- `aria-expanded` is set to `true` or `false` on each trigger to reflect state
- `aria-controls` links each trigger to its corresponding panel by id
- The panel is hidden from the accessibility tree when collapsed (not just visually hidden)
- Focus order follows document order — no focus trapping within the accordion

**Best practices:**
- Keep trigger labels concise and descriptive so screen reader users can navigate efficiently
- Avoid placing interactive elements (links, buttons) directly inside `Accordion.Trigger`
- If all items may be relevant at once, consider using static sections rather than an accordion
