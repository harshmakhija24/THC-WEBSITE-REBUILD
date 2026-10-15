"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import THCLogo from "./THCLogo";
import { Menu, X, ArrowUpRight, ArrowLeft, MessageSquare } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect whether current route is the join community page
  const isJoinPage =
    pathname === "/join" || pathname === "/join/" || pathname?.startsWith("/join");

  // Navigation items depending on context
  type NavItem = {
    label: string;
    href: string;
    isBack?: boolean;
  };

  const homeNavItems: NavItem[] = [
    { label: "Community", href: "/#community" },
    { label: "Events", href: "/#events" },
    { label: "Learn", href: "/#learn" },
    { label: "Directory", href: "/directory" },
    { label: "Jobs", href: "/#jobs" },
    { label: "Partner", href: "/#partner" },
  ];

  const joinNavItems: NavItem[] = [
    { label: "Home", href: "/", isBack: true },
    { label: "WhatsApp", href: "#whatsapp" },
    { label: "Gatherings", href: "#gatherings" },
    { label: "Pricing & Tiers", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Directory", href: "/directory" },
  ];

  const navItems = isJoinPage ? joinNavItems : homeNavItems;

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
          className="hidden lg:flex items-center gap-6 text-[14px] text-text-secondary font-semibold"
        >
          {navItems.map((item) => {
            const isAnchor = item.href.startsWith("#");

            if (isAnchor) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-text-primary transition-colors focus-visible:ring-2 rounded px-1.5 py-0.5"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`hover:text-text-primary transition-colors focus-visible:ring-2 rounded px-1.5 py-0.5 flex items-center gap-1 ${
                  item.isBack ? "text-slate-500 hover:text-obsidian" : ""
                }`}
              >
                {item.isBack && <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            href="/directory"
            className="text-ink font-semibold hover:underline inline-flex items-center gap-1.5 text-small transition-colors px-2 py-1"
          >
            Explore Directory
          </Link>

          {isJoinPage ? (
            <a
              href="https://chat.whatsapp.com/invite/thc-healthtech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-chip bg-emerald-600 text-white font-semibold text-small hover:bg-emerald-700 active:scale-95 transition-all shadow-sm focus-visible:ring-2 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Join WhatsApp (Free)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <Link
              href="/join"
              className="px-4.5 py-2 rounded-chip bg-ink text-paper font-semibold text-small hover:bg-ink/90 active:scale-95 transition-all shadow-sm focus-visible:ring-2 flex items-center gap-1.5"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
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
            {navItems.map((item) => {
              const isAnchor = item.href.startsWith("#");

              if (isAnchor) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-body font-semibold text-text-secondary hover:text-text-primary px-3 py-2.5 rounded-lg hover:bg-canvas-subtle transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-400 text-xs">#</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-body font-semibold px-3 py-2.5 rounded-lg hover:bg-canvas-subtle transition-colors flex items-center justify-between ${
                    item.isBack
                      ? "text-obsidian font-bold bg-slate-50"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.isBack && <ArrowLeft className="w-4 h-4 text-slate-500" />}
                    <span>{item.label}</span>
                  </span>
                  <span className="text-slate-400 text-xs">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-border-subtle flex flex-col gap-2.5">
            <Link
              href="/directory"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-border-subtle text-ink font-semibold hover:bg-canvas-subtle text-body transition-colors"
            >
              Explore Directory
            </Link>

            {isJoinPage ? (
              <a
                href="https://chat.whatsapp.com/invite/thc-healthtech"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-chip bg-emerald-600 text-white font-bold text-body flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm hover:bg-emerald-700"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Join WhatsApp (Free)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-chip bg-ink text-paper font-bold text-body flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
              >
                <span>Join the Community</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
