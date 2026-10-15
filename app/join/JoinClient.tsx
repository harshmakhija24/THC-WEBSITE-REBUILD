"use client";

import { useState } from "react";
import Image from "next/image";
import BackgroundPattern from "@/components/BackgroundPattern";
import PulseLine from "@/components/PulseLine";
import summitImg from "@/public/gathering-summit.jpg";
import roundtableImg from "@/public/gathering-roundtable.jpg";
import mixerImg from "@/public/gathering-mixer.jpg";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Building2,
  TrendingUp,
  MessageCircle,
  Users2,
  ChevronDown,
  Flame,
  Award,
  Lock,
} from "lucide-react";
import type { Testimonial, FAQ } from "@/lib/types";

type JoinClientProps = {
  testimonials: Testimonial[];
  faqs: FAQ[];
};

type PhotoKey = "summit" | "roundtable" | "mixer";

export default function JoinClient(_props: JoinClientProps) {
  const [activePhoto, setActivePhoto] = useState<PhotoKey>("summit");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const photoGalleries = {
    summit: {
      img: summitImg,
      badge: "Quarterly Summit",
      badgeColor: "bg-cobalt",
      title: "Clinical Validation & SaMD",
      location: "Bengaluru · 40 Curated Leaders",
      desc: "Closed-door dinners bringing together founders building medical AI and diagnostic tools with heads of radiology and clinical research.",
    },
    roundtable: {
      img: roundtableImg,
      badge: "Monthly Roundtable",
      badgeColor: "bg-emerald-600",
      title: "Hospital CIO & Operator Forum",
      location: "Mumbai · 25 Executive Seats",
      desc: "Confidential, invite-only roundtable where tertiary hospital chiefs review pilot technology, integration hurdles, and hospital economics.",
    },
    mixer: {
      img: mixerImg,
      badge: "Bi-Weekly Mixer",
      badgeColor: "bg-cyan-600",
      title: "Healthtech Community Mixer",
      location: "8 Indian Metro Chapters",
      desc: "Lively, high-energy gatherings connecting engineers, physicians, product managers, and founders prototyping the next generation of care.",
    },
  };

  const membershipFaqs = [
    {
      q: "Is the WhatsApp community really free to join?",
      a: "Yes! Currently, our primary digital WhatsApp network is 100% free and open to active founders, clinicians, hospital operators, and engineers. We maintain strict moderation to eliminate spam, sales pitches, and self-promotion.",
    },
    {
      q: "What is included in the ₹49,999 ASCENT cohort?",
      a: "ASCENT is our flagship structured program: curated 1-on-1 introductions to hospital innovation chiefs, healthcare VCs ($250k–$1.5M checks), 100% complimentary entry to all offline summits (saving ₹25,000+), and verified directory badge.",
    },
    {
      q: "Can practicing clinicians and doctors join for free?",
      a: "Yes. Practicing clinicians, medical residents, and hospital researchers participate in specialized Clinical Advisory Circles completely free of cost.",
    },
    {
      q: "How does THC facilitate hospital pilot introductions?",
      a: "Rather than cold pitches, we match founders who have clinical validation or CDSCO roadmaps directly with hospital chiefs who have active procurement mandates, ensuring immediate executive interest.",
    },
  ];

  const currentPhoto = photoGalleries[activePhoto];

  return (
    <div className="bg-canvas text-text-primary selection:bg-cobalt-tint selection:text-cobalt">
      {/* ========================================================================= */}
      {/* SCROLL 1: THE INTAKE PORTAL & GATHERING ATMOSPHERE (Height: ~800px)       */}
      {/* ========================================================================= */}
      <section className="relative pt-6 pb-8 sm:pt-8 sm:pb-12 border-b border-line bg-white overflow-hidden">
        {/* Lively Architectural Blueprint Background Lines */}
        <BackgroundPattern
          variant="tech-blueprint"
          strokeColor="rgba(148, 163, 184, 0.28)"
          accentColor="emerald"
        />

        <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
          {/* Hero Header Area */}
          <div className="max-w-3xl space-y-2.5 sm:space-y-3">
            {/* Admissions Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              <span>Admissions Open · Instant Free WhatsApp Community Access</span>
            </div>

            {/* Headline */}
            <h1 className="text-[28px] sm:text-[42px] lg:text-[50px] font-sans font-extrabold tracking-tight leading-[1.12] sm:leading-[1.1] text-[#1B225E]">
              Where India&apos;s healthtech builders{" "}
              <span className="relative inline-block">
                <span className="italic font-serif font-normal bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent inline-block">
                  belong.
                </span>
                <span className="absolute -bottom-2 left-0 w-full flex justify-center pointer-events-none">
                  <PulseLine variant="accent" strokeColor="cobalt" className="w-full h-3 opacity-90" />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[13.5px] sm:text-[15.5px] text-slate leading-relaxed">
              Step directly into India&apos;s most active healthtech network. Join our free WhatsApp community today, or level up into vetted founder cohorts and hospital CIO roundtables.
            </p>

            {/* Live Ecosystem Proof Chips */}
            <div className="pt-0.5 flex items-center gap-2 sm:gap-3 flex-wrap text-[11px] sm:text-[12px] font-medium text-slate">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-chip bg-canvas-subtle border border-line">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                <span><strong className="text-ink">12,500+</strong> Leaders</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-chip bg-canvas-subtle border border-line">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                <span><strong className="text-ink">14</strong> Metro Chapters</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-chip bg-canvas-subtle border border-line">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                <span><strong className="text-ink">40+</strong> Hospital Clearances</span>
              </div>
            </div>
          </div>

          {/* Dual-Pane Bento Grid: Left Free WhatsApp Intake | Right Gatherings Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-6 sm:mt-8 items-stretch">
            {/* Left Pane: WhatsApp Community Pass (Featured Free Intake) */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-[22px] border-2 border-emerald-500/35 bg-white shadow-elevated relative overflow-hidden flex flex-col justify-between group">
              {/* Subtle ambient radiant glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

              <div className="relative z-10 space-y-3.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-chip bg-emerald-100 text-emerald-800 text-[10.5px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free Community Intake</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-chip bg-slate-100 text-slate text-[11px] font-bold">
                    8,400+ Active Members
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[28px] sm:text-[34px] font-sans font-extrabold text-obsidian tracking-tight">₹0</span>
                    <span className="text-[12.5px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Free Instant Access
                    </span>
                  </div>
                  <h2 className="text-[20px] sm:text-[23px] font-sans font-bold text-obsidian tracking-tight mt-1">
                    The THC WhatsApp Community
                  </h2>
                  <p className="text-[12.5px] sm:text-[13.5px] text-slate mt-1 leading-relaxed">
                    Skip long admission cycles. Step directly into India&apos;s largest curated forum for healthtech builders, practicing doctors, hospital executives, and angel investors. Zero spam, 100% signal.
                  </p>
                </div>

                {/* 4 Feature Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[12px] sm:text-[12.5px] text-text-primary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Daily High-Signal Queries:</strong> Fast answers on CDSCO, PACS, and trials.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Weekly Virtual AMAs:</strong> Live audio rooms with Series A/B founders & clinicians.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>City Chapter Alerts:</strong> First access to offline meetups in 8 metros.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Advisory Matchmaking:</strong> Connect directly with practicing clinical advisors.</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4 mt-2 border-t border-emerald-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://chat.whatsapp.com/invite/thc-healthtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-chip bg-[#25D366] hover:bg-[#20BD5A] text-obsidian font-extrabold text-[13.5px] sm:text-[14px] transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  <span>Join WhatsApp Community (Free)</span>
                </a>
                <span className="text-[11px] text-slate text-center sm:text-left">
                  Instant invitation link · No credit card required
                </span>
              </div>
            </div>

            {/* Right Pane: Inside Gatherings (Interactive Photo Showcase) */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-[22px] border border-border-subtle bg-white shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cobalt">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real Rooms · Real Trust</span>
                  </div>
                  {/* Photo Switch Tabs */}
                  <div className="flex items-center gap-1 bg-canvas-subtle p-0.5 rounded-chip border border-line text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setActivePhoto("summit")}
                      className={`px-2.5 py-1 rounded-chip transition-all ${
                        activePhoto === "summit"
                          ? "bg-cobalt text-white shadow-xs"
                          : "text-slate hover:text-ink"
                      }`}
                    >
                      Summit
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhoto("roundtable")}
                      className={`px-2.5 py-1 rounded-chip transition-all ${
                        activePhoto === "roundtable"
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "text-slate hover:text-ink"
                      }`}
                    >
                      Roundtable
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhoto("mixer")}
                      className={`px-2.5 py-1 rounded-chip transition-all ${
                        activePhoto === "mixer"
                          ? "bg-cyan-600 text-white shadow-xs"
                          : "text-slate hover:text-ink"
                      }`}
                    >
                      Mixer
                    </button>
                  </div>
                </div>

                {/* Interactive Photo Frame */}
                <div className="relative h-44 sm:h-52 w-full rounded-[16px] overflow-hidden bg-slate-900 border border-border-subtle group">
                  <Image
                    src={currentPhoto.img}
                    alt={currentPhoto.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className={`px-2 py-0.5 rounded-chip ${currentPhoto.badgeColor} text-[10px] font-bold uppercase tracking-wider inline-block`}>
                      {currentPhoto.badge}
                    </span>
                    <div className="text-[13.5px] sm:text-[14.5px] font-bold mt-1 leading-snug">
                      {currentPhoto.title}
                    </div>
                    <div className="text-[11.5px] text-slate-300">
                      {currentPhoto.location}
                    </div>
                  </div>
                </div>

                {/* Photo Description Box */}
                <div className="p-3 bg-canvas-subtle rounded-[12px] border border-line text-[12px] text-slate leading-relaxed mt-2.5">
                  {currentPhoto.desc}
                </div>
              </div>

              {/* 4 Value Pills */}
              <div className="grid grid-cols-2 gap-2 pt-3 mt-1 border-t border-border-subtle/80 text-[11.5px] sm:text-[12px]">
                <div className="p-2 rounded-input bg-canvas-subtle border border-border-subtle flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-cobalt shrink-0" />
                  <span className="font-semibold text-obsidian truncate">Hospital Pilots (Apollo, Manipal)</span>
                </div>
                <div className="p-2 rounded-input bg-canvas-subtle border border-border-subtle flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span className="font-semibold text-obsidian truncate">Dedicated Capital ($250k–$1.5M)</span>
                </div>
                <div className="p-2 rounded-input bg-canvas-subtle border border-border-subtle flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-obsidian truncate">CDSCO / SaMD Roadmaps</span>
                </div>
                <div className="p-2 rounded-input bg-canvas-subtle border border-border-subtle flex items-center gap-2">
                  <Users2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="font-semibold text-obsidian truncate">Verified 680+ Directory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SCROLL 2: PRICING COMPARISON, BULLETPROOF FAQ & FAST ENROLL (Height: ~850px) */}
      {/* ========================================================================= */}
      <section className="relative py-8 sm:py-12 bg-canvas-subtle border-b border-border-subtle overflow-hidden">
        {/* Continuous Tech Blueprint Lines */}
        <BackgroundPattern
          variant="tech-blueprint"
          strokeColor="rgba(148, 163, 184, 0.22)"
          accentColor="cobalt"
        />

        <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-cobalt mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Transparent Pathways · Zero Hidden Fees</span>
              </div>
              <h2 className="text-[26px] sm:text-[34px] font-sans font-extrabold text-obsidian tracking-tight leading-tight">
                Membership options.
              </h2>
            </div>
            <p className="text-[12.5px] sm:text-[13.5px] text-slate max-w-md leading-relaxed">
              From open collaboration on WhatsApp to structured pilot accelerators and closed-door leadership roundtables.
            </p>
          </div>

          {/* 3 Tier Cards Side-by-Side Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {/* TIER 1: THC Connect */}
            <div className="p-4 sm:p-5 rounded-[20px] border border-border-subtle bg-white shadow-card flex flex-col justify-between space-y-4 hover:border-border-strong transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-chip bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10.5px] font-bold uppercase tracking-wider">
                    Open Community
                  </span>
                  <span className="text-[11px] text-emerald-600 font-bold">Currently Free</span>
                </div>

                <div>
                  <h3 className="text-[20px] font-sans font-bold text-obsidian">THC Connect</h3>
                  <p className="text-[12px] text-slate mt-0.5 leading-relaxed">
                    For early builders, researchers, and clinicians seeking peer exchange.
                  </p>
                </div>

                <div className="py-2 border-y border-border-subtle flex items-baseline gap-1.5">
                  <span className="text-[30px] font-sans font-extrabold text-obsidian tracking-tight">₹0</span>
                  <span className="text-[12px] text-slate font-medium">/ Free Access</span>
                </div>

                {/* Features */}
                <div className="space-y-2 text-[12px] text-text-primary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    <span>Access to THC WhatsApp Community channels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    <span>Weekly virtual AMAs with clinicians and founders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    <span>Invites to open bi-weekly community chapter meetups</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                    <span>Browse public directory & healthtech job board</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/invite/thc-healthtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-chip border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-bold text-[13px] transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join Free on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* TIER 2: ASCENT Cohort (FEATURED) */}
            <div className="p-4 sm:p-5 rounded-[20px] border-2 border-cobalt bg-white shadow-elevated relative flex flex-col justify-between space-y-4 hover:border-cobalt-hover transition-all">
              {/* Highlight ribbon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-chip bg-cobalt text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                <span>Flagship Founder Cohort</span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-chip bg-blue-50 text-cobalt border border-blue-200 text-[10.5px] font-bold uppercase tracking-wider">
                    Structured Program
                  </span>
                  <span className="text-[11px] text-cobalt font-bold">Limited to 25 Founders</span>
                </div>

                <div>
                  <h3 className="text-[20px] font-sans font-bold text-obsidian">ASCENT Cohort</h3>
                  <p className="text-[12px] text-slate mt-0.5 leading-relaxed">
                    For high-conviction founders raising capital or scaling hospital pilots.
                  </p>
                </div>

                <div className="py-2 border-y border-border-subtle flex items-baseline gap-1.5">
                  <span className="text-[30px] font-sans font-extrabold text-obsidian tracking-tight">₹49,999</span>
                  <span className="text-[12px] text-slate font-medium">/ Cohort</span>
                </div>

                {/* Features */}
                <div className="space-y-2 text-[12px] text-text-primary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0 mt-0.5" />
                    <span><strong>1-on-1 Hospital Intros:</strong> Warm bridges to Apollo, Manipal, Fortis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0 mt-0.5" />
                    <span><strong>Healthcare VC Pitching:</strong> Micro-VCs with $250k–$1.5M checks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0 mt-0.5" />
                    <span><strong>100% Free Summit Access:</strong> VIP passes to offline summits (₹25k value)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0 mt-0.5" />
                    <span><strong>Verified Directory Badge:</strong> Direct inbound messaging from clinicians</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/invite/thc-healthtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-chip bg-cobalt hover:bg-cobalt-hover text-white font-bold text-[13px] transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>Apply for ASCENT Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 3: Catalyst Circle */}
            <div className="p-4 sm:p-5 rounded-[20px] border border-white/10 bg-gradient-to-b from-[#090D16] to-[#0E1626] text-white shadow-card flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-chip bg-white/10 text-cyan-300 border border-white/15 text-[10.5px] font-bold uppercase tracking-wider">
                    Executive Network
                  </span>
                  <span className="text-[11px] text-slate-300 font-bold">Invite Only</span>
                </div>

                <div>
                  <h3 className="text-[20px] font-sans font-bold text-white">Catalyst Circle</h3>
                  <p className="text-[12px] text-slate-300 mt-0.5 leading-relaxed">
                    For hospital CEOs, medical superintendents, pharma heads, and venture partners.
                  </p>
                </div>

                <div className="py-2 border-y border-white/10 flex items-baseline gap-1.5">
                  <span className="text-[30px] font-sans font-extrabold text-white tracking-tight">Custom</span>
                  <span className="text-[12px] text-slate-400 font-medium">/ Closed-Door</span>
                </div>

                {/* Features */}
                <div className="space-y-2 text-[12px] text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Host and evaluate closed-door pilot technology roundtables</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Curated dealflow matching your hospital&apos;s procurement priority</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Quarterly off-the-record healthtech executive dinners</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Direct access to policy leaders and regulatory advisory drafts</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/invite/thc-healthtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-chip bg-white/10 hover:bg-white/20 text-white font-bold text-[13px] transition-all border border-white/20 flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Request Executive Briefing</span>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BULLETPROOF 2-COLUMN FAQ GRID (Zero Overflow, Guaranteed Padding)         */}
          {/* ========================================================================= */}
          <div className="mt-8 pt-6 border-t border-border-subtle">
            <div className="mb-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-cobalt">
                Clear Answers
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-sans font-extrabold text-obsidian tracking-tight">
                Frequently asked questions.
              </h3>
            </div>

            {/* 2-Column Responsive FAQ Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {membershipFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-[16px] border border-line bg-white shadow-xs overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 font-sans font-bold text-[14px] sm:text-[14.5px] text-obsidian hover:text-cobalt transition-colors"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate shrink-0 mt-0.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-cobalt" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[12.5px] sm:text-[13px] text-slate leading-relaxed border-t border-line/60 pt-3 break-words">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick WhatsApp Admissions Helpline Bar */}
            <div className="mt-5 p-4 rounded-[18px] bg-white border border-emerald-500/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div className="text-[12.5px] sm:text-[13px] text-text-primary">
                  <strong>Need assistance or have special requirements?</strong>{" "}
                  <span className="text-slate">Chat directly with the THC team on WhatsApp.</span>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/invite/thc-healthtech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-chip bg-[#25D366] hover:bg-[#20BD5A] text-obsidian font-extrabold text-[12.5px] transition-all shadow-xs shrink-0 active:scale-95 inline-flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
