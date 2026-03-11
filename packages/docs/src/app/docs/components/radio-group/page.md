---
title: Radio Group
description: Allow users to select one option from a set
---

# Radio Group

Radio groups allow users to select a single option from a set of mutually exclusive choices.

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
import { RadioGroup } from '@libretexts/davis-react';

export default function Example() {
  return (
    <RadioGroup
      name="plan"
      label="Select a plan"
      options={[
        { value: 'basic', label: 'Basic' },
        { value: 'pro', label: 'Pro' },
        { value: 'enterprise', label: 'Enterprise' },
      ]}
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { RadioGroup } from '@libretexts/davis-vue';
</script>

<template>
  <RadioGroup
    name="plan"
    label="Select a plan"
    :options="[
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ]"
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
