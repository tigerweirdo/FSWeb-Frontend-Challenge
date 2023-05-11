/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-gray': '#2A262B',
       "custom-lightgray": "#F4F4F4",
       "custom-white": "#F5F5F5",
       "custom-darkwhite": "#484148",
       "custom-information":"#525252"
      }
    },
  },
  plugins: [],
 
};