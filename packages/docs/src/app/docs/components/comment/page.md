---
title: Comment
description: Display component for messages in threaded conversations and support tickets
---

# Comment

Comments display authored messages in threaded contexts such as support tickets, discussions, and activity feeds. The component is composable with Header and Body subcomponents, integrating the Avatar component for author display.

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
import { Comment } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Comment>
      <Comment.Header
        avatar={{ name: 'Jane Doe' }}
        name="Jane Doe"
      >
        <time>2 hours ago</time>
      </Comment.Header>
      <Comment.Body>
        <p>Thanks for reaching out! I've looked into this and it appears to be
        related to your account settings.</p>
      </Comment.Body>
    </Comment>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Comment, CommentHeader, CommentBody } from '@libretexts/davis-vue';
</script>

<template>
  <Comment>
    <CommentHeader
      :avatar="{ name: 'Jane Doe' }"
      name="Jane Doe"
    >
      <time>2 hours ago</time>
    </CommentHeader>
    <CommentBody>
      <p>Thanks for reaching out! I've looked into this and it appears to be
      related to your account settings.</p>
    </CommentBody>
  </Comment>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Variants

The Comment component supports two visual variants.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
{/* Default — neutral styling for standard messages */}
<Comment variant="default">
  <Comment.Header avatar={{ name: 'User' }} name="User">
    <time>Just now</time>
  </Comment.Header>
  <Comment.Body>
    <p>A standard comment.</p>
  </Comment.Body>
</Comment>

{/* Highlighted — accented left border for pinned or important messages */}
<Comment variant="highlighted">
  <Comment.Header avatar={{ name: 'Admin' }} name="Admin">
    <time>1 hour ago</time>
  </Comment.Header>
  <Comment.Body>
    <p>This message has been pinned by a moderator.</p>
  </Comment.Body>
</Comment>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<!-- Default — neutral styling for standard messages -->
<Comment variant="default">
  <CommentHeader :avatar="{ name: 'User' }" name="User">
    <time>Just now</time>
  </CommentHeader>
  <CommentBody>
    <p>A standard comment.</p>
  </CommentBody>
</Comment>

<!-- Highlighted — accented left border for pinned or important messages -->
<Comment variant="highlighted">
  <CommentHeader :avatar="{ name: 'Admin' }" name="Admin">
    <time>1 hour ago</time>
  </CommentHeader>
  <CommentBody>
    <p>This message has been pinned by a moderator.</p>
  </CommentBody>
</Comment>
```
{% /tab %}
{% /framework-tabs %}

---

## Padding

Control the internal padding of the comment.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Comment padding="none">
  <Comment.Header avatar={{ name: 'User' }} name="User" />
  <Comment.Body><p>No padding</p></Comment.Body>
</Comment>

<Comment padding="sm">
  <Comment.Header avatar={{ name: 'User' }} name="User" />
  <Comment.Body><p>Small padding</p></Comment.Body>
</Comment>

<Comment padding="md">
  <Comment.Header avatar={{ name: 'User' }} name="User" />
  <Comment.Body><p>Medium padding (default)</p></Comment.Body>
</Comment>

<Comment padding="lg">
  <Comment.Header avatar={{ name: 'User' }} name="User" />
  <Comment.Body><p>Large padding</p></Comment.Body>
</Comment>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Comment padding="none">
  <CommentHeader :avatar="{ name: 'User' }" name="User" />
  <CommentBody><p>No padding</p></CommentBody>
</Comment>

<Comment padding="sm">
  <CommentHeader :avatar="{ name: 'User' }" name="User" />
  <CommentBody><p>Small padding</p></CommentBody>
</Comment>

<Comment padding="md">
  <CommentHeader :avatar="{ name: 'User' }" name="User" />
  <CommentBody><p>Medium padding (default)</p></CommentBody>
</Comment>

<Comment padding="lg">
  <CommentHeader :avatar="{ name: 'User' }" name="User" />
  <CommentBody><p>Large padding</p></CommentBody>
</Comment>
```
{% /tab %}
{% /framework-tabs %}

---

## With Rich Metadata

The `Comment.Header` children slot accepts any content for metadata — timestamps, badges, status indicators, and more.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Comment, Badge } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Comment>
      <Comment.Header
        avatar={{ name: 'Sarah Chen', src: '/avatars/sarah.jpg' }}
        name="Sarah Chen"
      >
        <Badge variant="success" label="Resolved" size="sm" />
        <span>&middot;</span>
        <time>May 10, 2026</time>
        <span>&middot;</span>
        <span>Edited</span>
      </Comment.Header>
      <Comment.Body>
        <p>The configuration has been updated and the issue should be
        resolved now.</p>
      </Comment.Body>
    </Comment>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Comment, CommentHeader, CommentBody, Badge } from '@libretexts/davis-vue';
</script>

<template>
  <Comment>
    <CommentHeader
      :avatar="{ name: 'Sarah Chen', src: '/avatars/sarah.jpg' }"
      name="Sarah Chen"
    >
      <Badge variant="success" label="Resolved" size="sm" />
      <span>&middot;</span>
      <time>May 10, 2026</time>
      <span>&middot;</span>
      <span>Edited</span>
    </CommentHeader>
    <CommentBody>
      <p>The configuration has been updated and the issue should be
      resolved now.</p>
    </CommentBody>
  </Comment>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## With Rich Content

The `Comment.Body` accepts any children, allowing formatted text, code blocks, images, and other components.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Comment>
  <Comment.Header avatar={{ name: 'Dev Support' }} name="Dev Support">
    <time>3 hours ago</time>
  </Comment.Header>
  <Comment.Body>
    <p className="mb-2">I found the issue. Update your configuration:</p>
    <pre className="bg-gray-100 rounded-md p-3 text-xs mb-2">
      <code>{`{ "apiVersion": "v2", "timeout": 30000 }`}</code>
    </pre>
    <p>Restart the service after making this change.</p>
  </Comment.Body>
</Comment>
```
{% /tab %}
{% tab framework="vue" %}
```vue
<Comment>
  <CommentHeader :avatar="{ name: 'Dev Support' }" name="Dev Support">
    <time>3 hours ago</time>
  </CommentHeader>
  <CommentBody>
    <p class="mb-2">I found the issue. Update your configuration:</p>
    <pre class="bg-gray-100 rounded-md p-3 text-xs mb-2">
      <code>{ "apiVersion": "v2", "timeout": 30000 }</code>
    </pre>
    <p>Restart the service after making this change.</p>
  </CommentBody>
</Comment>
```
{% /tab %}
{% /framework-tabs %}

---

## Thread

Stack multiple comments to create a conversation thread. Use a divider between comments for visual separation.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { Comment, Badge } from '@libretexts/davis-react';

export default function TicketThread() {
  return (
    <div className="flex flex-col divide-y divide-gray-200">
      <Comment>
        <Comment.Header
          avatar={{ name: 'Alex Johnson', src: '/avatars/alex.jpg' }}
          name="Alex Johnson"
        >
          <time>Yesterday at 2:30 PM</time>
        </Comment.Header>
        <Comment.Body>
          <p>I'm having trouble logging in. I keep getting a "session expired"
          error even after resetting my password.</p>
        </Comment.Body>
      </Comment>

      <Comment>
        <Comment.Header avatar={{ name: 'Support Team' }} name="Support Team">
          <Badge variant="primary" label="Staff" size="sm" />
          <time>Yesterday at 3:15 PM</time>
        </Comment.Header>
        <Comment.Body>
          <p>Hi Alex, could you try clearing your browser cache and cookies,
          then attempt to log in again?</p>
        </Comment.Body>
      </Comment>

      <Comment>
        <Comment.Header
          avatar={{ name: 'Alex Johnson', src: '/avatars/alex.jpg' }}
          name="Alex Johnson"
        >
          <time>Today at 9:00 AM</time>
        </Comment.Header>
        <Comment.Body>
          <p>That worked! Thank you for the quick help!</p>
        </Comment.Body>
      </Comment>
    </div>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { Comment, CommentHeader, CommentBody, Badge } from '@libretexts/davis-vue';
</script>

<template>
  <div class="flex flex-col divide-y divide-gray-200">
    <Comment>
      <CommentHeader
        :avatar="{ name: 'Alex Johnson', src: '/avatars/alex.jpg' }"
        name="Alex Johnson"
      >
        <time>Yesterday at 2:30 PM</time>
      </CommentHeader>
      <CommentBody>
        <p>I'm having trouble logging in. I keep getting a "session expired"
        error even after resetting my password.</p>
      </CommentBody>
    </Comment>

    <Comment>
      <CommentHeader :avatar="{ name: 'Support Team' }" name="Support Team">
        <Badge variant="primary" label="Staff" size="sm" />
        <time>Yesterday at 3:15 PM</time>
      </CommentHeader>
      <CommentBody>
        <p>Hi Alex, could you try clearing your browser cache and cookies,
        then attempt to log in again?</p>
      </CommentBody>
    </Comment>

    <Comment>
      <CommentHeader
        :avatar="{ name: 'Alex Johnson', src: '/avatars/alex.jpg' }"
        name="Alex Johnson"
      >
        <time>Today at 9:00 AM</time>
      </CommentHeader>
      <CommentBody>
        <p>That worked! Thank you for the quick help!</p>
      </CommentBody>
    </Comment>
  </div>
</template>
```
{% /tab %}
{% /framework-tabs %}

---

## Props

### Comment

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'highlighted'` | `'default'` | Visual style variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Comment subcomponents |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'highlighted'` | `'default'` | Visual style variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `class` | `string` | - | Additional CSS classes |
{% /tab %}
{% /framework-tabs %}

### Comment.Header / CommentHeader

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatar` | `AvatarProps` | - | Props forwarded to the Avatar component (name, src, initials, etc.) |
| `name` | `string` | - | Author display name |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Metadata content (timestamps, badges, etc.) |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatar` | `{ src?: string; alt?: string; name?: string; initials?: string; size?: AvatarSize }` | - | Props forwarded to the Avatar component |
| `name` | `string` | - | Author display name |
| `class` | `string` | - | Additional CSS classes |

**Slots:**
- `default` — Metadata content (timestamps, badges, etc.)
{% /tab %}
{% /framework-tabs %}

### Comment.Body / CommentBody

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Comment content |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Additional CSS classes |

**Slots:**
- `default` — Comment content
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

The Comment component is built with accessibility in mind:

- Uses `<article>` as the root element for proper semantic structure
- Author names are rendered as visible text, readable by screen readers
- The Avatar component provides accessible initials or alt text for images
- Content and metadata areas accept arbitrary children, allowing semantic HTML (e.g., `<time>` elements)

**Best practices:**
- Use `<time>` elements with `datetime` attributes for timestamps
- Ensure adequate color contrast when adding custom metadata content
- When building a thread, use a container with an appropriate ARIA role or landmark
