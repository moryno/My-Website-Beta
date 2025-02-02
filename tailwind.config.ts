import type { Config } from "tailwindcss";

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
        // light: "#ffffff",
        light: "#F8F9FA",
        card: "#F1F3F5",
        // dark: "#0f172a",
        dark: "#0F1F2F",
      },
      textColor: {
        light: "#2E4760",
        // dark: "#dddddd",
        dark: "#0F1F2F",
        textCol: "#73C606",
      },
    },
  },
  plugins: [],
} satisfies Config;
