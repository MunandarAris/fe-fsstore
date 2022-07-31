/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#027B8C",
        secondary: "#FF8C5B",
        third: "#C4D6D8",
      },
    },
  },
  plugins: [],
};
