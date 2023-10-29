import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
  plugins: [],
}
export default config
