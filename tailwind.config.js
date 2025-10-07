/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        cream: {
          DEFAULT: '#f5f5dc',
          dark: '#1a1a1a',
        },
        surface: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        background: {
          light: '#faf7f2',
          dark: '#121212',
        },
        text: {
          light: '#1a1a1a',
          dark: '#ffffff',
        },
        textSecondary: {
          light: '#4a5568',
          dark: '#a0aec0',
        },
      },
    },
  },
  plugins: [],
}