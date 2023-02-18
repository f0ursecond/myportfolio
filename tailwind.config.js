


/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Delius': ['Delius', 'cursive'],
      'poppins': ['Poppins', 'sans-serif'],
      'patrick': ['Patrick Hand','cursive'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/svg/buset.svg')",
        
      }
    },
  },
  plugins: [],
}