/** @type {import('tailwindcss').Config} */
export const tailwindColors = {
  transparent: 'transparent',
  current: 'currentColor',
  darkPink: '#DF2188',
  purple: '#5606a8',
  lightBlue: '#4EA5E0',
  gray: '#606060',
  darkPurple: '#27094f',
  silver: '#ACACAD',
};

module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: tailwindColors,
      fontFamily: {
        sans: ['YekanBakh'],
      },
      backgroundImage: {
        /* 'hero-pattern': "url('/images/logo.png')", */
        /* "hero-pattern-mobile": "url('/images/bgHeroMobile.png')", */
      },
    },
  },

  plugins: [],
};
