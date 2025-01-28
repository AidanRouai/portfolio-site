import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainWhite: "var(--mainWhite)",
        mainPrimary: "var(--mainPrimary)",
        mainSecondary: "var(--mainSecondary)",
        darkSecondary: "var(--darkSecondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
