---
title: Tabs
description: Tabbed navigation for switching between related content panels
---

# Tabs

The Tabs component lets users switch between related views without leaving the page. It supports two visual variants, three sizes, controlled and uncontrolled modes, and disabled tabs — all built on Headless UI's TabGroup with full keyboard navigation.

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
import { Tabs } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Overview</Tabs.Tab>
        <Tabs.Tab>Features</Tabs.Tab>
        <Tabs.Tab>Pricing</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Overview content</Tabs.Panel>
        <Tabs.Panel>Features content</Tabs.Panel>
        <Tabs.Panel>Pricing content</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Tabs } from '@libretexts/davis-vue';
</script>

<template>
  <Tabs>
    <Tabs.List>
      <Tabs.Tab>Overview</Tabs.Tab>
      <Tabs.Tab>Features</Tabs.Tab>
      <Tabs.Tab>Pricing</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>Overview content</Tabs.Panel>
      <Tabs.Panel>Features content</Tabs.Panel>
      <Tabs.Panel>Pricing content</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Variants

Two variants control how the active tab is indicated.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
{/* Line: underline indicator on the active tab (default) */}
<Tabs variant="line">
  <Tabs.List>
    <Tabs.Tab>Overview</Tabs.Tab>
    <Tabs.Tab>Features</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Overview content</Tabs.Panel>
    <Tabs.Panel>Features content</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

{/* Pills: pill-shaped background on the active tab */}
<Tabs variant="pills">
  <Tabs.List>
    <Tabs.Tab>Overview</Tabs.Tab>
    <Tabs.Tab>Features</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Overview content</Tabs.Panel>
    <Tabs.Panel>Features content</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Tabs variant="line">...</Tabs>
<Tabs variant="pills">...</Tabs>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Pills Color

When using the `pills` variant, the `color` prop controls the active tab's color scheme.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Tabs variant="pills" color="white">
  <Tabs.List>
    <Tabs.Tab>White pill (default)</Tabs.Tab>
    <Tabs.Tab>Another tab</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>White pill content</Tabs.Panel>
    <Tabs.Panel>Another panel</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

<Tabs variant="pills" color="primary">
  <Tabs.List>
    <Tabs.Tab>Primary pill</Tabs.Tab>
    <Tabs.Tab>Another tab</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Primary pill content</Tabs.Panel>
    <Tabs.Panel>Another panel</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Tabs variant="pills" color="white">...</Tabs>
<Tabs variant="pills" color="primary">...</Tabs>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

The `color` prop has no effect when `variant="line"`.

---

## Sizes

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Tabs size="sm">
  <Tabs.List>
    <Tabs.Tab>Small</Tabs.Tab>
    <Tabs.Tab>Tabs</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Small content</Tabs.Panel>
    <Tabs.Panel>More content</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

<Tabs size="md">...</Tabs>

<Tabs size="lg">...</Tabs>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Tabs size="sm">...</Tabs>
<Tabs size="md">...</Tabs>
<Tabs size="lg">...</Tabs>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Disabled Tabs

Add the `disabled` prop to individual `Tabs.Tab` elements to prevent selection.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Tabs variant="line" size="md">
  <Tabs.List>
    <Tabs.Tab>Overview</Tabs.Tab>
    <Tabs.Tab>Features</Tabs.Tab>
    <Tabs.Tab disabled>Disabled</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Overview content</Tabs.Panel>
    <Tabs.Panel>Features content</Tabs.Panel>
    <Tabs.Panel>Disabled content</Tabs.Panel>
  </Tabs.Panels>
</Tabs>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Tabs>
  <Tabs.List>
    <Tabs.Tab>Overview</Tabs.Tab>
    <Tabs.Tab :disabled="true">Disabled</Tabs.Tab>
  </Tabs.List>
  ...
</Tabs>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Controlled Usage

Control the selected tab externally using `selectedIndex` and `onChange`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Tabs } from '@libretexts/davis-react';
import { useState } from 'react';

export default function ControlledTabs() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <p>Active tab index: {selected}</p>
      <Tabs selectedIndex={selected} onChange={setSelected}>
        <Tabs.List>
          <Tabs.Tab>Overview</Tabs.Tab>
          <Tabs.Tab>Features</Tabs.Tab>
          <Tabs.Tab>Pricing</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Overview content</Tabs.Panel>
          <Tabs.Panel>Features content</Tabs.Panel>
          <Tabs.Panel>Pricing content</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Tabs } from '@libretexts/davis-vue';
import { ref } from 'vue';

const selected = ref(0);
</script>

<template>
  <Tabs :selected-index="selected" @change="selected = $event">
    <Tabs.List>
      <Tabs.Tab>Overview</Tabs.Tab>
      <Tabs.Tab>Features</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>Overview content</Tabs.Panel>
      <Tabs.Panel>Features content</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

Use `defaultIndex` instead of `selectedIndex` if you only need to set the initial tab without managing state.

---

## Props

### Tabs

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'line' \| 'pills'` | `'line'` | Visual style of the tab indicators |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls tab padding and font size |
| `color` | `'white' \| 'primary'` | `'white'` | Active pill color (pills variant only) |
| `defaultIndex` | `number` | `0` | Initially selected tab (uncontrolled) |
| `selectedIndex` | `number` | - | Currently selected tab (controlled) |
| `onChange` | `(index: number) => void` | - | Called when the selected tab changes |
| `className` | `string` | - | Additional CSS classes |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'line' \| 'pills'` | `'line'` | Visual style of the tab indicators |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls tab padding and font size |
| `color` | `'white' \| 'primary'` | `'white'` | Active pill color (pills variant only) |
| `default-index` | `number` | `0` | Initially selected tab (uncontrolled) |
| `selected-index` | `number` | - | Currently selected tab (controlled) |
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

### Tabs.Tab

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Prevents the tab from being selected |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Tab label content |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Prevents the tab from being selected |
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

### Tabs.List, Tabs.Panels, Tabs.Panel

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Child content |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

The Tabs component is built on Headless UI's TabGroup and implements the [ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/):

- `Tabs.List` renders with `role="tablist"`
- Each `Tabs.Tab` renders with `role="tab"`, `aria-selected`, and `aria-controls` pointing to its panel
- Each `Tabs.Panel` renders with `role="tabpanel"` and `aria-labelledby` pointing to its tab
- **Left/Right arrow keys** move focus between tabs
- **Home** moves focus to the first tab; **End** moves to the last
- **Space** or **Enter** selects the focused tab
- Disabled tabs are skipped during keyboard navigation and receive `aria-disabled="true"`

**Best practices:**
- Keep tab labels short — one or two words — so the tab list is easy to scan
- Each tab panel should contain meaningfully distinct content; avoid using tabs for sequential steps (use a stepper instead)
- Do not use tabs inside tabs; nested tab groups create confusing navigation hierarchies
