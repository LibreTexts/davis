---
title: Notification
description: Toast notifications for feedback and alerts
---

# Notification

Notifications provide brief, non-intrusive feedback about operations and events.

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
import { Notification, Button } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Notification</Button>
      <Notification
        show={show}
        onClose={() => setShow(false)}
        title="Success"
        message="Your changes have been saved."
      />
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Notification, Button } from '@libretexts/davis-vue';
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <Button @click="show = true">Show Notification</Button>
  <Notification
    :show="show"
    @close="show = false"
    title="Success"
    message="Your changes have been saved."
  />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

---

## When to use

- **Notification (Toast)** — Use for brief, ephemeral feedback in response to a user action (file saved, item created, error on submit). It appears as a floating toast and auto-dismisses after a few seconds.
- **Alert** — Use for persistent, inline feedback that must remain visible until the condition is resolved (form validation errors, page-level warnings).

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
