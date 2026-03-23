---
title: Menu
description: Dropdown menus for navigation and actions
---

# Menu

Menus display a list of choices on temporary surfaces triggered by a button.

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
import { Menu, IconButton } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Menu>
      <Menu.Button as={IconButton} aria-label="Options">
        ⋮
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem, IconButton } from '@libretexts/davis-vue';
</script>

<template>
  <Menu>
    <MenuButton as="IconButton" aria-label="Options">
      ⋮
    </MenuButton>
    <MenuItems>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Delete</MenuItem>
    </MenuItems>
  </Menu>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

---

## When to use

- **Menu** — Use for a list of actions triggered from a button (edit, delete, export). Menu items are actions, not data values. Selecting an item triggers a command.
- **Select** — Use when the user is choosing a data value from a list of options (country, status, category). The selected value is submitted as part of a form.

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
