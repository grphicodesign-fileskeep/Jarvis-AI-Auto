/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        dentacure: {
          green: '#37542B',
          olive: '#4E7837',
          sage: '#82A769',
          light: '#EEF4EB',
          dark: '#233B19'
        },
        dentiva: {
          blue: '#178782', // Video primary teal (replaces blue)
          darkBlue: '#105E5A', // Video dark teal
          lightBlue: '#E6F4F4', // Video soft ice mint
          border: '#C8E5E5', // Video soft border
          teal: '#178782',
          aqua: '#229891',
          mint: '#6DC4C4'
        }
      }
    },
  },
  plugins: [],
}
