/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark modern barber-shop palette
        charcoal: {
          950: '#0b0b0d',
          900: '#111114',
          850: '#16161a',
          800: '#1c1c21',
          700: '#26262d',
          600: '#33333c',
        },
        cream: {
          50: '#faf7f0',
          100: '#f5efe2',
          200: '#ece3d1',
        },
        gold: {
          300: '#e7cf94',
          400: '#d9bd76',
          500: '#c9a24b', // primary gold accent
          600: '#b78a34',
          700: '#8f6a25',
        },
      },
      fontFamily: {
        // Elegant serif for headings, clean sans for body/UI,
        // condensed sans for eyebrow labels, script for the "Royal" wordmark.
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        condensed: ['"Oswald Variable"', 'Oswald', 'Impact', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        gold: '0 10px 40px -12px rgba(201, 162, 75, 0.45)',
        'gold-sm': '0 6px 20px -8px rgba(201, 162, 75, 0.5)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e7cf94 0%, #c9a24b 45%, #8f6a25 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pole-spin': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -56px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'pole-spin': 'pole-spin 1.2s linear infinite',
        float: 'float 2.4s ease-in-out infinite',
        shimmer: 'shimmer 3.5s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
