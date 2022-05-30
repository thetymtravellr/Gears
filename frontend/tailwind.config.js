module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img' : "url('/src/assets/image/hero.png')",
        'banner-img' : "url('/src/assets/image/banner.png')",
      },
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'roboto': ['Roboto','sans-serif'],
        'bangers': ['Bangers', 'cursive'],
        'koulen': ['Koulen', 'cursive'],
      }
    },
  },
  plugins: [],
}