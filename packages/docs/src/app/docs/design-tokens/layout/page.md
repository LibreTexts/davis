---
title: Layout
description: Guidelines for structuring pages and content areas in Davis-based applications
---

# Layout

Guidelines for structuring pages and content areas in Davis-based applications.

---

## Page Structure

A typical page follows this structure:

```
┌─────────────────────────────────────────────┐
│  Header / Navigation                         │
├─────────────────────────────────────────────┤
│                                              │
│  ┌───────────────────────────────────────┐  │
│  │  Page Content (max-w-4xl or max-w-6xl)│  │
│  │                                       │  │
│  │  ┌─────────┐  ┌─────────┐            │  │
│  │  │  Card   │  │  Card   │            │  │
│  │  └─────────┘  └─────────┘            │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                              │
├─────────────────────────────────────────────┤
│  Footer                                      │
└─────────────────────────────────────────────┘
```

```tsx
<div className="min-h-screen flex flex-col">
  <header className="border-b bg-white">
    {/* Navigation */}
  </header>

  <main className="flex-1">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page content */}
    </div>
  </main>

  <footer className="border-t bg-surface-subtle">
    {/* Footer */}
  </footer>
</div>
```

---

## Max-Width Containers

| Container | Class | Width | Use |
|-----------|-------|-------|-----|
| Narrow content | `max-w-2xl` | 672px | Forms, articles, focused content |
| Standard content | `max-w-4xl` | 896px | Most pages, dashboards |
| Wide content | `max-w-6xl` | 1152px | Data tables, card grids, admin views |
| Full width | `max-w-7xl` | 1280px | Landing pages, wide dashboards |

Always combine with horizontal padding and auto margins:
```tsx
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

## Breakpoints

Davis uses Tailwind's default mobile-first breakpoints:

| Breakpoint | Min-width | Typical device |
|-----------|-----------|----------------|
| (default) | 0px | Mobile phones |
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

**Mobile-first approach:** Start with the mobile layout and add complexity at larger breakpoints.

```tsx
{/* Stack on mobile, 2 columns on tablet, 3 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Common Grid Patterns

### Card Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### Sidebar + Content

```tsx
<div className="flex flex-col lg:flex-row gap-8">
  <aside className="lg:w-64 lg:shrink-0">
    {/* Sidebar navigation */}
  </aside>
  <main className="flex-1 min-w-0">
    {/* Main content */}
  </main>
</div>
```

### Two-Column Form

```tsx
<form className="space-y-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Input label="First Name" />
    <Input label="Last Name" />
  </div>
  <Input label="Email" type="email" />
  <Textarea label="Bio" />
</form>
```

---

## Responsive Tips

- **Test at 320px minimum** — Ensure no horizontal overflow on the smallest phones.
- **Use `min-w-0` on flex children** — Prevents text content from overflowing flex containers.
- **Stack on mobile, split on desktop** — The most common responsive pattern. Use `flex-col lg:flex-row` or grid column changes.
- **Increase spacing at breakpoints** — `gap-4 md:gap-6 lg:gap-8` gives content more room as screens grow.
- **Hide secondary content on mobile** — Use `hidden md:block` for non-essential sidebar content.
