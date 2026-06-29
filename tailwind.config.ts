import type { Config } from 'tailwindcss'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-bg','bg-surface','bg-surface2','bg-gold',
    'text-gold','border-gold','font-heading','font-ui',
    'bg-green-600','bg-red-600','bg-yellow-600',
    'text-green-400','text-red-400','text-yellow-400',
    'bg-green-900/40','bg-red-900/40','bg-yellow-900/40',
    'bg-red-900/60','border-red-800'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        gold: '#C9A84C',
        surface: '#1A1A1A',
        surface2: '#242424',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)','serif'],
        ui: ['var(--font-inter)','sans-serif'],
      },
    }
  },
  plugins: []
} satisfies Config
