/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        sourceSan: ["Source Sans 3", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        nanum: ["Nanum Gothic", "sans-serif"],
        ptSans: ["PT Sans", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "app-color": "#00B050",
        "app-color2": "#000066",
      },
    },
  },
  plugins: [],
};
