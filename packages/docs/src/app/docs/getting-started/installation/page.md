---
title: Installation
description: How to install and set up Davis in your project
---

# Installation

Get started with Davis by installing the appropriate packages for your framework.

---

## React Installation

Heads up! For existing projects, please follow the [Existing Projects](/docs/guides/existing-projects) guide to avoid breaking your current styles.

### Install Packages

Install the Davis React package and its peer dependencies:

```bash
npm install @libretexts/davis-react @libretexts/davis-core
```

Peer dependencies:

```bash
npm install @headlessui/react react react-dom tailwindcss
```

---

## Tailwind Preset Setup

In your project's `tailwind.config.js`, add the Davis preset:

```js
// tailwind.config.js
module.exports = {
  presets: [require("@libretexts/davis-core/tailwind.preset")],
  content: [
    "./src/**/*.{ts,tsx}",
    // Include Davis component classes in content scan
    "./node_modules/@libretexts/davis-react/dist/**/*.{js,mjs}",
  ],
};
```

This gives your project the full Davis design token system: colors, typography scale, shadows, border radius, and font family.

---

## Import Styles

In your app's entry CSS file:

```css
@import "@libretexts/davis-core/base.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Or import the pre-built stylesheet from the React package:

```js
import "@libretexts/davis-react/styles.css";
```

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

## Design Tokens Only

If you only need the design tokens (colors, spacing, typography) without components:

```bash
npm install @libretexts/davis-core
```

Then use the Tailwind preset as shown above. The core package exports design tokens, the Tailwind preset, base CSS, and variant class definitions—all framework-agnostic.

---

## Next Steps

Ready to build? Explore our design foundations and component patterns:

- [Colors](/docs/design-tokens/colors) - Seven semantic colors with full shade ranges
- [Typography](/docs/design-tokens/typography) - Major Third typographic scale
- [Spacing](/docs/design-tokens/spacing) - 4px grid spacing system
- [Layout](/docs/design-tokens/layout) - Page structure and responsive patterns
- [Accessibility](/docs/guides/accessibility) - WCAG 2.1 AA guidelines
- [Component Patterns](/docs/guides/patterns) - Real-world usage examples
