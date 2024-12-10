/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'sign-in': "url('./assets/bg-sign-in.jpg')",
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(100%) translateX(-50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%) translateX(-50%)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.15s ease-out',
      },
    },
  },
  plugins: [],
}
