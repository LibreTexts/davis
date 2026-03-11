---
title: Button
description: Accessible button component with multiple variants and sizes
---

# Button

Buttons trigger actions or events. The Davis Button component provides semantic variants, multiple sizes, loading states, and full keyboard accessibility.

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
import { Button } from '@libretexts/davis-react';

export default function Example() {
  return <Button>Click me</Button>;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Button } from '@libretexts/davis-vue';
</script>

<template>
  <Button>Click me</Button>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Variants

Buttons come in seven semantic variants to communicate different action types.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="warning">Warning</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="warning">Warning</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

**When to use each variant:**
- **Primary** - Main call-to-action (e.g., "Save", "Submit", "Continue")
- **Secondary** - Secondary actions (e.g., "Cancel", "Back")
- **Tertiary** - Tertiary actions, less emphasis than secondary
- **Destructive** - Irreversible destructive actions (e.g., "Delete", "Remove")
- **Warning** - Caution actions (e.g., "Archive", "Suspend")
- **Ghost** - Subtle actions, minimal visual weight
- **Outline** - Alternative style with border emphasis

---

## Sizes

Buttons are available in three sizes to match your design hierarchy.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Full Width

Make buttons span the full width of their container.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Button fullWidth>Full Width Button</Button>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Button full-width>Full Width Button</Button>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Loading State

Show a spinner while async actions are in progress. Buttons are automatically disabled when loading.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Button } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await fetch('/api/save');
    setLoading(false);
  }

  return (
    <Button loading={loading} onClick={handleClick}>
      Save Changes
    </Button>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Button } from '@libretexts/davis-vue';
import { ref } from 'vue';

const loading = ref(false);

async function handleClick() {
  loading.value = true;
  await fetch('/api/save');
  loading.value = false;
}
</script>

<template>
  <Button :loading="loading" @click="handleClick">
    Save Changes
  </Button>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## With Icons

Add icons to buttons to enhance clarity and scannability.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Button } from '@libretexts/davis-react';

function SaveIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Example() {
  return (
    <>
      <Button icon={<SaveIcon />} iconPosition="left">
        Save
      </Button>
      <Button icon={<SaveIcon />} iconPosition="right">
        Continue
      </Button>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Button } from '@libretexts/davis-vue';
</script>

<template>
  <Button icon-position="left">
    <template #icon>
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </template>
    Save
  </Button>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## As Link

Render a button as a link element while maintaining button styling.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Button as="a" href="/dashboard">
  Go to Dashboard
</Button>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Button as="a" href="/dashboard">
  Go to Dashboard
</Button>
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
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive' \| 'warning' \| 'ghost' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner and disable button |
| `disabled` | `boolean` | `false` | Disable button |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `icon` | `ReactNode` | - | Icon element to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of icon |
| `as` | `ElementType` | `'button'` | Render as different element (e.g., 'a') |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive' \| 'warning' \| 'ghost' \| 'outline'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner and disable button |
| `disabled` | `boolean` | `false` | Disable button |
| `full-width` | `boolean` | `false` | Make button full width |
| `icon-position` | `'left' \| 'right'` | `'left'` | Position of icon |
| `as` | `string` | `'button'` | Render as different element (e.g., 'a') |

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

The Button component is built with accessibility in mind:

- Uses semantic `<button>` element by default
- Properly handles disabled and loading states
- Loading state includes `aria-busy="true"`
- Disabled state includes `aria-disabled="true"` and `disabled` attribute
- Keyboard accessible (Space and Enter keys)
- Focus visible with clear focus rings

**Best practices:**
- Always provide descriptive button text
- For icon-only buttons, use `aria-label`
- Use appropriate variants to communicate action type
- Don't nest interactive elements inside buttons
