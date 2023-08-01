module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      extend: {
        buttonBgcolor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771ff",
        irisBlueColor: "01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
