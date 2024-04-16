/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktopSide: "url('assets/images/bg-sidebar-desktop.svg')",
        mobileSide: "url('assets/images/bg-sidebar-mobile.svg')"
      },
      colors: {
        "marine-blue": "#030739",
        "purplish-blue": "#2A1CFE",
        "pastel-blue": "#B3FFFF",
        "light-blue": "#D2F5FF",
        "strawberry-red": "#F14668",
        "cool-gray": "#B4B9C9",
        "light-gray": "#D9DCE3",
        "magnolia": "#FFF9F9",
        "alabaster": "#FEFEFE"
      }
    },
  },
  plugins: [],
}
