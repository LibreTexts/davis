# Design Token Build Scripts

## Overview

This directory contains scripts that generate Tailwind CSS configuration files from the TypeScript design tokens.

## Single Source of Truth

**`src/tokens.ts`** is the single source of truth for all Davis design tokens.

It automatically generates:
- **`src/theme.css`** - Tailwind CSS v4 theme
- **`src/base.css`** - Global base styles with CSS custom properties
- **`src/base.scoped.css`** - Scoped base styles under `.davis` selector (for standalone/embedded usage)

## Usage

### After modifying `tokens.ts`:

```bash
npm run generate:configs
```

### During build:

The configs are automatically regenerated during `npm run build`:

```bash
npm run build  # Runs: tsc && npm run generate:configs
```

## Why?

- **No duplication** - Design tokens defined once
- **Type safety** - TypeScript constants can be imported in code
- **Auto-generated** - Tailwind configs stay in sync
- **Version compatibility** - Tailwind v4

## Files

- **`generate-tailwind-configs.mjs`** - Main generation script
- **`../src/tokens.ts`** - Source of truth for design tokens (EDIT THIS)
- **`../src/theme.css`** - Generated Tailwind v4 theme (do not edit)
- **`../src/base.css`** - Generated global base styles (do not edit)
- **`../src/base.scoped.css`** - Generated scoped base styles (do not edit)
