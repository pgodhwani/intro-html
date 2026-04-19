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
        paper: '#ECE7FF',
        paperSoft: '#F4F1FF',
        cream: '#FFF8EC',
        cotton: '#FFD8E8',
        candyPink: '#FF8FBE',
        hotPink: '#E8266A',
        scriptPink: '#E8266A',
        pdPurple: '#6B3BFF',
        tagGreen: '#7FA96A',
        tagGreenDark: '#3F5E32',
        ink: '#15112B',
        inkSoft: '#2A224F',
        muted: '#6A6390',
        line: '#15112B',
        night: '#0E0B24',
        nightSoft: '#1B1640',
        star: '#FFE6F5',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sugar: ['"Pacifico"', 'cursive'],
        script: ['"Lobster"', 'cursive'],
        lobster: ['"Lobster"', 'cursive'],
        serifDisplay: ['"DM Serif Display"', 'serif'],
        hand: ['"Caveat"', 'cursive'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
        pixel: ['"VT323"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '4px 4px 0 0 #15112B',
        'soft-sm': '2px 2px 0 0 #15112B',
        'soft-lg': '6px 6px 0 0 #15112B',
        'candy': '4px 4px 0 0 #E8266A',
        'candy-sm': '2px 2px 0 0 #E8266A',
        'night': '4px 4px 0 0 #FFE6F5',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pixelBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-40px)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pixel-blink': 'pixelBlink 2s steps(2) infinite',
        'spin-slow': 'spin 18s linear infinite',
        drift: 'drift 12s linear infinite',
      },
    },
  },
  plugins: [],
}
