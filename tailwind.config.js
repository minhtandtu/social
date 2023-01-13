/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)"] },
      colors: {
        primary: "#C781DC",
        secondary: "#ED97BC",
        // ...
      },
      backgroundImage: {
        miniHero: "url('/image/bg_mini.png') ",
        miniHeroMobile: "url('/image/bg_mini_mobi.png') ",
      },
      keyframes: {
        infiniRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        btnAnimate: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        infiniRotate: "infiniRotate 10s linear infinite",
        btnAnimate: "btnAnimate 0.25s linear forwards ",
      },
    },
  },
  plugins: [],
};
