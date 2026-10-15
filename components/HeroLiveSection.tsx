"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import PulseLine from "./PulseLine";
import type { DirectoryProfile, Event } from "@/lib/types";

type HeroLiveSectionProps = {
  profiles: DirectoryProfile[];
  featuredEvent: Event | null;
};

function getInitials(name: string): string {
  const cleanName = name.replace(/^Dr\.\s*/i, "").trim();
  const parts = cleanName.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatRole(headline: string): string {
  // Remove money figures like ($2.4M) or $500k
  let cleaned = headline.replace(/\s*\(\$[\d\.]+[kKmM]?\)/gi, "").replace(/\$[\d\.]+[kKmM]?/gi, "");
  // Remove quotes
  cleaned = cleaned.replace(/["'“”]/g, "").trim();
  // Take primary role
  if (cleaned.includes(",")) {
    cleaned = cleaned.split(",")[0].trim();
  }
  return cleaned || headline;
}

export default function HeroLiveSection({ profiles, featuredEvent }: HeroLiveSectionProps) {
  // Initial default query matching mockup
  const [activeQuery, setActiveQuery] = useState<string>("AI Diagnostics");
  const [inputValue, setInputValue] = useState<string>("AI Diagnostics");

  // Exactly 4 popular chips (dropped 5th chip)
  const popularChips = [
    { label: "Hospital Pilots", query: "Hospital Pilots" },
    { label: "AI Diagnostics", query: "AI Diagnostics" },
    { label: "Seed Investors", query: "Seed Investors" },
    { label: "CDSCO Regulatory", query: "CDSCO Regulatory" },
  ];

  // Configure Fuse.js for client-side search across directory profiles
  const fuse = useMemo(() => {
    return new Fuse(profiles, {
      keys: [
        "name",
        "headline",
        "organisation",
        "focus_areas",
        "city",
        "bio",
        "can_help_with",
        "open_to",
        "category",
      ],
      threshold: 0.38,
      ignoreLocation: true,
    });
  }, [profiles]);

  // Dynamic search results driven by activeQuery
  const matches = useMemo(() => {
    if (!activeQuery.trim()) {
      return profiles.slice(0, 3);
    }
    const results = fuse.search(activeQuery.trim());
    if (results.length === 0) {
      // Fallback to substring matching if fuzzy threshold missed
      const q = activeQuery.toLowerCase().trim();
      const subMatches = profiles.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.headline.toLowerCase().includes(q) ||
          p.organisation.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.focus_areas.some((f) => f.toLowerCase().includes(q))
      );
      return subMatches.length > 0 ? subMatches : profiles.slice(0, 3);
    }
    return results.map((r) => r.item);
  }, [activeQuery, fuse, profiles]);

  const topThree = matches.slice(0, 3);
  const resultCount = matches.length;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setActiveQuery(inputValue.trim());
    }
  };

  const handleChipClick = (queryVal: string) => {
    setInputValue(queryVal);
    setActiveQuery(queryVal);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      {/* Left Column: Eyebrow, Headline, Subhead, Search, CTAs (7 cols) */}
      <div className="lg:col-span-7 space-y-5 lg:pr-2">
        {/* Eyebrow: Next Gathering Interactive Pill */}
        <div>
          {featuredEvent ? (
            <a
              href={featuredEvent.registerUrl || "#events"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-chip bg-lilac/70 hover:bg-lilac border border-line text-ink text-[12px] font-semibold tracking-wide transition-all group shadow-xs active:scale-95 focus-visible:ring-2 max-w-full"
            >
              <span className="px-2 py-0.5 rounded-chip bg-ink text-paper text-[10px] font-extrabold tracking-wider uppercase shrink-0">
                Next Gathering
              </span>
              <span className="text-ink font-bold group-hover:underline transition-colors truncate">
                {featuredEvent.title}
              </span>
              <span className="text-slate text-[11px] shrink-0 hidden sm:inline">
                · {featuredEvent.city}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-ink group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-chip bg-lilac/70 border border-line text-ink text-[12px] font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India&apos;s healthtech community</span>
            </div>
          )}
        </div>

        {/* H1: 'Where India's healthtech' in deep dark purple-blue, 'connects.' in signature radiant gradient with pulse line */}
        <h1 className="text-[32px] sm:text-[46px] lg:text-[58px] font-sans font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] text-[#1B225E]">
          Where India&apos;s healthtech{" "}
          <span className="relative inline-block">
            <span className="italic font-serif font-normal bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent inline-block">
              connects.
            </span>
            <span className="absolute -bottom-2 left-0 w-full flex justify-center pointer-events-none">
              <PulseLine variant="accent" strokeColor="cobalt" className="w-full h-3.5 opacity-90" />
            </span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-[14.5px] sm:text-[16px] text-slate max-w-xl leading-relaxed">
          The front door to India&apos;s healthtech ecosystem. Find and reach verified
          hospital chiefs, seed healthtech investors, clinical advisors, and founders within
          three clicks.
        </p>

        {/* Search Bar + 4 Popular Chips */}
        <div className="pt-0.5 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-card rounded-chip group max-w-xl">
            <div className="absolute left-3.5 sm:left-4.5 text-slate group-focus-within:text-ink transition-colors pointer-events-none">
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search clinicians, hospital chiefs, investors..."
              aria-label="Search directory for founders, clinicians, or partners"
              className="w-full pl-10 sm:pl-12 pr-24 sm:pr-28 py-3 sm:py-3.5 rounded-chip border border-line bg-white text-ink text-[13.5px] sm:text-[14px] placeholder:text-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:border-ink transition-all"
            />
            {/* Coral fill + Ink text for Search */}
            <button
              type="submit"
              className="absolute right-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-chip bg-coral text-ink font-bold text-[13px] hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Search</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* 4 Popular Chips (no 5th chip) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-0.5 text-[11.5px] sm:text-[12px]">
            <span className="text-slate font-semibold tracking-wide">Popular:</span>
            {popularChips.map((chip) => {
              const isActive = activeQuery.toLowerCase() === chip.query.toLowerCase();
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleChipClick(chip.query)}
                  className={`px-2.5 sm:px-3 py-1 rounded-chip border font-medium transition-all active:scale-95 focus-visible:ring-2 shadow-xs ${
                    isActive
                      ? "bg-ink text-paper border-ink"
                      : "bg-white border-line text-slate hover:text-ink hover:border-ink"
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action CTAs: Ink fill for Join; text link for Explore */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
          {/* Ink fill for Join */}
          <a
            href="https://tally.so/r/thc-join"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 sm:py-2.5 rounded-chip bg-ink text-paper font-bold text-[14px] hover:bg-ink/90 active:scale-95 transition-all shadow-sm focus-visible:ring-2 inline-flex items-center justify-center gap-2"
          >
            <span>Join the Community</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* text link for Explore */}
          <Link
            href="#events"
            className="text-ink font-semibold hover:underline inline-flex items-center justify-center sm:justify-start gap-1.5 text-[14px] transition-colors py-1 sm:py-0"
          >
            <span>Explore Gatherings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Right Column: Single "live results" Card matching mockup (5 cols) */}
      <div className="lg:col-span-5 relative">
        <div className="p-4 sm:p-6 rounded-card border border-line bg-white shadow-card space-y-3.5 sm:space-y-4">
          {/* Card Header: Matches for <active query> with result count */}
          <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-line">
            <span className="font-sans font-bold text-ink text-[14px] sm:text-[15px] truncate pr-2">
              Matches for &ldquo;{activeQuery}&rdquo;
            </span>
            <span className="text-[11.5px] sm:text-[12px] font-semibold text-slate shrink-0">
              {resultCount} {resultCount === 1 ? "match" : "matches"}
            </span>
          </div>

          {/* Exactly 3 one-line rows from directory.json with mobile optimization */}
          <div className="space-y-1">
            {topThree.map((person) => {
              const roleClean = formatRole(person.headline);
              return (
                <div
                  key={person.id}
                  className="flex items-center justify-between gap-3 py-2 sm:py-2.5 border-b border-line/60 last:border-b-0 hover:bg-paper/60 px-1 rounded-md transition-colors"
                >
                  {/* Left: Avatar + Name with Verified check + Role · Organisation */}
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    {/* Initials Avatar */}
                    <div className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-lilac text-ink font-bold text-[11px] flex items-center justify-center shrink-0">
                      {getInitials(person.name)}
                    </div>

                    {/* Name + Verified Check + Mobile Subhead */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="font-sans font-bold text-[13px] sm:text-[13.5px] text-ink truncate">
                          {person.name}
                        </span>
                        {person.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                        )}
                      </div>
                      {/* Sub-line for mobile: role and org */}
                      <p className="text-[11px] text-slate truncate font-normal sm:hidden mt-0.5">
                        {roleClean} · {person.organisation}
                      </p>
                    </div>

                    <span className="text-line shrink-0 hidden sm:inline">·</span>

                    {/* Role · Organisation on desktop */}
                    <span className="text-[12.5px] text-slate truncate font-normal hidden sm:inline">
                      {roleClean} · {person.organisation}
                    </span>
                  </div>

                  {/* Right: City */}
                  <div className="shrink-0 text-right">
                    <span className="text-[11.5px] sm:text-[12px] text-slate font-medium">
                      {person.city}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer: "Sample data" + "See all matches" link to /directory?q=<query> */}
          <div className="pt-2.5 sm:pt-3 border-t border-line flex items-center justify-between text-[11.5px] sm:text-[12px]">
            <span className="text-slate font-medium">Sample data</span>
            <Link
              href={`/directory?q=${encodeURIComponent(activeQuery)}`}
              className="text-coral-text font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>See all matches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
