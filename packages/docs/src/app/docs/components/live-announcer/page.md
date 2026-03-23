---
title: Live Announcer
description: Provider and hook for triggering screen reader announcements via ARIA live regions
---

# Live Announcer

The Live Announcer provides a React context and hook for sending programmatic announcements to screen readers. Wrap your application once with `LiveAnnouncerProvider`, then call `announce()` from any component using the `useAnnounce()` hook — no prop drilling required.

Use it to announce dynamic changes that happen outside the user's current focus: search result counts, toast notifications, form validation errors, loading completion, and similar events.

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

## Setup

Add `LiveAnnouncerProvider` once at your application root. It renders two visually hidden live regions into the DOM that persist for the lifetime of the app.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { LiveAnnouncerProvider } from '@libretexts/davis-react';

export default function App() {
  return (
    <LiveAnnouncerProvider>
      <YourApp />
    </LiveAnnouncerProvider>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { LiveAnnouncerProvider } from '@libretexts/davis-vue';
</script>

<template>
  <LiveAnnouncerProvider>
    <YourApp />
  </LiveAnnouncerProvider>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Basic Usage

Call `useAnnounce()` in any component that is a descendant of `LiveAnnouncerProvider`. The returned function accepts a message string and an optional politeness level.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useAnnounce } from '@libretexts/davis-react';
import { useEffect } from 'react';

function SearchResults({ count }: { count: number }) {
  const announce = useAnnounce();

  useEffect(() => {
    announce(`${count} results found`);
  }, [count]);

  return <div>...</div>;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { useAnnounce } from '@libretexts/davis-vue';
import { watch } from 'vue';

const props = defineProps<{ count: number }>();
const announce = useAnnounce();

watch(() => props.count, (count) => {
  announce(`${count} results found`);
});
</script>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Polite vs Assertive

The second argument to `announce()` controls the ARIA politeness level.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useAnnounce } from '@libretexts/davis-react';

function NotificationExample() {
  const announce = useAnnounce();

  return (
    <>
      <button onClick={() => announce('3 new messages')}>
        Check messages
      </button>

      <button onClick={() => announce('Session expired. Please log in again.', 'assertive')}>
        Trigger error
      </button>
    </>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { useAnnounce } from '@libretexts/davis-vue';

const announce = useAnnounce();
</script>

<template>
  <button @click="announce('3 new messages')">
    Check messages
  </button>
  <button @click="announce('Session expired. Please log in again.', 'assertive')">
    Trigger error
  </button>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

| Politeness | Behavior | When to use |
|---|---|---|
| `'polite'` (default) | Waits for the user to finish their current activity before reading | Status updates, search counts, success messages |
| `'assertive'` | Interrupts the screen reader immediately | Critical errors, session expiry, urgent alerts |

Use `assertive` sparingly — interrupting the user mid-sentence is disruptive. Reserve it for errors that require immediate attention.

---

## Form Validation Example

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { useAnnounce } from '@libretexts/davis-react';

function LoginForm() {
  const announce = useAnnounce();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await login();

    if (result.error) {
      announce('Login failed: incorrect password', 'assertive');
    } else {
      announce('Login successful. Redirecting to dashboard.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { useAnnounce } from '@libretexts/davis-vue';

const announce = useAnnounce();

async function handleSubmit(e: Event) {
  e.preventDefault();
  const result = await login();

  if (result.error) {
    announce('Login failed: incorrect password', 'assertive');
  } else {
    announce('Login successful. Redirecting to dashboard.');
  }
}
</script>

<template>
  <form @submit="handleSubmit">
    <input type="email" name="email" />
    <input type="password" name="password" />
    <button type="submit">Log in</button>
  </form>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Re-announcing the Same Message

The same message string can be announced multiple times. The announcer clears the live region and re-sets it via `requestAnimationFrame` to ensure the screen reader detects the change even when the message is identical to the previous one.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
function RetryExample() {
  const announce = useAnnounce();

  function handleRetry() {
    // This will be announced every time, even if the message is the same
    announce('Retrying connection...');
  }

  return <button onClick={handleRetry}>Retry</button>;
}
```
{% /tab %}
{% tab framework="vue" %}
```vue
<script setup>
import { useAnnounce } from '@libretexts/davis-vue';

const announce = useAnnounce();

function handleRetry() {
  announce('Retrying connection...');
}
</script>

<template>
  <button @click="handleRetry">Retry</button>
</template>
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props & API

### LiveAnnouncerProvider

{% framework-tabs %}
{% tab framework="react" %}
| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Your application tree |
{% /tab %}
{% tab framework="vue" %}
| Prop | Type | Description |
|------|------|-------------|
| — | — | Accepts default slot content |

Coming soon
{% /tab %}
{% /framework-tabs %}

### useAnnounce()

{% framework-tabs %}
{% tab framework="react" %}
Returns a function with the following signature:

```ts
(message: string, politeness?: 'polite' | 'assertive') => void
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `message` | `string` | — | The text to announce to screen readers |
| `politeness` | `'polite' \| 'assertive'` | `'polite'` | ARIA live region politeness level |
{% /tab %}
{% tab framework="vue" %}
Returns a function with the following signature:

```ts
(message: string, politeness?: 'polite' | 'assertive') => void
```

Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Accessibility

- The polite live region uses `role="status"` and `aria-live="polite"`
- The assertive live region uses `role="alert"` and `aria-live="assertive"`
- Both regions have `aria-atomic="true"` so the full message is always read on each update, not just the changed portion
- Both regions are **visually hidden** using the SR-only clip pattern but are always present in the DOM — screen readers track live regions from page load, so late-mounted regions can miss announcements
- Announcements **auto-clear after 7 seconds** to prevent stale text from being re-read when focus returns to the region
- Calling `useAnnounce()` outside of `LiveAnnouncerProvider` will throw an error in development

**Best practices:**
- Mount `LiveAnnouncerProvider` once at the application root — nesting multiple providers is unnecessary
- Keep announcement messages concise — screen readers will read the full string and a long message delays other announcements
- Do not announce every keystroke; batch or debounce announcements for frequently changing values (e.g., filter results)
- Prefer `'polite'` for all status messages; only use `'assertive'` for errors that require immediate attention
