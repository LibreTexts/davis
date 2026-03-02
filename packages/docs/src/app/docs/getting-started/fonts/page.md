---
title: Fonts
description: How to load and configure fonts for Davis Design System
---

# Fonts

Davis uses **Atkinson Hyperlegible** as its default typeface. This font was specifically designed for legibility and accessibility, making it an ideal choice for an a11y-first design system.

---

## Why Atkinson Hyperlegible?

Atkinson Hyperlegible was developed by the [Braille Institute](https://brailleinstitute.org/) to maximize legibility for readers with low vision. Key features:

- **Enhanced character differentiation** — Similar letters (like I, l, 1) are easier to distinguish
- **Open letterforms** — Wider openings in letters like 'c', 'e', 's' improve readability
- **Generous spacing** — Better letter spacing reduces visual crowding
- **Free and open** — Available under SIL Open Font License

This aligns perfectly with Davis's WCAG 2.2 AA compliance goals.

---

## Font Loading Options

Choose the approach that best fits your framework and deployment strategy.

### Google Fonts CDN (Recommended)

For most frameworks, use the Google Fonts CDN for easy setup and optimal performance:

```css
/* In your main CSS file */
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');
```

Or in your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet">
```

**Benefits:**
- Zero configuration
- Shared CDN caching
- Fast global delivery

---

### Self-Hosted

For full control, self-host the font files:

1. **Download fonts** from [Google Fonts](https://fonts.google.com/specimen/Atkinson+Hyperlegible)
2. **Add font files** to your project (e.g., `public/fonts/`)
3. **Declare @font-face** in your CSS:

```css
@font-face {
  font-family: 'Atkinson Hyperlegible';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/atkinson-hyperlegible-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Atkinson Hyperlegible';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/atkinson-hyperlegible-bold.woff2') format('woff2');
}
```

**Benefits:**
- No external dependencies
- Complete control
- Best for offline apps

---

### Next.js

Next.js provides automatic font optimization with zero configuration. Use the built-in `next/font/google` module to load Atkinson Hyperlegible:

```tsx
// app/layout.tsx or pages/_app.tsx
import { Atkinson_Hyperlegible } from 'next/font/google';

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={atkinsonHyperlegible.variable}>
      <body>{children}</body>
    </html>
  );
}
```

**Benefits:**
- Self-hosted (no external requests)
- Automatic subsetting (~30-40% smaller)
- Zero layout shift
- Optimal caching

---

## Font Weights

Davis uses only **two font weights** to keep bundle sizes minimal and visual hierarchy clear:

| Weight | Use Case |
|--------|----------|
| **400 (Regular)** | Body text, descriptions, secondary content |
| **700 (Bold)** | Headings (h1–h2), strong emphasis, key actions |

Additional weights (500, 600) can be used via Tailwind utilities (e.g., `font-medium`, `font-semibold`), but they'll fall back to these two loaded weights.

---

## System Font Fallback

Davis uses a comprehensive fallback stack that loads instantly while custom fonts download:

```css
font-family: 'Atkinson Hyperlegible', ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

This ensures text is always readable, even if the custom font fails to load.

---

## Performance Tips

### 1. Preload Critical Fonts
If self-hosting, preload the regular weight for faster initial render:

```html
<link rel="preload" href="/fonts/atkinson-hyperlegible-regular.woff2" as="font" type="font/woff2" crossorigin>
```

### 2. Use `font-display: swap`
Always use `font-display: swap` to show text immediately with fallback fonts while the custom font loads. This is included in all examples above.

### 3. Load Only What You Need
Davis requires only 2 weights (400, 700). Avoid loading additional weights or italic variants unless your design specifically needs them.

---

## Verifying Font Loading

Once configured, verify fonts are loading correctly:

1. **Inspect element** in DevTools → Computed styles → Check `font-family`
2. **Network tab** → Filter by "Font" → Confirm fonts are loading
3. **Use Tailwind classes** like `font-sans` to test:

```tsx
<p className="font-sans">This text uses Atkinson Hyperlegible</p>
```

---

## Design Token Integration

The font family is defined in Davis's core tokens at `@libretexts/davis-core/tokens.ts`:

```ts
export const FONT_FAMILY_SANS = [
  'Atkinson Hyperlegible',
  'ui-sans-serif',
  'system-ui',
  // ... fallbacks
] as const;
```

The Tailwind preset automatically applies this to all text using `font-sans` (the default).

---

## Next Steps

- [Typography](/docs/design-tokens/typography) - See the full type scale and usage guidelines
- [Accessibility](/docs/guides/accessibility) - Learn about WCAG 2.2 compliance
- [Installation](/docs/getting-started/installation) - Complete setup guide
