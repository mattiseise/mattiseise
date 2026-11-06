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
        // Sarjakuvapaletti (sarjakuvaesitysten näyttämö + Sinihetki-yö): yö-pohja, viileä vaalea teksti,
        // syaani pääaksentti ylivallalla, magenta varjoissa ja kerma sarjakuvaruutujen reunoissa.
        yo: {
          700: "#151b30",
          800: "#0f1424",
          900: "#080b16",
        },
        teksti: {
          50: "#eaf0ff",
          100: "#d6def2",
          200: "#c9d3ea",
          300: "#a9b5d3",
          400: "#8796b9",
          600: "#56627f",
        },
        syaani: {
          300: "#67e8f9",
          400: "#22d3ee",
        },
        magenta: {
          500: "#f0459b",
        },
        ruutu: "#ffe6cb",
        paperi: "#fff7ec",
        muste: "#0a0a12",
        rapu: "#ea4a2f",
        keltainen: "#fbbf24",
        lime: "#a3e635",
        violetti: "#a78bfa",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Avenir Next Condensed", "Arial Narrow", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
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
