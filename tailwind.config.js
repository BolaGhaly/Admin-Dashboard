/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "light-pr": "#F5F5F5",
        "light-sc": "#E0E0E0",
        "light-sc-ct": "#E5E5E5",
        "light-pr-text": "#104173",
        "light-sc-text": "#50505E",
        "dark-pr": "#222222",
        "dark-sc": "#161616",
        "dark-sc-ct": "#333333",
        "dark-pr-text": "#A5CDEC",
        "dark-sc-text": "#E6E6E6",
      },
    },
  },
  plugins: [],
};
