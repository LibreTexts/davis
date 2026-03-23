---
title: Table
description: Semantic data table with Davis design tokens
---

# Table

Table renders semantic HTML table markup styled with Davis design tokens. Use it to display rows of structured data.

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
import { Table } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice Johnson</Table.Cell>
          <Table.Cell>Engineer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Smith</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
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

### Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `caption` | `string` | — | Optional accessible table caption |
| `className` | `string` | — | Additional CSS classes on the `<table>` element |

### Table.HeaderCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `scope` | `string` | `"col"` | HTML `scope` attribute for accessibility |

### Table.Cell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `colSpan` | `number` | — | Number of columns to span |

---

## Accessibility

- All `Table.HeaderCell` elements render as `<th>` with `scope="col"` by default, which screen readers use to associate header cells with data cells.
- Use the `caption` prop or `Table.Caption` to provide an accessible description of the table's content.
- The table wrapper scrolls horizontally on small viewports to prevent layout overflow.

---

{% callout type="info" title="Documentation in Progress" %}
Full documentation for this component is being written. Check back soon for complete props reference and more examples.
{% /callout %}
