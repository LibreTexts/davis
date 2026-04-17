---
title: Listbox
description: Keyboard-navigable styled dropdown for selecting from a list
---

# Listbox

Listbox is a fully styled, accessible dropdown select. Use it when you need custom option rendering — icons, badges, multi-line text — that native `<select>` doesn't support. Built on HeadlessUI with full keyboard navigation and WCAG 2.2 AA compliance.

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
{% /tab %}
{% /framework-tabs %}

---

## Basic Usage

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Listbox } from '@libretexts/davis-react';
import { useState } from 'react';

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

export default function Example() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Listbox value={value} onChange={setValue}>
      <Listbox.Label>Framework</Listbox.Label>
      <Listbox.Button placeholder="Select a framework…" />
      <Listbox.Options>
        {frameworks.map((f) => (
          <Listbox.Option key={f} value={f}>{f}</Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup lang="ts">
import {
  Listbox, ListboxLabel, ListboxButton,
  ListboxOptions, ListboxOption,
} from '@libretexts/davis-vue';
import { ref } from 'vue';

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];
const value = ref<string | null>(null);
</script>

<template>
  <Listbox v-model="value">
    <ListboxLabel>Framework</ListboxLabel>
    <ListboxButton placeholder="Select a framework…" />
    <ListboxOptions>
      <ListboxOption v-for="f in frameworks" :key="f" :value="f">
        {{ f }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Object Values

Use the `by` prop to match objects by a specific key instead of by reference.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
type Framework = { id: string; name: string; version: string };

const options: Framework[] = [
  { id: 'react', name: 'React', version: '19' },
  { id: 'vue', name: 'Vue', version: '3' },
  { id: 'angular', name: 'Angular', version: '18' },
];

const [selected, setSelected] = useState<Framework | null>(null);

<Listbox value={selected} onChange={setSelected} by="id">
  <Listbox.Label>Framework</Listbox.Label>
  <Listbox.Button
    displayValue={(f) => f ? `${f.name} v${f.version}` : ''}
    placeholder="Select a framework…"
  />
  <Listbox.Options>
    {options.map((f) => (
      <Listbox.Option key={f.id} value={f}>
        {f.name} <span className="text-gray-400 text-xs">v{f.version}</span>
      </Listbox.Option>
    ))}
  </Listbox.Options>
</Listbox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup lang="ts">
type Framework = { id: string; name: string; version: string };
const options: Framework[] = [
  { id: 'react', name: 'React', version: '19' },
  { id: 'vue', name: 'Vue', version: '3' },
];
const selected = ref<Framework | null>(null);
</script>

<template>
  <Listbox v-model="selected" by="id">
    <ListboxLabel>Framework</ListboxLabel>
    <ListboxButton
      :display-value="(f) => f ? `${f.name} v${f.version}` : ''"
      placeholder="Select a framework…"
    />
    <ListboxOptions>
      <ListboxOption v-for="f in options" :key="f.id" :value="f">
        {{ f.name }} <span class="text-gray-400 text-xs">v{{ f.version }}</span>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Multiple Selection

Add `multiple` to allow selecting more than one value. The dropdown stays open so users can toggle selections.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
const [selected, setSelected] = useState<string[]>([]);

<Listbox value={selected} onChange={setSelected} multiple>
  <Listbox.Label>Frameworks</Listbox.Label>
  <Listbox.Button
    displayValue={(v) => (v as string[]).length > 0 ? (v as string[]).join(', ') : ''}
    placeholder="Select frameworks…"
  />
  <Listbox.Options>
    {frameworks.map((f) => (
      <Listbox.Option key={f} value={f}>{f}</Listbox.Option>
    ))}
  </Listbox.Options>
</Listbox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Listbox v-model="selected" :multiple="true">
  <ListboxLabel>Frameworks</ListboxLabel>
  <ListboxButton placeholder="Select frameworks…" />
  <ListboxOptions>
    <ListboxOption v-for="f in frameworks" :key="f" :value="f">{{ f }}</ListboxOption>
  </ListboxOptions>
</Listbox>
```
{% /tab %}
{% /framework-tabs %}

---

## Disabled Options

Add `disabled` to individual options to prevent their selection.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Listbox.Options>
  <Listbox.Option value="react">React</Listbox.Option>
  <Listbox.Option value="angular" disabled>Angular (unavailable)</Listbox.Option>
  <Listbox.Option value="vue">Vue</Listbox.Option>
</Listbox.Options>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<ListboxOptions>
  <ListboxOption value="react">React</ListboxOption>
  <ListboxOption value="angular" :disabled="true">Angular (unavailable)</ListboxOption>
  <ListboxOption value="vue">Vue</ListboxOption>
</ListboxOptions>
```
{% /tab %}
{% /framework-tabs %}

---

## Sizes

The `size` prop on `Listbox.Button` controls the button height and text size.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Listbox value={value} onChange={setValue}>
  <Listbox.Label>Small</Listbox.Label>
  <Listbox.Button size="sm" placeholder="Select…" />
  <Listbox.Options>{/* ... */}</Listbox.Options>
</Listbox>

<Listbox value={value} onChange={setValue}>
  <Listbox.Label>Medium (default)</Listbox.Label>
  <Listbox.Button size="md" placeholder="Select…" />
  <Listbox.Options>{/* ... */}</Listbox.Options>
</Listbox>

<Listbox value={value} onChange={setValue}>
  <Listbox.Label>Large</Listbox.Label>
  <Listbox.Button size="lg" placeholder="Select…" />
  <Listbox.Options>{/* ... */}</Listbox.Options>
</Listbox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<ListboxButton size="sm" placeholder="Select…" />
<ListboxButton size="md" placeholder="Select…" />
<ListboxButton size="lg" placeholder="Select…" />
```
{% /tab %}
{% /framework-tabs %}

---

## With Label

`Listbox.Label` links a visible label to the listbox for screen readers.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Listbox value={value} onChange={setValue}>
  <Listbox.Label>Preferred framework</Listbox.Label>
  <Listbox.Button placeholder="Select…" />
  <Listbox.Options>{/* ... */}</Listbox.Options>
</Listbox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Listbox v-model="value">
  <ListboxLabel>Preferred framework</ListboxLabel>
  <ListboxButton placeholder="Select…" />
  <ListboxOptions>{/* ... */}</ListboxOptions>
</Listbox>
```
{% /tab %}
{% /framework-tabs %}

---

## Props

### Listbox

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `T \| null` | required | Currently selected value |
| `onChange` | `(value: T) => void` | required | Called when selection changes |
| `disabled` | `boolean` | `false` | Disables the entire listbox |
| `multiple` | `boolean` | `false` | Allows selecting multiple values (value becomes `T[]`) |
| `name` | `string` | — | HTML form field name for native form submission |
| `by` | `keyof T \| (a: T, b: T) => boolean` | — | Key or function to compare option values |
| `className` | `string` | — | Additional CSS classes on the wrapper |

### Listbox.Label

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### Listbox.Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `displayValue` | `(value: T \| null) => string` | `String(v)` | Converts selected value to display string |
| `placeholder` | `string` | `"Select…"` | Text shown when no value is selected |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls button height and text size |
| `disabled` | `boolean` | `false` | Disables the button |
| `aria-label` | `string` | — | Accessible label when no visible `Listbox.Label` is used |
| `className` | `string` | — | Additional CSS classes |

### Listbox.Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### Listbox.Option

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `T` | required | The option value, passed to `onChange` on selection |
| `disabled` | `boolean` | `false` | Prevents selection and skips in keyboard navigation |
| `className` | `string` | — | Additional CSS classes |

---

## Accessibility

Listbox implements the [ARIA listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/). HeadlessUI manages all ARIA attributes automatically.

**Keyboard navigation:**

| Key | Action |
|-----|--------|
| `↓` / `↑` | Navigate through options |
| `Enter` / `Space` | Select the focused option |
| `Escape` | Close the dropdown |
| `Tab` | Move focus out of the listbox |
| `Home` / `End` | Jump to first / last option |

**Best practices:**
- Always provide either `Listbox.Label` or an `aria-label` on `Listbox.Button` so screen readers can identify the control.
- When using `multiple`, consider displaying a count or list of selected values in the button so users can see their selections without opening the dropdown.

---

## When to use

- **Select** — Use for 5–15 static options in a simple form. Native browser styling, maximum compatibility, no JavaScript required.
- **Listbox** — Use when you need custom option rendering (icons, badges, multi-line text, custom layout), or when the native `<select>` appearance doesn't match your design system. Functionally identical to `<select>` from an accessibility standpoint.
- **Combobox** — Use when the list has many options (20+) and filtering by typing would help users find what they need faster.
