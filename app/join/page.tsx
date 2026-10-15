import Header from "@/components/Header";
import THCLogo from "@/components/THCLogo";
import Link from "next/link";
import JoinClient from "./JoinClient";
import { getTestimonials, getFaqs } from "@/lib/content";

export const metadata = {
  title: "Join The Healthtech Collective — Community & Membership Pathways",
  description:
    "Join India's most curated healthtech ecosystem. Free WhatsApp community for builders and clinicians, ASCENT founder cohorts (₹49,999), and executive Catalyst circles.",
};

export default async function JoinPage() {
  const testimonials = await getTestimonials();
  const faqs = await getFaqs();

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col justify-between">
      {/* 1. Universal THC Header */}
      <Header />

      {/* 2. Main Join Community Client Page */}
      <main className="flex-1">
        <JoinClient testimonials={testimonials} faqs={faqs} />
      </main>

      {/* 3. Universal THC Footer */}
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
            <Link href="/" className="hover:text-obsidian transition-colors font-semibold">
              ← Back to Home
            </Link>
            <Link href="/directory" className="hover:text-obsidian transition-colors font-semibold">
              Directory
            </Link>
            <Link href="/styleguide" className="hover:text-obsidian transition-colors font-semibold">
              Design System
            </Link>
            <span className="text-[11.5px] sm:text-[12px] font-mono text-text-muted">v0.2 Modern Tech</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
