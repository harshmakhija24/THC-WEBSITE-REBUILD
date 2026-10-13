import React from "react";
import Image from "next/image";
import PerspectiveGrid from "./PerspectiveGrid";
import { ArrowUpRight, Sparkles, Hexagon, Calendar, MapPin } from "lucide-react";
import summitImg from "@/public/gathering-summit.jpg";
import roundtableImg from "@/public/gathering-roundtable.jpg";
import mixerImg from "@/public/gathering-mixer.jpg";

export default function GatherSystem() {
  const formats = [
    {
      id: "format-1",
      bgColor: "bg-[#0A0E18]",
      titleStyle: "font-serif italic text-white text-[30px]",
      title: "Clinical & SaMD Summit",
      badgeGreen: false,
      subhead: "Exclusive leadership dinners for healthtech founders, radiologists, and hospital chiefs.",
      pills: [
        { icon: Hexagon, label: "LEADERSHIP" },
        { icon: Calendar, label: "QUARTERLY" },
        { icon: MapPin, label: "3 METROS" },
      ],
      ticker:
        "BENGALURU · HYDERABAD · DELHI NCR · CHENNAI · MUMBAI · BENGALURU · HYDERABAD · DELHI NCR · CHENNAI · MUMBAI ·",
      image: summitImg,
      alt: "THC Clinical Validation and SaMD Summit dinner",
      actionLabel: "View Agenda",
      actionUrl: "https://lu.ma/thc-ai-summit-2026",
      btnColor: "bg-white/10 hover:bg-white text-white hover:text-black border border-white/20",
    },
    {
      id: "format-2",
      bgColor: "bg-[#451328]", // Rich Wine matching GRABCHAI reference
      titleStyle: "font-sans font-black text-[#4ADE80] text-[27px] uppercase tracking-tight",
      title: "HOSPITAL ROUNDTABLES",
      badgeGreen: true,
      subhead: "Closed-door, invite-only rooms with 25 hospital CIOs reviewing healthtech pilot adoption.",
      pills: [
        { icon: Hexagon, label: "HOSPITAL CHIEFS" },
        { icon: Calendar, label: "MONTHLY" },
        { icon: MapPin, label: "25 SEATS" },
      ],
      ticker:
        "MUMBAI · PUNE · CHENNAI · HYDERABAD · DELHI · MUMBAI · PUNE · CHENNAI · HYDERABAD · DELHI ·",
      image: roundtableImg,
      alt: "Executive Hospital CIO and Founders Roundtable",
      actionLabel: "Request Invite",
      actionUrl: "https://tally.so/r/thc-roundtable",
      btnColor: "bg-[#651A3B] hover:bg-white text-white hover:text-black border border-white/20",
    },
    {
      id: "format-3",
      bgColor: "bg-[#0C2B59]", // Deep Cobalt Navy matching BITS N ATOMS reference
      titleStyle: "font-sans font-black text-white text-[27px] uppercase tracking-wider",
      title: "BITS & BYTES · MIXERS",
      badgeGreen: false,
      subhead: "An invite-only offline mixer for engineers, clinicians, and healthtech founders across India.",
      pills: [
        { icon: Hexagon, label: "OPEN MIXER" },
        { icon: Calendar, label: "BI-WEEKLY" },
        { icon: MapPin, label: "8 CHAPTERS" },
      ],
      ticker:
        "BENGALURU · DELHI NCR · MUMBAI · HYDERABAD · CHENNAI · PUNE · AHMEDABAD · KOLKATA ·",
      image: mixerImg,
      alt: "Healthtech Chapter community mixer crowd in Bangalore",
      actionLabel: "Find Chapter",
      actionUrl: "https://lu.ma/thc-chapters",
      btnColor: "bg-[#133F85] hover:bg-white text-white hover:text-black border border-white/20",
    },
  ];

  return (
    <section
      id="events"
      className="bg-[#F8F6F0] text-obsidian py-24 md:py-32 relative overflow-hidden border-y border-[#E2DDD2]"
    >
      {/* 3D Perspective Wireframe Room Grid Background */}
      <PerspectiveGrid
        vanishingX={50}
        vanishingY={32}
        strokeColor="rgba(195, 185, 168, 0.42)"
      />

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-obsidian text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>The Gathering System</span>
            </div>

            <h2 className="text-[34px] sm:text-[46px] font-sans font-bold text-obsidian tracking-tight leading-tight">
              Where clinical validation meets{" "}
              <span className="italic font-serif text-cobalt font-normal">fellowship.</span>
            </h2>

            <p className="text-[16px] text-text-secondary leading-relaxed font-normal">
              Healthcare innovation requires trust that cannot be built over Zoom. We organize a
              system of high-cadence in-person rooms designed for every stage of clinical adoption.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://lu.ma/thc-gatherings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cobalt hover:text-cobalt-hover font-bold text-[15px] inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>See all formats</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Signature Gathering Cards Matching The Product Folks Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {formats.map((fmt) => (
            <div
              key={fmt.id}
              className={`${fmt.bgColor} rounded-[24px] overflow-hidden border border-black/10 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.28)] hover:-translate-y-1.5 transition-all duration-normal flex flex-col justify-between group`}
            >
              {/* Top Text & Badges Container */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Title with Custom Aesthetic Identity */}
                <h3 className={`${fmt.titleStyle} leading-tight`}>{fmt.title}</h3>

                {/* Subhead */}
                <p className="text-[13px] text-slate-200/90 leading-relaxed font-normal min-h-[40px]">
                  {fmt.subhead}
                </p>

                {/* Pill Tags Row */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {fmt.pills.map((pill, idx) => {
                    const Icon = pill.icon;
                    return (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-white text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1.5 backdrop-blur-xs"
                      >
                        <Icon className="w-3 h-3 text-white/80" />
                        <span>{pill.label}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Yellow/Amber Ticker Tape Marquee */}
              <div className="bg-[#FCD34D] text-black text-[12px] font-black uppercase tracking-wider py-1.5 overflow-hidden whitespace-nowrap border-y border-black/15 select-none shadow-xs">
                <div className="animate-marquee flex items-center gap-4">
                  <span>{fmt.ticker}</span>
                  <span>{fmt.ticker}</span>
                </div>
              </div>

              {/* Photo Area */}
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-900">
                <Image
                  src={fmt.image}
                  alt={fmt.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Action Button Overlay */}
                <div className="absolute bottom-3 left-3 z-10">
                  <a
                    href={fmt.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg font-bold text-[13px] inline-flex items-center gap-2 transition-all shadow-md active:scale-95 ${fmt.btnColor}`}
                  >
                    <span>{fmt.actionLabel}</span>
                    <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
