import React from "react";
import Link from "next/link";
import BackgroundPattern from "./BackgroundPattern";
import {
  ShieldCheck,
  Network,
  Users2,
  FileCheck2,
  Stethoscope,
  Building2,
  TrendingUp,
  Landmark,
  Microscope,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function AudienceAndSteps() {
  const audiences = [
    { label: "Founders & Operators", icon: Briefcase, tint: "bg-blue-50 text-blue-800 border-blue-200/60" },
    { label: "Hospitals & Clinics", icon: Building2, tint: "bg-emerald-50 text-emerald-800 border-emerald-200/60" },
    { label: "Practicing Clinicians", icon: Stethoscope, tint: "bg-cyan-50 text-cyan-800 border-cyan-200/60" },
    { label: "Healthcare Investors", icon: TrendingUp, tint: "bg-purple-50 text-purple-800 border-purple-200/60" },
    { label: "Corporates & Pharma", icon: Microscope, tint: "bg-slate-100 text-slate-800 border-slate-200" },
    { label: "Policy & Regulators", icon: Landmark, tint: "bg-amber-50 text-amber-800 border-amber-200/60" },
  ];

  const steps = [
    {
      number: "01",
      title: "Get verified",
      outcome: "Clinical & venture credentials vetted",
      description:
        "Every profile is verified by THC administrators before contact channels are opened, ensuring high signal.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Join your circle",
      outcome: "Specialty & regional chapters",
      description:
        "Enter high-focus rooms aligned with your focus: AI diagnostics, digital therapeutics, hospital PACS, or city chapters.",
      icon: Network,
    },
    {
      number: "03",
      title: "Meet the right people",
      outcome: "Warm, moderated introductions",
      description:
        "Skip cold LinkedIn outreach. Request targeted intros to hospital CIOs reviewing startup pilots or seed investors.",
      icon: Users2,
    },
    {
      number: "04",
      title: "Stay ahead",
      outcome: "Zero fluff regulatory playbooks",
      description:
        "Navigate CDSCO classifications, clinical trial clearances, and data protection compliances with peer playbooks.",
      icon: FileCheck2,
    },
  ];

  return (
    <section id="community" className="py-14 sm:py-20 md:py-28 bg-canvas relative overflow-hidden">
      {/* Architectural Topography Flow Pattern */}
      <BackgroundPattern variant="topography-flow" />

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        {/* Audience Strip: Who's in the room */}
        <div className="mb-12 sm:mb-20 p-5 sm:p-8 rounded-card border border-border-subtle bg-canvas-subtle space-y-5 sm:space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-2">
            <div>
              <p className="text-[11.5px] sm:text-[12px] uppercase tracking-wider text-cobalt font-extrabold mb-1">
                Curated Ecosystem
              </p>
              <h2 className="text-[24px] sm:text-[28px] font-sans font-extrabold text-obsidian tracking-tight">
                Who&apos;s in the <span className="italic font-serif text-cobalt font-normal">room?</span>
              </h2>
              <p className="text-[13.5px] sm:text-[14px] text-text-secondary mt-1">
                Cross-functional rooms engineered for tangible clinical adoption.
              </p>
            </div>

            {/* Purposeful Editorial Callout Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-border-subtle shadow-xs max-w-md flex items-start gap-3 sm:gap-3.5">
              <div className="w-1 h-12 rounded-full bg-cobalt shrink-0 mt-0.5" />
              <div>
                <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider text-cobalt block mb-0.5 sm:mb-1">
                  The Collective Principle
                </span>
                <p className="text-[12.5px] sm:text-[13px] text-text-primary font-medium leading-relaxed">
                  THC brings all key stakeholders to the same table. No single group dominates; every
                  interaction has balanced clinical and commercial perspective.
                </p>
              </div>
            </div>
          </div>

          {/* Audience Pills: Responsive flow */}
          <div className="space-y-2 sm:space-y-3">
            {/* Row 1: 3 Pills */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {audiences.slice(0, 3).map((aud) => {
                const Icon = aud.icon;
                return (
                  <div
                    key={aud.label}
                    className={`inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-chip border shadow-xs text-[12px] sm:text-[13px] font-bold ${aud.tint} hover:shadow-sm transition-all`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
                    <span>{aud.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 2: 3 Pills */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {audiences.slice(3, 6).map((aud) => {
                const Icon = aud.icon;
                return (
                  <div
                    key={aud.label}
                    className={`inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-chip border shadow-xs text-[12px] sm:text-[13px] font-bold ${aud.tint} hover:shadow-sm transition-all`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
                    <span>{aud.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* How It Works Header */}
        <div className="max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-blue-50 border border-blue-200/50 text-cobalt text-[12px] font-bold">
            <span>The Membership Pathway</span>
          </div>
          <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-sans font-extrabold text-obsidian tracking-tight leading-tight">
            How THC works in{" "}
            <span className="italic font-serif text-cobalt font-normal">practice.</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-text-secondary leading-relaxed">
            Designed to produce tangible partnerships, hospital deployments, and co-investments in 4
            structured steps.
          </p>
        </div>

        {/* 4 Outcome-Written Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-card border border-border-subtle bg-white shadow-card flex flex-col justify-between space-y-4 sm:space-y-5 hover:-translate-y-1 hover:border-cobalt/40 transition-all"
              >
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[22px] sm:text-[24px] font-extrabold text-slate-300">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-input bg-blue-50 flex items-center justify-center text-cobalt">
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[17px] sm:text-[18px] font-sans font-bold text-obsidian">
                      {step.title}
                    </h3>
                    <div className="text-[11.5px] sm:text-[12px] font-bold text-emerald-600 mt-1">
                      {step.outcome}
                    </div>
                  </div>

                  <p className="text-[12.5px] sm:text-[13px] text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Bar with Cyber Rays Background Lines */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 rounded-card bg-obsidian text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-elevated relative overflow-hidden border border-white/10">
          <BackgroundPattern variant="cyber-rays" />

          <div className="space-y-1 text-center md:text-left relative z-10">
            <div className="text-[19px] sm:text-[22px] font-sans font-bold">
              Ready to meet your first hospital pilot partner?
            </div>
            <div className="text-[13px] sm:text-[14px] text-slate-300">
              Applications are reviewed weekly. Join 12,500+ leaders across India.
            </div>
          </div>
          <Link
            href="/join"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-chip bg-cobalt text-white font-bold text-[14px] sm:text-[15px] hover:bg-cobalt-hover active:scale-95 transition-all shadow-md shrink-0 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white relative z-10"
          >
            <span>Apply to Join THC</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
