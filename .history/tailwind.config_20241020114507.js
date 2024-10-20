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
        sm: { min: '0px', max: '640px'},
        ml: { min: '640px', max: '768px' },
        lg: { min: '768px', max: '1024px' },
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        'xxl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}