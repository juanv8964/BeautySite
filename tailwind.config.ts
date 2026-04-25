import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#120815",
        surface: "#1B0D22",
        panel: "#25112D",
        blush: "#F6A8C8",
        rose: "#D6689F",
        plum: "#7B3F8C",
        gold: "#F0C27A",
        text: "#F9EAF2",
        muted: "#CFAFBE",
      },
      boxShadow: {
        glow: "0 20px 45px rgba(214, 104, 159, 0.2)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(240,194,122,0.14), transparent 28%), radial-gradient(circle at 20% 20%, rgba(214,104,159,0.18), transparent 30%), linear-gradient(135deg, rgba(18,8,21,1) 0%, rgba(32,15,42,1) 55%, rgba(14,7,18,1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
