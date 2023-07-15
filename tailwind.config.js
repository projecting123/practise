/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        'logo': 'logo 1.5s linear infinite',
      },
      keyframes: {
        logo: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(0.8)', opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}

