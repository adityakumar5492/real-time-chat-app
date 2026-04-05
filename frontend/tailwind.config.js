import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        moveInside: "moveInside 4s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },

        moveInside: {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(70%, 0%)" },
          "50%": { transform: "translate(70%, 70%)" },
          "75%": { transform: "translate(0%, 70%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
      },
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};