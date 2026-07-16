/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F2A', 800: '#10293A', 700: '#163247', 600: '#1C3E56' },
        gold: { DEFAULT: '#C9A24B', 300: '#E4CE93', 600: '#A9822F' },
        emerald: { DEFAULT: '#1F6F54', 700: '#175640' },
        cream: '#F7F4EC',
        ink: '#17202A'
      },
      fontFamily: {
        display: ['"Tiro Devanagari Marathi"', 'serif'],
        body: ['"Mukta"', 'sans-serif']
      }
    }
  },
  plugins: []
}
