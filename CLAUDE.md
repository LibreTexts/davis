# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Davis is an accessibility-first design system monorepo with a framework-agnostic core and dual React/Vue implementations. It uses Tailwind CSS v4, HeadlessUI, and TypeScript strict mode throughout.

## Common Commands

All commands use `npm` (not pnpm or yarn).

### Root-level (runs across all workspaces)
```sh
npm run build          # Build all packages
npm run dev            # Start dev mode for all packages
npm run lint           # Lint all packages
npm run test           # Run all tests
npm run typecheck      # TypeScript check all packages
```

### Package-specific
```sh
# React package
npm run storybook -w @libretexts/davis-react      # Start Storybook on :6006
npm run test -w @libretexts/davis-react           # Run Vitest tests
npm run test:watch -w @libretexts/davis-react     # Watch mode

# Vue package
npm run storybook -w @libretexts/davis-vue        # Start Storybook on :6007

# Core package
npm run generate:configs -w @libretexts/davis-core  # Regenerate CSS from tokens

# Docs
npm run docs:dev       # Start docs site (Next.js 15 + Markdoc)
```

### Running a single test file
```sh
npx vitest run packages/react/src/components/__tests__/a11y.test.tsx
```

## Architecture

```
packages/
├── core/        # Design tokens, variants (tailwind-variants), generated CSS configs
├── react/       # React components (~45), providers, context hooks
├── vue/         # Vue 3 components (~45), same set as React
└── docs/        # Documentation site (Next.js 15 + Markdoc)
```

### Design Token Flow

`packages/core/src/tokens.ts` is the **single source of truth** for all design tokens. Running `generate:configs` auto-generates:
- `theme.css` — Tailwind v4 utilities
- `base.css` — global base styles
- `base.scoped.css` — scoped under `.davis` for embedded/widget use

**Never manually edit the generated CSS files.**

### Variants

Component visual variants (sizes, colors, states) are defined in `packages/core/src/variants.ts` using `tailwind-variants`. Both React and Vue components import from there.

## Adding a New Component

1. Define variants in `packages/core/src/variants.ts`
2. Create `packages/react/src/components/component-name.tsx` (kebab-case)
3. Create `packages/react/src/components/component-name.stories.tsx`
4. Export from `packages/react/src/index.ts`
5. Mirror implementation in `packages/vue/src/components/ComponentName.vue` (PascalCase)
6. Export from `packages/vue/src/index.ts`

## Component Conventions

**React:**
- Use `forwardRef` for ref forwarding
- Support polymorphic `as` prop where relevant
- Preserve `"use client"` directives (the Vite plugin handles this in build)
- Use `clsx` for class merging
- File naming: `kebab-case.tsx`

**Vue:**
- Use `<script setup lang="ts">` with `defineProps`
- File naming: `PascalCase.vue`

## Testing

- Framework: **Vitest** (not Jest) with jsdom environment
- A11y: `vitest-axe` matchers configured in `packages/react/src/test-setup.ts`
- Test files: `src/**/*.test.{ts,tsx}`
- A11y tests live in `packages/react/src/components/__tests__/a11y.test.tsx`

## TypeScript

Strict mode is enforced across all packages: `noUnusedLocals`, `noUnusedParameters`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`. Fix all TS errors before committing.

## Build Output

Each package outputs dual ESM (`.mjs`) + CJS (`.cjs`) via Vite. Dependencies declared as `external` in rollup config must not be bundled.

## Release Process

Uses semantic-release with conventional commits. All package versions are kept in sync via `scripts/sync-versions.js`. Do not manually bump versions in `package.json` files.
