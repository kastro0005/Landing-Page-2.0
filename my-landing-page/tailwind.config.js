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
      backgroundImage: {
        PythonImg: "url('/src/assets/img/Python.png')",
        CollaborativeImg: "url('/src/assets/img/Collaborative.png')",
        ProvenImg: "url('/src/assets/img/ProvenTrack.png')",
        HeroImg: "url('/src/assets/img/Hero.png')",
        JsImg: "url('/src/assets/img/JavaScript.png')",
        DevOpsImg: "url('/src/assets/img/DevOps.png')",
      },
    },
  },
  plugins: [animations],
};
