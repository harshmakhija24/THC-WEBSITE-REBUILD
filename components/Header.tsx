"use client";

import { useState } from "react";
import Link from "next/link";
import THCLogo from "./THCLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Community", href: "#community" },
    { label: "Events", href: "#events" },
    { label: "Learn", href: "#learn" },
    { label: "Directory", href: "#directory" },
    { label: "Jobs", href: "#jobs" },
    { label: "Partner", href: "#partner" },
  ];

  return (
    <header className="bg-canvas/95 backdrop-blur-md border-b border-border-subtle sticky top-0 z-40 transition-colors">
      <div className="max-w-container mx-auto px-4 md:px-6 h-16 sm:h-18 flex items-center justify-between gap-2">
        {/* Brand Logo with Pulse Monogram */}
        <div className="min-w-0">
          <THCLogo />
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-[14px] text-text-secondary font-semibold"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-text-primary transition-colors focus-visible:ring-2 rounded px-1.5 py-0.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            href="/directory"
            className="text-ink font-semibold hover:underline inline-flex items-center gap-1.5 text-small transition-colors px-2 py-1"
          >
            Explore Directory
          </Link>
          <a
            href="https://tally.so/r/thc-join"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4.5 py-2 rounded-chip bg-ink text-paper font-semibold text-small hover:bg-ink/90 active:scale-95 transition-all shadow-sm focus-visible:ring-2 flex items-center gap-1.5"
          >
            <span>Join Community</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-input border border-border-subtle text-text-primary hover:bg-canvas-subtle active:scale-95 transition-all focus-visible:ring-2 shrink-0"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas/98 border-b border-border-subtle px-4 py-5 space-y-4 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-body font-semibold text-text-secondary hover:text-text-primary px-3 py-2.5 rounded-lg hover:bg-canvas-subtle transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-slate-400 text-xs">→</span>
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-border-subtle flex flex-col gap-2.5">
            <Link
              href="/directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-border-subtle text-ink font-semibold hover:bg-canvas-subtle text-body transition-colors"
            >
              Explore Directory
            </Link>
            <a
              href="https://tally.so/r/thc-join"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-chip bg-ink text-paper font-bold text-body flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
            >
              <span>Join the Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
