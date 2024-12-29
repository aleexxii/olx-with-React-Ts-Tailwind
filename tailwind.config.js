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
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require("flowbite/plugin")
  ],
}

