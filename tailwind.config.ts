import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        baggyRed:"#e50000",
        baggyBlue:"#0061c7",
        baggyYellow:"#fea400",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily:{
        luckGuy:["var(--font-luckGuy)"],
        anton:["var(--font-anton)"]
      },
      dropShadow: {
        'red': '-3px 4px 0 rgba(125, 0, 0, 0.5)',
        'blue': '-3px 4px 0 rgba(0, 48, 100, 0.5)',
        'yellow': '-3px 4px 0 rgba(127, 82, 0, 0.5)',
        'black': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
