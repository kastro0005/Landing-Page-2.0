import Card from "./components/card";
import { Items } from "./constant/Items";

export default function Python() {
  return (
    <section className="py-16 bg-gray-200 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">
          Django & Python: Robust Server-side Solutions
        </h2>
        <div className="space-y-6">
          {Items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
