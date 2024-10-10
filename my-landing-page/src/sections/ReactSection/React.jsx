import Card from "./components/card";
import { Items } from "./constant/items";

export default function React() {
  return (
    <section className="px-10 py-16 Laptop:h-[700px]">
      <div className="flex flex-col items-start h-full gap-12 justify-evenly">
        <h2 className="text-5xl font-bold ">
          React/Redux: Crafting Dynamic User Interfaces
        </h2>
        <div className="grid grid-cols-1 gap-8 Laptop:grid-cols-3">
          {Items.map((item) => (
            <Card key={item.id} title={item.title} content={item.content} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
