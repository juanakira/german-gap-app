/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DB Primary Colors
        'db-red': '#ec0016',
        'db-white': '#FFFFFF',
        'db-black': '#000000',
        
        // DB Secondary Colors - Red Range
        'db-red-100': '#fEE6E6',
        'db-red-200': '#FCC8C3',
        'db-red-300': '#FA9090',
        'db-red-400': '#F75056',
        'db-red-500': '#EC0016',
        'db-red-600': '#C50014',
        'db-red-700': '#9B000E',
        'db-red-800': '#740009',
        
        // DB Secondary Colors - Blue Range
        'db-blue-100': '#E0EFFB',
        'db-blue-200': '#B4D5F6',
        'db-blue-300': '#73AEF4',
        'db-blue-400': '#347DE0',
        'db-blue-500': '#1455C0',
        'db-blue-600': '#0C3992',
        'db-blue-700': '#0A1E6E',
        'db-blue-800': '#061350',
        
        // DB Secondary Colors - Cool Gray Range
        'db-cool-gray-100': '#F0F3F5',
        'db-cool-gray-200': '#D7DCE1',
        'db-cool-gray-300': '#AFB4BB',
        'db-cool-gray-400': '#878C96',
        'db-cool-gray-500': '#646973',
        'db-cool-gray-600': '#3C414B',
        'db-cool-gray-700': '#282D37',
        'db-cool-gray-800': '#131821',
        
        // DB Secondary Colors - Light Green Range
        'db-light-green-100': '#EBF7DD',
        'db-light-green-200': '#C9EB9E',
        'db-light-green-300': '#9FD45F',
        'db-light-green-400': '#78BE14',
        'db-light-green-500': '#63A615',
        'db-light-green-600': '#508B1B',
        'db-light-green-700': '#44741A',
        'db-light-green-800': '#375F15',
        
        // DB Feedback Colors
        'db-success': '#508B1B', // light-green-600
        'db-error': '#EC0016', // red-500
        'db-informative': '#0087b9', // cyan-600
        'db-warning': '#f75f00', // yellow-900
      },
      fontFamily: {
        'db-sans': ['DB Screen Sans', 'sans-serif'],
        'db-head': ['DB Screen Head', 'sans-serif'],
      }
    },
  },
  plugins: [],
}