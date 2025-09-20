import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Joker palette
        primary: {
          DEFAULT: "#6A0DAD", // Joker purple
          light: "#9b4de0",
          dark: "#4a0879",
        },
        success: {
          DEFAULT: "#2ECC71", // Joker green
          light: "#58d68d",
          dark: "#1e8449",
        },
        warning: {
          DEFAULT: "#FFD700", // Joker golden vest
          light: "#ffea61",
          dark: "#c7a600",
        },
        error: {
          DEFAULT: "#E50914", // Joker smile red
          light: "#ff4c58",
          dark: "#a00008",
        },

        // Deadpool palette
        secondary: {
          DEFAULT: "#B71C1C", // Deadpool crimson
          light: "#e53935",
          dark: "#7f0000",
        },
        info: {
          DEFAULT: "#B0BEC5", // Deadpool steel gray
          light: "#eceff1",
          dark: "#808e95",
        },

        // Shared neutrals
        background: {
          DEFAULT: "#121212", // dark base
          paper: "#1E1E1E", // card surfaces
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B0BEC5",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
