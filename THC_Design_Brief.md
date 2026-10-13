# THC Design Brief: Design Direction Checkpoint

Use the `thc-site-builder` skill and `/docs/PRD.md`. This brief overrides the skill on visual design only. Do NOT start Phase 2 components. Build the vertical slice below, then stop and show it.

## 1. The problem

Phase 1 looks like a generic startup template: cream background, serif headline, coral button, rounded cards, a stat row, no people, no imagery, no point of view. It also resembles the current THC site. The new site must look and feel clearly different and must be **people-first and alive**: a front door to a network, not a brochure.

## 2. What we are taking from the sites we like (inspiration only)

Do not copy layouts pixel for pixel, assets, names or copy. Take the ideas, then make them THC's own.

**The Product Folks (theproductfolks.com)**
- Big, confident two-line hero where the second line is an *italic accent*, with a hand-drawn style line under it.
- Proof right under the hero: "Join 250k+ leaders" plus a scrolling logo marquee.
- Events presented as a **system of formats**, each with cadence ("every month"), number of cities, a scrolling city strip, and a strip of 3 photos.
- Leaders/mentors grid with portrait, name, title.
- Job cards with location, level, type chips; newsletter cards; testimonials; partner CTA.
- Nav grouped by intent, with one clear Join CTA.

**Dseide (dseide.com)**
- A live **event banner above the hero** ("Register for ... Meetup on <date>").
- A hero surrounded by a **collage of real people**, so the page feels populated.
- Audience chips (Hospital/Clinics, Universities, Associations, Community Builders) to show who belongs.
- Numbered "how it works" steps (Be seen and verified, Join the right circle, Connect, Stay informed).
- Six benefit cards written as outcomes (Verified Networks, Dynamic Discoveries, ...), plus a FAQ.

**ET HealthWorld AI Diagnostics 2026:** not reviewed yet. Use the Event template from the skill for now.

## 3. THC's own signature (this is what makes it different)

1. **The pulse line.** A thin ECG-style SVG line is the brand's recurring motif. It forms the logo mark, threads through the hero behind the content, replaces plain dividers between sections, and appears as the loading state. One reusable `<PulseLine variant>` component, stroke uses `--ink` or `--coral`, animated draw-in once (disabled with reduced motion).
2. **Search-first hero built on the Directory.** The core product promise is "reach the right person". The hero lets visitors start doing that immediately.
3. **Populated, human page.** Always show people: avatar stacks, profile cards, a portrait collage. Until real photos exist, use a `PhotoSlot` component with a graceful fallback (initials on a Lilac, Teal-tint or Coral-tint tile with Ink text). Real photos drop in later via content, no code change.
4. **Paper and Ink rhythm.** Alternate Paper sections with full-width Ink bands so the page has contrast and pacing, not one flat cream scroll.
5. **Italic accent headlines**, one per headline, in the display serif.

## 4. Slice to build now (homepage, top to bottom)

All copy and numbers come from `/content`. Anything fictional is labelled "Sample data".

**A. Header.** New THC wordmark with a pulse-line monogram (replace the "T" square). Nav: Community, Events, Learn, Directory, Jobs, Partner, and a coral **Join** button. Solid Paper background with a 1px `--line` border. No blur, no translucency.

**B. Event banner** (above the hero, thin Ink strip). Next featured event from content: "Next: <title>, <city>, <date>" with a Register link. Auto-selected by date.

**C. Hero.**
- Eyebrow: "India's healthtech community".
- H1 at 80 to 96px desktop, 44px mobile: "Where India's healthtech *connects*." (one italic accent).
- One-line subhead about reaching the right hospital, investor or founder.
- Search bar (large, rounded): placeholder "Find a hospital pilot partner in Pune". Below it, 4 suggestion chips (e.g. "Investors in Mumbai", "AI diagnostics founders", "Regulatory advisors", "Clinical validation"). Submitting goes to `/directory` with the query.
- Right side (desktop) or below (mobile): a staggered collage of 5 to 6 directory profile cards (from `directory.json`) with slight offsets, Verified badges, and the pulse line passing behind them. Subtle float on hover only.
- Primary CTA Join (coral fill, Ink text), secondary "Explore events".

**D. Proof strip.** Scrolling marquee of partner wordmarks (text placeholders), plus 4 stat tiles. Stats are labelled "Sample data" and come from content. Marquee pauses on hover and respects reduced motion.

**E. "Gather" system (Ink band).** Three event formats side by side, each with: name, who it is for, cadence ("Monthly"), number of cities, a city-name marquee strip, and a 3-tile PhotoSlot strip. Invent original format names for THC (not Product Folks' names). Pulse line as the band divider.

**F. Directory preview.** Headline with italic accent, 6 profile cards from content, filter chips by category (functional: clicking filters the 6), and a "Browse the Directory" CTA. Verified badge: Ink text on Teal fill.

**G. Audience chips and "how it works".** "Who's in the room": chips for Founders, Investors, Hospitals and Clinics, Clinicians, Corporates and Pharma, Policy. Then 4 numbered steps (Get verified, Join your circle, Meet the right people, Stay ahead) as an outcome-written row.

Stop here. Do not build sections beyond G in this pass.

## 5. Fix list (from review of Phase 1)

1. Remove the blurred coral/dark gradient blobs behind the header (no gradients, no glassmorphism).
2. Teal and coral fills carry **Ink text**, never white. Verified and "Config-Driven" style pills must pass contrast.
3. Remove dev-style nav ("Styleguide", "Content Data", "Phase 1 Status") from the public header. Keep the styleguide reachable at `/styleguide` only.
4. Move the Phase 1 status content (checklists, deliverables) to `/dev`. The homepage must read as the real homepage.
5. Label every stat, logo and person as sample data; no invented claims presented as fact.
6. Replace the placeholder "T" logo.

## 6. Rules

- Tokens only; no raw hex or one-off sizes. You may ADD tokens (e.g. `--ink-2` for Ink-band surfaces, `--lilac-2`) in `globals.css`, documented on `/styleguide`.
- No gradients, no emoji icons, no stock-doctor imagery, no lorem ipsum. Icons: lucide-react only.
- Mobile first. Check 390px, 768px, 1280px.
- Keyboard: visible focus on search, chips, cards; search is a real labelled form field.
- Motion limited to: pulse draw-in, marquee, hover lift. All off under `prefers-reduced-motion`.
- Keep content-driven: homepage section order still comes from `sections.json`.

## 7. Done when

- Looking at the page in a screenshot, it is clearly not a cream-background template: there is a pulse-line motif, people on screen, an Ink band, and a search-first hero.
- Every item in the fix list is closed.
- Build, lint and type-check pass; no console errors; no raw hex in components.
- You report: what you built, what you assumed, and what you want me to review. Then stop.
