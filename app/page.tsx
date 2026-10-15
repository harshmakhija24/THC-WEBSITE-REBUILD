import Link from "next/link";
import Header from "@/components/Header";
import THCLogo from "@/components/THCLogo";
import HeroLiveSection from "@/components/HeroLiveSection";
import ProofStrip from "@/components/ProofStrip";
import GatherSystem from "@/components/GatherSystem";
import DirectoryPreview from "@/components/DirectoryPreview";
import AudienceAndSteps from "@/components/AudienceAndSteps";
import BackgroundPattern from "@/components/BackgroundPattern";
import {
  getNextFeaturedEvent,
  getStats,
  getDirectoryProfiles,
  getPartners,
} from "@/lib/content";

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
        {/* C. Hero Section: Single Live Results Card & Architectural Grid Lines */}
        <section className="relative pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-12 md:pb-16 border-b border-line bg-white overflow-hidden">
          <BackgroundPattern variant="tech-blueprint" />
          <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
            <HeroLiveSection
              profiles={directoryProfiles}
              featuredEvent={featuredEvent}
            />
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
      <footer className="border-t border-border-subtle bg-white py-6 sm:py-8 text-[12.5px] sm:text-[13px] text-text-secondary">
        <div className="max-w-container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <THCLogo size="sm" />
            <span className="text-border-subtle hidden sm:inline">|</span>
            <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
              Sample data for design review
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/styleguide" className="hover:text-obsidian transition-colors font-semibold">
              Design System
            </Link>
            <Link href="/dev" className="hover:text-obsidian transition-colors font-mono text-[12px]">
              /dev Portal
            </Link>
            <span className="text-[11.5px] sm:text-[12px] font-mono text-text-muted">v0.2 Modern Tech</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

