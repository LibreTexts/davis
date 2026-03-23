---
title: Skeleton
description: Loading placeholder that mimics the shape of content
---

# Skeleton

Skeleton renders an animated loading placeholder that mimics the shape of the content it represents, reducing perceived load time.

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
import { Skeleton, Stack } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Stack gap="sm">
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="rectangular" className="h-32" />
    </Stack>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## When to use

- **Skeleton** — Use while content is loading to prevent layout shifts and reduce perceived wait time. Match the skeleton shape to the content that will replace it.
- **Spinner** — Use for indeterminate loading states where the content shape is unknown (e.g., submitting a form).

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
