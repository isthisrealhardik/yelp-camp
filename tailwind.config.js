/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f9f6f1',
        secondary: '#000000',
      },
      fontFamily: {
        archivo: 'Archivo',
      }
    },
  },
  plugins: [],
}

