import React from "react";

type BackgroundPatternProps = {
  variant: "tech-blueprint" | "perspective" | "network-mesh" | "topography-flow" | "cyber-rays";
  className?: string;
  strokeColor?: string;
  accentColor?: "cobalt" | "emerald" | "cyan";
};

export default function BackgroundPattern({
  variant,
  className = "",
  strokeColor,
  accentColor = "cobalt",
}: BackgroundPatternProps) {
  // 1. Tech Blueprint Grid (Hero & Join): Clean architectural grid, visible telemetry arcs, and ambient glow
  if (variant === "tech-blueprint") {
    const stroke = strokeColor || "rgba(148, 163, 184, 0.28)";
    const majorStroke =
      accentColor === "emerald"
        ? "rgba(16, 185, 129, 0.25)"
        : accentColor === "cyan"
        ? "rgba(6, 182, 212, 0.25)"
        : "rgba(37, 99, 235, 0.22)";
    const dotColor =
      accentColor === "emerald"
        ? "rgba(16, 185, 129, 0.5)"
        : accentColor === "cyan"
        ? "rgba(6, 182, 212, 0.5)"
        : "rgba(37, 99, 235, 0.5)";

    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Minor grid 40px */}
            <pattern id="bp-grid-minor" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={stroke}
                strokeWidth="0.8"
                strokeOpacity="0.75"
              />
            </pattern>

            {/* Major grid 120px with corner intersection micro-dots */}
            <pattern id="bp-grid-major" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" stroke={majorStroke} strokeWidth="1.2" />
              {/* Clean corner micro-dots at intersections */}
              <circle cx="0" cy="0" r="2" fill={dotColor} />
              <circle cx="120" cy="0" r="2" fill={dotColor} />
              <circle cx="0" cy="120" r="2" fill={dotColor} />
              <circle cx="120" cy="120" r="2" fill={dotColor} />
            </pattern>

            {/* Subtle radial ambient spotlight */}
            <radialGradient id={`hero-spotlight-${accentColor}`} cx="65%" cy="38%" r="65%">
              <stop
                offset="0%"
                stopColor={accentColor === "emerald" ? "#10B981" : "#2563EB"}
                stopOpacity="0.08"
              />
              <stop
                offset="50%"
                stopColor={accentColor === "emerald" ? "#059669" : "#06B6D4"}
                stopOpacity="0.03"
              />
              <stop
                offset="100%"
                stopColor={accentColor === "emerald" ? "#10B981" : "#2563EB"}
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          {/* Ambient Spotlight */}
          <rect width="100%" height="100%" fill={`url(#hero-spotlight-${accentColor})`} />

          {/* Minor Grid Layer */}
          <rect width="100%" height="100%" fill="url(#bp-grid-minor)" />

          {/* Major Grid Layer */}
          <rect width="100%" height="100%" fill="url(#bp-grid-major)" />

          {/* Architectural Diagonal Ray Lines */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke={majorStroke} strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.4" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke={majorStroke} strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.4" />

          {/* Architectural Telemetry Arcs */}
          <g stroke={majorStroke} strokeWidth="1.2" fill="none" strokeDasharray="4 6">
            <circle cx="74%" cy="40%" r="160" />
            <circle cx="74%" cy="40%" r="320" />
            <circle cx="74%" cy="40%" r="480" />
          </g>
        </svg>
      </div>
    );
  }

  // 2. Perspective Wireframe Room Grid (GatherSystem): Radiating 3D room perspective rays
  if (variant === "perspective") {
    const stroke = strokeColor || "rgba(148, 163, 184, 0.28)";
    const w = 1440;
    const h = 900;
    const cx = 720;
    const cy = 340;
    const scales = [0.12, 0.24, 0.40, 0.62, 0.90, 1.25, 1.70];
    const topPoints = [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440];
    const bottomPoints = [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440];
    const leftPoints = [150, 300, 450, 600, 750];
    const rightPoints = [150, 300, 450, 600, 750];

    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke={stroke} strokeWidth="1.2" fill="none">
            {topPoints.map((x, i) => (
              <line key={`top-${i}`} x1={cx} y1={cy} x2={x} y2={0} />
            ))}
            {bottomPoints.map((x, i) => (
              <line key={`bot-${i}`} x1={cx} y1={cy} x2={x} y2={h} />
            ))}
            {leftPoints.map((y, i) => (
              <line key={`left-${i}`} x1={cx} y1={cy} x2={0} y2={y} />
            ))}
            {rightPoints.map((y, i) => (
              <line key={`right-${i}`} x1={cx} y1={cy} x2={w} y2={y} />
            ))}
            {scales.map((s, i) => {
              const rx = cx - cx * s;
              const ry = cy - cy * s;
              const rw = w * s;
              const rh = h * s;
              return (
                <rect
                  key={`rect-${i}`}
                  x={rx}
                  y={ry}
                  width={rw}
                  height={rh}
                  stroke={stroke}
                  strokeWidth={i === 2 ? "1.6" : "1.2"}
                />
              );
            })}
          </g>
          <circle cx={cx} cy={cy} r="4" fill={stroke} />
        </svg>
      </div>
    );
  }

  // 3. Network Mesh (Directory): Interconnected node lattice with architectural blueprint grid
  if (variant === "network-mesh") {
    const stroke = strokeColor || "rgba(148, 163, 184, 0.22)";
    const gridStroke = "rgba(148, 163, 184, 0.18)";
    const majorStroke = "rgba(37, 99, 235, 0.16)";

    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Minor grid 40px */}
            <pattern id="net-grid-minor" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridStroke} strokeWidth="0.8" />
            </pattern>

            {/* Major grid 120px */}
            <pattern id="net-grid-major" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" stroke={majorStroke} strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
              <circle cx="120" cy="0" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
            </pattern>

            {/* Hexagonal Isometric Mesh */}
            <pattern id="hex-mesh" width="120" height="104" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 120 34.6 L 120 104 L 60 69.3 L 0 104 L 0 34.6 Z"
                fill="none"
                stroke={stroke}
                strokeWidth="0.8"
                strokeDasharray="2 4"
              />
              <circle cx="60" cy="0" r="1.5" fill="rgba(37, 99, 235, 0.35)" />
              <circle cx="120" cy="34.6" r="1.5" fill="rgba(16, 185, 129, 0.35)" />
              <circle cx="0" cy="34.6" r="1.5" fill="rgba(6, 182, 212, 0.35)" />
            </pattern>
          </defs>

          {/* Blueprint Grid Layers */}
          <rect width="100%" height="100%" fill="url(#net-grid-minor)" />
          <rect width="100%" height="100%" fill="url(#net-grid-major)" />

          {/* Hex Mesh Pattern Fill */}
          <rect width="100%" height="100%" fill="url(#hex-mesh)" opacity="0.85" />

          {/* Large Constellation Network Lines connecting across the canvas */}
          <g stroke={stroke} strokeWidth="1.2" fill="none">
            <line x1="120" y1="180" x2="420" y2="280" />
            <line x1="420" y1="280" x2="780" y2="160" />
            <line x1="780" y1="160" x2="1140" y2="310" />
            <line x1="1140" y1="310" x2="1360" y2="220" />

            <line x1="240" y1="520" x2="560" y2="440" />
            <line x1="560" y1="440" x2="940" y2="580" />
            <line x1="940" y1="580" x2="1280" y2="480" />

            {/* Cross diagonals */}
            <line x1="420" y1="280" x2="560" y2="440" strokeDasharray="3 5" />
            <line x1="780" y1="160" x2="940" y2="580" strokeDasharray="3 5" />
          </g>

          {/* Major Verified Hub Dots */}
          {[
            [120, 180, "#2563EB"],
            [420, 280, "#10B981"],
            [780, 160, "#2563EB"],
            [1140, 310, "#06B6D4"],
            [1360, 220, "#10B981"],
            [240, 520, "#06B6D4"],
            [560, 440, "#2563EB"],
            [940, 580, "#10B981"],
            [1280, 480, "#2563EB"],
          ].map(([x, y, color], i) => (
            <g key={`hub-${i}`}>
              <circle cx={x} cy={y} r="6" fill={color as string} fillOpacity="0.15" />
              <circle cx={x} cy={y} r="2.5" fill={color as string} fillOpacity="0.7" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // 4. Topography / Flow Trajectory (Audience & Steps): Subtle architectural contour waves + blueprint grid
  if (variant === "topography-flow") {
    const stroke = strokeColor || "rgba(148, 163, 184, 0.22)";
    const gridStroke = "rgba(148, 163, 184, 0.18)";
    const majorStroke = "rgba(37, 99, 235, 0.16)";

    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="topo-grid-minor" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gridStroke} strokeWidth="0.8" />
            </pattern>
            <pattern id="topo-grid-major" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" stroke={majorStroke} strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
              <circle cx="120" cy="0" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
            </pattern>
          </defs>

          {/* Continuous Blueprint Grid Layer */}
          <rect width="100%" height="100%" fill="url(#topo-grid-minor)" />
          <rect width="100%" height="100%" fill="url(#topo-grid-major)" />

          <g stroke={stroke} strokeWidth="1.2" fill="none">
            {/* Smooth architectural contour curves */}
            <path d="M -100 120 C 300 240, 800 60, 1540 180" />
            <path d="M -100 220 C 350 360, 850 140, 1540 290" />
            <path d="M -100 320 C 400 480, 900 220, 1540 400" />
            <path d="M -100 420 C 450 600, 950 300, 1540 510" />
            <path d="M -100 520 C 500 720, 1000 380, 1540 620" />
            <path d="M -100 620 C 550 840, 1050 460, 1540 730" />

            {/* Vertical milestone lines */}
            <line x1="280" y1="0" x2="280" y2="900" strokeDasharray="4 8" strokeOpacity="0.6" />
            <line x1="640" y1="0" x2="640" y2="900" strokeDasharray="4 8" strokeOpacity="0.6" />
            <line x1="1000" y1="0" x2="1000" y2="900" strokeDasharray="4 8" strokeOpacity="0.6" />
          </g>
        </svg>
      </div>
    );
  }

  // 5. Cyber Rays (Dark CTA Card): Futuristic perspective tunnel glow for dark surfaces
  if (variant === "cyber-rays") {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="cta-glow" cx="85%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#090D16" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <rect width="100%" height="100%" fill="url(#cta-glow)" />

          {/* Radiating perspective rays from right CTA focus */}
          <g stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" fill="none">
            <line x1="850" y1="200" x2="0" y2="0" />
            <line x1="850" y1="200" x2="0" y2="100" />
            <line x1="850" y1="200" x2="0" y2="200" />
            <line x1="850" y1="200" x2="0" y2="300" />
            <line x1="850" y1="200" x2="0" y2="400" />
            <line x1="850" y1="200" x2="400" y2="400" />
            <line x1="850" y1="200" x2="700" y2="400" />

            {/* Concentric rings */}
            <circle cx="850" cy="200" r="100" stroke="rgba(37, 99, 235, 0.25)" />
            <circle cx="850" cy="200" r="220" stroke="rgba(6, 182, 212, 0.2)" />
            <circle cx="850" cy="200" r="360" stroke="rgba(255, 255, 255, 0.08)" />
          </g>
        </svg>
      </div>
    );
  }

  return null;
}
