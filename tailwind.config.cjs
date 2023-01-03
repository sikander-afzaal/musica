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
        fan: "linear-gradient(255.44deg, rgba(255, 184, 0, 0.07) 11.61%, rgba(255, 168, 0, 0) 100%)",
        artist:
          "linear-gradient(254.39deg, rgba(179, 21, 235, 0.09) 4.4%, rgba(179, 21, 235, 0) 99.46%)",
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
