import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F0BB78',
          default: '#eba147',
          dark: '#b86e14',
        },
        secondary: {
          light: '#ffcfc7',
          default: '#de8c6e',
          dark: '#bb512a',
        }, 
        background: {
          light: '#FFF0DC',
          default: '#ffdeb3',
          dark: '#53493b'
        },
        text: {
          light: '#804a00',
          default: '#543A14',
          dark: '#FFF0DC',
        },
        accent: {
          light: '#cfe3d0',
          default: "#81b686",
          dark: '#54915a',
        }
      },
      fontFamily: {
        workSan: ['Work Sans', 'Sans-Serif'],
        playWrite: ['Playwrite HR Lijeva', 'cursive'],
        ojuju: ['Ojuju', 'Sans-Serif'],
        spaceGrotesk: ['Space Grotesk', 'Sans-Serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
