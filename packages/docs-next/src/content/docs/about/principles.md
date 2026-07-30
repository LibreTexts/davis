---
title: Design Principles
description: The principles that guide decisions across the Davis design system.
---

Davis exists to make accessible, consistent interfaces the path of least
resistance for LibreTexts product teams. These principles guide what goes in,
what stays out, and how trade-offs are resolved.

## Accessible by default

The accessible choice is the default choice. Components ship with correct
semantics, focus management, and ARIA so teams get compliance without extra
work — and have to go out of their way to break it.

## One system, two frameworks

React and Vue implementations share tokens and variants from a single core, so
the two never diverge visually. A change to the system is a change to both.

## Framework-agnostic core

Design decisions live in the framework-agnostic core (`tokens.ts`,
`variants.ts`). Framework packages are thin bindings, which keeps behavior
consistent and makes a third target feasible later.

## Composition over configuration

Prefer small, composable primitives over components with dozens of flags. When
a prop does need to exist, it should be obvious and typed.

## Documentation is part of the product

If it isn't documented, it isn't done. Live examples and generated prop tables
keep the documentation honest and in step with the code.
