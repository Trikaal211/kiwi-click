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
        warm: {
          50: '#FDFBF7',  // Warm off-white background
          100: '#F7F4EB', // Cream background
          200: '#ECE7DB', // Stone/Cream border
          300: '#DCD5C5',
          400: '#C2B8A3',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E9EAE9',
          200: '#C2C4C2',
          300: '#9CA09B',
          400: '#757B75',
          500: '#5A5F5A',
          600: '#404440',
          700: '#303330',
          800: '#202220',
          900: '#141514', // Deep charcoal body text
        },
        sage: {
          50: '#F4F7F4',
          100: '#E9EFE9',
          200: '#D2DDD2',
          300: '#BBD0BB',
          400: '#A3BFA3',
          500: '#86A386', // Muted sage green accent
          600: '#6C8A6C',
          700: '#536E53',
          800: '#3A523A',
          900: '#233723',
        },
        gold: {
          50: '#FCFAF0',
          100: '#FAF4D9',
          200: '#F3E4B0',
          300: '#EBD184',
          400: '#E1BC55',
          500: '#D4AF37', // Metallic/luxury gold accent
          600: '#B39127',
          700: '#8E711A',
          800: '#685110',
          900: '#4D3C08',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif', 'Georgia', 'ui-serif'],
        sans: ['Inter', 'Satoshi', 'General Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
