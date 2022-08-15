/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "oxford-blue": "#0A192F",
      },
      backgroundImage: {
        "glowing-blue": "linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      letterSpacing: {
        15: "0.15em",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
