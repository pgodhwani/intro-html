/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F0F0F0',
        ink: '#000000',
        charcoal: '#121212',
        charcoalSoft: '#1c1c1e',
        brutYellow: '#FDC800',
        brutPink: '#FF3EA5',
        brutBlue: '#1E6FFF',
        brutGreen: '#7CFF6B',
        brutOrange: '#FF6A3D',
        brutLavender: '#C9B8FF',
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Public Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'brut-sm': '4px 4px 0px 0px #000000',
        'brut': '8px 8px 0px 0px #000000',
        'brut-lg': '12px 12px 0px 0px #000000',
        'brut-xl': '16px 16px 0px 0px #000000',
        'brut-hover': '2px 2px 0px 0px #000000',
        'brut-pink': '8px 8px 0px 0px #FF3EA5',
        'brut-yellow': '8px 8px 0px 0px #FDC800',
        'brut-blue': '8px 8px 0px 0px #1E6FFF',
        'brut-dark-sm': '4px 4px 0px 0px #FDC800',
        'brut-dark': '8px 8px 0px 0px #FDC800',
        'brut-dark-lg': '12px 12px 0px 0px #FDC800',
        'brut-dark-hover': '2px 2px 0px 0px #FDC800',
        'brut-dark-pink': '8px 8px 0px 0px #FF3EA5',
        'brut-dark-blue': '8px 8px 0px 0px #1E6FFF',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pressDown: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(4px, 4px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 32s linear infinite',
        wiggle: 'wiggle 1.8s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'press-down': 'pressDown 2.6s ease-in-out infinite',
      },
      backgroundImage: {
        'cardboard': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
