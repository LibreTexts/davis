---
title: Form Section
description: Grouped fieldset for organizing related form controls
---

# Form Section

Form Section groups related form fields under a labelled fieldset, improving scannability and organization of long forms.

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
import { FormSection, Input, Stack } from '@libretexts/davis-react';

export default function Example() {
  return (
    <FormSection title="Personal Information" description="Your basic contact details.">
      <Stack gap="md">
        <Input label="First name" />
        <Input label="Last name" />
        <Input label="Email" type="email" />
      </Stack>
    </FormSection>
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
