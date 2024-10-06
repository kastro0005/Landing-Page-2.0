import Card from "./components/card";
import { Items } from "./constant/items";

export default function DevOps() {
  return (
    <section className="py-16 bg-gray-200 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">
          DevOps: Streamlining Deployment and Infrastructure
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Items.map((item) => (
            <Card key={item.id} title={item.title} content={item.content} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
