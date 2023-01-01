/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FEF8E6",
          100: "#FABF12",
          200: "#FFDB78",
          300: "#FFC100",
          400: "#FBA02A",
          500: "#FB992D",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      animation: {
        spinSlow: "spinSlow 12s linear infinite",
        wiggle: "wiggle 6s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(1deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
