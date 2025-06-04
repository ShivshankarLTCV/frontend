// tailwind.config.js

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slidein: 'slidein 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

// tailwind.config.js
module.exports = {
  content: [...],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
