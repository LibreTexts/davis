---
title: Accessibility
description: WCAG 2.2 AA guidelines and best practices for building accessible interfaces with Davis
---

# Accessibility

Davis targets **WCAG 2.2 AA** compliance. Every component is built with accessibility as a first-class concern using [Headless UI](https://headlessui.com/) for proper ARIA patterns and keyboard interactions. All components are tested with [axe-core](https://github.com/dequelabs/axe-core) in CI.

---

## WCAG 2.2 Compliance

Davis targets **WCAG 2.2 AA** as the minimum baseline. Key criteria addressed by the design system include:

| Criterion | Level | How Davis addresses it |
|-----------|-------|----------------------|
| 1.4.3 Contrast (Minimum) | AA | Color tokens verified at 4.5:1 / 3:1 |
| 1.4.11 Non-text Contrast | AA | Focus indicators and UI components meet 3:1 |
| 2.1.1 Keyboard | A | All components support full keyboard navigation |
| 2.4.1 Bypass Blocks | A | `SkipLink` component for skip-to-content |
| 2.4.7 Focus Visible | AA | `:focus-visible` pattern with 2px ring |
| 2.4.11 Focus Not Obscured | AA | Focus indicators use `outline-offset` to stay visible |
| 2.5.7 Dragging Movements | AA | No drag-only interactions; all have alternatives |
| 2.5.8 Target Size (Minimum) | AA | `--davis-target-size-minimum: 24px` token |
| 3.2.6 Consistent Help | A | Consistent component patterns across pages |
| 3.3.7 Redundant Entry | A | Form patterns avoid re-asking for provided data |
| 3.3.8 Accessible Authentication | AA | No cognitive function tests required |
| 4.1.3 Status Messages | AA | `LiveAnnouncerProvider` for dynamic announcements |

---

## Color Contrast

### Requirements

| Text type | Minimum ratio | What this means |
|-----------|--------------|-----------------|
| Normal text (< 18px) | 4.5:1 | All body text, labels, buttons |
| Large text (≥ 18px bold or ≥ 24px) | 3:1 | Headings, large UI elements |
| UI components & graphics | 3:1 | Icons, borders, focus indicators |

### Safe Pairings

**On white backgrounds:**
- Body text: `text-neutral-900` (14.5:1) or `text-neutral-700` (9.5:1)
- Secondary text: `text-neutral-600` (7.0:1) or `text-neutral-500` (4.6:1)
- Primary actions: `text-primary-500` (4.5:1+) or `bg-primary-500 text-white`
- Avoid: `text-neutral-400` on white (fails AA for normal text)

**On colored backgrounds:**
- `bg-primary-500` through `bg-primary-950`: use `text-white`
- `bg-primary-50` through `bg-primary-100`: use `text-primary-700`+
- Same pattern applies for success, warning, danger

### Testing

Use the **Storybook a11y addon** (enabled by default) to check contrast ratios on every component story. The addon panel shows violations and suggestions.

---

## Focus Management

### Focus-visible pattern

Davis uses `:focus-visible` for focus indicators. This shows focus rings for keyboard users but not for mouse clicks:

```css
*:focus-visible {
  outline: 2px solid var(--davis-ring-color);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}
```

### Component focus patterns

| Component | Focus style |
|-----------|------------|
| Buttons | `ring-2 ring-offset-2 ring-{variant}` |
| Inputs | `outline-2 -outline-offset-2 outline-primary` |
| Links | `ring-2 ring-primary ring-offset-2` (focus-visible only) |
| Cards (clickable) | `ring-2 ring-primary ring-offset-2` |
| Dialog | Focus trapped within dialog; returns focus on close |
| Menu | Focus trapped within menu; arrow key navigation |

### Focus trapping

The Dialog and Menu components (via Headless UI) automatically trap focus. When a dialog opens, focus moves to the first focusable element. When it closes, focus returns to the trigger element.

---

## ARIA Patterns

Davis components implement established WAI-ARIA Authoring Practices Guide (APG) patterns:

| Component | ARIA pattern |
|-----------|-------------|
| Alert | `role="alert"` with `aria-live="assertive"` |
| Dialog | `role="dialog"` with `aria-modal="true"`, `aria-labelledby`, `aria-describedby` |
| Menu | `role="menu"` with `role="menuitem"` children, arrow key navigation |
| Tooltip | `role="tooltip"` with `aria-describedby` on trigger |
| Switch | `role="switch"` with `aria-checked` |
| Checkbox | Native checkbox with `aria-checked`, `aria-required` |
| Radio Group | `role="radiogroup"` with `role="radio"` children |
| Notification | `role="status"` with `aria-live="polite"` |
| Badge | Decorative (no role) or `role="status"` when dynamic |
| Spinner | `role="status"` with `aria-label` for screen readers |
| SkipLink | Standard anchor with visually-hidden-until-focus pattern |
| VisuallyHidden | Clip-rect pattern for screen-reader-only content |
| LiveAnnouncer | Shared `aria-live` region for dynamic announcements |

---

## Keyboard Navigation

All interactive components support full keyboard navigation:

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next focusable element |
| `Shift+Tab` | Move focus to previous focusable element |
| `Enter` / `Space` | Activate buttons, toggle checkboxes/switches |
| `Escape` | Close dialogs, menus, tooltips |
| `Arrow Up/Down` | Navigate menu items, radio options |
| `Home/End` | Jump to first/last menu item |

---

## Reduced Motion

Davis respects the `prefers-reduced-motion` media query. When the user's operating system has requested minimized motion, all transitions and animations are automatically disabled:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is built into the base CSS and applies globally. No per-component configuration is needed.

Motion duration tokens are available for custom animations:

| Token | Value | Use |
|-------|-------|-----|
| `--davis-motion-duration-fast` | 150ms | Micro-interactions (hover, focus) |
| `--davis-motion-duration-default` | 200ms | Standard transitions |
| `--davis-motion-duration-slow` | 300ms | Enter/exit animations |

**Testing:** Toggle "Reduce motion" in your OS settings (macOS: System Settings > Accessibility > Display > Reduce motion; Windows: Settings > Accessibility > Visual effects > Animation effects) or use Chrome DevTools Rendering panel > Emulate CSS media feature `prefers-reduced-motion`.

---

## Accessibility Utilities

### SkipLink

A "Skip to main content" link that is visually hidden until focused via keyboard. Place it as the first element in your layout:

```tsx
import { SkipLink } from "@libretexts/davis-react";

function Layout({ children }) {
  return (
    <>
      <SkipLink />
      <nav>...</nav>
      <main id="main-content">{children}</main>
    </>
  );
}
```

### VisuallyHidden

Hides content visually while keeping it available to screen readers:

```tsx
import { VisuallyHidden } from "@libretexts/davis-react";

<button>
  <SearchIcon aria-hidden="true" />
  <VisuallyHidden>Search</VisuallyHidden>
</button>
```

### LiveAnnouncer

Manages screen reader announcements for dynamic content updates:

```tsx
import { LiveAnnouncerProvider, useAnnounce } from "@libretexts/davis-react";

// Wrap your app once
<LiveAnnouncerProvider>
  <App />
</LiveAnnouncerProvider>

// Use in any component
function SearchResults({ count }) {
  const announce = useAnnounce();

  useEffect(() => {
    announce(`${count} results found`);
  }, [count, announce]);

  return <p>{count} results</p>;
}
```

---

## Target Sizes

WCAG 2.2 requires interactive targets to be at least **24x24 CSS pixels** (SC 2.5.8). Davis provides design tokens to enforce this:

| Token | Value | WCAG Level |
|-------|-------|------------|
| `--davis-target-size-minimum` | 24px | AA (2.5.8) |
| `--davis-target-size-comfortable` | 44px | AAA (2.5.5) |

All Davis interactive components (buttons, checkboxes, switches, menu items) meet the 24px minimum target size.

---

## Screen Reader Testing

### Recommended Browser/Screen Reader Matrix

| Screen Reader | Browser | Platform | Priority |
|---|---|---|---|
| JAWS | Chrome | Windows | Highest |
| NVDA | Firefox | Windows | High |
| VoiceOver | Safari | macOS | High |
| VoiceOver | Safari | iOS | Medium |
| TalkBack | Chrome | Android | Medium |

Test with at **minimum two screen readers**. NVDA + VoiceOver covers most users.

### What to verify

- All interactive elements have a unique accessible name
- Elements announce their type, value, and state
- Common navigation patterns work (by heading, by landmark, by form control)
- Dynamic content updates are announced via live regions
- Focus moves appropriately (modal open/close, page navigation)

---

## Cognitive Accessibility

Davis follows W3C cognitive accessibility guidance:

- **Consistent patterns**: Same navigation, heading hierarchy, and component behaviors across pages
- **Plain language**: Error messages, labels, and instructions use clear, simple language
- **Icons with labels**: Icon-only buttons use `VisuallyHidden` or `aria-label` for accessible names
- **Predictable navigation**: Navigation elements appear in the same location on every page (SC 3.2.6)
- **Manageable information density**: Components support multiple sizes and spacing options

---

## Screen Reader Checklist

When building pages with Davis components, verify:

- [ ] Every page has exactly one `h1`
- [ ] Heading levels don't skip (no `h1` to `h3`)
- [ ] All images have `alt` text (or `alt=""` for decorative images)
- [ ] Form inputs have visible labels (or `aria-label` if label is visual)
- [ ] Error messages are associated with their inputs via `aria-describedby`
- [ ] Dynamic content changes use `aria-live` regions or `LiveAnnouncer`
- [ ] Navigation landmarks are present (`<nav>`, `<main>`, `<footer>`)
- [ ] Interactive elements have accessible names
- [ ] Color is not the only indicator of state (use icons/text alongside color)
- [ ] A `SkipLink` is present as the first focusable element
- [ ] Target sizes meet 24x24px minimum

---

## Testing Tools

1. **Automated (CI)** — axe-core via vitest-axe runs on every component in CI
2. **Storybook a11y addon** — Real-time checks in every story during development
3. **axe DevTools** — Browser extension for page-level audits
4. **Keyboard testing** — Tab through every interactive flow
5. **Screen reader testing** — Test with VoiceOver (macOS), NVDA (Windows), or Orca (Linux)

Automated tools catch ~57% of WCAG issues. Manual testing with screen readers is always required alongside automation.
