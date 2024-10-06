import { Items } from "./constant/items";
import Card from "./components/card";

export default function Js() {
  return (
    <section className="py-16 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">
          JavaScript: Unleashing Interactive Experiences
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Items.map((item) => (
            <Card
              key={item.id}
              icon={<item.icon className="w-12 h-12 mb-4 text-blue-600" />}
              title={item.title}
              content={item.content}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
