/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-frosting': '#F7D9E3',
        'lavender-haze': '#8ccbc4ff',
        'dark-green': '#54bba8ff',
        'mint-magic': '#CDE9ED',
        'cool-night': '#8fd1dbff',
        'cooler-night': '#7ec4cfff',
        'gold-glow': '#ffbb73ff',
        'hot-pink': '#ee5a95ff',
        'coffee-brown': '#6F3721',

      },

      cursor: {
        'pixel-pointer': 'url(/src/assets/girlypop-cursor.webp), default',

        'pixel-hand': 'url(/src/assets/girlypop-click.webp), pointer',

        'pixel-text': 'url(/src/assets/girlypop-text.webp), text',

        'pixel-grabbing': 'url(/src/assets/girlypop-grab.webp), grabbing',

      },

      fontFamily: {
        sans: ['"Pixelify Sans"', 'sans-serif'],
        silk: ['"Silkscreen"', 'sans-serif'],
        start: ['"Press Start 2P"', 'cursive'],
        geist: ['"Geist Pixel"', 'sans-serif'],
        tiny5: ['"Tiny5"', 'sans-serif'],
      },

      keyframes: {
        'bounce-smidge': {
          '0%, 95%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(2px)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.5) translateY(10px)', opacity: '0' },
          '70%': { transform: 'scale(1.05) translateY(0)', opacity: '1' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'bounce-smidge': 'bounce-smidge 0.5s forwards',
        'pop-in': 'pop-in 0.3s ease-out forwards',
      },
    }
  },
  plugins: [],
}
