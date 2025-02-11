import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      backgroundColor: {
        light: "#F8F9FA",
        cardLight: "#F1F3F5",
        cardDark: "#12263A",
        dark: "#0F1F2F",
        greenLight: "#5FA305",
        greenDark: "#73C606",
      },
      textColor: {
        light: "#2E4760",
        dark: "#d6e3f0",
        greenLight: "#5FA305",
        greenDark: "#73C606",
        iconDark: "#ECF2F9",
        iconLight: "#2C3B49",
      },
    },
  },
  plugins: [typography, scrollbar],
} satisfies Config;
