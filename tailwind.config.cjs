const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sui", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('/hero-bg.png')",
        passive: "url('/passive-bg.png')",
        drop: "linear-gradient(180deg, #1F1D24 0%, #06040B 100%)",
      },
      maxWidth: {
        theme: "1300px",
      },
      colors: {
        orange: "#FF5A00",
        heading: "#0F0A1A",
        cream: "rgba(254, 253, 249, 0.8)",
      },
    },
  },
  plugins: [],
};
