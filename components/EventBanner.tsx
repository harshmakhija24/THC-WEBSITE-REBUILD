import { Calendar, ArrowRight } from "lucide-react";
import type { Event } from "@/lib/types";

type EventBannerProps = {
  event: Event | null;
};

export default function EventBanner({ event }: EventBannerProps) {
  if (!event) return null;

  return (
    <aside
      aria-label="Upcoming Featured Gathering"
      className="bg-obsidian text-white py-2 px-4 text-small border-b border-obsidian-border"
    >
      <div className="max-w-container mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-chip bg-cobalt text-white font-semibold text-xs tracking-wide">
            <Calendar className="w-3 h-3" />
            <span>Next Gathering</span>
          </span>
          <span className="font-semibold text-white tracking-tight">{event.title}</span>
          <span className="text-slate-400 font-mono text-xs">
            · {event.city} · {event.date}
          </span>
        </div>

        <a
          href={event.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-cyan hover:text-white transition-colors text-small group focus-visible:ring-2 focus-visible:ring-white rounded"
        >
          <span>Register for Summit</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
}
