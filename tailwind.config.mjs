import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['Inter Variable', 'sans-serif'],
      ibm: ['IBM Plex Sans', 'sans-serif'],
      serif: ['Newsreader Variable', 'serif'],
    },
    colors: {
      'black-custom': '#111111',
      'white-custom': '#E5E5E5',
      'grey-custom': '#a9a9a9',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
