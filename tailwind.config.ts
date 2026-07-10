import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Iltavalo-paletti: lämmin tumma neutraali + kerma + meripihka.
        bark: {
          800: "#241d18",
          900: "#1a1512",
        },
        cream: {
          50: "#f2ece4",
          100: "#d9cfc0",
          200: "#c9bda9",
          300: "#b8ab9a",
          400: "#8f8272",
          600: "#57503f",
        },
        amber: {
          300: "#ecb96f",
          400: "#e0a458",
        },
        copper: {
          500: "#d97742",
        },
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sans: ["var(--font-atkinson)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
        wordCycle: {
          "0%, 26%": { transform: "translateY(0)" },
          "33%, 59%": { transform: "translateY(-25%)" },
          "66%, 92%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(-75%)" },
        },
        blinkDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 7s ease-in-out infinite",
        "word-cycle": "wordCycle 9s steps(1) infinite",
        "blink-dot": "blinkDot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
