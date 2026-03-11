---
title: Switch
description: Toggle control for binary on/off settings
---

# Switch

Switches are toggle controls for binary on/off settings.

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
import { Switch } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      label="Enable notifications"
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Switch } from '@libretexts/davis-vue';
import { ref } from 'vue';

const enabled = ref(false);
</script>

<template>
  <Switch
    v-model="enabled"
    label="Enable notifications"
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
