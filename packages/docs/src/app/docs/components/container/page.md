---
title: Container
description: Centered content wrapper with a max-width constraint
---

# Container

Container centers content horizontally and constrains its maximum width, maintaining comfortable reading line lengths and consistent page margins.

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
import { Container } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Container>
      <p>This content is centered with a max-width constraint.</p>
    </Container>
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

- **Container** — Use to wrap page-level content and constrain its width for readability. Commonly wraps the main content area of a page.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
