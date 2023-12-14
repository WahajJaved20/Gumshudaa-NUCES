/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primaryColor': '#7776BC',
        'secondaryColor' : "#000000",
        'tertiaryColor' : "#C0C0FF"
      },
      fontFamily: {
        Changa: ['Changa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}