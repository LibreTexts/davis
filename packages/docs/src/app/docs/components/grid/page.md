---
title: Grid
description: Responsive CSS grid layout with column and gap control
---

# Grid

Grid provides a responsive CSS grid layout with configurable column counts and gap spacing.

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
import { Grid } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Grid cols={3} gap="md">
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </Grid>
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

- **Grid** — Use for two-dimensional layouts with multiple columns. Ideal for card grids, dashboard layouts, and form layouts with side-by-side fields.
- **Stack** — Use for single-axis layouts where items are arranged in a row or column.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
