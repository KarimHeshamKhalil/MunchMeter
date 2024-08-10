/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': '"Roboto", sans-serif'
      },
      colors: {
        'green1': '#2a3f3f',
        'green2': '#467750',
        'green3': '#89c07e',
        'white1': '#e0e8e2',
        'yellow1': '#f0cd6e'
      }
    }
  },
  plugins: [],
};
