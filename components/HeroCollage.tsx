import React from "react";
import PulseLine from "./PulseLine";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import type { DirectoryProfile } from "@/lib/types";

type HeroCollageProps = {
  profiles: DirectoryProfile[];
};

export default function HeroCollage({ profiles }: HeroCollageProps) {
  // Select top 4 high-signal profiles across key categories
  const kavya = profiles.find((p) => p.slug === "kavya-rao") || profiles[1] || profiles[0];
  const aarav = profiles.find((p) => p.slug === "aarav-menon") || profiles[0];
  const rhea = profiles.find((p) => p.slug === "rhea-kapoor") || profiles[2] || profiles[0];
  const sameer = profiles.find((p) => p.slug === "sameer-joshi") || profiles[3] || profiles[0];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Pulse Line Graphic */}
      <div className="absolute -inset-6 flex items-center justify-center pointer-events-none opacity-20 z-0">
        <PulseLine variant="hero" strokeColor="cobalt" className="scale-110" />
      </div>

      {/* Structured 2-Column Staggered Roster */}
      <div className="relative z-10 space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-start">
          {/* Column 1: Hospital Lead + Investor */}
          <div className="space-y-3.5">
            {/* Card 1: Dr. Kavya Rao (Hospital / Operator) */}
            <div className="bg-white rounded-card border border-border-subtle p-3.5 shadow-card hover:border-blue-500 hover:ring-2 hover:ring-blue-500/25 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 transition-all duration-normal flex flex-col justify-between min-h-[215px] group cursor-pointer">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200/80 flex items-center justify-center font-sans font-bold text-emerald-800 text-[12px] shrink-0 shadow-xs">
                      KR
                    </div>
                    <div className="min-w-0 min-h-[36px] flex flex-col justify-center">
                      <div className="font-sans font-bold text-[13px] text-text-primary leading-tight">
                        {kavya.name}
                      </div>
                      <div className="text-[11px] font-medium text-text-secondary leading-tight mt-0.5">
                        Lakeview Health Systems
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-emerald-800 mb-1.5">
                  Chief Innovation Officer
                </div>

                <p className="text-[11px] text-text-secondary bg-canvas-subtle p-2 rounded-input border border-border-subtle/70 mb-2 leading-relaxed min-h-[46px] flex items-center">
                  Reviewing AI radiology triage pilots across 14 hospital centers.
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-border-subtle/60 mt-auto">
                <span className="px-2 py-0.5 rounded-chip bg-emerald-50 text-emerald-800 font-semibold">
                  Hospital Pilots
                </span>
                <span className="text-text-muted font-mono">{kavya.city}</span>
              </div>
            </div>

            {/* Card 3: Rhea Kapoor (Investor) */}
            <div className="bg-white rounded-card border border-border-subtle p-3.5 shadow-card hover:border-blue-500 hover:ring-2 hover:ring-blue-500/25 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 transition-all duration-normal flex flex-col justify-between min-h-[215px] group cursor-pointer">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-purple-50 border border-purple-200/80 flex items-center justify-center font-sans font-bold text-purple-800 text-[12px] shrink-0 shadow-xs">
                      RK
                    </div>
                    <div className="min-w-0 min-h-[36px] flex flex-col justify-center">
                      <div className="font-sans font-bold text-[13px] text-text-primary leading-tight">
                        {rhea.name}
                      </div>
                      <div className="text-[11px] font-medium text-text-secondary leading-tight mt-0.5">
                        Cedar Health Ventures
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-purple-800 mb-1.5">
                  Principal & Healthtech Lead
                </div>

                <p className="text-[11px] text-text-secondary bg-canvas-subtle p-2 rounded-input border border-border-subtle/70 mb-2 leading-relaxed min-h-[46px] flex items-center">
                  Deploying $500k–$1.5M checks for clinical workflow & diagnostics.
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-border-subtle/60 mt-auto">
                <span className="px-2 py-0.5 rounded-chip bg-purple-50 text-purple-800 font-semibold">
                  Seed Investor
                </span>
                <span className="text-text-muted font-mono">{rhea.city}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Founder + Clinician */}
          <div className="space-y-3.5">
            {/* Card 2: Aarav Menon (Founder) */}
            <div className="bg-white rounded-card border border-border-subtle p-3.5 shadow-card hover:border-blue-500 hover:ring-2 hover:ring-blue-500/25 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 transition-all duration-normal flex flex-col justify-between min-h-[215px] group cursor-pointer">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-sans font-bold text-cobalt text-[12px] shrink-0 shadow-xs">
                      AM
                    </div>
                    <div className="min-w-0 min-h-[36px] flex flex-col justify-center">
                      <div className="font-sans font-bold text-[13px] text-text-primary leading-tight">
                        {aarav.name}
                      </div>
                      <div className="text-[11px] font-medium text-text-secondary leading-tight mt-0.5">
                        PulseScan AI
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-cobalt mb-1.5">
                  Founder & CEO · Seed ($2.4M)
                </div>

                <p className="text-[11px] text-text-secondary bg-canvas-subtle p-2 rounded-input border border-border-subtle/70 mb-2 leading-relaxed min-h-[46px] flex items-center">
                  Chest X-ray AI in 40+ labs. Seeking North India hospital pilots.
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-border-subtle/60 mt-auto">
                <span className="px-2 py-0.5 rounded-chip bg-blue-50 text-blue-700 font-semibold">
                  AI Diagnostics
                </span>
                <span className="text-text-muted font-mono">{aarav.city}</span>
              </div>
            </div>

            {/* Card 4: Dr. Sameer Joshi (Clinician / Radiologist) */}
            <div className="bg-white rounded-card border border-border-subtle p-3.5 shadow-card hover:border-blue-500 hover:ring-2 hover:ring-blue-500/25 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 transition-all duration-normal flex flex-col justify-between min-h-[215px] group cursor-pointer">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center font-sans font-bold text-cyan-800 text-[12px] shrink-0 shadow-xs">
                      DS
                    </div>
                    <div className="min-w-0 min-h-[36px] flex flex-col justify-center">
                      <div className="font-sans font-bold text-[13px] text-text-primary leading-tight">
                        {sameer.name}
                      </div>
                      <div className="text-[11px] font-medium text-text-secondary leading-tight mt-0.5">
                        Apex Clinical Research
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-cyan-800 mb-1.5">
                  Lead Radiologist & Advisor
                </div>

                <p className="text-[11px] text-text-secondary bg-canvas-subtle p-2 rounded-input border border-border-subtle/70 mb-2 leading-relaxed min-h-[46px] flex items-center">
                  18+ yrs guiding healthtech founders on CDSCO validation & UX.
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-border-subtle/60 mt-auto">
                <span className="px-2 py-0.5 rounded-chip bg-cyan-50 text-cyan-800 font-semibold">
                  Clinical Trials
                </span>
                <span className="text-text-muted font-mono">{sameer.city}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Network Trust Strip */}
        <div className="p-3 rounded-card border border-border-subtle bg-canvas-subtle flex items-center justify-between gap-2 shadow-xs text-[11px]">
          <div className="flex items-center gap-2 text-text-secondary">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong className="text-text-primary font-semibold">100% Vetted:</strong> Clinical,
              hospital, and investor credentials verified.
            </span>
          </div>
          <span className="font-mono text-emerald-700 font-semibold text-[10px] shrink-0 bg-emerald-50 px-2 py-0.5 rounded-chip border border-emerald-200/50">
            680+ Leaders
          </span>
        </div>
      </div>
    </div>
  );
}
