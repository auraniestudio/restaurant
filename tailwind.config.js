/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        sand: '#E8E0D4',
        stone: '#D4C9BA',
        charcoal: '#2C2C2C',
        ink: '#1A1A1A',
        gold: '#B8860B',
        goldLight: '#D4A84B',
        sage: '#7A8B6E',
        sageLight: '#9BAB8F',
        terracotta: '#C4A77D',
      },
    },
  },
  plugins: [],
}
