import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-prime)"],
        secondary: ["var(--font-kanit)"],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        orange: {
          900: "#5c1f00",
          800: "#852f04",
          700: "#ad410b",
          600: "#d65515",
          DEFAULT: "#fe6c21",
          400: "#ff884c",
          300: "#ffa477",
          200: "#ffc1a1",
          100: "#ffddcc",
        },
        blue: {
          900: "#001c38",
          800: "#071f38",
          700: "#0e2338",
          600: "#152638",
          DEFAULT: "#1b2937",
          400: "#3c536a",
          300: "#64809c",
          200: "#94b1cd",
          100: "#cce6ff",
        },
        white: {
          900: "#b0b0b0",
          800: "#bdbdbd",
          700: "#c9c9c9",
          600: "#d9d9d9",
          DEFAULT: "#f2f2f2",
          400: "#f5f5f5",
          300: "#f9f9f9",
          200: "#fcfcfc",
          100: "#ffffff",
        },
        black: {
          900: "#140000",
          800: "#140505",
          700: "#140a0a",
          600: "#140f0f",
          DEFAULT: "#141414",
          400: "#4f4f4f",
          300: "#696969",
          200: "#858585",
          100: "#a6a6a6",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
