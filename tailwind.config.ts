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
        "foreground": "#ccd6f6",
        "secondary": "#8892b0",
        "accent": "#7CFAD6",
      },
      backgroundImage: {
        "glowing-blue": "linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)",
      },
      fontFamily: {
        sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      letterSpacing: {
        15: "0.15em",
      },
    },
  },
  plugins: [],
}
export default config
