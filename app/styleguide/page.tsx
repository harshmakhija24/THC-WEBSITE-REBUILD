import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Design Tokens & Styleguide — The Healthtech Collective",
  description: "Official design system tokens, typography, colour contrasts, and spatial scale.",
};

const colourTokens = [
  {
    name: "Ink",
    role: "Base dark / Primary text",
    cssVar: "--ink",
    hex: "#0E1424",
    bgClass: "bg-ink",
    textClass: "text-paper",
    borderClass: "border-line",
    contrastOnPaper: "16.6:1 (AAA Pass)",
    usageNote: "Primary body & display text on Paper. Carries 80% of screens.",
    rule: "Use for text on Paper/Lilac, or as dark backgrounds.",
  },
  {
    name: "Paper",
    role: "Base light / Background",
    cssVar: "--paper",
    hex: "#F6F3EC",
    bgClass: "bg-paper",
    textClass: "text-ink",
    borderClass: "border-line",
    contrastOnPaper: "Base canvas",
    usageNote: "Warm, clinical-grade page canvas. Reduces eye fatigue.",
    rule: "Primary screen background across 80% of surfaces.",
  },
  {
    name: "Pulse Coral",
    role: "FILL ONLY: Primary CTAs & Highlights",
    cssVar: "--coral",
    hex: "#FF5A4F",
    bgClass: "bg-coral",
    textClass: "text-ink",
    borderClass: "border-transparent",
    contrastOnPaper: "6.0:1 with Ink text (AA Pass)",
    usageNote: "CRITICAL: Coral text on Paper fails (2.8:1). Use for fills only!",
    rule: "Always pair Coral fill with Ink text. One highlight per section.",
  },
  {
    name: "Pulse Coral Text",
    role: "Text / Link Accent on Paper",
    cssVar: "--coral-text",
    hex: "#C8372D",
    bgClass: "bg-coral-text",
    textClass: "text-paper",
    borderClass: "border-transparent",
    contrastOnPaper: "4.7:1 on Paper (AA Pass)",
    usageNote: "Accessible contrast version for text links or icons on Paper.",
    rule: "Use whenever Coral hue is required as text on Paper.",
  },
  {
    name: "Signal Teal",
    role: "FILL ONLY: Verified & Positive States",
    cssVar: "--teal",
    hex: "#0FA3A3",
    bgClass: "bg-teal",
    textClass: "text-ink",
    borderClass: "border-transparent",
    contrastOnPaper: "6.2:1 with Ink text (AA Pass)",
    usageNote: "CRITICAL: Teal text on Paper fails (2.8:1). Use for fills only!",
    rule: "Always pair Teal fill with Ink text. For verified badges and success.",
  },
  {
    name: "Signal Teal Text",
    role: "Text Accent on Paper",
    cssVar: "--teal-text",
    hex: "#0B7A7A",
    bgClass: "bg-teal-text",
    textClass: "text-paper",
    borderClass: "border-transparent",
    contrastOnPaper: "4.7:1 on Paper (AA Pass)",
    usageNote: "Accessible contrast version for positive/verified text labels.",
    rule: "Use whenever Teal hue is required as text or borders on Paper.",
  },
  {
    name: "Mist Lilac",
    role: "Soft Highlight Surface",
    cssVar: "--lilac",
    hex: "#E7E3FF",
    bgClass: "bg-lilac",
    textClass: "text-ink",
    borderClass: "border-line",
    contrastOnPaper: "13.9:1 with Ink text (AAA Pass)",
    usageNote: "Subtle card highlights, active filters, selection states.",
    rule: "Pairs cleanly with Ink text. Subtle contrast on Paper.",
  },
  {
    name: "Slate",
    role: "Secondary Text on Paper",
    cssVar: "--slate",
    hex: "#5B6475",
    bgClass: "bg-slate",
    textClass: "text-paper",
    borderClass: "border-transparent",
    contrastOnPaper: "5.4:1 on Paper (AA Pass)",
    usageNote: "Subtitles, metadata, timestamps, helper descriptions.",
    rule: "Use for secondary hierarchy text on Paper backgrounds.",
  },
  {
    name: "Line",
    role: "1px Structural Divider",
    cssVar: "--line",
    hex: "rgba(14,20,36,0.12)",
    bgClass: "bg-line",
    textClass: "text-ink",
    borderClass: "border-line",
    contrastOnPaper: "Subtle structural demarcation",
    usageNote: "Thin borders, card strokes, header rules.",
    rule: "Never use heavy dark borders; always use subtle 1px line.",
  },
  {
    name: "Ink 2",
    role: "Elevated surface on Ink band",
    cssVar: "--ink-2",
    hex: "#161F36",
    bgClass: "bg-ink-2",
    textClass: "text-paper",
    borderClass: "border-line-dark",
    contrastOnPaper: "Dark surface tile",
    usageNote: "Card surfaces inside dark Ink bands (e.g. Gather system).",
    rule: "Use only inside dark sections; pair with Paper text.",
  },
  {
    name: "Coral Tint",
    role: "Subtle Coral Surface",
    cssVar: "--coral-tint",
    hex: "rgba(255,90,79,0.12)",
    bgClass: "bg-coral-tint",
    textClass: "text-ink",
    borderClass: "border-coral/20",
    contrastOnPaper: "Subtle tint with Ink text",
    usageNote: "Audience chips, photo slot fallback tiles.",
    rule: "Always pair with Ink text.",
  },
  {
    name: "Teal Tint",
    role: "Subtle Teal Surface",
    cssVar: "--teal-tint",
    hex: "rgba(15,163,163,0.15)",
    bgClass: "bg-teal-tint",
    textClass: "text-ink",
    borderClass: "border-teal/20",
    contrastOnPaper: "Subtle tint with Ink text",
    usageNote: "Hospital audience chips, photo slot fallback tiles.",
    rule: "Always pair with Ink text.",
  },
];

const typeScale = [
  {
    token: "--fs-hero",
    tailwind: "text-hero",
    font: "Fraunces (Serif)",
    size: "84px",
    lineHeight: "1.02",
    sample: "Where India's healthtech connects.",
    italicSample: "connects",
    notes: "Hero headline at 84px desktop / 44px mobile with signature italic accent.",
  },
  {
    token: "--fs-display",
    tailwind: "text-display",
    font: "Fraunces (Serif)",
    size: "64px",
    lineHeight: "1.05",
    sample: "Where India's healthtech connects.",
    italicSample: "connects",
    notes: "Display headings across major sections.",
  },
  {
    token: "--fs-h1",
    tailwind: "text-h1",
    font: "Fraunces (Serif)",
    size: "44px",
    lineHeight: "1.15",
    sample: "Curated clinical gatherings & directory.",
    notes: "Primary page headers, key milestone titles.",
  },
  {
    token: "--fs-h2",
    tailwind: "text-h2",
    font: "Fraunces (Serif)",
    size: "32px",
    lineHeight: "1.15",
    sample: "Hospital pilots built on evidence.",
    notes: "Major section headings across the homepage.",
  },
  {
    token: "--fs-h3",
    tailwind: "text-h3",
    font: "Inter (Sans) / Fraunces",
    size: "24px",
    lineHeight: "1.25",
    sample: "AI Diagnostics & Enterprise Imaging",
    notes: "Card titles, subsection headers, drawer headlines.",
  },
  {
    token: "--fs-lead",
    tailwind: "text-lead",
    font: "Inter (Sans)",
    size: "18px",
    lineHeight: "1.5",
    sample:
      "The front door to India's healthtech ecosystem. Every visitor finds the right people within three clicks.",
    notes: "Hero intro text, featured article lead paragraphs.",
  },
  {
    token: "--fs-body",
    tailwind: "text-body",
    font: "Inter (Sans)",
    size: "16px",
    lineHeight: "1.55",
    sample:
      "Membership is curated for active founders, clinicians, hospital CIOs, and seed health investors.",
    notes: "Default UI copy, profile bios, accordions, inputs.",
  },
  {
    token: "--fs-small",
    tailwind: "text-small",
    font: "Inter (Sans)",
    size: "14px",
    lineHeight: "1.55",
    sample: "Verified on 12 Sep 2026 · Sample data for design review",
    notes: "Chips, badges, captions, metadata, legal copy.",
  },
];

export default function StyleguidePage() {
  return (
    <main className="min-h-screen bg-paper text-ink pb-24">
      {/* Header Banner */}
      <header className="border-b border-line bg-paper sticky top-0 z-20 backdrop-blur-md bg-opacity-95">
        <div className="max-w-container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-small text-slate hover:text-ink transition-colors focus-visible:ring-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </Link>
            <span className="text-line">|</span>
            <div className="flex items-center gap-2">
              <span className="font-display italic text-h3 text-ink font-semibold">THC</span>
              <span className="text-small font-medium text-slate">Design System v0.1</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-chip bg-teal text-ink text-small font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Phase 1 Verified</span>
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-container mx-auto px-4 md:px-6 pt-12">
        {/* Intro Hero */}
        <section className="mb-16">
          <p className="text-small uppercase tracking-wider text-slate font-semibold mb-2">
            The Healthtech Collective · Brand Foundations
          </p>
          <h1 className="text-display font-display font-normal text-ink tracking-tight mb-4">
            Warm, credible, <span className="italic font-serif">connected.</span>
          </h1>
          <p className="text-lead text-slate max-w-3xl leading-relaxed">
            A trusted clinical-grade network with a human, community pulse. Designed for clarity,
            ruthless accessibility, and content-driven elegance.
          </p>
        </section>

        {/* Brand Rules Alert */}
        <section className="mb-16 p-6 rounded-card bg-lilac/40 border border-line">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-coral-text shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="text-h3 font-semibold text-ink">Locked Design System Rules</h2>
              <ul className="text-body text-slate space-y-1.5 list-disc list-inside">
                <li>
                  <strong className="text-ink">80/20 Balance:</strong> Paper (#F6F3EC) and Ink
                  (#0E1424) carry roughly 80% of any screen.
                </li>
                <li>
                  <strong className="text-ink">Coral & Teal Fill Rule:</strong> Coral (#FF5A4F) and
                  Teal (#0FA3A3) fail contrast as text on Paper (2.8:1). Use them as fills with Ink
                  text (6:1+).
                </li>
                <li>
                  <strong className="text-ink">Accessible Text Accents:</strong> When text or links
                  must be coral or teal on Paper, use <code>--coral-text</code> (#C8372D) and{" "}
                  <code>--teal-text</code> (#0B7A7A).
                </li>
                <li>
                  <strong className="text-ink">Headline Pattern:</strong> Plain phrase with ONE
                  italic accent word or phrase in the display serif. Never multiple.
                </li>
                <li>
                  <strong className="text-ink">No Raw Values:</strong> Zero ad-hoc hex values, pixel
                  font sizes, or unapproved shadows in components.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 1: Colour Tokens */}
        <section className="mb-20">
          <div className="border-b border-line pb-4 mb-8">
            <h2 className="text-h2 font-display text-ink">
              1. Colour Tokens & <span className="italic">WCAG AA Contrast</span>
            </h2>
            <p className="text-slate text-body mt-1">
              Every token has been verified against WCAG AA standards. Contrast ratios are labelled
              below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colourTokens.map((c) => (
              <div
                key={c.name}
                className="rounded-card border border-line bg-paper shadow-card overflow-hidden flex flex-col"
              >
                {/* Swatch visual */}
                <div
                  className={`h-28 w-full p-4 flex flex-col justify-between ${c.bgClass} ${c.textClass} border-b ${c.borderClass}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-small font-mono font-semibold px-2 py-0.5 rounded bg-black/10 backdrop-blur-sm">
                      {c.cssVar}
                    </span>
                    <span className="text-small font-mono opacity-80">{c.hex}</span>
                  </div>
                  <div className="font-semibold text-body tracking-tight">{c.name}</div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-small mb-1">
                      <span className="text-slate font-medium">Role</span>
                      <span className="text-ink font-semibold text-right">{c.role}</span>
                    </div>
                    <div className="flex items-center justify-between text-small mb-2">
                      <span className="text-slate font-medium">Contrast</span>
                      <span className="text-teal-text font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {c.contrastOnPaper}
                      </span>
                    </div>
                    <p className="text-small text-slate mt-2 border-t border-line/50 pt-2">
                      {c.usageNote}
                    </p>
                  </div>

                  <div className="bg-paper p-2.5 rounded-input border border-line text-small font-mono text-slate">
                    class: <span className="text-ink font-semibold">{c.bgClass}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Typography Scale */}
        <section className="mb-20">
          <div className="border-b border-line pb-4 mb-8">
            <h2 className="text-h2 font-display text-ink">
              2. Typography Scale & <span className="italic">Headline Pattern</span>
            </h2>
            <p className="text-slate text-body mt-1">
              Refined display serif (Fraunces) paired with clean UI sans (Inter). Scale:
              64/44/32/24/18/16/14 px.
            </p>
          </div>

          {/* Headline Pattern Showcase */}
          <div className="p-8 rounded-card border border-line bg-paper shadow-card mb-8">
            <p className="text-small font-mono uppercase tracking-wider text-coral-text font-semibold mb-2">
              Signature Headline Pattern Demo
            </p>
            <div className="space-y-4">
              <div className="text-display font-display text-ink tracking-tight">
                Where India&apos;s healthtech <span className="italic font-serif">connects.</span>
              </div>
              <div className="text-h2 font-display text-ink tracking-tight">
                Clinical validation meets <span className="italic font-serif">scale.</span>
              </div>
              <div className="text-h3 font-display text-ink">
                Built for builders, trusted by <span className="italic font-serif">chiefs.</span>
              </div>
            </div>
            <p className="text-small text-slate mt-4 border-t border-line pt-3">
              Rule: Exactly <strong>one italic accent</strong> per headline in Fraunces italic.
            </p>
          </div>

          {/* Detailed Type Scale Table */}
          <div className="rounded-card border border-line bg-paper shadow-card overflow-hidden">
            <div className="divide-y divide-line">
              {typeScale.map((t) => (
                <div key={t.token} className="p-6 flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="w-full lg:w-64 shrink-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-small font-semibold text-ink">{t.token}</span>
                      <span className="text-small text-slate">({t.size})</span>
                    </div>
                    <div className="text-small text-slate">
                      class: <code className="text-ink font-semibold">{t.tailwind}</code>
                    </div>
                    <div className="text-small text-slate">
                      Font: <span className="text-ink">{t.font}</span> · Line: {t.lineHeight}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className={`${t.tailwind} ${t.font.includes("Fraunces") ? "font-display" : "font-sans"} text-ink tracking-tight`}
                    >
                      {t.sample}
                    </div>
                    <p className="text-small text-slate mt-1">{t.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Shapes, Radii & Shadows */}
        <section className="mb-20">
          <div className="border-b border-line pb-4 mb-8">
            <h2 className="text-h2 font-display text-ink">
              3. Shapes, Radii & <span className="italic">Elevation</span>
            </h2>
            <p className="text-slate text-body mt-1">
              Generous 20px card radius, soft dual-layer shadow, pill chips, and 12px inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Radius */}
            <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
              <span className="px-2.5 py-1 rounded-chip bg-lilac text-ink text-small font-mono">
                --radius-card: 20px
              </span>
              <div className="h-32 rounded-card bg-paper border border-line shadow-card flex items-center justify-center p-4 text-center">
                <span className="text-body font-medium text-ink">Card Container (20px)</span>
              </div>
              <p className="text-small text-slate">
                Used for all profile cards, event previews, articles, and callout sections.
              </p>
            </div>

            {/* Input Radius */}
            <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
              <span className="px-2.5 py-1 rounded-chip bg-lilac text-ink text-small font-mono">
                --radius-input: 12px
              </span>
              <div className="h-32 flex flex-col justify-center gap-3">
                <input
                  type="text"
                  readOnly
                  value="Sample search input field..."
                  className="w-full px-4 py-2.5 rounded-input border border-line bg-paper text-body text-ink focus-visible:outline-none"
                />
                <button
                  type="button"
                  className="w-full py-2.5 rounded-input bg-ink text-paper text-small font-medium"
                >
                  Action Button (12px)
                </button>
              </div>
              <p className="text-small text-slate">
                Used for text inputs, select dropdowns, search bars, and inner action buttons.
              </p>
            </div>

            {/* Chip Radius */}
            <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
              <span className="px-2.5 py-1 rounded-chip bg-lilac text-ink text-small font-mono">
                --radius-chip: 999px
              </span>
              <div className="h-32 flex flex-wrap items-center justify-center gap-2 p-2">
                <span className="px-3.5 py-1.5 rounded-chip bg-teal text-ink text-small font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Doctor
                </span>
                <span className="px-3.5 py-1.5 rounded-chip bg-lilac text-ink text-small font-medium">
                  AI Diagnostics
                </span>
                <span className="px-3.5 py-1.5 rounded-chip border border-line text-slate text-small font-medium">
                  Bengaluru
                </span>
              </div>
              <p className="text-small text-slate">
                Used for category filters, status badges, directory tags, and quick filters.
              </p>
            </div>
          </div>

          {/* Shadow Demonstration */}
          <div className="mt-8 p-6 rounded-card border border-line bg-paper shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-body font-semibold text-ink">--shadow-card Token</div>
              <div className="font-mono text-small text-slate">
                0 1px 2px rgba(14,20,36,.06), 0 8px 24px rgba(14,20,36,.06)
              </div>
              <p className="text-small text-slate">
                Subtle dual-pass elevation designed specifically for warm Paper backgrounds without
                muddying colors.
              </p>
            </div>
            <div className="px-6 py-4 rounded-card bg-paper shadow-card border border-line shrink-0">
              <span className="text-body font-medium text-ink">Elevated Card Surface</span>
            </div>
          </div>
        </section>

        {/* Section 4: Layout & Grid Token Rules */}
        <section className="mb-20">
          <div className="border-b border-line pb-4 mb-8">
            <h2 className="text-h2 font-display text-ink">
              4. Layout, 12-Column Grid & <span className="italic">Spacing</span>
            </h2>
            <p className="text-slate text-body mt-1">
              Max container width: 1200px. Gutters: 24px desktop / 16px mobile. Section padding:
              96px desktop / 56px mobile.
            </p>
          </div>

          {/* 12 Column Grid Visualizer */}
          <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
            <div className="flex items-center justify-between text-small font-medium text-slate">
              <span>12-Column Responsive Grid Simulator (1200px max-width)</span>
              <span>24px Gutters</span>
            </div>
            <div className="grid grid-cols-12 gap-2 md:gap-4 py-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 rounded-input bg-lilac/60 border border-line flex items-center justify-center text-small font-mono text-slate"
                >
                  <span className="hidden sm:inline">Col </span>
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-line text-small text-slate">
              <div>
                <strong className="text-ink">Container:</strong> max-w-[1200px] mx-auto
              </div>
              <div>
                <strong className="text-ink">Section Y-Padding:</strong> py-14 md:py-24
              </div>
              <div>
                <strong className="text-ink">Gutters:</strong> px-4 md:px-6 (16px / 24px)
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Component Token Previews (Buttons, Badges, Chips) */}
        <section className="mb-20">
          <div className="border-b border-line pb-4 mb-8">
            <h2 className="text-h2 font-display text-ink">
              5. Tokenised Component <span className="italic">Primitives</span>
            </h2>
            <p className="text-slate text-body mt-1">
              Preview of standard interactive primitives adhering to contrast rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-5">
              <h3 className="text-h3 font-semibold text-ink">Buttons & Interactive States</h3>
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary Coral Button with Ink text */}
                <button
                  type="button"
                  className="px-6 py-3 rounded-chip bg-coral text-ink font-medium text-body hover:opacity-90 active:scale-95 transition-all shadow-sm focus-visible:ring-2"
                >
                  Primary CTA (Coral Fill)
                </button>

                {/* Secondary Outline Button */}
                <button
                  type="button"
                  className="px-6 py-3 rounded-chip border border-ink text-ink font-medium text-body hover:bg-ink hover:text-paper transition-all focus-visible:ring-2"
                >
                  Secondary Outline
                </button>

                {/* Text Link with Coral Text */}
                <a
                  href="#test"
                  className="inline-flex items-center gap-1.5 text-coral-text font-medium text-body hover:underline"
                >
                  <span>Accessible Coral Link</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-small text-slate border-t border-line pt-3">
                Primary button uses Coral fill with Ink text (6:1 contrast). Text links use
                <code>--coral-text</code> (#C8372D) to meet WCAG AA.
              </p>
            </div>

            {/* Badges & Chips */}
            <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-5">
              <h3 className="text-h3 font-semibold text-ink">Badges & Status Chips</h3>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-chip bg-teal text-ink text-small font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Doctor (Teal Fill)
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-chip bg-coral text-ink text-small font-medium">
                  Featured Event
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-chip bg-ink text-paper text-small font-medium">
                  Members Only
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-chip bg-lilac text-ink text-small font-medium">
                  Seed Stage
                </span>

                <span className="inline-flex items-center px-3 py-1 rounded-chip border border-line text-slate text-small font-medium">
                  Tier-2 Hospitals
                </span>
              </div>
              <p className="text-small text-slate border-t border-line pt-3">
                All badges enforce Ink text on Teal/Coral/Lilac fills, preserving WCAG compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Next Phase Prompt */}
        <section className="p-8 rounded-card border-2 border-dashed border-line bg-lilac/20 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-chip bg-ink text-paper text-small font-medium">
              Phase 1 Check Complete
            </span>
            <span className="text-small text-slate">Ready for Phase 2: Components</span>
          </div>
          <h2 className="text-h2 font-display text-ink">
            Phase 1 is verified. Next step: <span className="italic">build components.</span>
          </h2>
          <p className="text-body text-slate max-w-2xl">
            Tokens, Tailwind configuration, Google fonts, folder architecture, content types, and
            seed datasets are all in place. To proceed to Phase 2, paste:
          </p>
          <div className="p-4 rounded-input bg-ink text-paper font-mono text-small select-all">
            build phase 2
          </div>
        </section>
      </div>
    </main>
  );
}
