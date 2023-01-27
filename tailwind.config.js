/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      borderRadius: {
        'lg': '9px',
        '2xl': '17px',
        '3xl': '30px',
      },
      spacing: {
        '3.25': '13px',
        '3.75': '15px',
        '4.5': '18px',
        '5.5': '22px',
        '6.5': '26px',
        '7.5': '30px',
        '9.5': '38px',
      },
      colors: {
        'colorGrayLightest': '#FAFAFA',
        'colorGrayLighter': '#999',
        'colorGray': '#0006',
        'colorGrayDarker': '#0009',
        'colorBlue': '#344FDB',
        'colorPurple': '#CF6BFF',
        'colorGreen': '#0FC1A1',
      },
    },
  },
  plugins: [],
};
