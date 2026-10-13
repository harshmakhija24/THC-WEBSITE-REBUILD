import Link from "next/link";
import Header from "@/components/Header";
import THCLogo from "@/components/THCLogo";
import HeroSearch from "@/components/HeroSearch";
import HeroCollage from "@/components/HeroCollage";
import ProofStrip from "@/components/ProofStrip";
import GatherSystem from "@/components/GatherSystem";
import DirectoryPreview from "@/components/DirectoryPreview";
import AudienceAndSteps from "@/components/AudienceAndSteps";
import PulseLine from "@/components/PulseLine";
import {
  getNextFeaturedEvent,
  getStats,
  getDirectoryProfiles,
  getPartners,
} from "@/lib/content";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "The Healthtech Collective (THC) — India's Healthtech Front Door",
  description:
    "Where India's healthtech connects. Curated community, summits, roundtables, and verified directory connecting founders, clinicians, hospital chiefs, and investors.",
};

export default async function HomePage() {
  const featuredEvent = await getNextFeaturedEvent();
  const stats = await getStats();
  const directoryProfiles = await getDirectoryProfiles();
  const partners = await getPartners();

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col justify-between selection:bg-cobalt-tint selection:text-cobalt">
      {/* A. Header (Pure White Canvas, Crisp 1px Border, Official THC Logo) */}
      <Header />

      <main className="flex-1">
        {/* C. Hero Section (Search-first, People Collage, Tech Grid) */}
        <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 border-b border-border-subtle bg-grid-tech overflow-hidden">
          <div className="max-w-container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Headline, Subhead, Search, CTAs (7 cols) */}
              <div className="lg:col-span-7 space-y-5 lg:pr-2">
                {/* Eyebrow: Next Gathering Interactive Pill (Stripe/Vercel style) */}
                <div>
                  {featuredEvent ? (
                    <a
                      href={featuredEvent.registerUrl || "#events"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-chip bg-blue-50/90 hover:bg-blue-100/80 border border-blue-200/80 text-cobalt text-[12px] font-semibold tracking-wide transition-all group shadow-xs active:scale-95 focus-visible:ring-2 max-w-full"
                    >
                      <span className="px-2 py-0.5 rounded-chip bg-cobalt text-white text-[10px] font-extrabold tracking-wider uppercase shrink-0">
                        Next Gathering
                      </span>
                      <span className="text-text-primary font-bold group-hover:text-cobalt transition-colors truncate">
                        {featuredEvent.title}
                      </span>
                      <span className="text-text-muted font-mono text-[11px] shrink-0 hidden sm:inline">
                        · {featuredEvent.city}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cobalt group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-chip bg-blue-50 border border-blue-200/50 text-cobalt text-[12px] font-bold tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>India&apos;s healthtech community</span>
                    </div>
                  )}
                </div>

                {/* H1: Confident bold Plus Jakarta Sans with signature Newsreader italic accent */}
                <h1 className="text-[38px] sm:text-[48px] lg:text-[58px] font-sans font-extrabold text-obsidian tracking-tight leading-[1.08]">
                  Where India&apos;s healthtech{" "}
                  <span className="relative inline-block">
                    <span className="italic font-serif text-cobalt font-normal">connects.</span>
                    {/* Modern technical pulse accent underneath */}
                    <span className="absolute -bottom-2 left-0 w-full flex justify-center pointer-events-none">
                      <PulseLine variant="accent" strokeColor="cobalt" className="w-full h-3.5 opacity-90" />
                    </span>
                  </span>
                </h1>

                {/* Subhead */}
                <p className="text-[15px] sm:text-[16px] text-text-secondary max-w-xl leading-relaxed">
                  The front door to India&apos;s healthtech ecosystem. Find and reach verified
                  hospital chiefs, seed healthtech investors, clinical advisors, and founders within
                  three clicks.
                </p>

                {/* Search Bar + Popular Query Chips */}
                <div className="pt-0.5">
                  <HeroSearch />
                </div>

                {/* Action CTAs */}
                <div className="pt-1 flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://tally.so/r/thc-join"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-chip bg-cobalt text-white font-bold text-[14px] hover:bg-cobalt-hover active:scale-95 transition-all shadow-sm focus-visible:ring-2 inline-flex items-center gap-2"
                  >
                    <span>Join the Community</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="#events"
                    className="px-6 py-2.5 rounded-chip border border-border-subtle bg-white text-text-primary font-semibold text-[14px] hover:border-obsidian hover:bg-canvas-subtle transition-all focus-visible:ring-2 inline-flex items-center gap-2 shadow-xs"
                  >
                    <span>Explore Gatherings</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Balanced 2-Column Staggered Roster (5 cols) */}
              <div className="lg:col-span-5 relative">
                <HeroCollage profiles={directoryProfiles} />
              </div>
            </div>
          </div>
        </section>

        {/* D. Proof Strip (Stats + Scrolling Partner Marquee) */}
        <ProofStrip stats={stats} partners={partners} />

        {/* E. Gather System (Full-Width Obsidian Band with 3 Event Formats) */}
        <GatherSystem />

        {/* F. Directory Preview (Functional Category Filters + 6 Cards) */}
        <DirectoryPreview profiles={directoryProfiles} />

        {/* G. Audience Chips & 4 Outcome Steps */}
        <AudienceAndSteps />
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-white py-8 text-[13px] text-text-secondary">
        <div className="max-w-container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <THCLogo size="sm" />
            <span className="text-border-subtle hidden sm:inline">|</span>
            <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
              Sample data for design review
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/styleguide" className="hover:text-obsidian transition-colors font-semibold">
              Design System
            </Link>
            <Link href="/dev" className="hover:text-obsidian transition-colors font-mono text-[12px]">
              /dev Portal
            </Link>
            <span className="text-[12px] font-mono text-text-muted">v0.2 Modern Tech</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

