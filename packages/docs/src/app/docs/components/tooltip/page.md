---
title: Tooltip
description: Contextual information on hover or focus
---

# Tooltip

Tooltips display additional information when users hover over or focus on an element.

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
import { Tooltip, Button } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Tooltip content="This is a helpful tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Tooltip, Button } from '@libretexts/davis-vue';
</script>

<template>
  <Tooltip content="This is a helpful tooltip">
    <Button>Hover me</Button>
  </Tooltip>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

---

## When to use

- **Tooltip** — Use for brief, text-only supplementary information that appears on hover or focus. Must not contain interactive elements (links, buttons). Ideal for icon button labels and truncated text.
- **Popover** — Use when the floating content needs to be interactive (forms, action lists, date pickers) or requires click-to-open behavior. Popover traps focus and stays open until explicitly dismissed.

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
