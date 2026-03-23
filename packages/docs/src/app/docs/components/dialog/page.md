---
title: Dialog
description: Modal dialogs for important interactions
---

# Dialog

Dialogs display content that requires user interaction in a focused overlay.

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
import { Dialog, Button } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>
          <Dialog.Title>Dialog Title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <p>Dialog content goes here.</p>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Dialog, DialogHeader, DialogTitle, DialogBody, DialogFooter, Button } from '@libretexts/davis-vue';
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open Dialog</Button>
  <Dialog :open="open" @close="open = false">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <DialogBody>
      <p>Dialog content goes here.</p>
    </DialogBody>
    <DialogFooter>
      <Button @click="open = false">Close</Button>
    </DialogFooter>
  </Dialog>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

---

## When to use

- **Dialog** — Use for interactions that require the user's full attention before returning to the page: confirmation prompts, data entry forms that replace existing state, or critical warnings. Dialog blocks the page with a backdrop.
- **Drawer** — Use for contextual detail panels, filter sidebars, and settings that the user may want to reference while keeping the underlying page partially visible. Drawer is less disruptive than Dialog.

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
