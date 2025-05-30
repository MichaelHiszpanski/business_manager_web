import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  darkMode: undefined,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/consts/**/*.{js,ts,jsx,tsx,mdx}",
    "./documents/docs_md/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BEB0C3",
        secondary: "#E4E4E4",
        colorOne: "#07000E",
        colorTwo: "#EECC8D",
        colorThree: "#F08B33",
        colorFour: "#D75404",
        colorFive: "#8A2C02",
        colorSix: "#77CBF0",
        colorSeven: "#F0A5CB",
        colorEight: "#9FEDD7",
        black: "#000",
        white: "#ffffff",
        orange: "#D55C36",
        darkBlue: "#1E3A8A",
        darklessBlue: "#64748B",
        colorYellow: "#FAED26",
        colorGreen: "#82C232",
        colorSrcOne: "#E27E01",
        colorSrcTwo: "#761568",
        colorSrcThree: "#00AAC8",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        jost_italic: ["Jost-Italic", "sans-serif"],
        jost_variable: ["Jost-Variable", "sans-serif"],
        orbitron_variable: ["Orbitron-Variable", "sans-serif"],
        permanentMarker: ["PermanentMarker", "sans-serif"],
      },
      padding: {
        navPadding: "150px",
      },
      animation: {
        crawl: "crawl 60s linear infinite",
      },
      keyframes: {
        crawl: {
          "0%": {
            top: "100%",
            opacity: "1",
            transform: "rotateX(25deg) scale(1)",
          },
          "80%": {
            opacity: "1",
            transform: "rotateX(25deg) scale(0.5)",
          },
          "100%": {
            top: "-100%",
            opacity: "0",
            transform: "rotateX(25deg) scale(0.3)",
          },
        },
      },
      perspective: {
        800: "800px",
        1000: "1000px",
      },
      rotate: {
        "45": "45deg",
      },
    },
  },
  plugins: [typography],
};
export default config;
