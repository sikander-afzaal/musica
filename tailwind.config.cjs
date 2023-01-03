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
      },
      maxWidth: {
        theme: "1300px",
      },
      colors: {
        orange: "#FF5A00",
      },
    },
  },
  plugins: [],
};
