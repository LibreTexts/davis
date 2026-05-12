---
title: Modal
description: Centered dialog overlay for focused interactions requiring user attention
---

# Modal

Modal is a centered overlay dialog that dims the background and focuses the user on a specific task. Use it for confirmations, forms, and any interaction that should block the underlying page until dismissed.

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
import { Modal, Button } from '@libretexts/davis-react';
import { useState } from 'react';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <p>Modal content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </Modal.Footer>
      </Modal>
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

## Sizes

Modal supports five size variants that control the maximum width of the panel.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Modal open={open} onClose={() => setOpen(false)} size="sm">
  {/* Small — max-w-sm */}
</Modal>

<Modal open={open} onClose={() => setOpen(false)} size="md">
  {/* Medium (default) — max-w-md */}
</Modal>

<Modal open={open} onClose={() => setOpen(false)} size="lg">
  {/* Large — max-w-lg */}
</Modal>

<Modal open={open} onClose={() => setOpen(false)} size="xl">
  {/* Extra large — max-w-xl */}
</Modal>

<Modal open={open} onClose={() => setOpen(false)} size="full">
  {/* Full width — max-w-full */}
</Modal>
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Confirmation Dialog

Use a small or medium modal with a destructive action button for confirmations.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Modal, Button } from '@libretexts/davis-react';
import { useState } from 'react';

export default function ConfirmDelete() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete Item
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} size="sm">
        <Modal.Header>
          <Modal.Title>Delete Item</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <Modal.Description>
            Are you sure you want to delete this item? This action cannot be undone.
          </Modal.Description>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button>
        </Modal.Footer>
      </Modal>
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

## With Form

Modals work well for short forms that require focused input.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Modal, Button, Input } from '@libretexts/davis-react';
import { useState } from 'react';

export default function FormModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Edit Profile</Button>
      <Modal open={open} onClose={() => setOpen(false)} size="lg">
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <form className="space-y-4">
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
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

## Sub-components

Modal uses a compound component pattern. Compose it with the following sub-components:

| Component | Description |
|-----------|-------------|
| `Modal.Header` | Container for the title and close button. Renders a bordered header row. |
| `Modal.Title` | The dialog's accessible title. Rendered as an `h2` via HeadlessUI's `DialogTitle`. |
| `Modal.Description` | Optional accessible description text for the dialog. |
| `Modal.Body` | Scrollable content area between the header and footer. |
| `Modal.Footer` | Action bar at the bottom of the modal, typically containing buttons. |
| `Modal.Close` | Close button that renders an X icon and calls `onClose`. |

---

## Props

### Modal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controls whether the modal is visible |
| `onClose` | `(value: boolean) => void` | — | Called when the modal should close (backdrop click, Escape key, or close button) |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"` | Maximum width of the modal panel |
| `className` | `string` | — | Additional CSS classes for the panel |
| `children` | `ReactNode` | — | Modal content, typically composed of sub-components |

### Modal.Header

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Header content, typically `Modal.Title` and `Modal.Close` |
| `className` | `string` | — | Additional CSS classes |

### Modal.Title

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Title text |
| `className` | `string` | — | Additional CSS classes |

### Modal.Description

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Description text |
| `className` | `string` | — | Additional CSS classes |

### Modal.Body

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Body content |
| `className` | `string` | — | Additional CSS classes |

### Modal.Footer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Footer content, typically action buttons |
| `className` | `string` | — | Additional CSS classes |

### Modal.Close

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aria-label` | `string` | `"Close modal"` | Accessible label for the close button |
| `className` | `string` | — | Additional CSS classes |

---

## When to use

- **Modal** — Use for focused interactions that require a decision or input before the user can return to the page: confirmations, short forms, alerts, or critical information.
- **Drawer** — Use for contextual side panels (filters, detail views, settings) where the user may want to reference the underlying page.
- **Dialog** — Use as a lower-level primitive when you need full control over dialog behavior without the opinionated compound-component layout.

---

{% callout type="info" title="Accessibility" %}
Modal is built on Headless UI's Dialog primitive. Focus is trapped inside the modal when open, and pressing `Escape` closes it. Focus returns to the trigger element on close. `Modal.Title` and `Modal.Description` are automatically associated with the dialog via `aria-labelledby` and `aria-describedby`.
{% /callout %}
