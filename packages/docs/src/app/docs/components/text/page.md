---
title: Text
description: Semantic body text with size, weight, color, and alignment variants
---

# Text

Text renders body copy with consistent typography tokens, supporting size, weight, color, and alignment variants.

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
import { Text } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Text size="base" color="default">
      The quick brown fox jumps over the lazy dog.
    </Text>
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

- **Text** — Use for body copy, descriptions, captions, and any paragraph-level content. Provides consistent sizing and colour tokens.
- **Heading** — Use for page titles, section headings, and hierarchical content structure (h1–h6).

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
