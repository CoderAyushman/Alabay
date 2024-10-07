import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        custom: ['cheeseburga'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [ function ({ addUtilities }:any) {
    addUtilities({
      '.text-shadow': {
          'text-shadow': '2px 2px 0px #0F1B29', // Example: Black shadow
        },
      '.text-stroke-11': {
        '-webkit-text-stroke-width': '5px',
      },
      '.text-stroke-2': {
        '-webkit-text-stroke-width': '2px',
      },
      '.text-stroke-custom': {
        '-webkit-text-stroke-color': '#0F1B29',
      },
      '.text-stroke-white': {
        '-webkit-text-stroke-color': '#fff',
      },
    })
  },],
};
export default config;
