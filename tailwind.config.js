/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E7EEF4",
          secondary: "#575757",
          accent: "#D7D8E0",
          neutral: "#2883C3",
          navbar: "#F7F7F7",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
