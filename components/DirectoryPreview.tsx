"use client";

import { useState, useMemo } from "react";
import PhotoSlot from "./PhotoSlot";
import BackgroundPattern from "./BackgroundPattern";
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  MapPin,
  LayoutGrid,
  List,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import type { DirectoryProfile } from "@/lib/types";

type DirectoryPreviewProps = {
  profiles: DirectoryProfile[];
};

export default function DirectoryPreview({ profiles }: DirectoryPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageSize, setPageSize] = useState<number | "all">(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  // Distinct cities from the profiles list
  const cities = useMemo(() => {
    const list = Array.from(new Set(profiles.map((p) => p.city))).filter(Boolean).sort();
    return ["All", ...list];
  }, [profiles]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: profiles.length };
    profiles.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [profiles]);

  // Filter logic
  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (selectedCity !== "All" && p.city !== selectedCity) return false;
      if (verifiedOnly && !p.verified) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q);
        const matchHeadline = p.headline.toLowerCase().includes(q);
        const matchOrg = p.organisation.toLowerCase().includes(q);
        const matchCity = p.city.toLowerCase().includes(q);
        const matchFocus = p.focus_areas.some((f) => f.toLowerCase().includes(q));
        const matchBio = p.bio.toLowerCase().includes(q);
        const matchOpenTo = p.open_to.some((o) => o.toLowerCase().includes(q));
        if (
          !matchName &&
          !matchHeadline &&
          !matchOrg &&
          !matchCity &&
          !matchFocus &&
          !matchBio &&
          !matchOpenTo
        ) {
          return false;
        }
      }
      return true;
    });
  }, [profiles, selectedCategory, selectedCity, verifiedOnly, searchQuery]);

  // Pagination calculation
  const totalProfiles = filteredProfiles.length;
  const effectivePageSize = pageSize === "all" ? totalProfiles || 1 : pageSize;
  const totalPages = pageSize === "all" ? 1 : Math.ceil(totalProfiles / pageSize) || 1;
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (validPage - 1) * effectivePageSize;
  const endIndex =
    pageSize === "all" ? totalProfiles : Math.min(startIndex + effectivePageSize, totalProfiles);
  const displayedProfiles = filteredProfiles.slice(startIndex, endIndex);

  // Active filter count
  const activeFilterCount =
    (selectedCategory !== "All" ? 1 : 0) +
    (selectedCity !== "All" ? 1 : 0) +
    (verifiedOnly ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  // Smooth scroll handler
  const goToPage = (page: number) => {
    setCurrentPage(page);
    const el = document.getElementById("directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setCurrentPage(1);
  };

  const handleVerifiedToggle = () => {
    setVerifiedOnly((prev) => !prev);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (size: number | "all") => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const resetAllFilters = () => {
    setSelectedCategory("All");
    setSelectedCity("All");
    setVerifiedOnly(false);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const tints: ("cobalt" | "emerald" | "slate")[] = [
    "cobalt",
    "emerald",
    "slate",
    "cobalt",
    "emerald",
    "slate",
  ];

  return (
    <section
      id="directory"
      className="py-18 md:py-24 bg-canvas-subtle border-b border-border-subtle relative overflow-hidden"
    >
      {/* Interconnected Clinical & Founder Network Mesh */}
      <BackgroundPattern variant="network-mesh" />

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with View & Tiles Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
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

          {/* Controls: Tiles per page selector (3, 6, 9, 12, All) & View Mode (Tiles vs List) */}
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            {/* Tiles Count Selector */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-chip border border-border-subtle shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted px-2">
                Show:
              </span>
              {([3, 6, 9, 12, "all"] as const).map((size) => {
                const isSelected = pageSize === size;
                return (
                  <button
                    key={String(size)}
                    type="button"
                    onClick={() => handlePageSizeChange(size)}
                    className={`px-2.5 py-1 rounded-chip text-[12px] font-bold transition-all ${
                      isSelected
                        ? "bg-cobalt text-white shadow-xs"
                        : "text-text-secondary hover:text-obsidian hover:bg-slate-50"
                    }`}
                  >
                    {size === "all" ? "All" : size}
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle: Tiles vs List */}
            <div className="flex items-center bg-white p-1 rounded-chip border border-border-subtle shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("tiles")}
                aria-label="Tiles view"
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-chip text-[12px] font-bold transition-all ${
                  viewMode === "tiles"
                    ? "bg-obsidian text-white shadow-xs"
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
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-chip text-[12px] font-bold transition-all ${
                  viewMode === "list"
                    ? "bg-obsidian text-white shadow-xs"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search & Secondary Filter Toolbar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-[18px] border border-border-subtle shadow-card mb-6 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by name, role, hospital, focus area, or city..."
                className="w-full pl-10 pr-9 py-2.5 rounded-chip border border-border-subtle bg-canvas-subtle text-[13.5px] text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-cobalt focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* City Filter */}
            <div className="relative shrink-0 min-w-[160px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-cobalt pointer-events-none">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full pl-8 pr-8 py-2.5 rounded-chip border border-border-subtle bg-canvas-subtle text-[13px] font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-cobalt focus:border-cobalt focus:bg-white appearance-none transition-all cursor-pointer"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "All" ? "All Cities" : city}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-[10px]">
                ▼
              </div>
            </div>

            {/* Verified Only Toggle */}
            <button
              type="button"
              onClick={handleVerifiedToggle}
              className={`shrink-0 px-3.5 py-2.5 rounded-chip text-[12.5px] font-bold border transition-all inline-flex items-center gap-1.5 ${
                verifiedOnly
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-xs"
                  : "bg-canvas-subtle border-border-subtle text-text-secondary hover:text-obsidian hover:bg-slate-100/70"
              }`}
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 ${verifiedOnly ? "text-emerald-600" : "text-text-muted"}`}
              />
              <span>Verified Only</span>
            </button>

            {/* Reset Filters (when active) */}
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="shrink-0 px-3 py-2 rounded-chip text-[12px] font-semibold text-cobalt hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset ({activeFilterCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips with Live Counts */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-chip text-[13px] font-semibold whitespace-nowrap transition-all focus-visible:ring-2 inline-flex items-center gap-2 ${
                  isSelected
                    ? "bg-obsidian text-white shadow-sm"
                    : "border border-border-subtle bg-white text-text-secondary hover:text-obsidian hover:border-obsidian/40"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-text-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Profiles Display or Empty State */}
        {displayedProfiles.length === 0 ? (
          <div className="py-16 px-6 text-center bg-white rounded-card border border-border-subtle shadow-card space-y-4 max-w-lg mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-cobalt flex items-center justify-center mx-auto">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-[18px] font-bold text-obsidian">No profiles found</h3>
              <p className="text-[13.5px] text-text-secondary">
                No peer profiles matched your current filters. Try changing your search query or
                resetting filters.
              </p>
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-5 py-2 rounded-chip bg-cobalt text-white font-bold text-[13px] hover:bg-cobalt-hover transition-all shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "tiles" ? (
          /* Profile Cards Grid (Tiles View) */
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

        {/* Dynamic Pagination Controls & Status Bar */}
        {totalProfiles > 0 && (
          <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Status: Showing X–Y of Z */}
            <div className="text-[13.5px] text-text-secondary text-center md:text-left">
              Showing <strong className="text-text-primary">{startIndex + 1}</strong>–
              <strong className="text-text-primary">{endIndex}</strong> of{" "}
              <strong className="text-text-primary">{totalProfiles}</strong> peer profiles
              {selectedCategory !== "All" && (
                <span>
                  {" "}
                  in <strong className="text-cobalt">{selectedCategory}</strong>
                </span>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                {/* Previous Button */}
                <button
                  type="button"
                  disabled={validPage <= 1}
                  onClick={() => goToPage(validPage - 1)}
                  className="px-3.5 py-1.5 rounded-chip border border-border-subtle bg-white text-[12.5px] font-semibold text-text-secondary hover:text-obsidian hover:border-obsidian/40 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border-subtle disabled:hover:text-text-secondary transition-all inline-flex items-center gap-1 shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {/* Page Number Pills */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isCurrent = validPage === pageNum;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => goToPage(pageNum)}
                        className={`w-8 h-8 rounded-full text-[13px] font-bold transition-all flex items-center justify-center ${
                          isCurrent
                            ? "bg-cobalt text-white shadow-sm"
                            : "border border-border-subtle bg-white text-text-secondary hover:text-obsidian hover:border-obsidian/40 shadow-xs"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  disabled={validPage >= totalPages}
                  onClick={() => goToPage(validPage + 1)}
                  className="px-3.5 py-1.5 rounded-chip border border-border-subtle bg-white text-[12.5px] font-semibold text-text-secondary hover:text-obsidian hover:border-obsidian/40 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border-subtle disabled:hover:text-text-secondary transition-all inline-flex items-center gap-1 shadow-xs"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Browse Full Directory CTA */}
            <div>
              <a
                href="https://tally.so/r/thc-join"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-chip bg-obsidian text-white font-bold text-[13px] hover:bg-slate-800 active:scale-95 transition-all shadow-xs focus-visible:ring-2 inline-flex items-center gap-2"
              >
                <span>Browse Full Directory</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
