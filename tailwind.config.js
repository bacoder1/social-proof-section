/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-gray-magenta': 'hsl(303, 10%, 53%)',
        'light-gray-magenta': 'hsl(300, 24%, 96%)'
      }
    },
    fontFamily: {
      'spartan': '"League Spartan", sans-serif'
    }
  },
  plugins: [],
}