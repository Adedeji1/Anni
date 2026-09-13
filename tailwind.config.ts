import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF5EF',
        cream: '#F6E9DE',
        blush: '#F0CBD4',
        dustyrose: '#C98CA0',
        lavender: '#DAD2E6',
        champagne: '#E7D6B8',
        burgundy: '#7A3B45',
        ink: '#4A3B3D',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        hand: ['"Caveat"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        paper: '0 2px 8px rgba(74, 59, 61, 0.08), 0 12px 32px rgba(74, 59, 61, 0.10)',
        polaroid: '0 6px 14px rgba(74, 59, 61, 0.14), 0 1px 3px rgba(74, 59, 61, 0.12)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.05)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) translateX(var(--drift, 40px)) rotate(200deg)', opacity: '0' },
        },
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite',
        'drift-slow': 'drift 32s ease-in-out infinite',
        fall: 'fall linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
