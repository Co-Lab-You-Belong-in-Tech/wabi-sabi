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
      dropShadow: {
        '3xl': '0px 0px 16px rgba(64, 83, 252, 0.24)',
      },
      boxShadow: {
        box: '0px 8px 24px rgba(0, 0, 0, 0.15)',
      },
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
