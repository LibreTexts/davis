---
title: Accessibility
description: WCAG 2.1 AA guidelines and best practices for building accessible interfaces with Davis
---

# Accessibility

Davis targets **WCAG 2.1 AA** compliance. Every component is built with accessibility as a first-class concern using [Headless UI](https://headlessui.com/) for proper ARIA patterns and keyboard interactions.

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

Davis components implement established ARIA patterns:

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

## Motion Preferences

Respect `prefers-reduced-motion` for users who are sensitive to animation:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Tailwind provides `motion-safe:` and `motion-reduce:` modifiers for conditional animation:

```tsx
<div className="motion-safe:transition-all motion-safe:duration-200">
```

---

## Screen Reader Checklist

When building pages with Davis components, verify:

- [ ] Every page has exactly one `h1`
- [ ] Heading levels don't skip (no `h1` → `h3`)
- [ ] All images have `alt` text (or `alt=""` for decorative images)
- [ ] Form inputs have visible labels (or `aria-label` if label is visual)
- [ ] Error messages are associated with their inputs via `aria-describedby`
- [ ] Dynamic content changes use `aria-live` regions
- [ ] Navigation landmarks are present (`<nav>`, `<main>`, `<footer>`)
- [ ] Interactive elements have accessible names
- [ ] Color is not the only indicator of state (use icons/text alongside color)

---

## Testing Tools

1. **Storybook a11y addon** — Automated checks in every story
2. **axe DevTools** — Browser extension for page-level audits
3. **Keyboard testing** — Tab through every interactive flow
4. **Screen reader testing** — Test with VoiceOver (macOS), NVDA (Windows), or Orca (Linux)
