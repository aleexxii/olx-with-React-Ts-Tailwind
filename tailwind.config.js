const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily : {
        roboto : ['Roboto', 'sans-serif'],
        poppins : ['Poppins']
      },
      colors : {
        lightGrey : '#EBEEEF',
      },
      boxShadow: {
        'top': '0 4px 8px rgba(0, 0, 0, 0.9), 0 -4px 8px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("flowbite/plugin"),
    require('@tailwindcss/line-clamp')
  ],
}

