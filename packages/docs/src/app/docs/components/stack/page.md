---
title: Stack
description: Vertical or horizontal stack layout with consistent spacing
---

# Stack

Stack arranges children in a single direction (vertical or horizontal) with consistent spacing between them.

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
import { Stack } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Stack gap="md">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## When to use

- **Stack** — Use when you need a single-axis layout (vertical column or horizontal row) with consistent spacing. Ideal for forms, card content, and lists of items.
- **Grid** — Use when you need a two-dimensional layout with rows and columns.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
