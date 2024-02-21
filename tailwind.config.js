/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'red-500': '#EF4444',
        'green-500': '#10B981', 
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}
