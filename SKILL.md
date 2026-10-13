---
name: thc-site-builder
description: Builds the new Healthtech Collective (THC) community website from the PRD in phases, using the THC design tokens, a content-driven (dynamic) architecture, and a mock-data Directory. Use whenever the task mentions THC, The Healthtech Collective, the THC website relaunch, the healthtech community site, the Directory section, THC brand or design tokens, or says "build the next phase". Use it even if the user only says "continue the site" or "build the homepage" inside this repo.
---

# THC Site Builder

Build the THC website in small, verified phases. The product requirements live in `/docs/PRD.md` (the full PRD). This skill tells you HOW to build it: stack, design system, phase order, and checks. If this skill and the PRD conflict on stack or design tokens, this skill wins. If they conflict on scope, the PRD wins. If anything is ambiguous, state your assumption in one line and continue.

## Ground rules

1. **One phase at a time.** Read `/docs/PRD.md` fully once, then do only the phase you were asked for. Never start the next phase on your own.
2. **Content is data.** No section copy, event, person, job, stat or FAQ is hard-coded in a component. Components receive props; pages query content from `/content`. This is what makes the site dynamic.
3. **Tokens only.** Never write a raw hex, pixel font size or ad-hoc shadow in a component. Use the tokens below.
4. **Mock data is labelled.** Anything fictional shows a small "Sample data" note in the UI.
5. **No scope invention.** Do not add login, payments, a social feed, messaging or real personal data.
6. **Finish with a check.** At the end of each phase, run the phase checklist, fix failures, then report what passed, what you assumed, and what is left.

## Locked stack

- Next.js (App Router) + TypeScript, Tailwind CSS configured from the tokens below.
- Content: local files in `/content` (JSON for events, directory, jobs, stats, faq, partners, testimonials; Markdown for articles). Access only through a thin layer in `/lib/content.ts` so a headless CMS (Sanity or Strapi) can replace it later without touching components.
- Client-side search with Fuse.js for the Directory.
- Fonts via `next/font`: **Fraunces** (display, with italic) and **Inter** (body/UI).
- Images via `next/image`; AVIF/WebP.
- No other UI frameworks or component libraries unless asked.

## Design language

**Idea:** warm, credible, connected. A trusted network with a human pulse, closer to a great conference than a hospital brochure.

**Headline pattern:** a plain phrase with ONE italic accent word or phrase, in the display serif. Example: "Where India's healthtech *connects*." At most one italic accent per headline.

**Voice:** direct, optimistic, specific. Short sentences. Describe outcomes ("meet your first hospital pilot partner"), not mechanics.

### Tokens (put in `app/globals.css` and mirror in `tailwind.config`)

```css
:root {
  /* colour */
  --ink: #0E1424;          /* base dark, primary text */
  --paper: #F6F3EC;        /* base light, page background */
  --coral: #FF5A4F;        /* FILL ONLY: CTAs, highlights */
  --coral-text: #C8372D;   /* coral when used as text/link on paper (4.7:1) */
  --teal: #0FA3A3;         /* FILL ONLY: verified, positive states */
  --teal-text: #0B7A7A;    /* teal as text on paper (4.7:1) */
  --lilac: #E7E3FF;        /* soft highlight surfaces */
  --slate: #5B6475;        /* secondary text on paper (5.4:1) */
  --line: rgba(14, 20, 36, 0.12);

  /* type scale (px) */
  --fs-display: 64; --fs-h1: 44; --fs-h2: 32; --fs-h3: 24;
  --fs-lead: 18; --fs-body: 16; --fs-small: 14;
  /* line height: display 1.05, headings 1.15, body 1.55 */

  /* shape */
  --radius-card: 20px; --radius-chip: 999px; --radius-input: 12px;
  --shadow-card: 0 1px 2px rgba(14,20,36,.06), 0 8px 24px rgba(14,20,36,.06);

  /* spacing: 4px base. Section padding 96px desktop / 56px mobile */
  /* motion */
  --ease: cubic-bezier(.2,.7,.2,1); --dur-fast: 200ms; --dur: 300ms;
}
```

### Colour rules (accessibility, verified)

- Body text: Ink on Paper (16.6:1). Secondary text: Slate on Paper (5.4:1).
- **Coral and Teal on Paper fail contrast as text (about 2.8:1).** Use them only as fills. Put **Ink text on a coral or teal fill** (about 6:1). When coral or teal must be text or a link on Paper, use `--coral-text` / `--teal-text`.
- On Ink backgrounds, Paper text and Coral/Teal accents are all fine.
- Paper and Ink make up about 80% of any screen. One coral highlight per section.

### Layout

- 12-column grid, max content width 1200px, 24px gutters (16px mobile). Mobile-first; test at 390px, 768px, 1280px.
- Generous whitespace. Thin 1px `--line` dividers. Cards use `--radius-card` and `--shadow-card`.

### Components to build once and reuse (with all states)

Button (primary coral fill + Ink text, secondary outline, text link; default, hover, focus-visible, disabled, loading), Chip (default, selected), Card variants (Event, Person, Job, Article), Nav (desktop + mobile drawer), Event banner, Accordion, Form field (default, focus, error), Badge (Verified in teal, Featured, Members-only), Stat tile, Logo wall (marquee, pauses on hover and respects reduced motion), Section header (eyebrow + title with italic accent + optional CTA).

### Motion

Subtle scroll reveal, logo marquee, stat count-up; 200 to 300 ms with `--ease`. Honour `prefers-reduced-motion` by disabling all of it.

### Imagery

Real event and member photography slots first (use neutral placeholders until supplied). Simple line-and-pulse motifs where illustration is needed. **No** stock stethoscope or stock-doctor imagery, **no** gradients, no glassmorphism.

### Don't list

- No raw hex values or one-off font sizes in components.
- No coral or teal body text on Paper.
- No more than one italic accent per headline.
- No emoji as icons. Use one consistent line-icon set (lucide-react).
- No lorem ipsum. Use realistic copy in the THC voice.

## Content model (`/content`)

Create typed schemas in `/lib/types.ts` for: Event, Person, DirectoryProfile, Job, Article, Partner, Testimonial, Circle, Stat, FAQ, PageSection (homepage block order and visibility). Seed each with realistic placeholder content in the THC voice.

Dynamic behaviours that must work from data alone:
- Next featured event drives the hero event banner and the "What's next" list; past events move to an archive automatically by date.
- Homepage sections render from a `PageSection` list, so order and visibility can be changed in content without code changes.
- Stats, FAQ, testimonials, partners and jobs are all list-driven.

## Directory (v1 mock)

Seed data: `assets/directory.json` (copy to `/content/directory.json`; do not invent different profiles). Required behaviour:

- Directory preview on the homepage (6 cards) and a full `/directory` page.
- Keyword search (name, headline, organisation, bio, focus areas).
- Filters: category, focus area, city, "can help with", "open to". Show active filters as removable chips and a result count; handle zero results with a helpful empty state.
- Sort: relevance or recently verified.
- Person card: avatar (initials fallback), name, headline, category chip, city, Verified badge if `verified`, two tags.
- Profile drawer (keyboard accessible, focus-trapped, Esc closes): bio, tags, links, "Request intro".
- "Request intro" form: who you are, why, what you need. Validates, then shows a success state. No data is sent anywhere in v1; add a clear `TODO(phase-3)` where the API call goes.
- `members-only` profiles show a locked state with a "Join to view" CTA.
- Footer note on the page: "Sample data for design review."
- Real data, verification, consent, double opt-in and an audit log are Phase 3 and out of scope now.

## Phases

Do exactly the phase requested. Each phase ends with its checklist.

**Phase 1: Scaffold and tokens.** Create the project, Tailwind config from tokens, fonts, global styles, `/docs/PRD.md`, `/content`, `/lib`, folder structure, ESLint and Prettier. Check: app builds and runs; a `/styleguide` page shows every token (colours with contrast labels, type scale, radius, shadow).

**Phase 2: Components.** Build every component in the list above with all states, plus Storybook-style demos on `/styleguide`. Check: keyboard focus visible on all interactives; no raw hex in components (search the codebase); mobile nav works.

**Phase 3: Homepage.** All 13 sections in PRD section 6, from content files and the `PageSection` list. Check: reorder two sections in content and confirm the page follows; Lighthouse mobile performance 90+ and accessibility 95+; no layout shift; works at 390px.

**Phase 4: Events.** Event list (upcoming and past), event detail template (hero with date/venue and one register CTA, agenda with tracks, speakers, sponsors, recap), live event banner. Check: changing an event date in content moves it between upcoming and past without code changes.

**Phase 5: Directory.** As specified above. Check: every filter and search works on the 8 seed profiles; drawer is keyboard accessible; empty state and members-only state render.

**Phase 6: Remaining pages and forms.** Community, Learn (newsletter and articles), Jobs, Partner, Join, FAQ, legal stubs. Forms validate and post to a single `/api/forms` stub. Check: SEO basics (metadata, Open Graph, sitemap, structured data for events and jobs), 404 and error pages.

**Phase 7 (later, only if asked): CMS and real Directory.** Swap `/lib/content.ts` to the chosen headless CMS; build the consent, verification and double opt-in flow before any real profile is stored.

## Quality gate before reporting a phase done

1. `build`, `lint` and type-check pass with no warnings.
2. No raw hex values, hard-coded section copy, or console errors.
3. Tested at 390px, 768px and 1280px.
4. Keyboard-only walkthrough of the new UI works; contrast follows the colour rules.
5. Report: what was built, what you assumed, anything skipped and why, and the exact next-phase prompt the user can paste.

## What to ask the user (only if blocking)

Logo files and any brand assets that must be kept; real event data; the screenshots or content of the ET HealthWorld AI Diagnostics page if section designs for event microsites are needed; whether the Directory should live on THC, on Orbyt, or both. If not blocking, assume and continue.
