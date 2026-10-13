# THC Website Relaunch — PRD v0.1

*The Healthtech Collective · new website, new brand, dynamic by design · Draft for review*

## 1. Summary

The Healthtech Collective (THC) is positioned as India's largest healthtech community, but the current site does not behave like a community product. This PRD defines a full relaunch: a new brand system, a new site architecture, and a **content-driven (dynamic) website** where events, people, jobs, resources and partners are data, not hand-built pages. It also adds a **Directory** of people members can reach out to, shipped now as a mock-data section and built properly in a later phase.

**One-line product vision:** the front door to India's healthtech ecosystem. Every visitor should find the right room, the right people and the right next step within three clicks.

## 2. Goals and non-goals

**Goals**

- Make THC's scale and credibility obvious in the first screen (members, cities, events, partners).
- Convert visitors into one of four actions: join the community, register for an event, reach someone through the Directory, or partner with THC.
- Let the THC team publish and update everything (events, speakers, jobs, directory entries, case studies) without a developer.
- Establish a brand system that is ownable, consistent and easy for agents and designers to extend.
- Ship a credible Directory experience on mock data that can be swapped to real data without redesign.

**Non-goals (v1)**

- Full member login, messaging or a social feed (that is the territory of platforms like Dseide; THC stays a curated front door).
- Payments and ticketing beyond linking out to the existing registration tool.
- Real directory data, verification workflow and consent management (Phase 3).

## 3. What we are borrowing from the references

| Reference | What works | What we take |
| --- | --- | --- |
| **The Product Folks** | Clear nav grouped by intent (Learn / Grow / Gather); big hero with one italic accent phrase; proof strip ("250k+ leaders", logo wall); events organised by cadence and city; mentors grid; job board; newsletter; testimonials; partner CTA | Intent-based nav, proof-first homepage, event formats shown as a *system* (format, frequency, cities), mentors/leaders grid, jobs and newsletter modules, italic-accent headline style |
| **Dseide** | Strong content: verified identity, circles by specialty and region, "discover verified professionals", community-building tools, FAQ, investor and team sections, app badges, event banner above the hero | Content ideas for the Directory and Circles, "verified" trust language, benefits written as outcomes, FAQ block, a live event banner in the hero |
| **ET HealthWorld AI Diagnostics 2026** | Summit-microsite pattern | See note below |

> **Note on sources:** the live THC homepage renders only through JavaScript, so its current content could not be read automatically, and the ET HealthWorld page was blocked from automated access. Everything above for those two is assumption-level. Please paste or screenshot the ET page's sections (agenda, speakers, sponsors, register CTA) and the current THC nav so we can validate section 3 before design starts.

From a typical summit microsite we expect to reuse: a date-and-venue hero with a single register CTA, an agenda with tracks, a speaker grid, a sponsor tier wall, and a past-edition recap. We will build this as a reusable **Event template**, so every THC event gets this treatment from a data record.

## 4. Users and jobs to be done

| User | Job to be done | Primary action |
| --- | --- | --- |
| **Founder / operator** | Meet the right investors, buyers and peers | Join, use Directory, attend events |
| **Clinician / hospital leader** | Find credible innovators and trusted peers | Directory, events, circles |
| **Investor / corporate** | Source vetted deal flow and experts | Directory, partner enquiry |
| **Student / early-career** | Learn, get noticed, find roles | Resources, jobs, newsletter |
| **Partner / sponsor** | Reach the community credibly | Partner enquiry form |
| **THC admin** | Publish and manage everything quickly | CMS |

## 5. Information architecture

**Primary nav (intent-based):** Community · Events · Learn · Directory · Jobs · Partner · **Join**

**Sitemap**

- Home
- Community: about, mission, team, circles (by specialty and region), chapters/cities, membership tiers
- Events: upcoming, past, event detail (template), host an event
- Learn: newsletter, blog/insights, case studies, healthtech glossary, podcasts and masterclasses, market maps
- Directory: browse, filter, profile, request intro
- Jobs: board, post a role
- Partner: why partner, tiers, enquiry form, partner showcase
- Join: membership application
- Legal: privacy, terms, community guidelines, contact

## 6. Page specification: Homepage (dynamic sections)

Every section below is a **component fed by a content type** (see section 9), not static markup.

1. **Hero:** headline with one italic accent phrase, 1-line subhead, primary CTA (Join) and secondary CTA (Explore events). Above it, a live **event banner** pulled from the next featured event.
2. **Proof strip:** member count, cities, events hosted, partner logos. Numbers come from a Stats record so they can be updated or auto-computed later.
3. **What's next:** the next 3 events, auto-sorted by date, with Register buttons.
4. **How THC works:** the event and community formats shown as a system (format, who it is for, frequency, cities).
5. **Directory preview:** 6 rotating profile cards with a "Browse the Directory" CTA.
6. **Leaders under one roof:** curated speakers/mentors grid.
7. **Learn:** latest 3 insights plus newsletter signup.
8. **Jobs:** 3 featured roles from the job board.
9. **Circles and cities:** map or chip list of regions and specialties.
10. **Testimonials:** rotating quotes, filterable by persona.
11. **Partner CTA:** logo wall plus enquiry button.
12. **FAQ:** accordion, content-managed.
13. **Footer:** nav, social, newsletter, legal.

## 7. Directory (v1 mock, v2 real)

**Purpose:** let members find and approach the right person at the right moment: founders to investors, operators to hospital leaders, students to mentors.

**v1 scope (now):** a Directory section and a full Directory page driven by a local JSON file of mock profiles. It must look and behave like the real thing: search, filters, cards, profile drawer, "Request intro" button. Clearly marked as sample data in the UI footer.

**Profile data model**

| Field | Notes |
| --- | --- |
| id, slug | unique |
| name, photo, headline | headline = role at organisation |
| category | Founder, Investor, Hospital/Operator, Clinician, Corporate/Pharma, Policy/Regulator, Mentor |
| organisation, org\_type | startup, hospital, VC, corporate, government, academia |
| city, state | for region filter |
| focus\_areas | tags: AI diagnostics, digital health, medtech, payments/insurance, telehealth, pharma, policy |
| can\_help\_with | tags: fundraising, pilots, hiring, regulatory, distribution, clinical validation |
| open\_to | tags: intros, mentoring, speaking, pilots, hiring |
| bio | 2-3 lines |
| links | LinkedIn, website |
| verified | boolean plus verified\_on date |
| intro\_mode | direct, via THC, by request |
| visibility | public, members-only |

**UX requirements:** keyword search; filters by category, focus area, city, "can help with" and "open to"; sort by relevance or recently added; profile card with verified badge; profile drawer with bio and CTAs; "Request intro" opens a short form (who you are, why, what you need) that, in v1, only shows a success state.

**v1 mock data (all fictional, for UI only)**

| Name | Category | Headline | City | Focus | Open to |
| --- | --- | --- | --- | --- | --- |
| Aarav Menon | Founder | CEO, PulseScan AI | Bengaluru | AI diagnostics | Pilots, hiring |
| Dr. Kavya Rao | Hospital/Operator | Chief Innovation Officer, Lakeview Health | Hyderabad | Digital health | Pilots, intros |
| Rhea Kapoor | Investor | Principal, Cedar Ventures | Mumbai | Healthtech seed | Intros, mentoring |
| Dr. Sameer Joshi | Clinician | Radiologist and advisor | Jaipur | AI diagnostics | Clinical validation |
| Nandini Iyer | Corporate/Pharma | Head of Partnerships, Meridian Pharma | Chennai | Pharma, supply chain | Distribution |
| Vikram Sethi | Mentor | Ex-founder, 2 exits | Delhi NCR | Telehealth, payments | Mentoring |
| Anika Bose | Policy/Regulator | Digital health policy consultant | Kolkata | Regulatory | Speaking, advising |
| Tarun Malhotra | Founder | Co-founder, CareLoop | Pune | Chronic care | Fundraising, hiring |

All people, organisations and numbers here are invented placeholders.

**v2 (real) requirements, for later:** member-submitted profiles, admin verification workflow, explicit consent for listing and contact, visibility controls, rate-limited intro requests, double opt-in (the person accepts before details are shared), abuse reporting, and an audit log. Because this is personal data, v2 needs a privacy and consent review (India's DPDP Act) before any real profile goes live.

## 8. New brand guidelines (proposed)

**Brand idea:** *warm, credible, connected.* THC should feel like a trusted clinical-grade network with a human, community pulse, closer to a great conference than a hospital brochure.

**Voice:** direct, optimistic, specific. Short sentences. Talk about outcomes ("meet your first hospital pilot partner"), not mechanics. Avoid jargon unless the audience is clinical.

**Headline pattern:** plain phrase plus one *italic accent* word or phrase, for example "Where India's healthtech *connects*."

**Colour (starting palette, to be tested for contrast)**

| Role | Name | Hex |
| --- | --- | --- |
| Base dark | Ink | #0E1424 |
| Base light | Paper | #F6F3EC |
| Primary accent | Pulse Coral | #FF5A4F |
| Secondary accent | Signal Teal | #0FA3A3 |
| Soft highlight | Mist Lilac | #E7E3FF |
| Neutral | Slate | #5B6475 |

Rule: Paper and Ink carry roughly 80 percent of any screen; Coral is for CTAs and one highlight per section; Teal is for "verified" and positive states. Body text must meet WCAG AA contrast.

**Typography:** display in a refined serif with a strong italic (for example Fraunces or Instrument Serif); body and UI in a clean sans (for example Inter or Geist). Scale: 64 / 44 / 32 / 24 / 18 / 16 / 14.

**Shape and layout:** 12-column grid, generous whitespace, 16 to 24 px card radius, soft shadows, thin 1 px dividers.

**Imagery:** real event photography and member portraits first; where illustration is needed, use simple line-and-pulse motifs. No stock stethoscope photos.

**Motion:** subtle scroll reveals, marquee for logos and cities, count-up for stats, 200 to 300 ms easing. Respect reduced-motion settings.

**Logo:** wordmark "THC" plus a pulse-line mark; a compact monogram for avatars and favicon. (Needs a design pass; this PRD sets direction only.)

**Components to document in the design system:** buttons, chips, cards (event, person, job, article), nav, event banner, accordion, form fields, badges (Verified, Featured, Members-only), stat tile, logo wall.

## 9. Dynamic architecture

**Principle:** content is data. Pages are templates plus queries.

**Content types (CMS collections)**

- Event (title, date, city, format, status, speakers, agenda, sponsors, register URL, recap)
- Person (used for speakers, mentors and Directory)
- Directory Profile (section 7)
- Job (role, company, level, location, apply URL, expiry)
- Article / Case study / Glossary term
- Partner (logo, tier, link)
- Testimonial (quote, persona, person)
- Circle / Chapter (specialty or city, description, lead)
- Stat (label, value, source)
- FAQ
- Page Section (so the team can reorder homepage blocks)

**Dynamic behaviours**

- Event banner and "What's next" auto-update from the next published event; past events move to an archive automatically.
- Directory, jobs and articles are searchable and filterable client-side first, server-side later.
- Homepage sections can be reordered, hidden or scheduled from the CMS.
- Persona-aware CTAs: a first-visit selector (Founder, Clinician, Investor, Student) tailors hero copy and featured content, stored in a cookie.
- Forms (join, partner, intro request, newsletter) post to one endpoint and sync to the team's CRM or sheet.

**Suggested stack (open to change)**

- Frontend: Next.js (React) with static generation plus on-demand revalidation, Tailwind, a token-based design system.
- CMS: Sanity, Strapi or similar headless CMS.
- Data: JSON mocks for v1 Directory; Postgres (for example Supabase) with row-level security for v2.
- Hosting: Vercel or similar; image CDN; analytics via PostHog or GA4.
- Search: client-side (Fuse.js) for v1; Meilisearch or Algolia if the directory grows.

## 10. Functional requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| F1 | Responsive homepage with all sections in section 6 | P0 |
| F2 | Event list, event detail template, live event banner | P0 |
| F3 | Directory page with search, filters, cards, profile drawer (mock data) | P0 |
| F4 | "Request intro" form (mock success state) | P0 |
| F5 | Join and partner enquiry forms with validation and CRM sync | P0 |
| F6 | Newsletter signup | P0 |
| F7 | CMS with all content types and editorial roles | P0 |
| F8 | Jobs board with featured roles | P1 |
| F9 | Articles, case studies, glossary | P1 |
| F10 | Circles and city chapter pages | P1 |
| F11 | Persona selector and tailored hero | P1 |
| F12 | Dark mode | P2 |
| F13 | Member login and saved profiles | P2 |
| F14 | Real directory with verification and consent flow | P2 (Phase 3) |

## 11. Non-functional requirements

- **Performance:** LCP under 2.5 s on mid-range mobile over 4G; images in AVIF/WebP; lazy-load below the fold. Most of the audience is mobile, so design mobile-first.
- **Accessibility:** WCAG 2.2 AA, keyboard navigation, visible focus, reduced-motion support.
- **SEO:** server-rendered pages (the current site is client-rendered, which hurts discoverability and sharing), structured data for events and jobs, Open Graph images generated per page, sitemap.
- **Privacy and security:** consent banner, minimal data collection, no real personal data in the mock Directory, spam protection on all forms.
- **Analytics:** event tracking on every primary CTA and filter use.

## 12. Success metrics

| Metric | Target to agree |
| --- | --- |
| Visitor to join-application rate | baseline, then +X% |
| Event registration clicks per visit | baseline, then +X% |
| Directory searches per session and intro requests (mock = click intent) | track from day one |
| Newsletter signups | baseline, then +X% |
| Partner enquiries per month | baseline, then +X% |
| Core Web Vitals pass rate | 90%+ of page loads |
| Time for admin to publish an event | under 10 minutes |

## 13. Phasing

| Phase | Scope | Rough effort |
| --- | --- | --- |
| **0. Discovery** | Validate references, audit current THC site, confirm audiences and content inventory | 3 to 4 days |
| **1. Brand and design** | Brand guidelines, design tokens, homepage and Directory designs, interactive prototype | 1 to 2 weeks |
| **2. Build v1** | CMS, homepage, events, Directory on mock data, forms, newsletter | 2 to 3 weeks |
| **3. Directory for real** | Profiles, verification, consent, intro workflow, privacy review | 3 to 4 weeks |
| **4. Growth** | Jobs, circles, persona personalisation, member login | ongoing |

## 14. Repeatable agent workflow (for the build)

1. **Read:** an agent fetches each reference site and records structure, sections, copy patterns and components.
2. **Extract:** a second pass turns observations into a pattern brief (what to adopt, what to avoid).
3. **Brief:** the pattern brief plus this PRD become the single source of truth.
4. **Generate:** design tokens first, then components, then pages from the content model.
5. **Audit:** an audit agent checks accessibility, performance, copy consistency and brand rules before anything ships.

The same loop can be re-run for any future reference site.

## 15. Risks, assumptions and open questions

- **Assumption:** the current THC content and logo assets are available to reuse or restyle. Please confirm what must stay (name, existing partners, past event media).
- **Open question:** should the Directory live on THC, on Orbyt, or on both? Orbyt is the curated network spun out of THC, so the two products could overlap.
- **Open question:** who may be listed in v2, and is listing opt-in only?
- **Open question:** public Directory versus members-only? Public drives SEO; members-only drives joins.
- **Risk:** a directory with real contact paths invites spam and misuse, so v2 depends on verification and double opt-in.
- **Risk:** four references (including one that is a product, Dseide) can pull the site toward a platform. Keep THC a front door and link out for deep interaction.
- **Needed from you:** screenshots or pasted sections of the ET HealthWorld page and of the current THC site, plus any brand assets to keep.
