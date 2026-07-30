---
title: Conventions
description: The naming, structure, and authoring conventions Davis follows.
---

This page is **hand-authored** — long-form, narrative content that has no
component to generate it from. It sits in the same sidebar and theme as the
auto-documented component pages, which is exactly the split we want: humans
write the reasoning and conventions; the machine documents the API surface.

## Design token flow

`packages/core/src/tokens.ts` is the single source of truth for all design
tokens. Running `generate:configs` regenerates the Tailwind theme, base styles,
and scoped styles. **Never edit the generated CSS by hand.**

## Variants

Component visual variants (sizes, colors, states) are defined once in
`packages/core/src/variants.ts` using `tailwind-variants`, and imported by both
the React and Vue implementations. A variant added there shows up in both
frameworks — and, because prop tables are generated from source, in these docs.

## File naming

- **React** components are `kebab-case.tsx` and use `forwardRef`; polymorphic
  components accept an `as` prop.
- **Vue** components are `PascalCase.vue` using `<script setup lang="ts">`.
- Each component ships a matching `*.stories.tsx` / `*.stories.ts` — the same
  stories power Storybook and the live examples in these docs.

## Adding a component

1. Define variants in `packages/core/src/variants.ts`.
2. Implement in React and Vue; export from each package's `index.ts`.
3. Add a story for each framework.
4. Add the component to `scripts/generate-props.mjs` and write its docs page.

CI fails the build if an exported component is missing a story or a docs page,
so coverage can't silently regress.

## Accessibility bar

Davis is accessibility-first: semantic elements, visible focus rings, correct
ARIA, and full keyboard support are requirements, not enhancements. The docs
site is held to the same bar — it must pass the checks we ask of consumers.
