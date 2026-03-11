---
title: Input
description: Accessible text input component with validation states and helper text
---

# Input

Text inputs allow users to enter and edit text. The Davis Input component includes labels, validation states, helper text, and icon support.

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
import { Input } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Input
      name="email"
      label="Email address"
      type="email"
      placeholder="you@example.com"
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Input } from '@libretexts/davis-vue';
</script>

<template>
  <Input
    name="email"
    label="Email address"
    type="email"
    placeholder="you@example.com"
  />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Sizes

Inputs are available in three sizes.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Input name="small" label="Small Input" size="sm" />
<Input name="medium" label="Medium Input" size="md" />
<Input name="large" label="Large Input" size="lg" />
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Input name="small" label="Small Input" size="sm" />
<Input name="medium" label="Medium Input" size="md" />
<Input name="large" label="Large Input" size="lg" />
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Required Fields

Mark inputs as required with the `required` prop, which adds an asterisk to the label.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Input
  name="username"
  label="Username"
  required
/>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Input
  name="username"
  label="Username"
  required
/>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Helper Text

Provide additional context with helper text.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Input
  name="password"
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Input
  name="password"
  label="Password"
  type="password"
  helper-text="Must be at least 8 characters"
/>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Error State

Show validation errors with the `error` and `errorMessage` props.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Input } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [email, setEmail] = useState('');
  const isInvalid = email && !email.includes('@');

  return (
    <Input
      name="email"
      label="Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={isInvalid}
      errorMessage={isInvalid ? 'Please enter a valid email address' : undefined}
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Input } from '@libretexts/davis-vue';
import { ref, computed } from 'vue';

const email = ref('');
const isInvalid = computed(() => email.value && !email.value.includes('@'));
</script>

<template>
  <Input
    name="email"
    label="Email"
    type="email"
    v-model="email"
    :error="isInvalid"
    :error-message="isInvalid ? 'Please enter a valid email address' : undefined"
  />
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## With Icons

Add left or right icons to enhance the input's purpose.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Input } from '@libretexts/davis-react';

function SearchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export default function Example() {
  return (
    <Input
      name="search"
      label="Search"
      leftIcon={<SearchIcon />}
      placeholder="Search..."
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Input } from '@libretexts/davis-vue';
</script>

<template>
  <Input
    name="search"
    label="Search"
    placeholder="Search..."
  >
    <template #left-icon>
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </template>
  </Input>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | **Required.** Input name attribute |
| `label` | `string` | - | **Required.** Input label text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `variant` | `'default' \| 'error'` | `'default'` | Visual variant |
| `error` | `boolean` | `false` | Show error state |
| `errorMessage` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below input |
| `required` | `boolean` | `false` | Mark as required (adds asterisk) |
| `leftIcon` | `ReactNode` | - | Icon to display on the left |
| `rightIcon` | `ReactNode` | - | Icon to display on the right |
| `disabled` | `boolean` | `false` | Disable the input |

Plus all standard HTML input attributes (`type`, `placeholder`, `value`, `onChange`, etc.)
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | **Required.** Input name attribute |
| `label` | `string` | - | **Required.** Input label text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `variant` | `'default' \| 'error'` | `'default'` | Visual variant |
| `error` | `boolean` | `false` | Show error state |
| `error-message` | `string` | - | Error message to display |
| `helper-text` | `string` | - | Helper text below input |
| `required` | `boolean` | `false` | Mark as required (adds asterisk) |
| `disabled` | `boolean` | `false` | Disable the input |

Plus all standard HTML input attributes.
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

The Input component is built with accessibility in mind:

- Associates labels with inputs using `htmlFor` and `id`
- Uses `aria-invalid` for error states
- Uses `aria-describedby` for helper text and error messages
- Supports `required` attribute for form validation
- Visual required indicator (asterisk) for screen reader users
- Proper color contrast for all states

**Best practices:**
- Always provide a descriptive label
- Use `helperText` to provide input formatting guidance
- Use `errorMessage` for validation feedback
- Use `required` prop for required fields
- Ensure custom icons have appropriate ARIA labels if they convey meaning
