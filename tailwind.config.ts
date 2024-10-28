import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#BEB0C3",
        secondary: "#E4E4E4",
        colorOne: "#07000E",
        colorTwo: "#EECC8D",
        colorThree: "#F08B33",
        colorFour: "#D75404",
        colorFive: "#8A2C02",
        colorSix: "#F2C744",
        colorSeven: "#4FD100",
        colorEight: "#9FEDD7",
        black: "#000",
        white: "#ffffff",
        orange: "#D55C36",
        darkBlue: "#1E3A8A",
        darklessBlue: "#64748B",
        colorYellow: "#FAED26",
        colorGreen: "#82C232",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        jost_italic: ["Jost-Italic", "sans-serif"],
        jost_variable: ["Jost-Variable", "sans-serif"],
        orbitron_variable: ["Orbitron-Variable", "sans-serif"],
        permanentMarker: ["PermanentMarker", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
