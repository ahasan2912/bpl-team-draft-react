import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/image/banner.png')",
        'banner-img': "url('/src/assets/image/bg-shadow.png)"
      }
    },
  },
  plugins: [daisyui],
}

