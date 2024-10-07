/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Mobile: "390px",
        Tablet: "768px",
        Laptop: "1280px",
        Desktop: "1920px",
        DesktopHd: "2560px",
      },
    },
  },
  plugins: [animations],
};
