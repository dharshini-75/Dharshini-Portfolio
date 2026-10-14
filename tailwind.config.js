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
        dark: {
          950: '#07080B',
          900: '#0B0C10',
          850: '#111318',
          800: '#161922',
          750: '#1C202C',
          700: '#232838',
          600: '#333A4D',
        },
        orange: {
          400: '#FF8C5A',
          500: '#FF6B35',
          600: '#F0551E',
          700: '#D4400E',
        },
        amber: {
          400: '#FFB238',
          500: '#FF9F1C',
        },
        slate: {
          850: '#151C2A',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'orange-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'orange-sm': '0 0 15px rgba(255, 107, 53, 0.15)',
        'orange-md': '0 0 30px rgba(255, 107, 53, 0.2)',
        'orange-lg': '0 0 50px rgba(255, 107, 53, 0.25)',
      }
    },
  },
  plugins: [],
}
