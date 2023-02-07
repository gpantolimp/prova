/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'edg-simbolo': "url('https://tools.expressdeliverygroup.com/assets/img/simbolo-trasparente.png')",
      }
    },
    container: {center: true},
  },
  plugins: [],
}