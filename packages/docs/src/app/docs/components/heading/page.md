---
title: Heading
description: Page and section headings with semantic levels and visual scale
---

# Heading

Heading renders semantic heading elements (h1–h6) with Davis typography tokens, ensuring consistent visual hierarchy.

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
import { Heading } from '@libretexts/davis-react';

export default function Example() {
  return (
    <>
      <Heading level={1}>Page Title</Heading>
      <Heading level={2}>Section Heading</Heading>
      <Heading level={3}>Subsection</Heading>
    </>
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

- **Heading** — Use for page titles, section headers, and any content that establishes hierarchical structure. Always use levels sequentially (don't skip from h1 to h3).
- **Text** — Use for body copy and non-heading content that doesn't need hierarchical semantics.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
