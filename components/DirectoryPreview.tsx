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
  initialQuery?: string;
};

export default function DirectoryPreview({
  profiles,
  initialQuery = "",
}: DirectoryPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  // Tiles mode: 3, 6, 9, 12 (max 12 tiles, no "All" option)
  const [tilesPageSize, setTilesPageSize] = useState<number>(6);

  // List mode: 5, 10, 15, or Custom (no "All" option)
  const [listPageSize, setListPageSize] = useState<number>(10);
  const [isCustomList, setIsCustomList] = useState<boolean>(false);
  const [customListValue, setCustomListValue] = useState<string>("20");

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

  // Effective page size based on viewMode
  const effectivePageSize = viewMode === "list" ? listPageSize : tilesPageSize;

  // Pagination calculation
  const totalProfiles = filteredProfiles.length;
  const totalPages = Math.max(1, Math.ceil(totalProfiles / effectivePageSize));
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (validPage - 1) * effectivePageSize;
  const endIndex = Math.min(startIndex + effectivePageSize, totalProfiles);
  const displayedProfiles = filteredProfiles.slice(startIndex, endIndex);

  // Active filter count
  const activeFilterCount =
    (selectedCategory !== "All" ? 1 : 0) +
    (selectedCity !== "All" ? 1 : 0) +
    (verifiedOnly ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  // Smooth scroll handler
  const goToPage = (page: number) => {
    const p = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(p);
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

  const resetAllFilters = () => {
    setSelectedCategory("All");
    setSelectedCity("All");
    setVerifiedOnly(false);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const tints: ("lilac" | "teal" | "coral" | "slate")[] = [
    "lilac",
    "teal",
    "coral",
    "slate",
    "lilac",
    "teal",
  ];

  return (
    <section
      id="directory"
      className="py-16 md:py-20 bg-canvas-subtle border-b border-line relative overflow-hidden"
    >
      {/* Interconnected Clinical & Founder Network Mesh */}
      <BackgroundPattern variant="network-mesh" />

      <div className="max-w-container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with View & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-chip bg-lilac/70 border border-line text-ink text-[12px] font-bold">
              <span>The Peer Network</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-sans font-extrabold text-ink tracking-tight leading-tight">
              Reach the people who{" "}
              <span className="italic font-serif text-ink font-normal">matter.</span>
            </h2>
            <p className="text-[16px] text-slate leading-relaxed">
              Search vetted clinicians, hospital innovation directors, and healthtech founders who
              can validate your pilot, invest in your round, or guide your regulatory filing.
            </p>
          </div>

          {/* Controls: Tiles per page selector (3, 6, 9, 12) OR List per page selector (5, 10, 15, Custom) & View Mode */}
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            {/* Page Size Selector */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-chip border border-line shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate px-2">
                Show:
              </span>
              {viewMode === "list" ? (
                <>
                  {[5, 10, 15].map((size) => {
                    const isSelected = !isCustomList && listPageSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => {
                          setIsCustomList(false);
                          setListPageSize(size);
                          setCurrentPage(1);
                        }}
                        className={`px-2.5 py-1 rounded-chip text-[12px] font-bold transition-all ${
                          isSelected
                            ? "bg-ink text-paper shadow-xs"
                            : "text-slate hover:text-ink hover:bg-slate-50"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}

                  {/* Custom Option */}
                  {isCustomList ? (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-chip bg-ink text-paper text-[12px] font-bold shadow-xs">
                      <span className="text-[11px]">Custom:</span>
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={customListValue}
                        onChange={(e) => {
                          setCustomListValue(e.target.value);
                          const val = parseInt(e.target.value, 10);
                          if (!isNaN(val) && val > 0) {
                            setListPageSize(Math.min(val, 100));
                            setCurrentPage(1);
                          }
                        }}
                        className="w-11 px-1 py-0.5 bg-white text-ink rounded text-center text-[12px] font-bold focus:outline-none focus:ring-1 focus:ring-coral"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomList(true);
                        const val = parseInt(customListValue, 10) || 20;
                        setListPageSize(val);
                        setCurrentPage(1);
                      }}
                      className="px-2.5 py-1 rounded-chip text-[12px] font-bold text-slate hover:text-ink hover:bg-slate-50 transition-all"
                    >
                      Custom
                    </button>
                  )}
                </>
              ) : (
                <>
                  {[3, 6, 9, 12].map((size) => {
                    const isSelected = tilesPageSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => {
                          setTilesPageSize(size);
                          setCurrentPage(1);
                        }}
                        className={`px-2.5 py-1 rounded-chip text-[12px] font-bold transition-all ${
                          isSelected
                            ? "bg-ink text-paper shadow-xs"
                            : "text-slate hover:text-ink hover:bg-slate-50"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </>
              )}
            </div>

            {/* View Mode Toggle: Tiles vs List */}
            <div className="flex items-center bg-white p-1 rounded-chip border border-line shadow-xs">
              <button
                type="button"
                onClick={() => {
                  setViewMode("tiles");
                  setCurrentPage(1);
                }}
                aria-label="Tiles view"
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-chip text-[12px] font-bold transition-all ${
                  viewMode === "tiles"
                    ? "bg-ink text-paper shadow-xs"
                    : "text-slate hover:text-ink"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Tiles</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewMode("list");
                  setCurrentPage(1);
                }}
                aria-label="List view"
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-chip text-[12px] font-bold transition-all ${
                  viewMode === "list"
                    ? "bg-ink text-paper shadow-xs"
                    : "text-slate hover:text-ink"
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search & Secondary Filter Toolbar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-[18px] border border-line shadow-card mb-6 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate pointer-events-none">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by name, role, hospital, focus area, or city..."
                className="w-full pl-10 pr-9 py-2.5 rounded-chip border border-line bg-canvas-subtle text-[13.5px] text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-ink focus:border-ink focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate hover:text-ink p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* City Filter */}
            <div className="relative shrink-0 min-w-[160px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal pointer-events-none">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full pl-8 pr-8 py-2.5 rounded-chip border border-line bg-canvas-subtle text-[13px] font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-ink focus:border-ink focus:bg-white appearance-none transition-all cursor-pointer"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "All" ? "All Cities" : city}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate text-[10px]">
                ▼
              </div>
            </div>

            {/* Verified Only Toggle */}
            <button
              type="button"
              onClick={handleVerifiedToggle}
              className={`shrink-0 px-3.5 py-2.5 rounded-chip text-[12.5px] font-bold border transition-all inline-flex items-center gap-1.5 ${
                verifiedOnly
                  ? "bg-teal/15 border-teal/40 text-teal-text shadow-xs"
                  : "bg-canvas-subtle border-line text-slate hover:text-ink hover:bg-slate-100/70"
              }`}
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 ${verifiedOnly ? "text-teal" : "text-slate"}`}
              />
              <span>Verified Only</span>
            </button>

            {/* Reset Filters (when active) */}
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="shrink-0 px-3 py-2 rounded-chip text-[12px] font-semibold text-coral-text hover:bg-coral/10 border border-transparent hover:border-coral/20 transition-all inline-flex items-center gap-1.5"
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
                    ? "bg-ink text-paper shadow-sm"
                    : "border border-line bg-white text-slate hover:text-ink hover:border-ink"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-paper/20 text-paper" : "bg-slate-100 text-slate"
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
          <div className="py-16 px-6 text-center bg-white rounded-card border border-line shadow-card space-y-4 max-w-lg mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-lilac/60 text-ink flex items-center justify-center mx-auto">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-[18px] font-bold text-ink">No profiles found</h3>
              <p className="text-[13.5px] text-slate">
                No peer profiles matched your current filters. Try changing your search query or
                resetting filters.
              </p>
            </div>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-5 py-2 rounded-chip bg-ink text-paper font-bold text-[13px] hover:bg-ink/90 transition-all shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === "tiles" ? (
          /* Profile Cards Grid (Tiles View: Max 12 tiles, then next page only) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProfiles.map((profile, idx) => (
              <div
                key={profile.id}
                className="p-6 rounded-card border border-line bg-white shadow-card hover:-translate-y-1 hover:border-ink/30 transition-all duration-normal flex flex-col justify-between space-y-4"
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
                        <span className="font-sans font-bold text-[16px] text-ink leading-snug">
                          {profile.name}
                        </span>
                        {profile.verified ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-chip bg-teal/15 border border-teal/30 text-teal-text text-[11px] font-bold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-chip bg-slate-100 text-slate text-[11px] font-semibold">
                            Peer
                          </span>
                        )}
                      </div>

                      <div className="text-[13px] font-medium text-slate mt-0.5">
                        {profile.headline}
                      </div>

                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[11px] text-slate font-medium">
                          {profile.organisation}
                        </span>
                        {profile.visibility === "members-only" && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-slate-100 text-slate text-[10px] font-medium">
                            <Lock className="w-2.5 h-2.5" />
                            <span>Members</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio Snippet */}
                  <p className="text-[13px] text-slate leading-relaxed line-clamp-2">
                    {profile.bio}
                  </p>

                  {/* Tags & Metadata */}
                  <div className="space-y-2 pt-2 border-t border-line/70 text-small">
                    <div className="flex items-center gap-2 text-slate text-[12px]">
                      <MapPin className="w-3.5 h-3.5 text-teal" />
                      <span>
                        {profile.city}, {profile.state}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {profile.focus_areas.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-chip bg-paper border border-line text-ink text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {profile.open_to[0] && (
                        <span className="px-2.5 py-0.5 rounded-chip border border-line text-slate text-[11px]">
                          Open to: {profile.open_to[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Intro CTA */}
                <div className="pt-3.5 border-t border-line/80 flex items-center justify-between">
                  <span className="text-[12px] text-slate font-medium">
                    Mode: <strong className="text-ink">{profile.intro_mode}</strong>
                  </span>

                  <a
                    href="https://tally.so/r/thc-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-chip bg-gradient-to-r from-[#090D16] via-[#0E1E38] to-[#2563EB] hover:to-[#06B6D4] text-white text-[12px] font-semibold hover:shadow-md active:scale-95 transition-all focus-visible:ring-2 flex items-center gap-1.5 shadow-xs border border-white/10"
                  >
                    <span>Request Intro</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View (5, 10, 15, or Custom rows per page) */
          <div className="space-y-3">
            {displayedProfiles.map((profile, idx) => (
              <div
                key={profile.id}
                className="p-4 sm:p-5 rounded-card border border-line bg-white shadow-xs hover:border-ink/30 hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
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
                      <span className="font-sans font-bold text-[15px] text-ink">
                        {profile.name}
                      </span>
                      {profile.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-chip bg-teal/15 border border-teal/30 text-teal-text text-[10px] font-bold">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>Verified</span>
                        </span>
                      )}
                      <span className="text-[12px] text-slate hidden sm:inline">·</span>
                      <span className="text-[12px] text-slate font-medium">
                        {profile.organisation}
                      </span>
                    </div>
                    <div className="text-[13px] text-slate font-medium truncate mt-0.5">
                      {profile.headline}
                    </div>
                  </div>
                </div>

                {/* Category & Focus Chips */}
                <div className="hidden lg:flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-1 rounded-chip bg-lilac/60 border border-line text-ink text-[11px] font-semibold">
                    {profile.category}
                  </span>
                  {profile.focus_areas[0] && (
                    <span className="px-2.5 py-1 rounded-chip bg-canvas-subtle border border-line text-slate text-[11px] font-medium">
                      {profile.focus_areas[0]}
                    </span>
                  )}
                </div>

                {/* City & Action */}
                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-line/60">
                  <div className="flex items-center gap-1.5 text-slate text-[12px]">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    <span>{profile.city}</span>
                  </div>

                  <a
                    href="https://tally.so/r/thc-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-chip bg-gradient-to-r from-[#090D16] via-[#0E1E38] to-[#2563EB] hover:to-[#06B6D4] text-white text-[12px] font-semibold hover:shadow-md active:scale-95 transition-all flex items-center gap-1.5 shadow-xs border border-white/10"
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
          <div className="mt-10 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Status: Showing X–Y of Z */}
            <div className="text-[13.5px] text-slate text-center md:text-left">
              Showing <strong className="text-ink">{startIndex + 1}</strong>–
              <strong className="text-ink">{endIndex}</strong> of{" "}
              <strong className="text-ink">{totalProfiles}</strong> peer profiles
              {selectedCategory !== "All" && (
                <span>
                  {" "}
                  in <strong className="text-ink font-bold">{selectedCategory}</strong>
                </span>
              )}
            </div>

            {/* Pagination Controls with Page Shifting */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                {/* Previous Button */}
                <button
                  type="button"
                  disabled={validPage <= 1}
                  onClick={() => goToPage(validPage - 1)}
                  className="px-3.5 py-1.5 rounded-chip border border-line bg-white text-[12.5px] font-semibold text-slate hover:text-ink hover:border-ink disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 shadow-xs"
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
                            ? "bg-ink text-paper shadow-sm"
                            : "border border-line bg-white text-slate hover:text-ink hover:border-ink shadow-xs"
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
                  className="px-3.5 py-1.5 rounded-chip border border-line bg-white text-[12.5px] font-semibold text-slate hover:text-ink hover:border-ink disabled:opacity-40 disabled:cursor-not-allowed transition-all inline-flex items-center gap-1 shadow-xs"
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
                className="px-5 py-2.5 rounded-chip bg-ink text-paper font-bold text-[13px] hover:bg-ink/90 active:scale-95 transition-all shadow-xs focus-visible:ring-2 inline-flex items-center gap-2"
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
