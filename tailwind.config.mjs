/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      'black-bg': '#111111',
      'white-text': '#E5E5E5',
      'grey-text': '#a9a9a9',
    },
    extend: {},
  },
  plugins: [],
};
