---
title: Trace
description: Composable execution steps with expandable details and status styling
---

# Trace

`Trace` presents execution steps, durations, and expandable details. It is a React presentation component: the consuming application supplies status, content, and execution behavior.

```tsx
import { Trace } from '@libretexts/davis-react';

<Trace>
  <Trace.Collapsible>
    <Trace.Trigger>
      <Trace.Line status="completed">
        <Trace.Title>Completed 2 steps</Trace.Title>
        <Trace.Description>3s</Trace.Description>
      </Trace.Line>
    </Trace.Trigger>
    <Trace.Content forceMount>
      <Trace.Collapsible>
        <Trace.Trigger>Read article details</Trace.Trigger>
        <Trace.Content>Retrieved three matching articles.</Trace.Content>
      </Trace.Collapsible>
    </Trace.Content>
  </Trace.Collapsible>
</Trace>
```

## Following execution progress

Use controlled expansion to open while running and collapse on completion, while respecting the user's manual choice:

```tsx
const [expanded, setExpanded] = useState<boolean>();

<Trace.Collapsible open={expanded ?? running} onOpenChange={setExpanded}>
  <Trace.Trigger>
    <Trace.Line status={running ? 'running' : 'completed'}>
      <Trace.Title>{running ? 'Working…' : 'Completed'}</Trace.Title>
    </Trace.Line>
  </Trace.Trigger>
  <Trace.Content forceMount>{children}</Trace.Content>
</Trace.Collapsible>
```

Reset `expanded` to `undefined` when starting a new execution, or mount a new trace keyed by its execution ID. Use `forceMount` on the outer content to preserve expansion of nested steps.

## Parts

| Compound component | Named export | Purpose |
|--------------------|--------------|---------|
| `Trace` | `Trace` | Vertical container |
| `Trace.Line` | `TraceLine` | Status-styled inline row |
| `Trace.Icon` | `TraceIcon` | Decorative icon slot, hidden from assistive technology |
| `Trace.Title` | `TraceTitle` | Truncating title |
| `Trace.Description` | `TraceDescription` | Duration or secondary text |
| `Trace.Collapsible` | `TraceCollapsible` | Controlled or uncontrolled expansion |
| `Trace.Trigger` | `TraceCollapsibleTrigger` | Button with expansion chevron |
| `Trace.Content` | `TraceCollapsibleContent` | Indented details panel |

`Trace.Line` accepts `status="running"`, `"completed"`, `"pending"`, or `"error"`. Running animation respects reduced-motion preferences. Include readable status text instead of relying only on color or an icon. Add `role="status"` to a standalone updating line when announcements are needed; the trace does not automatically announce every content change.

All parts forward native props and refs. The collapsible parts share the [Collapsible API](/docs/components/collapsible). Put inline content inside triggers and place interactive details inside `Trace.Content`.

## Adoption

These components require a package release before applications can import them from their installed Davis version. Upgrade `@libretexts/davis-core` and `@libretexts/davis-react` together. They do not depend on Radix or shadcn. No application imports or agent behavior are changed by adding them to the library.
