---
title: Drawer
description: Side-panel overlay for details, filters, and settings
---

# Drawer

Drawer is a side panel overlay that slides in from the left or right edge of the screen. Use it for detail views, filter panels, and settings that don't require blocking the entire page.

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
import { Drawer, Button } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Close />
        </Drawer.Header>
        <Drawer.Body>
          <p>Drawer content goes here.</p>
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controls whether the drawer is open |
| `onClose` | `(value: boolean) => void` | — | Called when the drawer should close |
| `side` | `"left" \| "right"` | `"right"` | Which edge the drawer slides from |
| `size` | `"sm" \| "md" \| "lg" \| "full"` | `"md"` | Width of the drawer panel |
| `className` | `string` | — | Additional CSS classes |

## When to use

- **Drawer** — Use for contextual detail views, filter panels, and settings that users need to reference while keeping the underlying page visible. The user can dismiss it without completing an action.
- **Dialog** — Use for focused interactions that require a decision before returning to the page (confirmations, multi-field forms that replace current state). Dialog blocks the page more assertively.

---

{% callout type="info" title="Accessibility" %}
Drawer uses Headless UI's Dialog primitive for accessibility. Focus is trapped inside the drawer when open, and pressing `Escape` closes it. Focus returns to the trigger element on close.
{% /callout %}
