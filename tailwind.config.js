/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0px 0px 12px #f0f0f0'
      }
      
    },
  },
  plugins: [],
}

