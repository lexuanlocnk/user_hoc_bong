/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ffd201",
        "gray-txt": "#444",
      },
      boxShadow: {
        "ct-1": 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        "ct-2": 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        "ct-3": 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.before': {
          content: "''",
        },
      };
      addUtilities(newUtilities, ['before']);
    },
  ],
}

