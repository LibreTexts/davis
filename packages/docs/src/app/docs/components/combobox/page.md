---
title: Combobox
description: Searchable select with type-ahead filtering
---

# Combobox

Combobox combines a text input with a dropdown list, letting users type to filter options. Built on HeadlessUI with full keyboard navigation and WCAG 2.2 AA compliance.

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
import { Combobox } from '@libretexts/davis-react';
import { useState } from 'react';

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

export default function Example() {
  const [value, setValue] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const filtered = query === ''
    ? frameworks
    : frameworks.filter(f => f.toLowerCase().includes(query.toLowerCase()));

  return (
    <Combobox value={value} onChange={setValue}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Input
        placeholder="Search frameworks…"
        displayValue={(v) => v ?? ''}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Combobox.Options>
        {filtered.length === 0 ? (
          <Combobox.Empty />
        ) : (
          filtered.map((f) => (
            <Combobox.Option key={f} value={f}>{f}</Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Combobox>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup lang="ts">
import {
  Combobox, ComboboxLabel, ComboboxInputField,
  ComboboxOptionsList, ComboboxOptionItem, ComboboxEmpty,
} from '@libretexts/davis-vue';
import { ref, computed } from 'vue';

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];
const value = ref<string | null>(null);
const query = ref('');

const filtered = computed(() =>
  query.value === ''
    ? frameworks
    : frameworks.filter(f => f.toLowerCase().includes(query.value.toLowerCase()))
);
</script>

<template>
  <Combobox v-model="value">
    <ComboboxLabel>Framework</ComboboxLabel>
    <ComboboxInputField
      placeholder="Search frameworks…"
      :display-value="(v) => v ?? ''"
      @change="query = ($event.target as HTMLInputElement).value"
    />
    <ComboboxOptionsList>
      <ComboboxEmpty v-if="filtered.length === 0" />
      <ComboboxOptionItem v-for="f in filtered" :key="f" :value="f">
        {{ f }}
      </ComboboxOptionItem>
    </ComboboxOptionsList>
  </Combobox>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Object Values

Use the `by` prop to compare objects by a specific key instead of by reference.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
type Framework = { id: string; name: string };

const options: Framework[] = [
  { id: 'react', name: 'React' },
  { id: 'vue', name: 'Vue' },
  { id: 'angular', name: 'Angular' },
];

const [selected, setSelected] = useState<Framework | null>(null);
const [query, setQuery] = useState('');

const filtered = query === ''
  ? options
  : options.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));

<Combobox value={selected} onChange={setSelected} by="id">
  <Combobox.Label>Framework</Combobox.Label>
  <Combobox.Input
    displayValue={(f) => f?.name ?? ''}
    onChange={(e) => setQuery(e.target.value)}
  />
  <Combobox.Options>
    {filtered.map((f) => (
      <Combobox.Option key={f.id} value={f}>{f.name}</Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup lang="ts">
type Framework = { id: string; name: string };
const options: Framework[] = [
  { id: 'react', name: 'React' },
  { id: 'vue', name: 'Vue' },
];
const selected = ref<Framework | null>(null);
const query = ref('');
const filtered = computed(() =>
  query.value === '' ? options
    : options.filter(f => f.name.toLowerCase().includes(query.value.toLowerCase()))
);
</script>

<template>
  <Combobox v-model="selected" by="id">
    <ComboboxLabel>Framework</ComboboxLabel>
    <ComboboxInputField
      :display-value="(f) => f?.name ?? ''"
      @change="query = ($event.target as HTMLInputElement).value"
    />
    <ComboboxOptionsList>
      <ComboboxOptionItem v-for="f in filtered" :key="f.id" :value="f">
        {{ f.name }}
      </ComboboxOptionItem>
    </ComboboxOptionsList>
  </Combobox>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Multiple Selection

Add `multiple` to allow selecting more than one value. `value` becomes an array.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
const [selected, setSelected] = useState<string[]>([]);

<Combobox value={selected} onChange={setSelected} multiple>
  <Combobox.Label>Frameworks</Combobox.Label>
  <Combobox.Input
    displayValue={(v) => (v as string[]).join(', ')}
    onChange={(e) => setQuery(e.target.value)}
  />
  <Combobox.Options>
    {filtered.map((f) => (
      <Combobox.Option key={f} value={f}>{f}</Combobox.Option>
    ))}
  </Combobox.Options>
</Combobox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Combobox v-model="selected" :multiple="true">
  <!-- ... -->
</Combobox>
```
{% /tab %}
{% /framework-tabs %}

---

## Disabled Options

Add `disabled` to individual options to prevent selection and skip them in keyboard navigation.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Combobox.Options>
  <Combobox.Option value="react">React</Combobox.Option>
  <Combobox.Option value="angular" disabled>Angular (deprecated)</Combobox.Option>
  <Combobox.Option value="vue">Vue</Combobox.Option>
</Combobox.Options>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<ComboboxOptionsList>
  <ComboboxOptionItem value="react">React</ComboboxOptionItem>
  <ComboboxOptionItem value="angular" :disabled="true">Angular (deprecated)</ComboboxOptionItem>
  <ComboboxOptionItem value="vue">Vue</ComboboxOptionItem>
</ComboboxOptionsList>
```
{% /tab %}
{% /framework-tabs %}

---

## Sizes

The `size` prop on `Combobox.Input` controls the input height and text size.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Combobox value={value} onChange={setValue}>
  <Combobox.Label>Small</Combobox.Label>
  <Combobox.Input size="sm" displayValue={(v) => v ?? ''} onChange={handleChange} />
  <Combobox.Options>{/* ... */}</Combobox.Options>
</Combobox>

<Combobox value={value} onChange={setValue}>
  <Combobox.Label>Medium (default)</Combobox.Label>
  <Combobox.Input size="md" displayValue={(v) => v ?? ''} onChange={handleChange} />
  <Combobox.Options>{/* ... */}</Combobox.Options>
</Combobox>

<Combobox value={value} onChange={setValue}>
  <Combobox.Label>Large</Combobox.Label>
  <Combobox.Input size="lg" displayValue={(v) => v ?? ''} onChange={handleChange} />
  <Combobox.Options>{/* ... */}</Combobox.Options>
</Combobox>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<ComboboxInputField size="sm" />
<ComboboxInputField size="md" />
<ComboboxInputField size="lg" />
```
{% /tab %}
{% /framework-tabs %}

---

## No Results

Use `Combobox.Empty` to display a message when no options match the current query.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Combobox.Options>
  {filtered.length === 0 ? (
    <Combobox.Empty>No frameworks found.</Combobox.Empty>
  ) : (
    filtered.map((f) => <Combobox.Option key={f} value={f}>{f}</Combobox.Option>)
  )}
</Combobox.Options>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<ComboboxOptionsList>
  <ComboboxEmpty v-if="filtered.length === 0">No frameworks found.</ComboboxEmpty>
  <ComboboxOptionItem v-for="f in filtered" :key="f" :value="f">{{ f }}</ComboboxOptionItem>
</ComboboxOptionsList>
```
{% /tab %}
{% /framework-tabs %}

---

## Props

### Combobox

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `T \| null` | required | Currently selected value |
| `onChange` | `(value: T \| null) => void` | required | Called when selection changes |
| `disabled` | `boolean` | `false` | Disables the entire combobox |
| `multiple` | `boolean` | `false` | Allows selecting multiple values (value becomes `T[]`) |
| `nullable` | `boolean` | `false` | Allows clearing the selection to `null` |
| `name` | `string` | — | HTML form field name for native form submission |
| `by` | `keyof T \| (a: T, b: T) => boolean` | — | Key or function to compare option values |
| `onClose` | `() => void` | — | Called when the dropdown closes |
| `className` | `string` | — | Additional CSS classes on the wrapper |

### Combobox.Label

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### Combobox.Input

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `displayValue` | `(value: T \| null) => string` | `String(v)` | Converts selected value to display string |
| `onChange` | `(e: ChangeEvent) => void` | — | Handle text input changes (use for filtering) |
| `placeholder` | `string` | — | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Controls input height and text size |
| `aria-label` | `string` | — | Accessible label when no visible `Combobox.Label` is used |
| `className` | `string` | — | Additional CSS classes |

### Combobox.Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional CSS classes |

### Combobox.Option

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `T` | required | The option value, passed to `onChange` on selection |
| `disabled` | `boolean` | `false` | Prevents selection and skips in keyboard navigation |
| `className` | `string` | — | Additional CSS classes |

### Combobox.Empty

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `"No results found."` | Message to display |
| `className` | `string` | — | Additional CSS classes |

---

## Accessibility

Combobox implements the [ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/). HeadlessUI manages all ARIA attributes automatically.

**Keyboard navigation:**

| Key | Action |
|-----|--------|
| `↓` / `↑` | Navigate through options |
| `Enter` | Select the focused option |
| `Escape` | Close the dropdown |
| `Tab` | Move focus out of the combobox |

**Best practices:**
- Always provide either `Combobox.Label` or an `aria-label` on `Combobox.Input` so screen readers can identify the field.
- Reset the query state in `onClose` so the full list is shown on the next open: `<Combobox onClose={() => setQuery('')}>`.
- Avoid filtering on every keystroke for large remote datasets — debounce the `onChange` handler.

---

## When to use

- **Combobox** — Use when the list has many options (20+) or when users benefit from typing to filter. Ideal for country selectors, user lookup, and tag assignment.
- **Listbox** — Use when you need custom option rendering (icons, badges) but don't need filtering.
- **Select** — Use for short, static lists (5–15 items) where native browser styling is acceptable.
