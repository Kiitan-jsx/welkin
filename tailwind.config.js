/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme') 

module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily: {
      'DMsans': ['DM Sans', 'sans-serif'],
      'rale': ['Raleway', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
