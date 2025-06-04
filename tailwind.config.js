/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F7',
          100: '#FFECF0',
          200: '#FFD9E0',
          300: '#FFC6D1',
          400: '#FFB6C1', // accent-color
          500: '#FF99AC',
          600: '#FF7A91',
          700: '#FF5C7B',
          800: '#FF3D64',
          900: '#FF1F4E',
        },
        secondary: {
          50: '#FFF7F9',
          100: '#FFF0F5', // secondary-color
          200: '#FFE4EE',
          300: '#FFD8E6',
          400: '#FFCCDF',
          500: '#FFC0D8',
          600: '#FFB4D1',
          700: '#FFA8CA',
          800: '#FF9CC3',
          900: '#FF90BC',
        },
        pastel: {
          pink: '#FFE4E1', // primary-color
          lavender: '#E6E6FA',
          mint: '#F5FFFA',
          peach: '#FFDAB9',
          sky: '#E0FFFF',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'mincho': ['"Yu Mincho"', 'serif'],
        'caveat': ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, rgba(255,228,225,0.9), rgba(255,182,193,0.5), rgba(255,240,245,0.7))',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(255, 182, 193, 0.1)',
        'medium': '0 6px 12px rgba(255, 182, 193, 0.15)',
        'strong': '0 10px 20px rgba(255, 182, 193, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 1s forwards',
        'slide-in-right': 'slideInRight 1s forwards',
        'slide-in-left': 'slideInLeft 1s forwards',
        'shimmer': 'shimmer 3s infinite',
        'sparkle': 'sparkle 3s infinite',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.5, 0, 0.3, 1.5)',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};