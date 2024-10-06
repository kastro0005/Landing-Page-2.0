import Card from "./components/card";
import { Items } from "./constant/items";

export default function React() {
  return (
    <section className="py-16 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">
          React/Redux: Crafting Dynamic User Interfaces
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {Items.map((item) => (
            <Card key={item.id} title={item.title} content={item.content} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
