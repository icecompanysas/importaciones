/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-in-down': 'fade-in-down 1s ease-in-out',
      },
    },
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-down_1s_ease-in-out]',
    ]
  },
  plugins: [],
}

