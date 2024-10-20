/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      fontSize: {
        "20": "20px"
      }
    },
  },
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 0px and max-width: 639px) { ... }
        lg: { min: '0px', max: '1024px' },
        xl: { min: '1024px', max: 'px'}
      },
    },
  },
  plugins: [],
}