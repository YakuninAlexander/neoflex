/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        'good': '0rem 0rem 1.25rem rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}