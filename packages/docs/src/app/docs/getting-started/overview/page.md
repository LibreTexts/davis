---
title: Overview
description: Introduction to the Davis Design System - an accessible, opinionated design system for education technology.
---

# Davis Design System

An accessible, opinionated design system for education technology — built on [Headless UI](https://headlessui.com/), [Tailwind CSS](https://tailwindcss.com/), and [tailwind-variants](https://www.tailwind-variants.org/).

## Mission

Davis provides a consistent set of UI primitives so LibreTexts developers can build accessible, beautiful interfaces without reinventing design decisions. Every component targets **WCAG AA** compliance, uses a **Major Third typographic scale**, and follows a **4px spacing grid**.

---

## Quick Start

```tsx
import { Button, Input, Card } from "@libretexts/davis-react";

function LoginForm() {
  return (
    <Card>
      <Card.Header>
        <h2>Sign In</h2>
      </Card.Header>
      <Card.Body>
        <div className="space-y-4">
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" />
          <Button fullWidth>Sign In</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
```

---

## Package Structure

| Package | NPM | Purpose |
|---------|-----|---------|
| `@libretexts/davis-core` | Design tokens, Tailwind preset, base CSS, variant definitions | Framework-agnostic foundation |
| `@libretexts/davis-react` | React components, Storybook docs | React implementation |

The **core** package is framework-agnostic — it exports design tokens, the Tailwind preset, base CSS, and variant class definitions. The **React** package builds on core with Headless UI components.

---

## Design Principles

1. **Accessibility first** — WCAG AA minimum. Focus management, ARIA patterns, and color contrast are non-negotiable.
2. **Consistency over flexibility** — Opinionated defaults reduce decision fatigue. The type scale, color palette, and spacing grid are fixed.
3. **Composition over configuration** — Components are small and composable. Build complex UIs by combining simple pieces.
4. **Education-focused** — Designed for learning platforms. Readable text, clear hierarchy, and calm visual tone.

---

## Getting Started

Ready to start using Davis? Check out the [Installation](/docs/getting-started/installation) guide to get started.

Explore our design foundations:
- [Architecture](/docs/foundation/architecture)
- [Colors](/docs/foundation/colors)
- [Typography](/docs/foundation/typography)
- [Spacing](/docs/foundation/spacing)
- [Layout](/docs/foundation/layout)

Learn about best practices:
- [Accessibility](/docs/guides/accessibility)
- [Component Patterns](/docs/guides/patterns)
