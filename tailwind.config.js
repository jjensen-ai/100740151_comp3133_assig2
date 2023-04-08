/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      "pastel-pink": {
        50: "#fef1f6",
        100: "#fee5ee",
        200: "#ffc8dd",
        300: "#ffa1c3",
        400: "#ff669a",
        500: "#fb3975",
        600: "#eb174d",
        700: "#cd0935",
        800: "#a90b2e",
        900: "#8d0e29",
        950: "#570013",
      },
      'cerulean': {
        '50': '#ecfeff',
        '100': '#d0f8fd',
        '200': '#a7effa',
        '300': '#6be2f5',
        '400': '#27cbe9',
        '500': '#0cbde0',
        '600': '#0c8bae',
        '700': '#11708d',
        '800': '#175b73',
        '900': '#184c61',
        '950': '#093143',
    },
    'purple-heart': {
      '50': '#fbf6fe',
      '100': '#f5eafd',
      '200': '#edd8fc',
      '300': '#dfbaf8',
      '400': '#cb8ef2',
      '500': '#b762ea',
      '600': '#a342db',
      '700': '#9332c8',
      '800': '#772c9d',
      '900': '#61257e',
      '950': '#430f5c',
  },
  
    },
  },
  plugins: [],
};
