/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        accent: {
          500: '#6366f1',
          600: '#4f46e5',
        },
        surface: {
          light: '#f8fafc',
          dark: '#080d1a',
          cardDark: '#0f172a',
          cardLight: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 10% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(244, 63, 94, 0.08) 0px, transparent 50%)',
        'mesh-light': 'radial-gradient(at 10% 20%, rgba(99, 102, 241, 0.08) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(6, 182, 212, 0.08) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.3)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.3)',
        'glow-rose': '0 0 35px -5px rgba(244, 63, 94, 0.3)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
