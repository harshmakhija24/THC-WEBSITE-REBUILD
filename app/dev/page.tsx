import Link from "next/link";
import { getDirectoryProfiles, getHomepageSections } from "@/lib/content";
import { ArrowLeft, CheckCircle2, FileText, Compass, Sparkles, Users } from "lucide-react";

export const metadata = {
  title: "Engineering & QA Dashboard — The Healthtech Collective",
  description: "Internal verification portal for THC website build phases and content models.",
};

export default async function DevPortalPage() {
  const directoryProfiles = await getDirectoryProfiles();
  const sections = await getHomepageSections();

  return (
    <main className="min-h-screen bg-paper text-ink pb-24">
      {/* Header */}
      <header className="border-b border-line bg-paper sticky top-0 z-20">
        <div className="max-w-container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-small text-slate hover:text-ink transition-colors focus-visible:ring-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Live Homepage</span>
            </Link>
            <span className="text-line">|</span>
            <span className="font-mono text-small font-semibold text-ink">/dev Dashboard</span>
          </div>

          <Link
            href="/styleguide"
            className="px-4 py-1.5 rounded-chip bg-ink text-paper text-small font-medium hover:bg-ink/90 transition-all"
          >
            Design System Matrix
          </Link>
        </div>
      </header>

      <div className="max-w-container mx-auto px-4 md:px-6 pt-12">
        <div className="mb-12">
          <span className="px-3 py-1 rounded-chip bg-teal text-ink text-small font-semibold">
            Engineering Verification Portal
          </span>
          <h1 className="text-display font-display text-ink mt-3">
            Phase 1 & Architecture <span className="italic font-serif">Audit.</span>
          </h1>
          <p className="text-lead text-slate mt-2 max-w-2xl">
            Internal deliverables, content layer telemetry, and schema health for the THC relaunch.
          </p>
        </div>

        {/* Phase Checklist */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
            <div className="w-10 h-10 rounded-input bg-lilac flex items-center justify-center text-ink">
              <Sparkles className="w-5 h-5 text-coral-text" />
            </div>
            <h2 className="text-h3 font-semibold text-ink">Tokens & Tailwind</h2>
            <p className="text-body text-slate">
              Tokens configured in <code className="text-small text-ink">app/globals.css</code> and
              mirrored in <code className="text-small text-ink">tailwind.config.ts</code>.
            </p>
            <ul className="text-small text-slate space-y-2 pt-2 border-t border-line">
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                WCAG AA contrast verified
              </li>
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                Coral/Teal fill contrast rules
              </li>
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                Fraunces & Inter fonts loaded
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
            <div className="w-10 h-10 rounded-input bg-lilac flex items-center justify-center text-ink">
              <FileText className="w-5 h-5 text-coral-text" />
            </div>
            <h2 className="text-h3 font-semibold text-ink">Content Layer</h2>
            <p className="text-body text-slate">
              Content querying through <code className="text-small text-ink">lib/content.ts</code>{" "}
              ensures no hard-coded presentation copy.
            </p>
            <ul className="text-small text-slate space-y-2 pt-2 border-t border-line">
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                10 typed content models in lib/types.ts
              </li>
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />8 Seed Directory Profiles ready
              </li>
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                PageSection order config file
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
            <div className="w-10 h-10 rounded-input bg-lilac flex items-center justify-center text-ink">
              <Compass className="w-5 h-5 text-coral-text" />
            </div>
            <h2 className="text-h3 font-semibold text-ink">Documentation</h2>
            <p className="text-body text-slate">
              Full PRD locked at <code className="text-small text-ink">docs/PRD.md</code> and design
              brief locked at <code className="text-small text-ink">THC_Design_Brief.md</code>.
            </p>
            <ul className="text-small text-slate space-y-2 pt-2 border-t border-line">
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                PRD locked at docs/PRD.md
              </li>
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                Fuse.js & Lucide installed
              </li>
              <li className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-text" />
                Reduced motion media queries
              </li>
            </ul>
          </div>
        </section>

        {/* Live Content Query Checks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
            <h3 className="text-h3 font-semibold text-ink flex items-center gap-2">
              <Users className="w-5 h-5 text-coral-text" />
              <span>Loaded Profiles ({directoryProfiles.length})</span>
            </h3>
            <div className="divide-y divide-line text-small">
              {directoryProfiles.map((p) => (
                <div key={p.id} className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-ink">{p.name}</span>
                    <span className="text-slate ml-2 font-mono text-xs">({p.category})</span>
                  </div>
                  <span className="text-slate font-mono text-xs">{p.city}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-card border border-line bg-paper shadow-card space-y-4">
            <h3 className="text-h3 font-semibold text-ink flex items-center gap-2">
              <Compass className="w-5 h-5 text-coral-text" />
              <span>Homepage Block Configuration ({sections.length})</span>
            </h3>
            <div className="divide-y divide-line text-small">
              {sections.map((s) => (
                <div key={s.id} className="py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-lilac flex items-center justify-center font-mono text-xs font-semibold text-ink">
                      {s.order}
                    </span>
                    <span className="font-medium text-ink">{s.name}</span>
                  </div>
                  <span className="font-mono text-xs text-slate">{s.component}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
