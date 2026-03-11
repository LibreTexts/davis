---
title: Textarea
description: Multi-line text input for longer content
---

# Textarea

Textareas allow users to enter and edit multi-line text.

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
import { Textarea } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Textarea
      name="description"
      label="Description"
      rows={4}
      placeholder="Enter a description..."
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Textarea } from '@libretexts/davis-vue';
</script>

<template>
  <Textarea
    name="description"
    label="Description"
    :rows="4"
    placeholder="Enter a description..."
  />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
