---
title: React Installation
description: Install and set up Davis for React 18+ applications
---

# React Installation

Get started with Davis in your React application. This guide covers installation for React 18+ projects including Next.js, Remix, and other React frameworks.

{% callout type="warning" title="Existing Projects" %}
For existing projects with established styles, follow the [Existing Projects](/docs/guides/existing-projects) guide to avoid breaking your current design system.
{% /callout %}

---

## Install Packages

Install the Davis React package:

```bash
npm install @libretexts/davis-react
```

The `@libretexts/davis-react` package automatically includes `@libretexts/davis-core` as a dependency, so you get both components and design tokens in one installation.

### Peer Dependencies

Install required peer dependencies if you don't already have them:

```bash
npm install @headlessui/react react react-dom tailwindcss
```

---

## Import Styles

In your app's CSS entry file (e.g. `globals.css`), add:

```css
@import 'tailwindcss';
@import "@libretexts/davis-react/styles.css";
```

`@libretexts/davis-react/styles.css` handles everything in one import: it pulls in the Tailwind v4 theme (colors, typography, shadows, etc.), the base styles (CSS custom properties, heading scale, focus rings), and configures Tailwind to scan all Davis component files for utility classes.

Optionally, add the Tailwind Typography plugin if you render dynamic/Markdown content:

```css
@import 'tailwindcss';
@import "@libretexts/davis-react/styles.css";

@plugin '@tailwindcss/typography';
```

---

## Load Fonts

Davis uses **Atkinson Hyperlegible** for optimal legibility. You can load it via Google Fonts or self-host it for better performance and privacy.

### Option 1: Google Fonts CDN (Quick Start)

```css
/* In your main CSS file */
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
```

### Option 2: Next.js Font Optimization (Recommended)

```tsx
// app/layout.tsx or pages/_app.tsx
import { Atkinson_Hyperlegible } from 'next/font/google';

const atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={atkinson.className}>
      <body>{children}</body>
    </html>
  );
}
```

See the [Fonts](/docs/getting-started/fonts) guide for self-hosting, performance optimization, and more framework-specific instructions.

---

## Quick Start Example

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

## Next Steps

Ready to build? Explore our design foundations and component patterns:

- [Architecture](/docs/foundation/architecture) - Understand the package structure
- [Colors](/docs/foundation/colors) - Seven semantic colors with full shade ranges
- [Typography](/docs/foundation/typography) - Major Third typographic scale
- [Spacing](/docs/foundation/spacing) - 4px grid spacing system
- [Layout](/docs/foundation/layout) - Page structure and responsive patterns
- [Accessibility](/docs/guides/accessibility) - WCAG 2.2 AA guidelines
- [Component Patterns](/docs/guides/patterns) - Real-world usage examples
