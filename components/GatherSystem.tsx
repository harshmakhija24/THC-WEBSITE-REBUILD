import React from "react";
import PulseLine from "./PulseLine";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GatherSystem() {
  const formats = [
    {
      id: "format-1",
      cadence: "Quarterly",
      cadencePillClass: "bg-cobalt text-white font-bold",
      typeBadge: "Flagship",
      title: "Clinical Validation & SaMD Summit",
      subhead: "For AI founders, radiologists and chief medical officers.",
      locations: "Bengaluru · Hyderabad · Delhi NCR",
      actionLabel: "View agenda",
      actionUrl: "https://lu.ma/thc-ai-summit-2026",
    },
    {
      id: "format-2",
      cadence: "Monthly",
      cadencePillClass: "bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold",
      typeBadge: "25 seats",
      title: "Hospital CIO Roundtables",
      subhead: "For hospital CIOs and health IT leaders.",
      locations: "Mumbai · Pune · Chennai · Hyderabad",
      actionLabel: "Request invite",
      actionUrl: "https://tally.so/r/thc-roundtable",
    },
    {
      id: "format-3",
      cadence: "Bi-weekly",
      cadencePillClass: "bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold",
      typeBadge: "Open",
      title: "Healthtech Chapter Mixers",
      subhead: "For engineers, clinicians and early operators.",
      locations: "8 chapters across India",
      actionLabel: "Find your chapter",
      actionUrl: "https://lu.ma/thc-chapters",
    },
  ];

  return (
    <section
      id="events"
      className="bg-[#090D16] text-white py-20 md:py-28 relative overflow-hidden bg-grid-tech-dark border-y border-slate-800/80"
    >
      {/* High-Tech Pulse Divider at Top */}
      <div className="absolute top-0 inset-x-0 opacity-40 pointer-events-none">
        <PulseLine variant="divider" strokeColor="cyan" />
      </div>

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        {/* Original Section Header (Preserved) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[12px] font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Gathering System</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] font-sans font-bold text-white tracking-tight leading-tight">
              Where clinical validation meets{" "}
              <span className="italic font-serif text-cyan-300 font-normal">fellowship.</span>
            </h2>

            <p className="text-[16px] text-slate-300 leading-relaxed font-normal">
              Healthcare innovation requires trust that cannot be built over Zoom. We organize a
              system of high-cadence in-person rooms designed for every stage of clinical adoption.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://lu.ma/thc-gatherings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold text-[15px] inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>See all formats</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Clean Minimalist Cards Matching Reference Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {formats.map((fmt) => (
            <div
              key={fmt.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#0D1424] border border-slate-800/90 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.6)] flex flex-col justify-between min-h-[380px] hover:border-slate-700 hover:-translate-y-1 transition-all duration-normal group"
            >
              {/* Top Area: Dual Pills + Title + Subhead */}
              <div className="space-y-5">
                {/* Dual Pills Row */}
                <div className="flex items-center gap-2 text-[12px]">
                  <span className={`px-3 py-1 rounded-chip text-[12px] ${fmt.cadencePillClass}`}>
                    {fmt.cadence}
                  </span>
                  <span className="px-3 py-1 rounded-chip bg-white/10 text-slate-300 text-[12px] font-semibold">
                    {fmt.typeBadge}
                  </span>
                </div>

                {/* Title in Plus Jakarta Sans */}
                <h3 className="text-[24px] lg:text-[26px] font-sans font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                  {fmt.title}
                </h3>

                {/* Subhead */}
                <p className="text-[15px] text-slate-300 leading-relaxed font-normal">
                  {fmt.subhead}
                </p>
              </div>

              {/* Bottom Area: Locations + Action Link */}
              <div className="pt-8 space-y-3">
                <div className="text-[13px] font-mono text-slate-400 tracking-tight">
                  {fmt.locations}
                </div>

                <div>
                  <a
                    href={fmt.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-bold text-[14px] inline-flex items-center gap-1 group/link transition-colors"
                  >
                    <span>{fmt.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Tech Pulse Divider at Bottom */}
      <div className="absolute bottom-0 inset-x-0 opacity-40 pointer-events-none">
        <PulseLine variant="divider" strokeColor="cyan" />
      </div>
    </section>
  );
}
