import React from "react";
import type { Stat, Partner } from "@/lib/types";

type ProofStripProps = {
  stats: Stat[];
  partners: Partner[];
};

export default function ProofStrip({ stats, partners }: ProofStripProps) {
  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section className="border-y border-border-subtle bg-canvas-subtle py-12 overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-6 mb-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-[12px] uppercase tracking-wider text-text-muted font-bold">
            Trusted by Leaders Across India&apos;s Healthcare Ecosystem
          </p>
          <span className="text-[11px] font-mono text-text-muted bg-white border border-border-subtle px-2.5 py-0.5 rounded-chip shadow-sm">
            Sample data
          </span>
        </div>

        {/* 4 Stat Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-5 rounded-card border border-border-subtle bg-white shadow-card space-y-1 hover:border-cobalt/30 transition-colors"
            >
              <div className="text-[32px] font-sans font-extrabold text-obsidian tracking-tight">
                {stat.value}
              </div>
              <div className="text-[14px] font-bold text-text-primary">{stat.label}</div>
              <div className="text-[12px] text-text-muted">{stat.source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Wordmarks Marquee */}
      <div
        tabIndex={0}
        aria-label="Partner Organisations Marquee"
        className="relative w-full border-t border-border-subtle/80 pt-6 overflow-hidden focus-visible:ring-2 focus-visible:outline-none"
      >
        <div className="animate-marquee flex items-center gap-14 text-text-muted font-sans font-semibold text-[15px] tracking-tight select-none">
          {marqueePartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 shrink-0 hover:text-obsidian transition-colors cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block shadow-sm"></span>
              <span className="font-bold text-text-primary">{partner.name}</span>
              <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-chip bg-white border border-border-subtle text-text-secondary font-medium">
                {partner.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
