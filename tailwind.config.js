/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#121212 ", // background
          secondary: "#FFE998", // headers
          tertiary: "#212121", // boxes
          "black-100": "#212121",
          "black-200": "#323232",
          "white-100": "#f3f3f3",
          "hero": "#d8c270"
        },
        boxShadow: {
          card: "0px 35px 120px -15px #212121",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };