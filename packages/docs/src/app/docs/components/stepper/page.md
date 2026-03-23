---
title: Stepper
description: Multi-step progress indicator for sequential workflows
---

# Stepper

Stepper shows progress through a multi-step process, displaying completed, current, and upcoming steps.

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
import { Stepper } from '@libretexts/davis-react';

const steps = [
  { label: 'Account', description: 'Basic info' },
  { label: 'Profile', description: 'Details' },
  { label: 'Review', description: 'Confirm' },
];

export default function Example() {
  return (
    <Stepper
      steps={steps}
      currentStep={1}
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
