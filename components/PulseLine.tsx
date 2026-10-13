import React from "react";

type PulseLineProps = {
  variant?: "hero" | "divider" | "logo" | "accent";
  strokeColor?: "cobalt" | "emerald" | "cyan" | "obsidian" | "white" | "line";
  className?: string;
};

export default function PulseLine({
  variant = "divider",
  strokeColor = "cobalt",
  className = "",
}: PulseLineProps) {
  const colorMap = {
    cobalt: "var(--cobalt)",
    emerald: "var(--emerald)",
    cyan: "var(--cyan)",
    obsidian: "var(--obsidian)",
    white: "#FFFFFF",
    line: "var(--border-subtle)",
  };

  const stroke = colorMap[strokeColor] || "var(--cobalt)";

  if (variant === "logo") {
    return (
      <svg
        viewBox="0 0 32 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-7 h-4 ${className}`}
        aria-hidden="true"
      >
        <path
          d="M1 9.5H7.5L10 3L14 16L18 7L21 11.5L23.5 9.5H31"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse-line"
        />
      </svg>
    );
  }

  if (variant === "accent") {
    return (
      <svg
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full max-w-[200px] h-4 ${className}`}
        aria-hidden="true"
      >
        <path
          d="M2 12 H 50 L 62 3 L 74 21 L 86 6 L 98 16 L 108 12 H 198"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse-line"
        />
      </svg>
    );
  }

  if (variant === "hero") {
    return (
      <svg
        viewBox="0 0 800 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full overflow-visible pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <path
          d="M0 60 H 220 L 245 25 L 275 105 L 305 40 L 330 75 L 350 60 H 510 L 535 15 L 565 110 L 595 45 L 620 75 L 640 60 H 800"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.25"
          className="animate-pulse-line"
        />
      </svg>
    );
  }

  // Section divider
  return (
    <div className={`relative w-full py-2 flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-6 overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M0 15 H 480 L 500 3 L 520 27 L 538 8 L 550 19 L 562 15 H 1200"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.3"
          className="animate-pulse-line"
        />
      </svg>
    </div>
  );
}
