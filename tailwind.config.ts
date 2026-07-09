import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,245,255,0.18), 0 0 40px rgba(0,245,255,0.12)",
      },
      backgroundImage: {
        "ai-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(22px, -14px, 0) scale(1.06)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
