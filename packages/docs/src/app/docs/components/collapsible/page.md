---
title: Collapsible
description: Controlled or uncontrolled disclosure with accessible keyboard interaction
---

# Collapsible

Use `Collapsible` to show and hide a single section of content. This React component uses a Headless UI button and supports both user-driven and application-controlled expansion.

```tsx
import { Collapsible } from '@libretexts/davis-react';

<Collapsible defaultOpen>
  <Collapsible.Trigger>View details</Collapsible.Trigger>
  <Collapsible.Content>Additional information about this action.</Collapsible.Content>
</Collapsible>
```

## Controlled expansion

Pass `open` and `onOpenChange` when the application needs to expand or collapse the section. Use `defaultOpen` for an initial value managed by the component. Keep the same mode throughout the component's lifetime.

```tsx
const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen}>
  <Collapsible.Trigger>Task details</Collapsible.Trigger>
  <Collapsible.Content>Details controlled by the parent.</Collapsible.Content>
</Collapsible>
```

## Preserving state

By default, children unmount when the panel closes. Set `forceMount` on `Collapsible.Content` to preserve nested disclosure or form state. Closed content remains hidden and excluded from keyboard navigation; `forceMount` does not make it visible.

## API

| Component | Prop | Default | Description |
|-----------|------|---------|-------------|
| Collapsible | `open` | — | Controlled boolean expansion state |
| Collapsible | `defaultOpen` | `false` | Initial uncontrolled state |
| Collapsible | `onOpenChange` | — | Called with the requested boolean state |
| Collapsible | `disabled` | `false` | Disables trigger interaction |
| Collapsible.Content | `forceMount` | `false` | Preserves children while closed |

The root and content accept native div props; the trigger accepts native button props. Refs are forwarded. The content ID is generated internally for its trigger's `aria-controls`. Use one trigger and one content panel per root. Triggers default to `type="button"`, support Enter and Space, and report `aria-expanded`. All parts expose `data-state="open"` or `"closed"` for custom styles.

Named exports `CollapsibleTrigger` and `CollapsibleContent` are also available. The API uses native elements rather than an `asChild` prop.
