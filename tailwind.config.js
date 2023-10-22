/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        mainBlue: '#1BAAD1',
        secondaryBlue: '#82E4FF',
        darkBlue: '#003EB6'
      },
      fontFamily: {
        poppins : ['Poppins', "sans-serif"],
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))'
      },
      gridRowStart: {
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
    },
  },
  plugins: [],
}