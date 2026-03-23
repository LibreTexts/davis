---
title: Progress
description: Progress bar for tracking completion of a task
---

# Progress

Progress displays a determinate progress bar indicating how far along a task or process is.

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
import { Progress } from '@libretexts/davis-react';

export default function Example() {
  return <Progress value={65} label="Upload progress" />;
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## When to use

- **Progress** — Use when you can quantify how much of a task is complete (file uploads, multi-step processes, profile completion).
- **Spinner** — Use for indeterminate loading where the duration or progress cannot be quantified.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
