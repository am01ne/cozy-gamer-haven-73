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
        background: "#0A0A0A", // Darker, richer background
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#1FE660", // More vibrant Spotify green
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#22FF6B", // Brighter secondary green
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#FF3333", // More vibrant red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#2A2A2A", // Richer muted background
          foreground: "#CCCCCC", // Brighter muted text
        },
        accent: {
          DEFAULT: "#23FF69", // More vivid accent green
          foreground: "#000000",
        },
        card: {
          DEFAULT: "rgba(42, 42, 42, 0.95)", // Richer card background
          foreground: "#ffffff",
        },
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
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px #1DB954",
            borderColor: "#1DB954"
          },
          "50%": { 
            boxShadow: "0 0 30px #1ed760",
            borderColor: "#1ed760"
          }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn: "slideIn 0.5s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        glow: "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;