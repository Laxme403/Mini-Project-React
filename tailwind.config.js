/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '200': '200px',
        '80':  '80px',
      },
      height: {
        '80': '80px',
        '800':'800px'
      },
      colors: {
        'custom-gray': '#ccccccca',
        'custom-green': '#222538' 
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}