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
    <header className="bg-canvas border-b border-border-subtle sticky top-0 z-30 transition-colors">
      <div className="max-w-container mx-auto px-4 md:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo with Modern Pulse Monogram */}
        <THCLogo />

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-8 text-[14px] text-text-secondary font-semibold"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-text-primary transition-colors focus-visible:ring-2 rounded px-1 py-0.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
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
            className="px-5 py-2 rounded-chip bg-ink text-paper font-semibold text-small hover:bg-ink/90 active:scale-95 transition-all shadow-sm focus-visible:ring-2 flex items-center gap-1.5"
          >
            <span>Join Community</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-input border border-border-subtle text-text-primary hover:bg-canvas-subtle transition-colors focus-visible:ring-2"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas border-b border-border-subtle px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-body font-semibold text-text-secondary hover:text-text-primary py-1.5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
            <Link
              href="/directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-ink font-semibold hover:underline text-body"
            >
              Explore Directory
            </Link>
            <a
              href="https://tally.so/r/thc-join"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-chip bg-ink text-paper font-semibold text-body flex items-center justify-center gap-1.5"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
