import type { Config } from 'tailwindcss'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        gold: '#C9A84C',
        surface: '#1A1A1A',
        surface2: '#242424'
      },
      fontFamily: {
        heading: ['var(--font-cormorant)','serif'],
        ui: ['var(--font-inter)','sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
