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
        "light-sc-ct": "#DBF0FF",
        "light-pr-text": "#104173",
        "light-sc-text": "#50505E",
      },
    },
  },
  plugins: [],
};
