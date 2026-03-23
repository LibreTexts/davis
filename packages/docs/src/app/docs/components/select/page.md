---
title: Select
description: Dropdown for selecting from a list of options
---

# Select

Select components allow users to choose one option from a dropdown list.

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
import { Select } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Select
      name="country"
      label="Country"
      options={[
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
      ]}
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Select } from '@libretexts/davis-vue';
</script>

<template>
  <Select
    name="country"
    label="Country"
    :options="[
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
    ]"
  />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

---

## When to use

- **Select** — Use for closed lists of 4–15 options where all options are known and filtering is not needed. The native `<select>` element is accessible and familiar.
- **Combobox** — Use when the list has many options (15+), when users benefit from type-ahead filtering, or when options can be dynamically fetched (e.g., country search, user lookup).

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
