/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#FF6B6B",
        "transparent-white": "#25254f",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to top, #3f3cbb 10%, #1a202c 90%)",
      },
      margin: {
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
