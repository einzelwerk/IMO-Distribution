/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,js}'],

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
      'black-100': '#1D1D1B',
      white: '#FFFFFF',
      'white-50': '#58585C',
      'white-40': 'rgba(255,255,255,0.4)',
      blue: '#200AA6',

      gray: {
        50: '#ffffff1f',
        100: '#0000001f',
        200: '#E0E1E4',
        300: '#AFAFAA',
        400: '#8F8F95',
      },
    },
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      serif: ['Oceanic', 'serif'],
    },
    fontSize: false,
    container: {
      center: true,
      padding: '1rem',
    },
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
        },
      });
    },
  ],
};
