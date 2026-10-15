import React from "react";
import type { Stat, Partner } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";

type ProofStripProps = {
  stats: Stat[];
  partners: Partner[];
};

export default function ProofStrip({ stats, partners }: ProofStripProps) {
  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section className="border-y border-border-subtle bg-canvas-subtle py-8 sm:py-12 overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-6 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <p className="text-[11.5px] sm:text-[12px] uppercase tracking-wider text-slate font-bold">
              Trusted by Leaders Across India&apos;s Healthcare Ecosystem
            </p>
            {/* 100% Vetted / 680+ Leaders trust badge with mobile responsiveness */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-chip bg-white border border-line text-[11.5px] sm:text-[12px] font-medium text-slate shadow-xs max-w-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
              <span>
                <strong className="text-ink">100% Vetted:</strong>{" "}
                <span className="hidden sm:inline">Clinical, hospital, and investor credentials verified · </span>
                <span className="font-bold text-ink">680+ Leaders</span>
              </span>
            </div>
          </div>
          <span className="text-[10.5px] sm:text-[11px] text-slate bg-white border border-border-subtle px-2.5 py-0.5 rounded-chip shadow-xs self-start md:self-auto">
            Sample data
          </span>
        </div>

        {/* 4 Stat Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-3.5 sm:p-5 rounded-card border border-border-subtle bg-white shadow-card space-y-0.5 sm:space-y-1 hover:border-ink/20 transition-colors"
            >
              <div className="text-[26px] sm:text-[32px] font-sans font-extrabold text-obsidian tracking-tight">
                {stat.value}
              </div>
              <div className="text-[13px] sm:text-[14px] font-bold text-text-primary leading-snug">{stat.label}</div>
              <div className="text-[11px] sm:text-[12px] text-text-muted">{stat.source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Wordmarks Marquee */}
      <div
        tabIndex={0}
        aria-label="Partner Organisations Marquee"
        className="relative w-full border-t border-border-subtle/80 pt-4 sm:pt-6 overflow-hidden focus-visible:ring-2 focus-visible:outline-none"
      >
        <div className="animate-marquee flex items-center gap-8 sm:gap-14 text-text-muted font-sans font-semibold text-[14px] sm:text-[15px] tracking-tight select-none">
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 hover:text-obsidian transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal inline-block shadow-sm"></span>
              <span className="font-bold text-text-primary">{partner.name}</span>
              <span className="text-[10.5px] sm:text-[11px] font-sans px-2 sm:px-2.5 py-0.5 rounded-chip bg-white border border-border-subtle text-text-secondary font-medium">
                {partner.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
