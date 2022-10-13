/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs', './views/partials/*.ejs'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        royalBlue: 'rgba(51, 75, 147, 1)',
        blackBlue: 'rgba(20, 33, 73, 1)',
        textGold: 'rgba(255, 219, 112, 1)',
      },
    },
  },
  plugins: [require('daisyui')],
}
