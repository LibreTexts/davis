---
title: Badge
description: Small labels for status, counts, or categories
---

# Badge

Badges are small labels used to display status, counts, or categories.

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
import { Badge } from '@libretexts/davis-react';

export default function Example() {
  return <Badge>New</Badge>;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Badge } from '@libretexts/davis-vue';
</script>

<template>
  <Badge>New</Badge>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Variants

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
