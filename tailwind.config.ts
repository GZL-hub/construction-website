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
          50: '#fef6ee',
          100: '#fdecd6',
          200: '#fad5ad',
          300: '#f7b879',
          400: '#f39143',
          500: '#f0721f',
          600: '#e15815',
          700: '#bb4214',
          800: '#953618',
          900: '#782f17',
          950: '#40160a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0dbe6',
          300: '#a7bdd0',
          400: '#789ab5',
          500: '#567d9d',
          600: '#426383',
          700: '#37516b',
          800: '#30455a',
          900: '#2c3b4c',
          950: '#1d2733',
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
