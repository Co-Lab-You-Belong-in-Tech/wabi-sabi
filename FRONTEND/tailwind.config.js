/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ss: '320px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        roboto: 'Roboto',
        ANLP: 'Avenir Next LT Pro',
      },

      dropShadow: {
        '3xl': '0px 0px 16px rgba(64,83,252,0.24)',
      },
      boxShadow: {
        '3xl': '0px 8px 24px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        '4xl': '0px 0px 15px 15px',
      },
      transitionProperty: {
        max: 'max-height',
      },
      backgroundImage: {
        'home-card':
          'linear-gradient(172.93deg, #348D52 32.33%, #348D5200 72.2%), linear-gradient(#37C367, #37C367)',
      },
    },
    colors: {
      green: {
        100: '#f7f7f9',
        200: '#37C367',
        300: '#747373',
        400: '#0d151e',
        500: '#949495',
        600: '#9C9B9B',
        700: '#344563',
        800: '#37C36760',
      },
      white: '#fff',
      black: '#000',
      profile: '#F9A566',
      primary: '#37C367',
    },
    fontSize: {
      base: '12px',
      lg: '14px',
      xl: '15px',
      '2xl': '18px',
      '3xl': '20px',
      '4xl': '35px',
    },
  },
  corePlugins: { preflight: false },
};
