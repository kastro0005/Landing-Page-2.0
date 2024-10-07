import Img from "./../../assets/img/Hero.png";
import HeroLogoH from "./components/HeroLogoH";
import HeroLogoV from "./components/HeroLogoV";

export default function Hero() {
  return (
    <header
      style={{
        backgroundImage: `url(${Img})`,
      }}
      className="relative flex flex-col items-center justify-between py-16 text-white ">
      <div className="absolute inset-0 bg-black opacity-70 " />
      <div className="z-20 flex items-center justify-center px-4 mb-10">
        <HeroLogoH className="hidden w-[800px] h-auto Laptop:inline " />
        <HeroLogoV className="inline w-[200px] Tablet:w-[350px] h-auto Laptop:hidden " />
      </div>

      <div className="container z-20 flex flex-col items-center gap-3 px-4 mx-auto mb-10">
        <h1 className="mb-4 text-xl font-bold truncate Laptop:text-6xl Tablet:text-4xl">
          Full-Stack Developer Expertise
        </h1>
        <p className="text-sm text-center Laptop:text-2xl Tablet:text-xl">
          Crafting dynamic, robust, and interactive experiences - your
          one-stop-shop
          <br /> for all your development needs.
        </p>
      </div>

      <div className="z-20 flex items-center justify-center w-full gap-4 px-8 Tablet:gap-20">
        <button className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg">
          Explore Our Services
        </button>
        <button className="px-4 py-2 font-semibold text-indigo-600 bg-black border border-indigo-600 rounded-lg">
          Contact Us
        </button>
      </div>
    </header>
  );
}
