/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-pr": "#F5F5F5",
        "light-sc": "#E0E0E0",
        "light-sc-ct1": "#E5E5E5",
        "light-sc-ct2": "#D5D5E5",
        "light-pr-text": "#104173",
        "light-sc-text": "#50505E",
        "light-hover1": "#D8D8D8",
        "dark-pr": "#222222",
        "dark-sc": "#161616",
        "dark-sc-ct1": "#303030",
        "dark-sc-ct2": "#323343",
        "dark-pr-text": "#A5CDEC",
        "dark-sc-text": "#C5C5C5",
        "dark-hover1": "#2A2A2A",
      },
    },
  },
  plugins: [],
};
