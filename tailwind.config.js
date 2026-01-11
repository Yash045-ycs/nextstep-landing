/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      animation: {
        slideInBlur: "slideInBlur 0.8s ease-out forwards",
        scaleInBlur: "scaleInBlur 1.2s ease-out forwards",

        // marquee animations
        marquee: "marquee 10s linear infinite",
        marquee2: "marquee2 10s linear infinite -5s",
      },
      keyframes: {
        slideInBlur: {
          "0%": {
            opacity: "0",
            transform: "translateY(32px)",
            filter: "blur(4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        scaleInBlur: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "blur(0)",
          },
        },

        // marquee keyframes
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        // marquee2: {
        //   "0%": { transform: "translateX(100%)" },
        //   "100%": { transform: "translateX(-100%)" },
        // },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
    require("tailwindcss-elevation"),
    require("tailwindcss-fluid-type"),
  ],
};
