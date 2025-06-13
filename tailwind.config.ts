import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        background: '#ecebe4',
        primaryText: '#1c1c1c',
        accent: '#daddd8',
        }
    },
  },
  plugins: [],
}

export default config
