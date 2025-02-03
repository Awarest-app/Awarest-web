import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      backgroundImage: {
        'gradient-to-b': "linear-gradient(to bottom, var(--gradientStart) 40%, var(--gradientEnd) 100%)"
      }
    },
  },
  safelist: [
    'p-0','p-4'
  ],
  plugins: [],
} satisfies Config;
