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
        background: "#121212", // Spotify's dark background
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#1DB954", // Spotify green
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1ed760", // Spotify lighter green
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#282828", // Spotify's card background
          foreground: "#B3B3B3", // Spotify's secondary text
        },
        accent: {
          DEFAULT: "#1fdf64", // Spotify's bright green
          foreground: "#000000",
        },
        card: {
          DEFAULT: "rgba(40, 40, 40, 0.9)", // Spotify's card background with transparency
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