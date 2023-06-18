/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter'],
        raleway: ['Raleway'],
      }
    },
  },
  plugins: [],
  darkMode: 'media'
}

