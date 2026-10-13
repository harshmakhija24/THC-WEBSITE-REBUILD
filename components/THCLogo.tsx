import Link from "next/link";
import Image from "next/image";

type THCLogoProps = {
  theme?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function THCLogo({
  theme = "light",
  className = "",
  showWordmark = true,
  size = "md",
}: THCLogoProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-obsidian";
  const subColor = isDark ? "text-slate-400" : "text-text-secondary";

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus-visible:ring-2 rounded-input ${className}`}
      aria-label="The Healthtech Collective — Home"
    >
      {/* Official THC Logo Mark */}
      <div
        className={`${sizeClasses} relative rounded-md overflow-hidden border border-border-subtle shadow-xs bg-white shrink-0 transition-transform group-hover:scale-105`}
      >
        <Image
          src="/thc-logo.jpg"
          alt="The Healthtech Collective Logo"
          width={48}
          height={48}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className={`font-sans font-bold text-h3 leading-tight tracking-tight ${textColor}`}>
            The Healthtech Collective
          </span>
          <span className={`text-[12px] font-medium tracking-wide ${subColor}`}>
            India&apos;s Healthtech Front Door
          </span>
        </div>
      )}
    </Link>
  );
}

