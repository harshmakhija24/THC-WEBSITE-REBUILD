import React from "react";

type PerspectiveGridProps = {
  className?: string;
  vanishingX?: number; // 0 - 100%
  vanishingY?: number; // 0 - 100%
  strokeColor?: string;
};

export default function PerspectiveGrid({
  className = "",
  vanishingX = 50,
  vanishingY = 38,
  strokeColor = "rgba(148, 163, 184, 0.28)",
}: PerspectiveGridProps) {
  // Coordinate space: 1440 x 900
  const w = 1440;
  const h = 900;
  const cx = (vanishingX / 100) * w;
  const cy = (vanishingY / 100) * h;

  // Concentric perspective rectangular room frames receding into depth
  const scales = [0.12, 0.24, 0.40, 0.62, 0.90, 1.25, 1.70];

  // Perspective rays radiating from vanishing point to perimeter
  const topPoints = [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440];
  const bottomPoints = [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440];
  const leftPoints = [150, 300, 450, 600, 750];
  const rightPoints = [150, 300, 450, 600, 750];

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="vanishingGlow" cx={`${vanishingX}%`} cy={`${vanishingY}%`} r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke={strokeColor} strokeWidth="1.2" fill="none">
          {/* Radial perspective rays to top */}
          {topPoints.map((x, i) => (
            <line key={`top-${i}`} x1={cx} y1={cy} x2={x} y2={0} />
          ))}

          {/* Radial perspective rays to bottom */}
          {bottomPoints.map((x, i) => (
            <line key={`bot-${i}`} x1={cx} y1={cy} x2={x} y2={h} />
          ))}

          {/* Radial perspective rays to left edge */}
          {leftPoints.map((y, i) => (
            <line key={`left-${i}`} x1={cx} y1={cy} x2={0} y2={y} />
          ))}

          {/* Radial perspective rays to right edge */}
          {rightPoints.map((y, i) => (
            <line key={`right-${i}`} x1={cx} y1={cy} x2={w} y2={y} />
          ))}

          {/* Concentric perspective room frames */}
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
                stroke={strokeColor}
                strokeWidth={i === 2 ? "1.6" : "1.2"}
              />
            );
          })}
        </g>

        {/* Center Vanishing Focus Spot */}
        <circle cx={cx} cy={cy} r="4" fill={strokeColor} />
      </svg>
    </div>
  );
}
