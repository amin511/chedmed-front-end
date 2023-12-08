/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5E5CE6",
        },
        secondary: {
          DEFAULT: "7459D9",
        },
        tertiary: {
          DEFAULT: "F2F2F7",
        },
        "black-t": {
          DEFAULT: "#232323",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
