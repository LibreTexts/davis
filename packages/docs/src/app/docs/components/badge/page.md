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
  return <Badge label="New" />;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Badge } from '@libretexts/davis-vue';
</script>

<template>
  <Badge label="New" />
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
<Badge variant="primary" label="Primary" />
<Badge variant="success" label="Success" />
<Badge variant="warning" label="Warning" />
<Badge variant="danger" label="Danger" />
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Badge variant="primary" label="Primary" />
<Badge variant="success" label="Success" />
<Badge variant="warning" label="Warning" />
<Badge variant="danger" label="Danger" />
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

---

## When to use

- **Badge** — Use to convey a status, count, or categorical attribute alongside an element (e.g., "Active", "3 pending", "Beta"). Badges are non-interactive labels.
- **Tag / removable Badge** — Use the removable Badge variant when users need to add or remove labels (e.g., filter chips, tag selectors).

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
