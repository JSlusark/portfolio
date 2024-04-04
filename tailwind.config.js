/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#FF6B6B",
        "transparent-purple": "rgba(30, 27, 72, 0.3)",
        "transparent-white": "rgba(255, 255, 255, 0.3)",
        "transparent-violet": "rgba(56, 40, 107, 0.5)",
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
