const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lightsalmon": "#ffa07a",
        "orange-yellow": "linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)",
        "transparent-white": "rgba(103, 128, 159, 50)"
      },
    },
  },
  variants: {
    textColor: ({ after }) => after(['invalid']),
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
    addVariant('invalid', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`invalid${separator}${className}`)}:invalid`;
      });
    });
  }),
],
}
