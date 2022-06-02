module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sora: ["Sora", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
},
  plugins: [],
  important: true,
};
