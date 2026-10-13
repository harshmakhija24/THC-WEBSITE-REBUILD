import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Crisp Modern Tech Tokens
        canvas: "var(--canvas)",
        "canvas-subtle": "var(--canvas-subtle)",
        "canvas-muted": "var(--canvas-muted)",
        obsidian: "var(--obsidian)",
        "obsidian-surface": "var(--obsidian-surface)",
        cobalt: "var(--cobalt)",
        "cobalt-hover": "var(--cobalt-hover)",
        "cobalt-tint": "var(--cobalt-tint)",
        emerald: "var(--emerald)",
        "emerald-fill": "var(--emerald-fill)",
        "emerald-tint": "var(--emerald-tint)",
        cyan: "var(--cyan)",
        "cyan-tint": "var(--cyan-tint)",
        "border-subtle": "var(--border-subtle)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",

        // Legacy Aliases
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        paper: "var(--paper)",
        coral: "var(--coral)",
        "coral-text": "var(--coral-text)",
        "coral-tint": "var(--coral-tint)",
        teal: "var(--teal)",
        "teal-text": "var(--teal-text)",
        "teal-tint": "var(--teal-tint)",
        lilac: "var(--lilac)",
        "lilac-2": "var(--lilac-2)",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          DEFAULT: "var(--slate)",
        },
        line: "var(--line)",
        "line-dark": "var(--line-dark)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif-accent)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["76px", { lineHeight: "1.08", letterSpacing: "-0.035em" }],
        display: ["56px", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h1: ["38px", { lineHeight: "1.15", letterSpacing: "-0.025em" }],
        h2: ["28px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h3: ["20px", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        lead: ["17px", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
        body: ["15px", { lineHeight: "1.55" }],
        small: ["13px", { lineHeight: "1.5" }],
      },
      borderRadius: {
        card: "var(--radius-card)",
        chip: "var(--radius-chip)",
        input: "var(--radius-input)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
      },
      maxWidth: {
        container: "1240px",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--ease)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        DEFAULT: "var(--dur)",
      },
    },
  },
  plugins: [],
};

export default config;
