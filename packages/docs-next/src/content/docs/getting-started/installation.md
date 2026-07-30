---
title: Installation
description: Install Davis in a React or Vue project.
---

## React

```bash
npm install @libretexts/davis-react
npm install @headlessui/react react react-dom tailwindcss
```

In your CSS entry point:

```css
@import "tailwindcss";
@import "@libretexts/davis-react/styles.css";
```

## Vue

```bash
npm install @libretexts/davis-vue
npm install vue tailwindcss
```

In your CSS entry point:

```css
@import "tailwindcss";
@import "@libretexts/davis-vue/styles.css";
```

The `styles.css` import pulls in the Tailwind v4 theme, base styles, and a
generated component safelist — no extra `@source`/`content` configuration
needed. See [Conventions](/about/conventions/) for how the token pipeline works.
