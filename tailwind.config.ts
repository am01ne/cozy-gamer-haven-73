import type { Config } from "tailwindcss";

export default {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#030712", // Darker background
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#6d28d9", // Deep purple
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0ea5e9", // Sky blue
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#dc2626", // Bright red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1e293b",
          foreground: "#94a3b8",
        },
        accent: {
          DEFAULT: "#312e81", // Indigo
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(30, 41, 59, 0.7)", // Transparent dark slate
          foreground: "#f8fafc",
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
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px #6d28d9" }, // Updated to match primary color
          "50%": { boxShadow: "0 0 30px #0ea5e9" }, // Updated to match secondary color
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn: "slideIn 0.3s ease-out",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;