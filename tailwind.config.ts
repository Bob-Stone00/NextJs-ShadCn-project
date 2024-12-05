import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
		darkPurple:"#BF83FD",
		darkGreen:"#3CD755",
		darkYellow:"#FF947A",
		darkcrimson:"#FA5A7C",
		crimson:"#FFE2E6",
        foreground: "hsl(var(--foreground))",
        primary: "#6D28D9", // Purple shade for active items
        background: "#F9FAFB", // Light gray background
        grayText: "#6B7280", // Muted gray text
        cardBg: "#FFFFFF", // White card background
        iconBg: "#F3F4F6", // Light gray for icons
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        boxShadow: {
          sidebar: "4px 0 10px rgba(0, 0, 0, 0.05)", // Subtle shadow for sidebar
          card: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for cards
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
		
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Matches the font in your design
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
