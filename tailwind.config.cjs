/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'passion': ['Passion One'],
        'poppins': ['Poppins']
      },
      colors: {
        'mybrown': '#48311E',
        'brownhover': '#332010',
        'secondarybg': '#E5E4D5',
        'card': '#D1CCA2',
        'percent': '#564F4A',
        'road': '#EEEBD5'
      },
      backgroundImage: {
        'banner': "url('/banner.webp')",
        'bones': "url('/bonebg.webp')",
        'topog': "url('/topog.webp')",
        'footer': "url('/footer.webp')"


      },
      boxShadow: {
        'myborder': '10px 10px 0px -2px rgba(72,49,30,1)',
        'roadmap': '1px 50px 28px 9px rgba(229,228,213,1) inset',
        
      }
    },
  },
  plugins: [],
}
