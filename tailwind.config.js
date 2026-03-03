/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        night: '#0b1020',
        charcoal: '#111827',
        accent: '#38bdf8',
        accent2: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.4), 0 0 28px rgba(56,189,248,0.2)',
      },
      backdropBlur: {
        xl: '24px',
      },
    },
  },
  plugins: [],
};