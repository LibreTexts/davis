---
title: Alert
description: Display important messages and notifications to users
---

# Alert

Alerts display brief, important messages to attract user attention without interrupting their task.

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
import { Alert } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Alert variant="info" title="Information">
      This is an informational message.
    </Alert>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Alert } from '@libretexts/davis-vue';
</script>

<template>
  <Alert variant="info" title="Information">
    This is an informational message.
  </Alert>
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
<Alert variant="info" title="Information">Info message</Alert>
<Alert variant="success" title="Success">Success message</Alert>
<Alert variant="warning" title="Warning">Warning message</Alert>
<Alert variant="danger" title="Error">Error message</Alert>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Alert variant="info" title="Information">Info message</Alert>
<Alert variant="success" title="Success">Success message</Alert>
<Alert variant="warning" title="Warning">Warning message</Alert>
<Alert variant="danger" title="Error">Error message</Alert>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
