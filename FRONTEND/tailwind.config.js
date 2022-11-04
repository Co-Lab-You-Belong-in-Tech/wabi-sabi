/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        white: '#fff',
        black: '#000',
        profile: '#F9A566',
        primary: '#37C367',
      },
      dropShadow: {
        '3xl': '0px 0px 16px rgba(64,83,252,0.24)',
        '4xl': '0px 8px 24px rgba(0, 0, 0, 0.15)',
      },
      boxShadow: {
        '3xl': '0px 8px 24px rgba(0, 0, 0, 0.15)',
        box: '0px 8px 24px rgba(0, 0, 0, 0.15)',
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
        base: '0.75rem',
        lg: '0.875rem',
        xl: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.25rem',
        '4xl': '1.56rem',
        '5xl': '2.188rem',
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
