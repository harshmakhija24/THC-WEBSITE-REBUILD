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
} from "lucide-react";
import type { Testimonial, FAQ } from "@/lib/types";

type JoinClientProps = {
  testimonials: Testimonial[];
  faqs: FAQ[];
};

export default function JoinClient({ testimonials }: JoinClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const membershipFaqs = [
    {
      q: "Is the WhatsApp community really free to join?",
      a: "Yes! Currently, our primary digital WhatsApp network is 100% free and open to active founders, practicing clinicians, hospital operators, and engineers. We maintain strict moderation to eliminate spam, sales pitches, and self-promotion.",
    },
    {
      q: "What makes the ASCENT Cohort different from the free WhatsApp community?",
      a: "The WhatsApp community is an open collaborative forum. ASCENT (₹49,999/cohort) is our flagship structured program for high-conviction founders—including curated 1-on-1 introductions to hospital innovation chiefs, healthcare VCs, 100% complimentary entry to all offline summits (saving ₹25,000+), and verified directory positioning.",
    },
    {
      q: "Who qualifies for the Catalyst Circle?",
      a: "Catalyst Circle is tailored specifically for hospital CEOs, Chief Innovation Officers, medical superintendents, pharma leaders, and venture partners looking to engage with vetted startup dealflow and host closed-door pilot evaluations.",
    },
    {
      q: "Can practicing clinicians and doctors join for free?",
      a: "Yes. Practicing clinicians and hospital researchers can join the WhatsApp community and participate in specialized Clinical Advisory Circles completely free of cost.",
    },
    {
      q: "How does THC facilitate hospital pilot introductions?",
      a: "Rather than cold introductions, we match founders who have clinical validation or CE/CDSCO pathways with hospital chiefs who have active procurement mandates, ensuring high signal and immediate executive interest.",
    },
    {
      q: "How long does application review take?",
      a: "Applications for ASCENT and Catalyst Circle are reviewed weekly by THC admissions. You will receive an update on your application status within 3 to 5 business days.",
    },
  ];

  return (
    <div className="bg-canvas text-text-primary selection:bg-cobalt-tint selection:text-cobalt">
      {/* 1. Announcement Pill Bar */}
      <div className="bg-gradient-to-r from-[#090D16] via-[#0E1E38] to-[#1E3A8A] text-white py-2.5 px-4 text-[12px] sm:text-[12.5px] border-b border-border-subtle/20">
        <div className="max-w-container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-white tracking-wide">
              Limited Period:
            </span>
            <span className="text-slate-200">
              THC WhatsApp Community is currently <strong className="text-emerald-300">Free to Join</strong> for active builders & clinicians.
            </span>
          </div>
          <a
            href="https://chat.whatsapp.com/invite/thc-healthtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:text-white font-bold inline-flex items-center gap-1 transition-colors text-[11.5px] sm:text-[12px] underline underline-offset-2 shrink-0 self-start sm:self-auto"
          >
            <span>Claim Free WhatsApp Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-line bg-white overflow-hidden">
        <BackgroundPattern variant="tech-blueprint" />

        <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-3.5 sm:space-y-4">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-chip bg-lilac/70 border border-line text-ink text-[11.5px] sm:text-[12px] font-bold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cobalt" />
              <span>Membership Pathways · 2026 Admissions</span>
            </div>

            {/* Title */}
            <h1 className="text-[30px] sm:text-[44px] lg:text-[58px] font-sans font-extrabold tracking-tight leading-[1.12] sm:leading-[1.1] text-[#1B225E]">
              Where India&apos;s healthtech builders{" "}
              <span className="relative inline-block">
                <span className="italic font-serif font-normal bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent inline-block">
                  belong.
                </span>
                <span className="absolute -bottom-2 left-0 w-full flex justify-center pointer-events-none">
                  <PulseLine variant="accent" strokeColor="cobalt" className="w-full h-3.5 opacity-90" />
                </span>
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-[14.5px] sm:text-[17px] text-slate leading-relaxed">
              From our open, high-signal WhatsApp community to vetted founder cohorts and closed-door hospital CIO roundtables. Choose the pathway that matches where you are in your clinical journey.
            </p>

            {/* Quick Proof Metrics */}
            <div className="pt-1.5 flex items-center gap-2 sm:gap-4 flex-wrap text-[11.5px] sm:text-[13px] font-medium text-slate">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-chip bg-canvas-subtle border border-line">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                <span><strong className="text-ink">12,500+</strong> Leaders</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-chip bg-canvas-subtle border border-line">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                <span><strong className="text-ink">14</strong> Metro Chapters</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-chip bg-canvas-subtle border border-line">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                <span><strong className="text-ink">40+</strong> Hospital Clearances</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 🔥 Featured Highlight: Instant Free Access to WhatsApp Community */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#F0FDF4] to-canvas border-b border-emerald-100 relative overflow-hidden">
        <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
          <div className="p-5 sm:p-10 rounded-[20px] sm:rounded-[24px] border-2 border-emerald-500/30 bg-white shadow-elevated relative overflow-hidden">
            {/* Emerald glow accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              {/* Left Column: Details */}
              <div className="space-y-3.5 sm:space-y-4 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-chip bg-emerald-100 text-emerald-800 text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free Community Intake · Open Now</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-chip bg-slate-100 text-slate text-[11px] sm:text-[11.5px] font-bold">
                    8,400+ Active Members
                  </span>
                </div>

                <div>
                  <h2 className="text-[24px] sm:text-[34px] font-sans font-extrabold text-obsidian tracking-tight leading-tight">
                    The THC WhatsApp Community
                  </h2>
                  <p className="text-[13.5px] sm:text-[15.5px] text-slate mt-1.5 leading-relaxed">
                    Skip long admission cycles. Step directly into India&apos;s largest curated WhatsApp community for healthtech builders, practicing doctors, hospital executives, and angel investors. Zero spam, 100% signal.
                  </p>
                </div>

                {/* 4 Feature Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  <div className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Daily High-Signal Queries:</strong> Fast answers on CDSCO, PACS, and clinical trial partners.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Weekly Virtual AMAs:</strong> Live audio & video rooms with Series A/B founders & hospital CIOs.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>City Chapter Alerts:</strong> First access to local offline meetups in 8 Indian metros.</span>
                  </div>
                  <div className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Doctor & Founder Matchmaking:</strong> Connect directly with practicing clinical advisors.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Prominent Action Box */}
              <div className="w-full lg:w-80 p-5 sm:p-6 rounded-[18px] sm:rounded-[20px] bg-gradient-to-b from-[#090D16] to-[#0D1F38] text-white space-y-3.5 sm:space-y-4 shadow-card text-center border border-white/10 shrink-0">
                <div className="space-y-1">
                  <div className="text-[10.5px] sm:text-[11px] uppercase tracking-wider text-emerald-400 font-extrabold">
                    Community Tier
                  </div>
                  <div className="text-[30px] sm:text-[34px] font-sans font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5">
                    <span>₹0</span>
                    <span className="text-[12.5px] sm:text-[13px] font-medium text-slate-400">/ Free</span>
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] text-emerald-300 font-medium">
                    Instant access via WhatsApp
                  </div>
                </div>

                <a
                  href="https://chat.whatsapp.com/invite/thc-healthtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 sm:py-3.5 px-5 rounded-chip bg-[#25D366] hover:bg-[#20BD5A] text-obsidian font-extrabold text-[14px] sm:text-[14.5px] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" />
                  <span>Join WhatsApp Community</span>
                </a>

                <p className="text-[10.5px] sm:text-[11px] text-slate-400 leading-snug">
                  Immediate invitation link · Moderated for builders & clinicians · No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Lively In-Person Atmosphere (Real Gatherings Photos) */}
      <section className="py-14 sm:py-20 bg-canvas-subtle border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-white border border-line text-ink text-[11.5px] font-bold uppercase tracking-wider">
              <span>Real Rooms · Real Trust</span>
            </div>
            <h2 className="text-[28px] sm:text-[38px] font-sans font-extrabold text-obsidian tracking-tight leading-tight">
              Inside THC gatherings.
            </h2>
            <p className="text-[14.5px] sm:text-[16px] text-text-secondary leading-relaxed">
              Healthtech deals and hospital pilots don&apos;t happen over cold emails. We run a continuous cadence of physical, closed-door rooms across India.
            </p>
          </div>

          {/* 3 Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Summit */}
            <div className="rounded-[20px] overflow-hidden border border-border-subtle bg-white shadow-card group flex flex-col justify-between">
              <div>
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={summitImg}
                    alt="THC Clinical Validation Summit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="px-2.5 py-0.5 rounded-chip bg-cobalt text-[10.5px] font-bold uppercase tracking-wider inline-block">
                      Quarterly Summit
                    </span>
                    <div className="text-[14.5px] font-bold mt-1 leading-snug">Clinical Validation & SaMD</div>
                    <div className="text-[12px] text-slate-300">Bengaluru · 40 Curated Leaders</div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[13px] sm:text-[13.5px] text-slate leading-relaxed">
                    Closed-door dinners bringing together founders building medical AI and diagnostic tools with heads of radiology and clinical research.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Roundtable */}
            <div className="rounded-[20px] overflow-hidden border border-border-subtle bg-white shadow-card group flex flex-col justify-between">
              <div>
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={roundtableImg}
                    alt="Executive Hospital CIO Roundtable"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="px-2.5 py-0.5 rounded-chip bg-emerald-600 text-[10.5px] font-bold uppercase tracking-wider inline-block">
                      Monthly Roundtable
                    </span>
                    <div className="text-[14.5px] font-bold mt-1 leading-snug">Hospital CIO & Operator Forum</div>
                    <div className="text-[12px] text-slate-300">Mumbai · 25 Executive Seats</div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[13px] sm:text-[13.5px] text-slate leading-relaxed">
                    Confidential, invite-only roundtable where tertiary hospital chiefs review pilot technology, integration hurdles, and hospital economics.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Mixer */}
            <div className="rounded-[20px] overflow-hidden border border-border-subtle bg-white shadow-card group flex flex-col justify-between">
              <div>
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={mixerImg}
                    alt="THC Community Chapter Mixer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="px-2.5 py-0.5 rounded-chip bg-cyan-600 text-[10.5px] font-bold uppercase tracking-wider inline-block">
                      Bi-Weekly Mixer
                    </span>
                    <div className="text-[14.5px] font-bold mt-1 leading-snug">Healthtech Community Mixer</div>
                    <div className="text-[12px] text-slate-300">8 Indian Metro Chapters</div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[13px] sm:text-[13.5px] text-slate leading-relaxed">
                    Lively, high-energy gatherings connecting engineers, physicians, product managers, and founders prototyping the next generation of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The 4 Value Pillars */}
      <section className="py-14 sm:py-20 bg-white border-b border-border-subtle">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-cobalt">
              The Member Advantage
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-sans font-extrabold text-obsidian tracking-tight">
              What you unlock at THC.
            </h2>
            <p className="text-[14.5px] sm:text-[16px] text-slate leading-relaxed">
              Engineered to eliminate the traditional 18-month hospital enterprise sales cycle for early builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-[20px] border border-border-subtle bg-canvas-subtle space-y-3.5 hover:border-cobalt/40 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-input bg-blue-50 text-cobalt flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-sans font-bold text-obsidian">Hospital Pilots</h3>
              <p className="text-[13px] text-slate leading-relaxed">
                Direct bridges to innovation heads and clinical chiefs at Apollo, Manipal, Fortis, and regional networks ready to review pilot deployments.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-[20px] border border-border-subtle bg-canvas-subtle space-y-3.5 hover:border-cobalt/40 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-input bg-purple-50 text-purple-700 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-sans font-bold text-obsidian">Dedicated Capital</h3>
              <p className="text-[13px] text-slate leading-relaxed">
                Direct warm intros to healthtech seed investors and micro-VCs who write $250k–$1.5M checks and understand clinical gestation timelines.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-[20px] border border-border-subtle bg-canvas-subtle space-y-3.5 hover:border-cobalt/40 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-input bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-sans font-bold text-obsidian">CDSCO & SaMD Playbooks</h3>
              <p className="text-[13px] text-slate leading-relaxed">
                Peer-tested regulatory clearance roadmaps, DPDP Act data compliance guidelines, and clinical trial ethics clearance playbooks.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-[20px] border border-border-subtle bg-canvas-subtle space-y-3.5 hover:border-cobalt/40 transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-input bg-cyan-50 text-cyan-700 flex items-center justify-center">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-sans font-bold text-obsidian">Verified Directory</h3>
              <p className="text-[13px] text-slate leading-relaxed">
                Request introductions to 680+ vetted hospital operators, clinical advisors, and founders in 3 clicks with verified member credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing & Membership Pathways (The 3 Official Tiers) */}
      <section id="pricing" className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-white border border-line text-ink text-[11.5px] font-bold uppercase tracking-wider">
              <span>Transparent Pathways</span>
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-sans font-extrabold text-obsidian tracking-tight leading-tight">
              Membership options.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate leading-relaxed">
              Designed to support everyone from early ecosystem enthusiasts to venture-backed founders scaling pan-India.
            </p>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {/* TIER 1: THC Connect */}
            <div className="p-7 rounded-[24px] border border-border-subtle bg-white shadow-card flex flex-col justify-between space-y-6 hover:border-border-strong transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-chip bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider">
                    Open Community
                  </span>
                  <span className="text-[11.5px] text-emerald-600 font-bold">Currently Free</span>
                </div>

                <div>
                  <h3 className="text-[24px] font-sans font-bold text-obsidian">THC Connect</h3>
                  <p className="text-[13.5px] text-slate mt-1 leading-relaxed">
                    For builders, researchers, clinicians, and operators seeking active peer exchange and community discussions.
                  </p>
                </div>

                <div className="py-3 border-y border-border-subtle flex items-baseline gap-1.5">
                  <span className="text-[36px] font-sans font-extrabold text-obsidian tracking-tight">₹0</span>
                  <span className="text-[13px] text-slate font-medium">/ Free Access</span>
                </div>

                {/* Features */}
                <div className="space-y-2.5 text-[13px] text-text-primary">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>Access to THC WhatsApp Community channels</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>Weekly virtual AMAs with clinicians and founders</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>Invites to open bi-weekly community chapter mixers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>Browse public directory & healthtech job board</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    <span>Monthly healthtech newsletter & market insights</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://chat.whatsapp.com/invite/thc-healthtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-chip bg-canvas-subtle hover:bg-slate-100 border border-line text-ink font-bold text-[13.5px] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Join Free on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* TIER 2: ASCENT Cohort (Featured) */}
            <div className="p-7 rounded-[24px] border-2 border-cobalt bg-white shadow-elevated flex flex-col justify-between space-y-6 relative transform lg:-translate-y-2">
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-chip bg-cobalt text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Recommended for Founders</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pt-1">
                  <span className="px-3 py-1 rounded-chip bg-blue-50 text-cobalt border border-blue-200 text-[11px] font-bold uppercase tracking-wider">
                    Vetted Cohort
                  </span>
                  <span className="text-[11.5px] text-cobalt font-bold">Admissions Open</span>
                </div>

                <div>
                  <h3 className="text-[24px] font-sans font-bold text-obsidian">ASCENT Cohort</h3>
                  <p className="text-[13.5px] text-slate mt-1 leading-relaxed">
                    For serious healthtech founders building scalable clinical solutions, needing pilot clearances, and raising seed rounds.
                  </p>
                </div>

                <div className="py-3 border-y border-border-subtle flex items-baseline gap-1.5">
                  <span className="text-[36px] font-sans font-extrabold text-obsidian tracking-tight">₹49,999</span>
                  <span className="text-[13px] text-slate font-medium">/ Cohort</span>
                </div>

                {/* Features */}
                <div className="space-y-2.5 text-[13px] text-text-primary">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span><strong>100% Free Access</strong> to all offline Summits & Roundtables (Save ₹25,000+)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span><strong>Curated Warm Introductions</strong> to hospital CIOs and healthtech VCs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span>Structured Clinical Validation & GTM Cohort Curriculum</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span>Verified Directory Badge with direct &ldquo;Request Intro&rdquo; privileges</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span>Closed-door Founder-only Dinners & Quarterly Strategy Retreats</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span>Everything included in THC Connect</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://tally.so/r/thc-join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-chip bg-cobalt hover:bg-cobalt-hover text-white font-bold text-[14px] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <span>Apply for ASCENT Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* TIER 3: Catalyst Circle */}
            <div className="p-7 rounded-[24px] border border-border-subtle bg-white shadow-card flex flex-col justify-between space-y-6 hover:border-border-strong transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-chip bg-purple-50 text-purple-800 border border-purple-200 text-[11px] font-bold uppercase tracking-wider">
                    Executive / Institutional
                  </span>
                  <span className="text-[11.5px] text-purple-700 font-bold">Invite Only</span>
                </div>

                <div>
                  <h3 className="text-[24px] font-sans font-bold text-obsidian">Catalyst Circle</h3>
                  <p className="text-[13.5px] text-slate mt-1 leading-relaxed">
                    For hospital CEOs, Chief Innovation Officers, pharma enterprise heads, and venture partners.
                  </p>
                </div>

                <div className="py-3 border-y border-border-subtle flex items-baseline gap-1.5">
                  <span className="text-[32px] font-sans font-extrabold text-obsidian tracking-tight">Custom</span>
                  <span className="text-[13px] text-slate font-medium">/ By Consideration</span>
                </div>

                {/* Features */}
                <div className="space-y-2.5 text-[13px] text-text-primary">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Exclusive monthly 25-seat Hospital CIO Roundtables</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>First-look access to vetted healthtech startup dealflow</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Hospital pilot co-creation & clinical trial advisory</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Executive board placement & advisor matching</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Strategic ecosystem visibility across India</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://tally.so/r/thc-roundtable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-chip bg-obsidian hover:bg-slate-800 text-white font-bold text-[13.5px] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Request Executive Invite</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Member Stories & Proof */}
      <section className="py-14 sm:py-20 bg-white border-b border-border-subtle">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-cobalt">
              From the Community
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-sans font-extrabold text-obsidian tracking-tight">
              Backed by builders & clinicians.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-[20px] border border-border-subtle bg-canvas-subtle shadow-xs flex flex-col justify-between space-y-5"
              >
                <p className="text-[14px] text-text-primary leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-3 border-t border-border-subtle/80 flex items-center justify-between">
                  <div>
                    <div className="font-sans font-bold text-[14px] text-obsidian">{t.author}</div>
                    <div className="text-[12px] text-slate">{t.role}, {t.company}</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-chip bg-white border border-border-subtle text-[11px] font-bold text-slate">
                    {t.persona}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-subtle">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-cobalt">
              Clear Answers
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-sans font-extrabold text-obsidian tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="text-[14.5px] sm:text-[16px] text-slate">
              Everything you need to know about joining India&apos;s most active healthtech community.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
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
                    className="w-full p-4.5 sm:p-5 text-left flex items-center justify-between gap-4 font-sans font-bold text-[15px] sm:text-[16px] text-obsidian hover:text-cobalt transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4.5 h-4.5 text-slate shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-cobalt" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4.5 pb-5 sm:px-5 sm:pb-6 text-[14px] text-slate leading-relaxed border-t border-line/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="p-8 sm:p-12 rounded-[28px] bg-obsidian text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-elevated relative overflow-hidden border border-white/10">
            <BackgroundPattern variant="cyber-rays" />

            <div className="space-y-2 text-center lg:text-left relative z-10 max-w-xl">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
                Your Healthtech Front Door
              </span>
              <h2 className="text-[26px] sm:text-[34px] font-sans font-bold leading-tight">
                Ready to find your first hospital pilot or clinical advisor?
              </h2>
              <p className="text-[14px] text-slate-300">
                Join our free WhatsApp community today or apply for the upcoming ASCENT founder cohort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto relative z-10 shrink-0">
              <a
                href="https://chat.whatsapp.com/invite/thc-healthtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-chip bg-[#25D366] hover:bg-[#20BD5A] text-obsidian font-extrabold text-[14px] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
                <span>Join Free on WhatsApp</span>
              </a>

              <a
                href="https://tally.so/r/thc-join"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-chip bg-cobalt hover:bg-cobalt-hover text-white font-bold text-[14px] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Apply for ASCENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
