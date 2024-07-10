/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#1e3932',
        'hero-color' : '#d4e9e2',
        'custom-light-green':'#008248' ,
        'light-green': '#f1f8f6',
        'gold': '#cba258',
        'cream': '#f3f1e7',
      }
    },
  },
  plugins: [],
}

