"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

type HeroSearchProps = {
  onSearchSubmit?: (query: string) => void;
};

export default function HeroSearch({ onSearchSubmit }: HeroSearchProps) {
  const [query, setQuery] = useState("");

  const suggestionChips = [
    { label: "Hospital Pilots", query: "Hospital pilots in Pune" },
    { label: "AI Diagnostics", query: "AI diagnostics founders" },
    { label: "Seed Investors", query: "Healthtech seed investors" },
    { label: "CDSCO Regulatory", query: "SaMD regulatory advisors" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (onSearchSubmit) {
      onSearchSubmit(query);
    } else {
      const directorySection = document.getElementById("directory");
      if (directorySection) {
        directorySection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleChipClick = (searchVal: string) => {
    setQuery(searchVal);
    const directorySection = document.getElementById("directory");
    if (directorySection) {
      directorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-xl space-y-3">
      {/* High-Tech Search Bar */}
      <form onSubmit={handleSubmit} className="relative flex items-center shadow-card rounded-chip group">
        <div className="absolute left-4.5 text-slate-400 group-focus-within:text-cobalt transition-colors pointer-events-none">
          <Search className="w-4.5 h-4.5" />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a hospital pilot partner, clinician advisor, or seed investor..."
          aria-label="Search directory for founders, clinicians, or partners"
          className="w-full pl-12 pr-28 py-3.5 rounded-chip border border-border-subtle bg-white text-text-primary text-[14px] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:border-cobalt transition-all"
        />
        <button
          type="submit"
          className="absolute right-1.5 px-4 py-2 rounded-chip bg-cobalt text-white text-small font-semibold hover:bg-cobalt-hover active:scale-95 transition-all flex items-center gap-1.5 focus-visible:ring-2 shadow-sm"
        >
          <span>Search</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Clean Trending Chips Row */}
      <div className="flex items-center gap-2 flex-wrap pt-0.5 text-[12px]">
        <span className="text-text-muted font-semibold tracking-wide">Popular:</span>
        {suggestionChips.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => handleChipClick(chip.query)}
            className="px-3 py-1 rounded-chip border border-border-subtle bg-white text-text-secondary hover:text-cobalt hover:border-cobalt/40 hover:bg-blue-50/50 font-medium transition-all active:scale-95 focus-visible:ring-2 shadow-xs"
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
}
