"use client";

import { useState } from "react";
import PhotoSlot from "./PhotoSlot";
import BackgroundPattern from "./BackgroundPattern";
import { CheckCircle2, ArrowRight, Lock, MapPin, LayoutGrid, List } from "lucide-react";
import type { DirectoryProfile } from "@/lib/types";

type DirectoryPreviewProps = {
  profiles: DirectoryProfile[];
};

export default function DirectoryPreview({ profiles }: DirectoryPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"tiles" | "list">("tiles");

  const categories = [
    "All",
    "Founder",
    "Hospital/Operator",
    "Investor",
    "Clinician",
    "Corporate/Pharma",
    "Mentor",
    "Policy/Regulator",
  ];

  const filteredProfiles = profiles.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const displayedProfiles = filteredProfiles.slice(0, 6);

  const tints: ("cobalt" | "emerald" | "slate")[] = [
    "cobalt",
    "emerald",
    "slate",
    "cobalt",
    "emerald",
    "slate",
  ];

  return (
    <section id="directory" className="py-18 md:py-24 bg-canvas-subtle border-b border-border-subtle relative overflow-hidden">
      {/* Interconnected Clinical & Founder Network Mesh */}
      <BackgroundPattern variant="network-mesh" />

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-blue-50 border border-blue-200/50 text-cobalt text-[12px] font-bold">
              <span>The Peer Network</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-sans font-extrabold text-obsidian tracking-tight leading-tight">
              Reach the people who{" "}
              <span className="italic font-serif text-cobalt font-normal">matter.</span>
            </h2>
            <p className="text-[16px] text-text-secondary leading-relaxed">
              Search vetted clinicians, hospital innovation directors, and healthtech founders who
              can validate your pilot, invest in your round, or guide your regulatory filing.
            </p>
          </div>

          {/* View Mode Toggle: Tiles vs List (Replaced Sample data pill) */}
          <div className="shrink-0 flex items-center bg-canvas-subtle p-1 rounded-chip border border-border-subtle shadow-xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("tiles")}
              aria-label="Tiles view"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-chip text-[12px] font-bold transition-all ${
                viewMode === "tiles"
                  ? "bg-white text-obsidian shadow-sm border border-border-subtle/80"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Tiles</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              aria-label="List view"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-chip text-[12px] font-bold transition-all ${
                viewMode === "list"
                  ? "bg-white text-obsidian shadow-sm border border-border-subtle/80"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-chip text-[13px] font-semibold whitespace-nowrap transition-all focus-visible:ring-2 ${
                  isSelected
                    ? "bg-obsidian text-white shadow-sm"
                    : "border border-border-subtle bg-white text-text-secondary hover:text-obsidian hover:border-obsidian/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Profiles Display: Tiles or List View */}
        {viewMode === "tiles" ? (
          /* 6 Profile Cards Grid (Tiles View) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProfiles.map((profile, idx) => (
              <div
                key={profile.id}
                className="p-6 rounded-card border border-border-subtle bg-white shadow-card hover:-translate-y-1 hover:border-cobalt/40 transition-all duration-normal flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  {/* Top Row: PhotoSlot + Names + Badges */}
                  <div className="flex items-start gap-3.5">
                    <PhotoSlot
                      name={profile.name}
                      photo={profile.photo}
                      size="lg"
                      tint={tints[idx % tints.length]}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-sans font-bold text-[16px] text-text-primary leading-snug">
                          {profile.name}
                        </span>
                        {profile.verified ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-chip bg-emerald-50 border border-emerald-200/50 text-emerald-700 text-[11px] font-bold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-chip bg-slate-100 text-slate-700 text-[11px] font-semibold">
                            Peer
                          </span>
                        )}
                      </div>

                      <div className="text-[13px] font-medium text-text-secondary mt-0.5">
                        {profile.headline}
                      </div>

                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] text-text-muted font-medium">
                          {profile.organisation}
                        </span>
                        {profile.visibility === "members-only" && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-slate-100 text-slate-600 text-[10px] font-medium">
                            <Lock className="w-2.5 h-2.5" />
                            <span>Members</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio Snippet */}
                  <p className="text-[13px] text-text-secondary leading-relaxed line-clamp-2">
                    {profile.bio}
                  </p>

                  {/* Tags & Metadata */}
                  <div className="space-y-2 pt-2 border-t border-border-subtle/70 text-small">
                    <div className="flex items-center gap-2 text-text-muted text-[12px] font-mono">
                      <MapPin className="w-3.5 h-3.5 text-cobalt" />
                      <span>
                        {profile.city}, {profile.state}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {profile.focus_areas.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-chip bg-blue-50 text-blue-700 text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {profile.open_to[0] && (
                        <span className="px-2.5 py-0.5 rounded-chip border border-border-subtle text-text-muted text-[11px]">
                          Open to: {profile.open_to[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Intro CTA */}
                <div className="pt-3.5 border-t border-border-subtle/80 flex items-center justify-between">
                  <span className="text-[12px] text-text-muted font-medium">
                    Mode: <strong className="text-text-primary">{profile.intro_mode}</strong>
                  </span>

                  <a
                    href="https://tally.so/r/thc-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-chip bg-cobalt text-white text-[12px] font-semibold hover:bg-cobalt-hover active:scale-95 transition-all focus-visible:ring-2 flex items-center gap-1 shadow-sm"
                  >
                    <span>Request Intro</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {displayedProfiles.map((profile, idx) => (
              <div
                key={profile.id}
                className="p-4 sm:p-5 rounded-card border border-border-subtle bg-white shadow-xs hover:border-cobalt/40 hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Profile Avatar + Main Info */}
                <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                  <PhotoSlot
                    name={profile.name}
                    photo={profile.photo}
                    size="md"
                    tint={tints[idx % tints.length]}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-sans font-bold text-[15px] text-text-primary">
                        {profile.name}
                      </span>
                      {profile.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-chip bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>Verified</span>
                        </span>
                      )}
                      <span className="text-[12px] text-text-muted hidden sm:inline">·</span>
                      <span className="text-[12px] text-text-muted font-medium">
                        {profile.organisation}
                      </span>
                    </div>
                    <div className="text-[13px] text-text-secondary font-medium truncate mt-0.5">
                      {profile.headline}
                    </div>
                  </div>
                </div>

                {/* Category & Focus Chips */}
                <div className="hidden lg:flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-1 rounded-chip bg-blue-50 text-blue-700 text-[11px] font-semibold">
                    {profile.category}
                  </span>
                  {profile.focus_areas[0] && (
                    <span className="px-2.5 py-1 rounded-chip bg-canvas-subtle border border-border-subtle text-text-secondary text-[11px] font-medium">
                      {profile.focus_areas[0]}
                    </span>
                  )}
                </div>

                {/* City & Action */}
                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border-subtle/60">
                  <div className="flex items-center gap-1.5 text-text-muted text-[12px] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cobalt" />
                    <span>{profile.city}</span>
                  </div>

                  <a
                    href="https://tally.so/r/thc-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-chip bg-cobalt text-white text-[12px] font-semibold hover:bg-cobalt-hover active:scale-95 transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Request Intro</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Link & Callout */}
        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-small text-text-secondary">
            Showing <strong className="text-text-primary">{displayedProfiles.length}</strong> of{" "}
            <strong className="text-text-primary">{profiles.length}</strong> vetted profiles in
            preview.
          </div>

          <a
            href="https://tally.so/r/thc-join"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-chip bg-cobalt text-white font-bold text-small hover:bg-cobalt-hover active:scale-95 transition-all shadow-sm focus-visible:ring-2 inline-flex items-center gap-2"
          >
            <span>Browse Full Directory & Request Access</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
