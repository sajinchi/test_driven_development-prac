import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        },
        backgroundImage: {
          'authbackground': "url('/background.png')"
        },
        colors:{
          'orange1': '#FD6625'
        }
    },
  },
  plugins: [],
}
export default config
