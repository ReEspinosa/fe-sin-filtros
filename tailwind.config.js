/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        cream:      '#fff8f3',
        'cream-mid':'#fbecd9',
        'cream-dark':'#efe0cd',
        brown:      '#221a0f',
        'brown-mid':'#54433b',
        primary:    '#944a20',
        'primary-c':'#e88d5d',
        secondary:  '#725187',
        'secondary-c':'#e8c0ff',
        gold:       '#F2C044',
        'gold-dim': '#cb9d21',
        rose:       '#e8a0b4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'warm-sm': '0 4px 16px rgba(74,55,40,0.06)',
        'warm-md': '0 10px 30px rgba(74,55,40,0.08)',
        'warm-lg': '0 20px 50px rgba(74,55,40,0.12)',
      },
    },
  },
  plugins: [],
}
