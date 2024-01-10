/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
      Sans: ["DM+Sans"],
    },
    fontSize: {
      sm: "16px",
      md: "20px",
      lg: "24px",
      "2lg": "32px",
      "3lg": "48px",
      xl: "58px",
      "2xl": "64px",
      "3xl": "96px",
    },
    extend: {
      colors: {
        offwhite: "#CCC",
        black: "#000",
        darkblack: "#191919",
        grey: "#7E7E7E",
        lightgrey: " #A7A7A7",
        darkgrey: " #D9D9D9",
      },
    },
  },
  plugins: [],
};
