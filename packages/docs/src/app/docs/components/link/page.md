---
title: Link
description: Accessible, styled hyperlinks
---

# Link

Links allow users to navigate to different pages or sections.

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
import { Link } from '@libretexts/davis-react';

export default function Example() {
  return <Link href="/docs">View Documentation</Link>;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Link } from '@libretexts/davis-vue';
</script>

<template>
  <Link href="/docs">View Documentation</Link>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
