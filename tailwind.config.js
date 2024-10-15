/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html",
  ],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),

  ],
}

