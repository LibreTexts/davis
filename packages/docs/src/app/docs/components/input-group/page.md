---
title: Input Group
description: Input with prefix or suffix addons for units, icons, or labels
---

# Input Group

Input Group attaches prefix or suffix addons to a form input, used for currency symbols, units of measurement, URL prefixes, or icon buttons.

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
import { InputGroup, Input } from '@libretexts/davis-react';

export default function Example() {
  return (
    <InputGroup prefix="$" suffix=".00">
      <Input placeholder="0" />
    </InputGroup>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
