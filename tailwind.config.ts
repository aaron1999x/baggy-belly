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
        luckGuy:["var(--font-luckGuy)"]
      }
    },
  },
  plugins: [],
}
export default config
