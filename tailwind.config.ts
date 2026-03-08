import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--lif-navy)",
          purple: "var(--lif-purple)",
          bg: "var(--lif-bg)",
          gradientEnd: "var(--lif-gradient-end)",
          text: "var(--lif-text)",
          muted: "var(--lif-muted)",
          border: "var(--lif-border)",
          card: "var(--lif-card)"
        }
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 19, 43, 0.08)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.55s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
