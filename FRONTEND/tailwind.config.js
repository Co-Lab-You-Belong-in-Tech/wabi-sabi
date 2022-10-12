/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
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
    },
    colors: {
      gray: {
        100: '#f7f7f9',
        200: '#b2b1b1',
        300: '#747373',
        400: '#0d151e',
        500: '#949495',
        600: '#9C9B9B',
      },
      white: '#fff',
      black: '#000',
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
