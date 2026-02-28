---
title: Existing Projects
description: How to add Davis components to an existing application without breaking your current styles
---

# Existing Projects

Adding a design system to an existing application is different from starting fresh. Davis applies global styles that can conflict with your current CSS. This guide walks you through **standalone mode** — a scoped approach that lets Davis components live alongside your existing styles without interference. Using this approach, you can incrementally adopt Davis in parts of your app without a full all-or-nothing migration.

If you're starting a new project, follow the standard [Installation](/docs/getting-started/installation) guide instead.

---

## Why Standard Mode Breaks Existing Apps

The standard Davis setup imports `base.css`, which applies styles globally:

| What changes | How it changes | What breaks |
|---|---|---|
| Font family | Sets `html { font-family: Inter, ... }` | Your app's font changes everywhere |
| Heading sizes | Applies Major Third scale to all `h1`–`h6` | Your existing headings resize unexpectedly |
| Focus rings | Adds `*:focus-visible` outline to all elements | Focus styles clash with your existing ones |
| CSS custom properties | Sets `--davis-*` variables on `:root` | Generally safe, but pollutes the global namespace |
| Tailwind Preflight | Resets margins, padding, borders on all elements | Your non-Tailwind CSS breaks in subtle ways |

In a new project, these global styles are the foundation you build on. In an existing project, they'll cause widespread changes you probably aren't ready to make all at once.

---

## Standalone Mode Setup

Standalone mode scopes all Davis styles under a `.davis` CSS class. Nothing leaks outside that boundary.

### 1. Install Packages

Same packages as standard mode:

```bash
npm install @libretexts/davis-react @libretexts/davis-core
```

Peer dependencies:

```bash
npm install @headlessui/react react react-dom tailwindcss
```

### 2. Import Standalone Styles

Import the standalone stylesheet instead of the standard one. In your app's entry point:

```js
import "@libretexts/davis-react/styles.standalone.css";
```

This stylesheet:
- Scopes all base styles under `.davis` (headings, focus rings, font family)
- Includes Tailwind `components` and `utilities` layers (but **not** `base`/Preflight)
- Initializes `--tw-*` variables only within `.davis` so utilities work correctly

**Do not** import `base.css` or `styles.css` — those are for standard mode.

### 3. Configure Tailwind

Your Tailwind configuration depends on whether your host application already uses Tailwind.

#### Host app uses Tailwind

Add the Davis preset and content paths to your existing config. The key settings are `important: '.davis'` (scopes Davis utilities) and `preflight: false` in a separate Davis-specific context:

```js
// tailwind.config.js
module.exports = {
  // Your existing config stays the same
  presets: [require("@libretexts/davis-core/tailwind.preset")],
  content: [
    "./src/**/*.{ts,tsx}",
    // Include Davis component classes in content scan
    "./node_modules/@libretexts/davis-react/dist/**/*.{js,mjs}",
  ],
};
```

The standalone CSS is pre-built with `important: '.davis'` and Preflight disabled, so your host Tailwind config doesn't need those settings — they only apply to Davis's own build.

#### Host app doesn't use Tailwind

No Tailwind config needed. The standalone CSS ships pre-built with all the utility classes Davis components use. Just import the stylesheet and you're done.

### 4. Wrap Components with DavisProvider

Every Davis component must be rendered inside a `DavisProvider`. The provider creates the `.davis` wrapper `<div>` that activates scoped styles:

```tsx
import { DavisProvider, Button } from "@libretexts/davis-react";

function App() {
  return (
    <div>
      <h1>My Existing App</h1>
      {/* This heading keeps your app's original styles */}

      <DavisProvider>
        <Button>This button is styled by Davis</Button>
      </DavisProvider>
    </div>
  );
}
```

---

## Integration Patterns

### Page-section approach

Wrap individual sections where you want Davis components. Your existing UI remains untouched everywhere else:

```tsx
import { DavisProvider, Card, Button, Input } from "@libretexts/davis-react";

function Dashboard() {
  return (
    <main>
      {/* Existing app header — not affected by Davis */}
      <header className="my-existing-header">
        <h1>Dashboard</h1>
      </header>

      {/* Davis-powered section */}
      <DavisProvider className="mt-8">
        <Card>
          <Card.Header>
            <h2>Quick Actions</h2>
          </Card.Header>
          <Card.Body>
            <Input label="Search" placeholder="Find something..." />
            <Button className="mt-4">Go</Button>
          </Card.Body>
        </Card>
      </DavisProvider>

      {/* Another existing section — still untouched */}
      <section className="my-existing-section">
        <p>This content uses your original styles.</p>
      </section>
    </main>
  );
}
```

### Full-app wrapper

If you're gradually migrating your entire app to Davis, wrap everything in a single provider:

```tsx
import { DavisProvider } from "@libretexts/davis-react";

function App() {
  return (
    <DavisProvider>
      {/* Everything inside gets Davis styles */}
      <RouterOutlet />
    </DavisProvider>
  );
}
```

This is a good stepping stone toward standard mode. When you're ready to complete the migration, see [Migrating to Standard Mode](#migrating-to-standard-mode) below.

### Multiple providers

You can use multiple `DavisProvider` instances on the same page. Each creates its own `.davis` scope:

```tsx
function Page() {
  return (
    <>
      <DavisProvider>
        <Card>
          <Card.Body>Section A</Card.Body>
        </Card>
      </DavisProvider>

      <div className="legacy-content">
        <p>Untouched by Davis.</p>
      </div>

      <DavisProvider>
        <Card>
          <Card.Body>Section B</Card.Body>
        </Card>
      </DavisProvider>
    </>
  );
}
```

There's no performance penalty — `DavisProvider` is a lightweight wrapper (`<div className="davis">`) with a React context.

---

## What Gets Scoped

| Style category | Standard mode | Standalone mode |
|---|---|---|
| CSS custom properties | `:root` (global) | `.davis` (scoped) |
| Font family | `html` (global) | `.davis` (scoped) |
| Heading typography | `h1`–`h6` (global) | `.davis h1`–`.davis h6` (scoped) |
| Focus rings | `*:focus-visible` (global) | `.davis *:focus-visible` (scoped) |
| Tailwind Preflight | All elements (global) | Disabled — partial reset under `.davis` only |
| Tailwind utilities | Normal specificity | Boosted via `important: '.davis'` |
| Box-sizing reset | All elements (via Preflight) | `.davis *` only |

---

## Troubleshooting

### Headless UI portals

Some Davis components use Headless UI, which renders popovers, menus, and dialogs through [portals](https://headlessui.com/react/portal). Portals attach elements to `document.body`, which is **outside** the `.davis` wrapper.

Davis components handle this automatically — Headless UI's `Portal` renders within the nearest parent context. If you encounter unstyled portaled content, ensure the `DavisProvider` is high enough in your component tree to contain the trigger element.

### Styles not applying to the wrapper element

`DavisProvider` renders a `<div className="davis">`. Davis utility classes on this element need the `.davis` ancestor selector to activate. Since the div **is** the `.davis` element (not a descendant of one), utilities applied directly to it work because `important: '.davis'` makes `.davis .utility` match `.davis.utility` as well.

If you need to style the wrapper itself, use the `className` prop:

```tsx
<DavisProvider className="p-4 bg-surface">
  {/* content */}
</DavisProvider>
```

### Class name conflicts

If your app already uses a CSS class called `.davis`, you'll get style collisions. This is unlikely but if it happens, you'll need to rename your existing class — the `.davis` scope name is not configurable.

---

## Migrating to Standard Mode

When your app is fully using Davis and you're ready to remove the scoping layer:

1. Replace `styles.standalone.css` with `styles.css` (or import `base.css` + Tailwind directives)
2. Remove `DavisProvider` wrappers — components work without them in standard mode
3. Remove `important: '.davis'` and re-enable `preflight` in your Tailwind config (if you added those settings)
4. Test thoroughly — global base styles will now apply to your entire app

This is a one-way migration. Once you switch to standard mode, all elements in your app will inherit Davis's global styles (font family, heading scale, focus rings, Preflight resets).
