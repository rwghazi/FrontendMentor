/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'epiloque': ['Epiloque', 'sans-serif'],
      },
      colors: {
        almostwhite: '#fafafa',
        almostgray: '#696969',
        almostblack: '#171717',
      },
    },
  },
  plugins: [],
}