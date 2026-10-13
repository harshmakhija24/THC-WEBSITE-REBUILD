import { Suspense } from "react";
import Header from "@/components/Header";
import THCLogo from "@/components/THCLogo";
import Link from "next/link";
import DirectoryClient from "./DirectoryClient";
import { getDirectoryProfiles } from "@/lib/content";

export const metadata = {
  title: "Directory — The Healthtech Collective (THC)",
  description:
    "Explore vetted clinicians, hospital chiefs, seed healthtech investors, and founders across India's healthtech ecosystem.",
};

export default async function DirectoryPage() {
  const directoryProfiles = await getDirectoryProfiles();

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col justify-between">
      <Header />

      <main className="flex-1">
        <Suspense fallback={<div className="p-12 text-center text-slate">Loading directory...</div>}>
          <DirectoryClient profiles={directoryProfiles} />
        </Suspense>
      </main>

      <footer className="border-t border-border-subtle bg-white py-8 text-[13px] text-text-secondary">
        <div className="max-w-container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <THCLogo size="sm" />
            <span className="text-border-subtle hidden sm:inline">|</span>
            <span className="text-[11px] text-slate hidden sm:inline">
              Sample data for design review
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-ink transition-colors font-semibold">
              ← Back to Home
            </Link>
            <Link href="/styleguide" className="hover:text-ink transition-colors font-semibold">
              Design System
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
