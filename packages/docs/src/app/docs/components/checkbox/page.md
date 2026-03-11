---
title: Checkbox
description: Allow users to select one or more options
---

# Checkbox

Checkboxes allow users to select one or more options from a set.

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
import { Checkbox } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Checkbox name="terms" label="I agree to the terms and conditions" />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Checkbox } from '@libretexts/davis-vue';
</script>

<template>
  <Checkbox name="terms" label="I agree to the terms and conditions" />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
