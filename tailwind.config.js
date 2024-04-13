/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: [
        "0.75rem",
        { lineHeight: "1rem", letterSpacing: "0.1em", fontWeight: "400" },
      ],
      base: [
        "0.75rem",
        { lineHeight: "1rem", letterSpacing: "0.1em", fontWeight: "400" },
      ],
      subbase: ["0.75rem", { fontWeight: "400", letterSpacing: "0em" }],
      lg: ["0.875rem", { fontWeight: "400", letterSpacing: "0em" }],
      xl: ["1rem", { fontWeight: "400", letterSpacing: "0em" }],
      "2xl": ["1.25rem", { fontWeight: "500", letterSpacing: "0em" }],
      "3xl": [
        "1.5rem",
        { lineHeight: "1.75rem", letterSpacing: "0.1em", fontWeight: "600" },
      ],
      "4xl": [
        "2rem",
        { lineHeight: "2.25rem", letterSpacing: "0.1em", fontWeight: "600" },
      ],
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
