---
title: Empty State
description: Display helpful content when there's no data to show
---

# Empty State

Empty states provide context and guidance when there's no content to display.

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
import { EmptyState, Button } from '@libretexts/davis-react';

export default function Example() {
  return (
    <EmptyState
      title="No results found"
      description="Try adjusting your search or filters"
    >
      <Button>Clear Filters</Button>
    </EmptyState>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { EmptyState, Button } from '@libretexts/davis-vue';
</script>

<template>
  <EmptyState
    title="No results found"
    description="Try adjusting your search or filters"
  >
    <Button>Clear Filters</Button>
  </EmptyState>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
