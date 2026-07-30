---
title: Overview
description: What Davis is and how the documentation is organized.
---

Davis is an accessibility-first design system with a framework-agnostic core and
matching React and Vue implementations, built on Tailwind CSS v4, HeadlessUI,
and TypeScript.

## How these docs work

- **Component pages** render the real component live — in React and Vue — and
  their prop tables are generated from the component source, so they stay in
  sync with the library automatically.
- **About** pages are hand-authored narrative: principles, history, and
  conventions.
- The interactive **workshop** (Storybook) hosts the exhaustive matrix of states
  and controls; these docs link into it where deeper exploration helps.

## Packages

| Package | Description |
| --- | --- |
| `@libretexts/davis-core` | Design tokens, variants, generated CSS. |
| `@libretexts/davis-react` | React components. |
| `@libretexts/davis-vue` | Vue 3 components. |
| `@libretexts/davis-react-table` / `-vue-table` | Data table components. |

Head to [Installation](/getting-started/installation/) to add Davis to a project.
