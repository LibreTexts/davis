---
title: Architecture
description: Understanding the Davis Design System package structure and choosing the right packages for your project
---

# Architecture

The Davis Design System is built as a monorepo with three distinct packages, each serving a specific purpose. Understanding this architecture will help you choose the right package(s) for your project.

---

## Package Structure

### @libretexts/davis-core

**The foundation of the design system** — Framework-agnostic design tokens, CSS variables, and Tailwind configuration.

**What's included:**
- Design tokens (colors, typography, spacing, layout)
- CSS custom properties
- Tailwind CSS preset
- Base styles and reset

**Use this package when:**
- You only need design tokens and styles
- You're building custom components
- You're using a framework other than React or Vue
- You want maximum flexibility and minimal dependencies

**Installation:** See [Tokens Only Installation](/docs/getting-started/installation/tokens-only)

### @libretexts/davis-react

**React component library** — Pre-built, accessible React components that implement the Davis design system.

**What's included:**
- All of `@libretexts/davis-core` (installed as dependency)
- React 18+ components
- TypeScript definitions
- Headless UI integration
- Accessible by default

**Use this package when:**
- You're building a React application
- You want pre-built, accessible components
- You need consistent UI patterns
- You're using Next.js, Remix, or other React frameworks

**Installation:** See [React Installation](/docs/getting-started/installation/react)

### @libretexts/davis-vue

**Vue component library** — Pre-built, accessible Vue components that implement the Davis design system.

**What's included:**
- All of `@libretexts/davis-core` (installed as dependency)
- Vue 3+ components
- TypeScript definitions
- Headless UI Vue integration
- Accessible by default

**Use this package when:**
- You're building a Vue application
- You want pre-built, accessible components
- You need consistent UI patterns
- You're using Nuxt or other Vue frameworks

{% callout type="info" title="Coming Soon" %}
Vue components are currently in development. This documentation will be updated when the component library is available. You can use `@libretexts/davis-core` for design tokens in the meantime.
{% /callout %}

**Installation:** See [Vue Installation](/docs/getting-started/installation/vue)

---

## Decision Tree

Not sure which package to use? Follow this decision tree:

```
Do you need pre-built components?
│
├─ No → Use @libretexts/davis-core
│        (Design tokens, styles, Tailwind preset only)
│
└─ Yes → Which framework are you using?
         │
         ├─ React → Use @libretexts/davis-react
         │          (Includes davis-core automatically)
         │
         ├─ Vue → Use @libretexts/davis-vue
         │        (Includes davis-core automatically)
         │
         └─ Other → Use @libretexts/davis-core
                    (Build your own components with tokens)
```

### Common Scenarios

**Scenario 1: New React project**
- Install `@libretexts/davis-react`
- You automatically get all design tokens and components
- No need to install `davis-core` separately

**Scenario 2: Custom component library**
- Install `@libretexts/davis-core`
- Build your own components using the design tokens
- Full control over implementation

**Scenario 3: Multi-framework project**
- Install `@libretexts/davis-core` in your shared package
- Optionally add `davis-react` or `davis-vue` in framework-specific packages
- Share design tokens across all implementations

**Scenario 4: Existing project with design system**
- Install `@libretexts/davis-core` for tokens only
- Gradually adopt components by installing `davis-react` or `davis-vue`
- See [Existing Projects](/docs/guides/existing-projects) guide

---

## Package Dependencies

The component libraries depend on the core package:

```
@libretexts/davis-react
  └─ depends on @libretexts/davis-core

@libretexts/davis-vue
  └─ depends on @libretexts/davis-core
```

This means:
- Installing `davis-react` or `davis-vue` automatically includes `davis-core`
- You never need to install `davis-core` separately when using a component library
- Updates to `davis-core` are coordinated with component library releases

---

## Next Steps

Now that you understand the package structure:

1. **Choose your package** using the decision tree above
2. **Follow the installation guide** for your chosen package:
   - [React Installation](/docs/getting-started/installation/react)
   - [Vue Installation](/docs/getting-started/installation/vue)
   - [Tokens Only Installation](/docs/getting-started/installation/tokens-only)
3. **Explore Foundation** to learn about design tokens:
   - [Colors](/docs/foundation/colors)
   - [Typography](/docs/foundation/typography)
   - [Spacing](/docs/foundation/spacing)
   - [Layout](/docs/foundation/layout)
