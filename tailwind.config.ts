import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e0f",
        elevated: "#10171a",
        surface: "#141d20",
        border: "#1f2c2f",
        "border-bright": "#2c3d40",
        ink: "#e7ecec",
        muted: "#8aa0a3",
        faint: "#54686b",
        signal: "#00ffa3",
        "signal-dim": "#0a3d2c",
        amber: "#ffb454",
        "amber-dim": "#3d2f14",
        alert: "#ff5c6c",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,255,163,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,163,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(0,255,163,0.55)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(0,255,163,0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        scanline: "scanline 4s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
