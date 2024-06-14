/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(to bottom, #000000, #434343)',
        'white-gradient': 'linear-gradient(to bottom, #ffffff, #f1f1f1)',
      }
    },
  },
  plugins: [],
}