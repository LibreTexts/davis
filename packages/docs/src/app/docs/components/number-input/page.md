---
title: Number Input
description: Numeric input with increment and decrement stepper buttons
---

# Number Input

Number Input provides a numeric field with increment and decrement buttons for precise value entry, ideal for quantities, counts, and bounded numeric values.

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
import { NumberInput } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [value, setValue] = useState(1);

  return (
    <NumberInput
      label="Quantity"
      value={value}
      onChange={setValue}
      min={1}
      max={99}
    />
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

- **Number Input** — Use when users need to increment or decrement a bounded numeric value (quantities, seats, page count). The stepper buttons make it easy to adjust by 1.
- **Input (type="number")** — Use for unbounded or large numeric values where steppers would be impractical.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
