/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          400: '#DBDBDB',
          600: '#7A7C7B',
          main: '#5B5B5B',
          800: '#454545',
          900: '#292929',
        },
        'secondary': {
          100: '#DDFFF3',
          200: '#B6FFE5',
          300: '#51FFC2',
          main: '#00E696',
          500: '#1FBB84',
          600: '#30916F',
          700: '#336654',
          800: '#283C35',
          900: '#2B3330',
        },
        'dark': {
          primary: '#FFFFFF',
          secondary: '#F3F3F9',
          background: '#181719',
          foreground1: '#27242C',
          foreground2: '#3D3A41',
        },
        'light': {
          primary: '#27242C',
          secondary: '#8A8A8E',
          background: '#8A8A8E',
          foreground1: '#FFFFFF',
          foreground2: '#F9F9F9',
        }
      },
    },
  },
  plugins: [],
}

