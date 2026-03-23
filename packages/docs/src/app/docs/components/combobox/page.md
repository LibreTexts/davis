---
title: Combobox
description: Searchable select with type-ahead filtering
---

# Combobox

Combobox combines a text input with a dropdown list, allowing users to type to filter options. Use it when the option list is large or when users benefit from searching.

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
import { Combobox } from '@libretexts/davis-react';
import { useState } from 'react';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export default function Example() {
  const [selected, setSelected] = useState(null);

  return (
    <Combobox
      label="Framework"
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Search frameworks..."
    />
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## When to use

- **Combobox** — Use when the dropdown list has many options (10+) or when users benefit from filtering by typing. Ideal for country selectors, user lookup, and tag assignment.
- **Select** — Use for short, static lists of options where filtering isn't needed.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete API reference, examples, and accessibility guidelines.
{% /callout %}
