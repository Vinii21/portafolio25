/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#10acdf",
        night: "#070135",
        greyS: "rgb(18, 20, 35)",
      }
    },
  },
  plugins: [],
}

