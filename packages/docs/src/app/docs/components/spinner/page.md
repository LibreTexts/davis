---
title: Spinner
description: Loading indicator for asynchronous operations
---

# Spinner

Spinners indicate loading states and ongoing processes.

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
import { Spinner } from '@libretexts/davis-react';

export default function Example() {
  return <Spinner />;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Spinner } from '@libretexts/davis-vue';
</script>

<template>
  <Spinner />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Sizes

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
