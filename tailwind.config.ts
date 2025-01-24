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
        mainBrown: "var(--mainBrown)",
        mainGreen: "var(--mainGreen)",
        lightTeal: "var(--lightTeal)",
      },
    },
  },
  plugins: [],
} satisfies Config;
