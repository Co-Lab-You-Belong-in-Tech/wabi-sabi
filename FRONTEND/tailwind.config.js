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
    animation: {
      shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
    },
    keyframes: {
      shake: {
        '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
        '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
        '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
        '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
      },
    },
  },
  corePlugins: { preflight: false },
};
