import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
          950: '#000a1a',
        },
        secondary: {
          50: '#e8eef5',
          100: '#d1ddeb',
          200: '#a3bbd7',
          300: '#7599c3',
          400: '#4777af',
          500: '#19559b',
          600: '#14447c',
          700: '#0f335d',
          800: '#0a223e',
          900: '#05111f',
          950: '#020910',
        },
        accent: {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc2ff',
          400: '#1ab1ff',
          500: '#009fe6',
          600: '#007cb3',
          700: '#005980',
          800: '#00364d',
          900: '#001a26',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        zh: ['var(--font-zh)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
