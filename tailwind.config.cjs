/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.js', './src/**/*.vue'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1370px',
    },
    extend: {
      boxShadow: {
        card: '0 1px 13px 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: {
          gray: '#787878',
          black: "#303030",
          muted: "#aeb0b1",
          white: "#fbfbfc",
          "muted-black": "#2D2D2D",
          light: "#efeff2",
          "semi-black": "#6e6e6e", // rgba(38,38,38,0.55)
        },
        secondary: {
          'medium-white': "#f3f4f6",
          'gray-medium': '#525352',
          'light-white': "#e6e8ec"
        },
      },

      screen: {
        ...defaultTheme.screens,
      },
      fontFamily: {
        archivo: ['Archivo','sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
      fill: theme => theme('colors'),
    },
  },
  plugins: [],
}
