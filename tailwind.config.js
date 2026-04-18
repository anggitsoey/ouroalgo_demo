/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent — finance green
        gold: {
          DEFAULT: '#00C896',
          light: '#33D9AD',
          dark: '#009E78',
          muted: '#006B52',
        },
        // Dark mode surfaces
        dark: {
          bg: '#080C09',
          surface: '#0D130E',
          surface2: '#111A12',
          border: '#1B261C',
          text: '#E2EDE3',
          muted: '#4A6E4C',
        },
        // Light mode surfaces
        light: {
          bg: '#F4F7F4',
          surface: '#FFFFFF',
          surface2: '#EBF0EB',
          border: '#D4E0D5',
          text: '#0A160B',
          muted: '#4A6E4C',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Courier New', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '3px',
        sm: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
        '2xl': '10px',
        full: '9999px',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,200,150,0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0,200,150,0)' },
        },
      },
    },
  },
  plugins: [],
}
