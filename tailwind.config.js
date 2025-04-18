/** @type {import('tailwindcss').Config} */


const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      // Custom keyframes for indeterminate progress animation
      keyframes: {
        'progress-indeterminate': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(300%)' },
  },
  'progress-stripes': {
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '40px 0' },
  },
      },
      animation: {
        'progress-indeterminate': 'progress-indeterminate 1.5s infinite ease-in-out',
  'progress-stripes': 'progress-stripes 1s linear infinite',
      },
      // You can add custom colors or spacing here if needed
    },
  },
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  plugins: [],
};

export default config;



// module.exports = {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#2563eb',
//           light: '#3b82f6',
//           dark: '#1d4ed8',
//         },
//         secondary: {
//           DEFAULT: '#9333ea',
//         },
//         success: '#22c55e',
//         error: '#ef4444',
//         warning: '#f59e0b',
//         info: '#3b82f6',
//         neutral: {
//           50: '#f9fafb',
//           100: '#f3f4f6',
//           900: '#111827',
//         },
//       },
//     },
//   },
//   plugins: [],
// }
