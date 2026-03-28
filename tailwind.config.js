/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '480px'},
        'sm': '480px',
        'md': '768px',
        'lg': '992px',
        'xl': '1300px',
      },
    },
  },
  plugins: [],
}