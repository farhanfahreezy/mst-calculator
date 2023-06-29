/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FFFFFF",
        secondaryWhite: "#FAFAFA",
        primaryBlue: "#0B30E1",
        secondaryBlue: "#E5EAFF",
        secondaryRed: "#FD8483",
        secondaryYellow: "#FFBE00",
        secondaryGray: "#B6B6B6",
        dimBlue: "rgba(11,48,225,0.5)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "inner-xl": "inset 0px 0px 50px -12px rgb(0 0 0 / 0.1)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
