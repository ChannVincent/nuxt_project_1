/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        140: "35rem",
      },
      backgroundImage: {
        "energy-pattern":
          "url('https://png.pngtree.com/thumb_back/fh260/background/20210708/pngtree-business-modern-speed-sense-line-cut-orange-light-yellow-background-image_736935.jpg')",
        "luxe-pattern":
          "url('https://cdn.pixabay.com/photo/2017/06/13/13/51/marble-2398946__340.jpg')",
      },
    },
  },
  plugins: [],
};
