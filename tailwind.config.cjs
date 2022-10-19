/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './**.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'loto': `'Lato', sans-serif`,
        'mons': `'Montserrat', sans-serif`,
        'cizel': `'Cinzel', serif`
      },
    },
  },
  plugins: [],
}
