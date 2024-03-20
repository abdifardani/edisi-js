/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      backgroundImage: {
        "bg-beranda": "url('/img/bg/1.jpg')",
      },
    },
  },
  plugins: [],
};
