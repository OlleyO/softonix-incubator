/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#f66f4d',
      gray: '#9498a4',
      'gray-2': '#676a6c',
      'gray-light': '#5b5f62',
      'gray-lighter': '#939597',
      'gray-dark': '#2d3134',
      'blue-dark': '#2e476b',
      'yellow-bonnet': '#faf8ed',
      'gray-bg': '#faf8ed',
      'white-bright': '#fdfeff',
      'white-gray': '#ffffffb3',
      'button-border': '#3d3d3d',
      gold: '#ffc14b',
      'gold-light': '#ffd482',
      border: '#eaeaeb'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    },
    extend: {
      letterSpacing: {
        tiniest: '0.0015em',
        wide: '.01em',
        'the-widest': '.2em'
      },
      spacing: {
        1.5: '0.375rem',
        67: '4.1875rem',
        13.06: '0.81625rem',
        18: '4.5rem',
        19: '1.1875rem',
        34.1: '8.4375rem',
        34: '2.125rem',
        44: '2.75rem',
        55: '3.4375rem',
        57: '3.5625rem',
        60: '3.75rem',
        70: '4.375rem',
        113: '7.0625rem',
        150: '9.375rem',
        157: '9.8125rem'
      },
      maxWidth: {
        'laptop-l': '90rem',
        100: '6.25rem',
        102: '6.375rem',
        137: '8.5625rem',
        500: '31.25rem',
        537: '33.5625rem'
      },
      borderRadius: {
        27: '27px',
        38: '38px',
        inherit: 'inherit'
      },
      borderWidth: {
        1.4: '1.4px',
        1.5: '1.5px'
      },
      minWidth: {
        button: '10.625rem',
        170: '10.625rem',
        386: '24.125rem'
      },
      fontSize: {
        h1: '5.25rem',
        h2: '3.5rem',
        21: '1.3125rem',
        35: '2.1875rem',
        2.5: '2.5rem',
        2.875: '2.875rem'
      },
      lineHeight: {
        83: '0.83',
        102: '1.02',
        118: '1.18',
        138: '1.38',
        156: '1.56',
        162: '1.62',
        167: '1.67',
        243: '2.43'
      },
      minHeight: {
        76: '4.75rem'
      },
      screens: {
        'laptop-md': '1200px'
      },
      width: {
        54: '3.375rem'
      },
      height: {
        54: '3.375rem'
      }
    }
  },
  plugins: []
}
