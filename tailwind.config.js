/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/main.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}

