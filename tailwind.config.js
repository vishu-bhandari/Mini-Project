// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A192F",
        "secondary": "#F97316",
        "tertiary": "#54D6BB",

        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
