import React from "react";
import Image from "next/image";

type PhotoSlotProps = {
  name: string;
  photo?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  tint?: "cobalt" | "emerald" | "slate" | "dark" | "lilac" | "teal" | "coral";
  className?: string;
};

export default function PhotoSlot({
  name,
  photo,
  size = "md",
  tint = "cobalt",
  className = "",
}: PhotoSlotProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const sizeClasses = {
    sm: "w-8 h-8 text-small",
    md: "w-10 h-10 text-[13px]",
    lg: "w-12 h-12 text-[14px]",
    xl: "w-16 h-16 text-h3",
  };

  const tintClasses = {
    cobalt: "bg-gradient-to-br from-blue-50 to-indigo-100/70 text-cobalt border-blue-200/80",
    emerald: "bg-gradient-to-br from-emerald-50 to-teal-100/70 text-emerald-800 border-emerald-200/80",
    purple: "bg-gradient-to-br from-purple-50 to-indigo-100/70 text-purple-800 border-purple-200/80",
    slate: "bg-gradient-to-br from-slate-100 to-slate-200/80 text-slate-800 border-slate-300/80",
    dark: "bg-obsidian text-white border-obsidian-border",
    // aliases for backward compatibility
    lilac: "bg-gradient-to-br from-blue-50 to-indigo-100/70 text-cobalt border-blue-200/80",
    teal: "bg-gradient-to-br from-emerald-50 to-teal-100/70 text-emerald-800 border-emerald-200/80",
    coral: "bg-gradient-to-br from-cyan-50 to-blue-100/70 text-cyan-900 border-cyan-200/80",
  };

  if (photo) {
    return (
      <div
        className={`relative rounded-full overflow-hidden border shadow-xs ${sizeClasses[size]} shrink-0 ${className}`}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 80px, 120px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`rounded-full border flex items-center justify-center font-sans font-bold select-none shrink-0 shadow-xs ${sizeClasses[size]} ${tintClasses[tint] || tintClasses.cobalt} ${className}`}
      title={name}
      aria-label={name}
    >
      <span>{initials || "THC"}</span>
    </div>
  );
}
