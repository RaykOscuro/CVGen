/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: "0.75rem",
      base: ".75rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
    },
    extend: {
      colors: {
        sidebar: "#dce6f1",
        maintext: "#3f4551",
        subtext: "#abbcdd",
        lefttext: "#5f6f90",
      },
    },
  },
  plugins: [],
};
