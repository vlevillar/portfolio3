/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        light: "#FFFFFF",
        blue: "#D61C4E",
        gray: "#C4C4C4",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "@layer components": {
          ".main-heading": {
            display: "inline-block", 
            margin: "2rem 0",
            fontStyle: "normal", 
            fontWeight: 600,
            background: "linear-gradient(89.81deg, #293462 -1.72%, #D61C4E 54.05%, #FEB139 99.78%)", 
            "-webkit-background-clip": "text", 
            "-webkit-text-fill-color": "transparent", 
            "background-clip": "text", 
            "text-fill-color": "transparent", 
            "background-size": "150% 150%", 
            animation: "gradient 15s ease infinite", 
            "line-height": 1.2,
          },
        },
      });
    }
  ],
};
