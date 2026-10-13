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
    cobalt: "bg-lilac text-ink border-line",
    emerald: "bg-teal/15 text-teal-text border-teal/25",
    purple: "bg-lilac text-ink border-line",
    slate: "bg-paper text-slate border-line",
    dark: "bg-ink text-paper border-ink",
    lilac: "bg-lilac text-ink border-line",
    teal: "bg-teal/15 text-teal-text border-teal/25",
    coral: "bg-coral/15 text-coral-text border-coral/25",
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
