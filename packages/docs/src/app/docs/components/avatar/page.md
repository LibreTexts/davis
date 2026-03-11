---
title: Avatar
description: Display user profile images or initials
---

# Avatar

Avatars are used to represent users with an image or their initials.

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
import { Avatar } from '@libretexts/davis-react';

export default function Example() {
  return <Avatar name="John Doe" />;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Avatar } from '@libretexts/davis-vue';
</script>

<template>
  <Avatar name="John Doe" />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## With Image

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Avatar name="John Doe" src="/images/avatar.jpg" />
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Avatar name="John Doe" src="/images/avatar.jpg" />
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
