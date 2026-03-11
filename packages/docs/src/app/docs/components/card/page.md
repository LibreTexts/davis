---
title: Card
description: Flexible container component for grouping related content
---

# Card

Cards are containers that group related information and actions. The Davis Card component is composable with Header, Body, and Footer subcomponents.

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
import { Card } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-xl font-semibold">Card Title</h2>
      </Card.Header>
      <Card.Body>
        <p>Card content goes here.</p>
      </Card.Body>
    </Card>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Card, CardHeader, CardBody } from '@libretexts/davis-vue';
</script>

<template>
  <Card>
    <CardHeader>
      <h2 class="text-xl font-semibold">Card Title</h2>
    </CardHeader>
    <CardBody>
      <p>Card content goes here.</p>
    </CardBody>
  </Card>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Variants

Cards come in three visual variants.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Card variant="default">
  <Card.Body>Default card with subtle shadow</Card.Body>
</Card>

<Card variant="elevated">
  <Card.Body>Elevated card with prominent shadow</Card.Body>
</Card>

<Card variant="outline">
  <Card.Body>Outlined card with border</Card.Body>
</Card>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Card variant="default">
  <CardBody>Default card with subtle shadow</CardBody>
</Card>

<Card variant="elevated">
  <CardBody>Elevated card with prominent shadow</CardBody>
</Card>

<Card variant="outline">
  <CardBody>Outlined card with border</CardBody>
</Card>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Padding

Control the internal padding of the card.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Card padding="none">
  <Card.Body>No padding</Card.Body>
</Card>

<Card padding="sm">
  <Card.Body>Small padding</Card.Body>
</Card>

<Card padding="md">
  <Card.Body>Medium padding (default)</Card.Body>
</Card>

<Card padding="lg">
  <Card.Body>Large padding</Card.Body>
</Card>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Card padding="none">
  <CardBody>No padding</CardBody>
</Card>

<Card padding="sm">
  <CardBody>Small padding</CardBody>
</Card>

<Card padding="md">
  <CardBody>Medium padding (default)</CardBody>
</Card>

<Card padding="lg">
  <CardBody>Large padding</CardBody>
</Card>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## With Footer

Add actions or metadata to the bottom of the card with `Card.Footer`.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Card, Button } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-xl font-semibold">Confirm Action</h2>
      </Card.Header>
      <Card.Body>
        <p>Are you sure you want to proceed?</p>
      </Card.Body>
      <Card.Footer>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost">Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Card, CardHeader, CardBody, CardFooter, Button } from '@libretexts/davis-vue';
</script>

<template>
  <Card>
    <CardHeader>
      <h2 class="text-xl font-semibold">Confirm Action</h2>
    </CardHeader>
    <CardBody>
      <p>Are you sure you want to proceed?</p>
    </CardBody>
    <CardFooter>
      <div class="flex gap-3 justify-end">
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </CardFooter>
  </Card>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## With Image

Add an image to the card header.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Card } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Card padding="none">
      <Card.Header
        image={{
          src: '/images/hero.jpg',
          alt: 'Mountain landscape',
          height: 200,
        }}
      />
      <div className="p-6">
        <Card.Body>
          <h3 className="text-lg font-semibold mb-2">Mountain View</h3>
          <p className="text-text-neutral">A beautiful mountain landscape.</p>
        </Card.Body>
      </div>
    </Card>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Card, CardHeader, CardBody } from '@libretexts/davis-vue';
</script>

<template>
  <Card padding="none">
    <CardHeader
      :image="{
        src: '/images/hero.jpg',
        alt: 'Mountain landscape',
        height: 200,
      }"
    />
    <div class="p-6">
      <CardBody>
        <h3 class="text-lg font-semibold mb-2">Mountain View</h3>
        <p class="text-text-neutral">A beautiful mountain landscape.</p>
      </CardBody>
    </div>
  </Card>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Clickable Cards

Make cards interactive with `onClick` or `href` props.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Card } from '@libretexts/davis-react';

export default function Example() {
  return (
    <>
      {/* As button */}
      <Card onClick={() => alert('Card clicked!')}>
        <Card.Body>Click me</Card.Body>
      </Card>

      {/* As link */}
      <Card href="/article/123">
        <Card.Body>Read article</Card.Body>
      </Card>

      {/* External link */}
      <Card href="https://example.com" target="_blank">
        <Card.Body>Visit external site</Card.Body>
      </Card>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<template>
  {/* As button */}
  <Card @click="() => alert('Card clicked!')">
    <CardBody>Click me</CardBody>
  </Card>

  {/* As link */}
  <Card href="/article/123">
    <CardBody>Read article</CardBody>
  </Card>

  {/* External link */}
  <Card href="https://example.com" target="_blank">
    <CardBody>Visit external site</CardBody>
  </Card>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

### Card

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outline'` | `'default'` | Visual style variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `onClick` | `() => void` | - | Makes card clickable as button |
| `href` | `string` | - | Makes card a link |
| `target` | `string` | - | Link target (e.g., '_blank') |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outline'` | `'default'` | Visual style variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `href` | `string` | - | Makes card a link |
| `target` | `string` | - | Link target (e.g., '_blank') |

**Events:**
- `@click` - Makes card clickable as button
{% /tab %}
{% /framework-tabs %}

### Card.Header / CardHeader

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `{ src: string; alt: string; height?: number }` | - | Header image configuration |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `{ src: string; alt: string; height?: number }` | - | Header image configuration |
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

The Card component is built with accessibility in mind:

- Clickable cards use proper semantic elements (`<a>` for links, `<div role="button">` for buttons)
- Clickable cards are keyboard accessible (Enter and Space keys)
- Link cards support `target` for external links
- Proper focus visible states for interactive cards
- Images include required `alt` text

**Best practices:**
- For clickable cards, ensure the entire card provides clear affordance (hover/focus states)
- Use `href` for navigation, `onClick` for actions
- Provide descriptive alt text for header images
- Don't nest interactive elements inside clickable cards
