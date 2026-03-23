---
title: Popover
description: Click-triggered floating panel for rich interactive content
---

# Popover

Popover is a click-triggered floating panel that supports interactive content such as forms, action lists, and date pickers. Unlike Tooltip, Popover can contain focusable elements.

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
import { Popover, Button } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Popover>
      <Popover.Button>
        <Button variant="outline">Open Popover</Button>
      </Popover.Button>
      <Popover.Panel>
        <p className="text-sm text-gray-700">Popover content goes here.</p>
      </Popover.Panel>
    </Popover>
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

### Popover.Panel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Where the panel appears relative to the trigger |
| `className` | `string` | — | Additional CSS classes |

## When to use

- **Popover** — Use for click-triggered overlays that contain interactive content (forms, lists, date pickers). Popover traps focus and supports keyboard navigation.
- **Tooltip** — Use for hover-triggered text-only hints that supplement UI labels. Tooltip cannot contain interactive elements.
- **Dialog** — Use when the content requires full user attention and blocks the rest of the page.

---

{% callout type="info" title="Accessibility" %}
Popover uses Headless UI's Popover primitive. Pressing `Escape` closes the panel and returns focus to the trigger. Clicking outside also closes the panel.
{% /callout %}
