import { Items } from "./constant/items";
import Card from "./components/card";
import ImgJs from "./../../assets/img/JavaScript.png";

export default function Js() {
  return (
    <section
      style={{ backgroundImage: `url(${ImgJs})` }}
      className="relative  bg-center bg-cover px-10 py-16 Laptop:h-[700px] text-black">
      <div className="absolute inset-0 bg-white opacity-80" />
      <div className="flex flex-col items-start h-full gap-12  justify-evenly">
        <h2 className="z-20 text-5xl font-bold">
          JavaScript: Unleashing Interactive Experiences
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Items.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
