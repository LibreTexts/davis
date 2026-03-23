---
title: Stat Card
description: Dashboard metric card with value, label, and optional trend indicator
---

# Stat Card

Stat Card displays a single KPI or dashboard metric — a label, a prominent value, an optional trend indicator, and an optional icon. Use it in grids to give users an at-a-glance view of key numbers.

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
import { StatCard } from '@libretexts/davis-react';

export default function Example() {
  return (
    <StatCard
      label="Total Users"
      value="12,485"
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

## With Trend

Pass a `trend` object to show change relative to a previous period. The `direction` controls the arrow icon and color — green for up, red for down, gray for neutral.

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<StatCard
  label="Monthly Revenue"
  value="$48,295"
  trend={{
    direction: 'up',
    value: '12.5%',
    label: 'vs last month',
  }}
/>
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## With Icon

{% framework-tabs %}
{% tab framework="react" %}
```tsx
import { StatCard } from '@libretexts/davis-react';
import { UsersIcon } from '@heroicons/react/24/outline';

<StatCard
  label="Active Users"
  value="3,842"
  trend={{ direction: 'up', value: '4.1%', label: 'vs yesterday' }}
  icon={<UsersIcon className="size-8" />}
/>
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Dashboard Grid

StatCard is designed to be used in a responsive grid alongside other cards:

{% framework-tabs %}
{% tab framework="react" %}
```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <StatCard
    label="Total Users"
    value="12,485"
    trend={{ direction: 'up', value: '8.2%', label: 'vs last month' }}
    variant="default"
  />
  <StatCard
    label="Revenue"
    value="$48,295"
    trend={{ direction: 'up', value: '12.5%', label: 'vs last month' }}
    variant="success"
  />
  <StatCard
    label="Churn Rate"
    value="3.2%"
    trend={{ direction: 'down', value: '0.4%', label: 'vs last month' }}
    variant="warning"
  />
  <StatCard
    label="Error Rate"
    value="0.8%"
    trend={{ direction: 'neutral', value: 'No change' }}
    variant="danger"
  />
</div>
```
{% /tab %}
{% tab framework="vue" %}
Coming soon
{% /tab %}
{% /framework-tabs %}

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Metric label displayed above the value |
| `value` | `string \| number` | — | The prominent metric value |
| `trend` | `StatCardTrend` | — | Optional trend indicator |
| `icon` | `ReactNode` | — | Optional icon shown in the top-right corner |
| `variant` | `"default" \| "success" \| "warning" \| "danger"` | `"default"` | Controls the icon color accent |
| `className` | `string` | — | Additional CSS classes on the root element |

### StatCardTrend

| Property | Type | Description |
|----------|------|-------------|
| `direction` | `"up" \| "down" \| "neutral"` | Arrow direction and color (up = green, down = red, neutral = gray) |
| `value` | `string` | The trend value, e.g. `"8.2%"` |
| `label` | `string` | Optional context label, e.g. `"vs last month"` |

---

## When to use

- **Stat Card** — Use for dashboard KPIs and summary metrics. One number, clearly labeled, with optional change context.
- **Card** — Use when you need a general-purpose container for arbitrary content with a header/body/footer layout.
- **Alert** — Use to communicate a status condition that requires the user's attention, not to display a metric.
