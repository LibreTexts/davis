---
title: Visually Hidden
description: Hides content visually while keeping it accessible to screen readers
---

# Visually Hidden

The Visually Hidden component renders content that is invisible to sighted users but fully present in the accessibility tree. Use it to provide additional context for assistive technology users without affecting the visual design.

Common use cases include labeling icon-only buttons, supplementing terse visible text with fuller descriptions, and building focusable skip-link patterns.

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

Wrap any text or element you want screen readers to hear but sighted users not to see.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { VisuallyHidden } from '@libretexts/davis-react';

// Add an accessible label to an icon-only button
export default function CloseButton() {
  return (
    <button>
      <CloseIcon aria-hidden="true" />
      <VisuallyHidden>Close dialog</VisuallyHidden>
    </button>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { VisuallyHidden } from '@libretexts/davis-vue';
</script>

<template>
  <button>
    <CloseIcon aria-hidden="true" />
    <VisuallyHidden>Close dialog</VisuallyHidden>
  </button>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Custom Element

By default `VisuallyHidden` renders a `<span>`. Use the `as` prop to render any HTML element or React component.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
{/* Render as a heading for screen readers without affecting visual layout */}
<VisuallyHidden as="h2">Section heading for screen readers only</VisuallyHidden>

{/* Annotate a table column that is visually obvious but needs a label for AT */}
<th>
  <VisuallyHidden>Actions</VisuallyHidden>
</th>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<VisuallyHidden as="h2">Section heading for screen readers only</VisuallyHidden>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Focusable Variant

Set `focusable` to `true` to make the element visible when it receives keyboard focus. This enables skip-link-style patterns directly with `VisuallyHidden`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<VisuallyHidden as="a" href="#main-content" focusable>
  Skip to main content
</VisuallyHidden>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<VisuallyHidden as="a" href="#main-content" :focusable="true">
  Skip to main content
</VisuallyHidden>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

When `focusable` is `true`, the clip styles are removed on `:focus` and `:focus-within`, making the element fully visible with high-contrast styling for keyboard users.

{% callout type="info" title="Use SkipLink for skip navigation" %}
For the standard skip-to-main-content pattern, prefer the dedicated `SkipLink` component, which handles positioning and styling automatically.
{% /callout %}

---

## Adding Context to Terse Labels

Use `VisuallyHidden` to give screen reader users extra context that would be redundant visually but helpful when navigating by element.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
// A table with "Edit" links for each row — sighted users see the row context,
// screen reader users hear "Edit Jane Smith" for each link
<table>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>
          <a href={`/users/${user.id}/edit`}>
            Edit<VisuallyHidden> {user.name}</VisuallyHidden>
          </a>
        </td>
      </tr>
    ))}
  </tbody>
</table>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<tr v-for="user in users" :key="user.id">
  <td>{{ user.name }}</td>
  <td>
    <a :href="`/users/${user.id}/edit`">
      Edit<VisuallyHidden> {{ user.name }}</VisuallyHidden>
    </a>
  </td>
</tr>
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
| `children` | `ReactNode` | — | Content to hide visually (required) |
| `as` | `ElementType` | `'span'` | HTML element or component to render as |
| `focusable` | `boolean` | `false` | When `true`, the element becomes visible on keyboard focus |
| `className` | `string` | — | Additional CSS classes |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `'span'` | HTML element to render as |
| `focusable` | `boolean` | `false` | When `true`, the element becomes visible on keyboard focus |
| `class` | `string` | — | Additional CSS classes |

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

- Uses the standard **SR-only clip pattern**: `position: absolute`, `width: 1px`, `height: 1px`, `overflow: hidden`, `clip: rect(0, 0, 0, 0)`, `white-space: nowrap`
- The content is **never removed from the accessibility tree** — `aria-hidden` is not applied
- When `focusable={true}`, the clip styles are reversed on `:focus` so the element is fully visible and usable by keyboard users
- Prefer `VisuallyHidden` over `aria-label` when the text is more than a single phrase, or when it needs to be localizable via React's rendering pipeline

**When to use `VisuallyHidden` vs `aria-label`:**
- Use `VisuallyHidden` inside an element when the label needs to be rendered as real DOM text (e.g., for translation, testing, or rich content)
- Use `aria-label` directly on an element for simple, short string labels on interactive elements like buttons and inputs
- Never use both on the same element — they will conflict
