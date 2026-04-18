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
        cream: '#FFF6EA',
        pageSky: '#FFE3EE',
        cottonPink: '#FFC7E5',
        bubblegum: '#FF5FA2',
        hotPink: '#FF3E8A',
        lilac: '#C9B6FF',
        skyCandy: '#B8E1FF',
        mint: '#C8F2D6',
        sunshine: '#FFE08A',
        plum: '#8C1E5C',
        rose: '#D6286F',
        inkRose: '#4A0E2E',
        night: '#1D1145',
        nightSoft: '#2A1A5C',
        star: '#FFE6F5',
      },
      fontFamily: {
        sugar: ['"Pacifico"', 'cursive'],
        script: ['"Lobster"', 'cursive'],
        serifDisplay: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'candy-sm': '3px 3px 0 0 #FF5FA2',
        'candy': '6px 6px 0 0 #FF5FA2',
        'candy-lg': '10px 10px 0 0 #FF5FA2',
        'candy-lilac': '6px 6px 0 0 #C9B6FF',
        'candy-sky': '6px 6px 0 0 #B8E1FF',
        'candy-hot': '6px 6px 0 0 #FF3E8A',
        'candy-cream': '6px 6px 0 0 #FFF6EA',
        'night-sm': '3px 3px 0 0 #FFE6F5',
        'night': '6px 6px 0 0 #FFE6F5',
        'night-lg': '10px 10px 0 0 #FFE6F5',
        'night-hot': '6px 6px 0 0 #FF5FA2',
      },
      borderWidth: {
        '1.5': '1.5px',
        '3': '3px',
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
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(4deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.85) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.15) rotate(60deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(-2%) translateY(0)' },
          '50%': { transform: 'translateX(2%) translateY(-4px)' },
          '100%': { transform: 'translateX(-2%) translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marqueeReverse 42s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        'sparkle-slow': 'sparkle 4s ease-in-out infinite',
        wiggle: 'wiggle 2.2s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        drift: 'drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
