/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            customBlue: '#001933', 
          },
        },
      },
    },
  },
  plugins: [
   // require('@tailwindcss/forms')
  ],
}

