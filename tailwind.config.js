/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      rubik: ["Rubik Glitch Pop", "system-ui"],
      holtwood: ["Holtwood One SC", "serif"],
      madimi: ["Madimi One", "san-serif"],
    },
    boxShadow: {
      card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    },

    extend: {
      colors: {
        primary: "#737468",
      },
    },
  },
  plugins: [],
};
