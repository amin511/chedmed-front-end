/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D10024",
        },
        secondary: {
          DEFAULT: "7459D9",
        },
        tertiary: {
          DEFAULT: "#D10024",
        },
        "black-t": {
          DEFAULT: "#D10024",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
