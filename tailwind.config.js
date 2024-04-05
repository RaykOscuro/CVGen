/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: "0.75rem",
      base: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.1em" }],
      subbase: ["0.75rem", { fontWeight: "400", letterSpacing: "0em" }],
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": [
        "4rem",
        { lineHeight: "3.5rem", letterSpacing: "0.1em", fontWeight: "700" },
      ],
    },
    extend: {
      colors: {
        sidebar: "#dce6f1",
        maintext: "#3f4551",
        subtext: "#abbcdd",
        lefttext: "#5f6f90",
      },
      gridTemplateColumns: {
        cv: "25fr, 75fr",
      },
    },
  },
  plugins: [],
};
