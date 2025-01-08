/** @type {import('tailwindcss').Config} */

export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    colors: {
        primary: {
          light: '#f7a065',
          DEFAULT: '#F78F68', // Main primary color
          dark: '#dd6b20',
        },
        secondary: {
          light: '#FFB74D',
          DEFAULT: '#A9BFAC', // Secondary color
          dark: '#F57C00',
        },
        accent: '#03A9F4', // For highlights
        error: '#EF5350', // Error/Negative values
        success: '#81C784', // Positive values/Success
        background: {
          light: '#303030', // Light dark for backgrounds
          DEFAULT: '#282826', // Main dark background
          dark: '#212121', // Deep dark for contrast
        },
        card: '#2E2E2E', // Card background with a subtle contrast
        text: {
          primary: '#FFFFFF', // Light gray for main text
          secondary: '#B0B0B0', // Subtle gray for subtext
        },
        border: '#424242', // Borders and dividers
      },
    },
  },
  plugins: [],
}

