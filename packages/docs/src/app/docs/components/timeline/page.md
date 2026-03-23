---
title: Timeline
description: Vertical sequence of events with connectors, statuses, and timestamps
---

# Timeline

Timeline renders a vertical sequence of events connected by a line. Use it for activity feeds, changelog entries, audit logs, and multi-step process histories.

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
import { Timeline } from '@libretexts/davis-react';

export default function Example() {
  return (
    <Timeline>
      <Timeline.Item
        title="Application submitted"
        description="Your application has been received and is under review."
        timestamp="March 20, 2026"
        status="complete"
      />
      <Timeline.Item
        title="Initial review"
        description="Our team is reviewing your submission."
        timestamp="March 22, 2026"
        status="current"
      />
      <Timeline.Item
        title="Background check"
        status="pending"
      />
      <Timeline.Item
        title="Final decision"
        status="pending"
      />
    </Timeline>
  );
}
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Activity Feed

Timeline works well for activity feeds where all items are in the `complete` state:

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<Timeline>
  <Timeline.Item
    title="Pull request merged"
    description="feat: add StatCard and Timeline components"
    timestamp="2 hours ago"
    status="complete"
  />
  <Timeline.Item
    title="Code review requested"
    description="Requested review from 2 team members."
    timestamp="5 hours ago"
    status="complete"
  />
  <Timeline.Item
    title="Branch created"
    description="Created branch feat/p3-components from main."
    timestamp="Yesterday"
    status="complete"
  />
</Timeline>
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Custom Icons

Pass an `icon` to replace the default check or dot indicator with any SVG icon:

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { ShieldCheckIcon, BellIcon } from '@heroicons/react/16/solid';

<Timeline>
  <Timeline.Item
    title="Security audit completed"
    description="All 42 checks passed."
    status="complete"
    icon={<ShieldCheckIcon className="size-4" />}
  />
  <Timeline.Item
    title="Alerts configured"
    description="Email and Slack notifications are active."
    status="complete"
    icon={<BellIcon className="size-4" />}
  />
  <Timeline.Item
    title="Deployment scheduled"
    status="current"
  />
</Timeline>
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

### Timeline

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | `Timeline.Item` elements |
| `className` | `string` | — | Additional CSS classes on the root `<ol>` |

### Timeline.Item

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | — | Primary label for the event |
| `description` | `ReactNode` | — | Optional secondary text |
| `timestamp` | `string` | — | Optional time string rendered as `<time>` |
| `icon` | `ReactNode` | — | Optional custom icon inside the status indicator |
| `status` | `"complete" \| "current" \| "pending"` | `"pending"` | Controls the indicator style and connector color |
| `className` | `string` | — | Additional CSS classes on the item wrapper |

---

## Accessibility

- Timeline renders as `<ol role="list">` with each item as `<li>`, reflecting the ordered, sequential nature of events.
- Timestamps render as `<time>` elements for semantic correctness.
- Connector lines and indicator dots are `aria-hidden` — screen readers read only the title, description, and timestamp.

---

## When to use

- **Timeline** — Use for ordered sequences of past or upcoming events: changelogs, audit logs, multi-step flows, activity feeds.
- **Stepper** — Use when a user is actively navigating through steps in a wizard or multi-step form. Stepper is interactive; Timeline is read-only.
