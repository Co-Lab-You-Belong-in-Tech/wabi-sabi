/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        roboto: ['Roboto', 'sans-serif'],
        ANLP: 'Avenir Next LT Pro',
      },
      colors: {
        white: '#fff',
        black: '#000',
        profile: '#F9A566',
        primary: '#37C367',
      },
      dropShadow: {
        '3xl': '0px 0px 16px rgba(64,83,252,0.24)',
      },
      boxShadow: {
        '3xl': '0px 8px 24px rgba(0, 0, 0, 0.15)',
        'box': '0px 8px 24px rgba(0, 0, 0, 0.15)',
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
      fontSize: {
        base: '12px',
        lg: '14px',
        xl: '15px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '25px',
        '5xl': '35px',
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
  },
};
