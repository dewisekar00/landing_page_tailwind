/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#9BB8CD',
        customPrimary: '#FFF7D4',
        Grey: '#1f2937'
      },
      height: {
        '124': '30rem',
        '128': '34rem', 
      },
    },
  },
  plugins: [],
}