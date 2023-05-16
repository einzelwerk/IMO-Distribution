/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,js}"],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
    },
    colors: {
      red: '#A60A1D',
      'red-hover': '#AA1628',
      black: '#100D20',
      white: '#FFFFFF',
      'white-50': '#888990',
      blue: '#200AA6',
      gray: {
        50: "#ffffff1f;",
        100: "#0000001f"
      }
    },
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      serif: ['Oceanic', 'serif'],
    },
    fontSize: false,
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    ({ addComponents }) => {
      addComponents({
        '.container': {
          maxWidth: '100%',
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          margin: '0 auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
}