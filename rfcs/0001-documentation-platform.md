# RFC 0001 — Documentation Platform for Davis

**Status:** Accepted — Astro Starlight. Prototype landed in `packages/docs-next`.
**Author:** Documentation research (Claude Code)
**Date:** 2026-07-30
**Branch:** `claude/design-system-docs-research-abtx1l`

> **Prototype (RFC Phases 1–3):** `packages/docs-next` is a working Starlight
> site proving the architecture on the `Button` component. It renders the real
> React **and** Vue Button live on the same page, auto-generates prop tables
> from component source (the `warning` variant and `softDisabled` JSDoc appear
> with no hand-authoring), and includes a hand-authored **About** section
> (principles, history, conventions) confirming long-form narrative content is
> first-class. `npm run build` and `astro check` both pass. See its README.

---

## 1. Summary

The Davis docs site (`packages/docs`, Next.js 15 + Markdoc) works, but it is
hand-written prose and code fences with **no live component rendering**, its
prop tables and examples are maintained by hand, and it has already drifted
badly from the real library. Meanwhile the repository already contains a
near-complete, self-documenting **Storybook** (46 React + 42 Vue stories) that
renders live examples and can auto-generate prop tables from our TypeScript
types — it just isn't powering the public site.

**Recommendation:** Replace the Next.js/Markdoc site with **Astro Starlight**
as the public documentation site, and **keep Storybook** as the component
workshop and the shared source of truth for live examples and prop metadata.
Starlight is the only single platform that satisfies every stated goal: live
visual examples, self-documentation (no drift), a lighter footprint than
Next.js, and the ability to "dogfood" Davis in the docs chrome. Critically,
it is also the only mainstream static-site framework that can live-render
**both** React and Vue components on the same page — which a React-based
Next.js site fundamentally cannot.

If minimal effort is valued over dogfooding and a polished marketing site,
**Storybook-only** is the lower-cost fallback (see §6).

---

## 2. Current state (what the research found)

### 2.1 The public site is entirely hand-authored, code-only
- 68 `page.md` Markdoc files. The component pages (e.g. `button/page.md`) show
  **only code fences** — a reader never sees a rendered `<Button>`, only a
  string that says `<Button>`. This is the core of "no actual visual examples."
- Prop tables are hand-typed Markdown. They can — and do — drift from source.

### 2.2 Concrete, measurable drift (the sync problem, quantified)
- **43 of 68** doc pages still display "Coming soon" for Vue, even though the
  Vue package ships **87 components**. The docs actively misinform users.
- `button/page.md` documents a `warning` variant and "seven variants"; the
  React Button story enumerates **six** (no `warning`). Two hand-maintained
  lists, already out of step.
- Prop tables, variant lists, and examples are each a separate manual copy of
  information that already exists — typed — in the component source.

### 2.3 The self-documenting engine already exists — it's just not the site
- `packages/react/.storybook` and `packages/vue/.storybook` are configured with
  `autodocs: true`, `@storybook/addon-docs`, and `@storybook/addon-a11y`.
- **46 React stories** (for 47 components) and **42 Vue stories** already render
  live, interactive examples with Controls.
- Component props are fully typed with JSDoc (e.g. Button's `softDisabled` has a
  rich doc comment) — exactly what `react-docgen-typescript` / `vue-docgen-api`
  consume to generate prop tables automatically. **No docgen is wired up today**,
  so this value is unrealized on the public site.
- Two additional published packages, `@libretexts/davis-react-table` and
  `@libretexts/davis-vue-table`, also have Storybooks and need docs.

### 2.4 Operational weight
- Next.js is deployed via OpenNext → Cloudflare Workers (`open-next.config.ts`,
  `wrangler.jsonc`) for what is a static content site — heavier runtime and
  build than a static generator needs.

### 2.5 Information architecture (to preserve on migration)
11 nav groups: Getting Started, Foundation, Layout, Typography, Forms,
Navigation, Feedback, Overlays, Display, Accessibility, Guides — plus
Templates and a Showcase. This IA is good and should be carried over verbatim.

---

## 3. Goals & how we'll judge the options

Ranked by the emphasis in the request:

1. **Live visual examples** of components (the headline problem).
2. **Self-documenting** — components document themselves so docs can't drift.
3. **Lighter to maintain** than the current Next.js setup.
4. **Dogfooding** Davis in its own docs — explicitly a "nice touch," not a
   hard requirement.

Constraints: dual React **and** Vue; keep static Cloudflare deploy; preserve
the existing IA, `/docs/*` URLs, and the accessibility-first identity.

---

## 4. Options considered

### Option A — GitBook (the idea raised in the request)
Hosted Markdown documentation platform.

**Pros**
- Excellent writing/collaboration/publishing UX; near-zero infra to operate.
- Fast to stand up; good hosted search; clean reading experience.

**Cons (disqualifying for our top two goals)**
- **Cannot render live React/Vue components.** It's a prose platform; the best
  it offers is static images or external iframes — so "visual examples" would
  remain screenshots or an embedded Storybook, i.e. *more* surfaces to keep in
  sync, not fewer.
- **No self-documentation.** Prop tables stay hand-written and keep drifting —
  the exact problem we're trying to eliminate.
- **Cannot dogfood Davis** — the reader sees GitBook's UI, not ours.
- Content moves into GitBook's system (or a synced Markdown mirror) — another
  sync surface; team/private publishing is paid.

**Verdict:** Fails goals 1, 2, and 4. Good general docs tool, wrong tool for a
component library. **Not recommended.**

### Option B — Keep Next.js, add live examples (MDX + docgen)
Stay on Next, render real components in MDX, wire docgen for prop tables.

**Pros**
- Reuses existing content, framework tabs, showcase, and Cloudflare pipeline.
- Full design control → can fully dogfood Davis.

**Cons**
- Doesn't address the "Next feels heavy" concern — arguably adds to it.
- **Can't live-render Vue** components in a React/Next site, so a dual-framework
  system is stuck showing Vue as code only (the current failure, entrenched).
- We'd hand-build the self-doc machinery anyway. High effort, keeps the heaviest
  runtime.

**Verdict:** Solves examples for React only; least improvement on maintenance.

### Option C — Storybook as the primary docs (autodocs)
Promote the existing Storybook to *be* the documentation site.

**Pros**
- **Already built** — 88 stories across React + Vue; live, interactive examples
  with Controls today. Fixes "code-only" immediately.
- **Self-documenting props** via `autodocs` + `react-docgen-typescript` /
  `vue-docgen-api` straight from our typed props + JSDoc → kills drift.
- `addon-a11y` already wired — on-brand for an a11y-first system; shows live
  accessibility checks.
- Renders **both** React and Vue natively. Static `storybook build` → Cloudflare
  Pages, same as today. Lowest effort of the "good" options.

**Cons**
- Storybook's chrome is **not** Davis — loses the dogfooding "nice touch"
  (themable, but never truly our UI).
- Weaker for long-form conceptual/marketing pages (Getting Started, Foundation,
  Guides). Storybook MDX Docs exist but the IA reads developer-first.
- React and Vue are **two** Storybooks; needs **Storybook Composition** to
  present one unified site with a framework switch.

**Verdict:** Best fit for goals 1–3 at the lowest cost; sacrifices goal 4 and
polished narrative docs. Strong fallback.

### Option D — Astro Starlight (recommended)
A lightweight, static documentation framework. Astro's islands architecture can
mount components from **any** framework — React and Vue — live on the same page.

**Pros**
- **Lighter than Next**: static output, fast builds, deploys to Cloudflare Pages
  as plain static assets. Directly answers goal 3.
- **Live examples for both frameworks**: import the real `@libretexts/davis-react`
  and `@libretexts/davis-vue` components into MDX and render them as islands.
  Uniquely handles our dual-framework requirement.
- **Self-documenting**: a small build step runs `react-docgen-typescript` +
  `vue-docgen-api` over the component sources and emits JSON; a `<PropsTable>`
  component reads it — prop tables regenerate from source, so they can't drift.
- **Reuse Storybook stories as the examples** (CSF is plain JS/TS): the same
  story renders in Storybook *and* on the docs page — one source of truth, zero
  new example-sync surface. Storybook stays as the dev workshop.
- **Dogfoods Davis**: Starlight component overrides + the landing/example pages
  are built with real Davis components — the docs *are* a Davis app.
- First-class docs features out of the box: full-text search (Pagefind), dark
  mode, i18n, versioning, sidebar/IA, edit-on-GitHub, great Lighthouse scores.
- Migration is mechanical: Markdoc `page.md` → MDX is largely find/replace
  (`{% callout %}` → `<Callout>`, `{% framework-tabs %}` → `<Tabs>`).

**Cons**
- The auto-props pipeline is a small amount of glue we own (docgen → JSON →
  `<PropsTable>`), not a turnkey feature.
- More upfront build-out than Option C (new site + migrate 68 pages), though
  the pages carry over mechanically.
- Astro/islands is a new tool for the team to learn (well-documented, gentle).

**Verdict:** The only single platform that satisfies **all four** goals and the
dual-framework constraint, while *reusing* — not discarding — the Storybook
investment. **Recommended.**

### Also considered — VitePress
Very light and Vue-native (Vue examples are trivial), but React live examples
require extra glue, making it asymmetric for a dual-framework system. Starlight's
even-handed multi-framework support makes it the better fit here.

---

## 5. Comparison matrix

| Criterion (weight) | GitBook | Next+MDX (B) | Storybook (C) | **Starlight (D)** |
|---|---|---|---|---|
| Live examples — React (1) | ❌ images/iframe | ✅ | ✅ | ✅ |
| Live examples — Vue (1) | ❌ | ❌ | ✅ | ✅ |
| Self-documenting props (2) | ❌ | ⚠️ DIY | ✅ built-in | ✅ docgen glue |
| Single source w/ stories (2) | ❌ | ⚠️ | ✅ | ✅ (imports CSF) |
| Lighter than Next (3) | ✅ hosted | ❌ | ✅ static | ✅ static |
| Dogfoods Davis (4) | ❌ | ✅ | ⚠️ themable | ✅ |
| Long-form / marketing docs | ✅ | ✅ | ⚠️ dev-first | ✅ |
| Effort to adopt | Low | High | **Low** | Medium |

---

## 6. Decision

**Adopt Astro Starlight** for the public documentation site; **retain
Storybook** as the workshop and shared source of truth (stories → live
examples, typed props → docgen → prop tables). Delete the Next.js/Markdoc site
once parity is reached.

This gives one authoring surface where components document themselves, live
examples for both frameworks, a lighter static runtime, and a docs site that is
itself built with Davis.

**Fallback:** if the team prefers minimal effort and is willing to give up
dogfooding and narrative polish, ship **Option C (Storybook-only)** with
Composition + docgen. It reaches goals 1–3 in a fraction of the time. This is
the one genuine fork; the plan below assumes Starlight but the docgen and
story-reuse work is shared with the fallback, so early effort is not wasted.

---

## 7. Implementation plan (Starlight)

### Phase 0 — Spike & alignment (0.5 day)
- Confirm the dogfooding-vs-effort call in §6 with the team.
- Prototype one Astro island rendering a live `<Button>` (React) and one Vue
  `<Button>` on the same page to de-risk the multi-framework setup.

### Phase 1 — Scaffold the site (1 day)
- Add `packages/docs-next` (temporary name) with Astro + `@astrojs/starlight`,
  `@astrojs/react`, `@astrojs/vue`, and Tailwind v4.
- Import Davis base CSS/tokens so the docs render in the real design system.
- Port the 11-group IA from `packages/docs/src/lib/navigation.ts` into Starlight
  sidebar config. Preserve all `/docs/*` URLs (add redirects for any changes).

### Phase 2 — Self-documenting prop tables (1–2 days)
- Add a build script that runs `react-docgen-typescript` over
  `packages/react/src/components/*.tsx` and `vue-docgen-api` over
  `packages/vue/src/components/*.vue`, emitting `props.generated.json`.
- Build a `<PropsTable component="Button" framework="react|vue" />` MDX
  component that reads that JSON. Prop names, types, defaults, and JSDoc
  descriptions now come straight from source.
- Wire generation into `predev`/`prebuild` so it never goes stale.

### Phase 3 — Live examples from stories (1–2 days)
- Add an `<Example>` / `<Preview>` MDX component that renders a story (or an
  inline snippet) as a live island **and** shows its source, side by side.
- Import existing CSF stories so Storybook and the docs share one example
  source. Add a `<FrameworkTabs>` island to switch React/Vue live.
- Establish the per-component page template: intro → live examples → auto
  `<PropsTable>` → accessibility notes.

### Phase 4 — Content migration (2–3 days)
- Mechanically convert 68 `page.md` Markdoc files to MDX (`{% callout %}` →
  `<Callout>`, `{% framework-tabs %}`/`{% tab %}` → `<Tabs>`/`<TabItem>`,
  fences → `<Example>` where a live demo belongs).
- **Delete every "Coming soon" Vue stub** and render real Vue examples — the
  single biggest accuracy win.
- Migrate Foundation (colors/typography/spacing), Guides, Templates, and the
  Showcase (rebuild as a Davis-dogfooded landing page).
- Cover `react-table` / `vue-table` as first-class component docs.

### Phase 5 — Search, deploy, cutover (1 day)
- Enable Pagefind search; verify a11y (the docs must pass our own bar), dark
  mode, and Lighthouse.
- Point the Cloudflare Pages project at the Astro static build; keep the
  Storybook static build published at `/storybook` (or a subdomain) as the
  workshop.
- Add CI: build docs + Storybook, run docgen, link-check, on every PR.
- Redirect old routes, flip DNS, then **remove `packages/docs`** (Next.js,
  OpenNext, Wrangler runtime) and its dependencies.

### Phase 6 — Guardrails against future drift (0.5 day)
- CI check: every exported component has a story and a docs page (fail the
  build otherwise). Add this to the "Adding a New Component" checklist in
  `CLAUDE.md`.
- Since prop tables and examples now derive from source, adding a variant or
  prop updates the docs automatically.

**Rough total:** ~7–10 working days for full parity + cutover. The Storybook
fallback (Option C) is ~2–3 days and shares Phases 2–3.

---

## 8. Risks & mitigations
- **Cross-framework island glue** → de-risked by the Phase 0 spike; Astro
  officially supports mixed React/Vue islands.
- **docgen edge cases** (polymorphic `as`, generics like `ButtonProps<C>`) →
  allow a per-component manual override JSON that merges over generated output.
- **Migration churn / broken links** → automated Markdoc→MDX codemod + CI
  link-checker + explicit redirects; migrate behind a feature branch until parity.
- **Two build systems during transition** → time-boxed; `packages/docs` is
  deleted at cutover so we don't carry both long-term.

---

## 9. Open questions for the team
1. **Dogfooding vs. effort** — proceed with Starlight (recommended), or take the
   faster Storybook-only path (§6 fallback)?
2. Should Storybook remain publicly linked as the "workshop," or stay
   internal-only with Starlight as the sole public face?
3. Do we need **versioned** docs (per release) now, or is "latest" sufficient?
