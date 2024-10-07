import Card from "./components/card";
import { Items } from "./constant/Items";

export default function Collaborative() {
  return (
    <section className="py-16 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">
          Collaborative Approach to Project Delivery
        </h2>
        <div className="space-y-6">
          {Items.map((item) => (
            <Card key={item.id} title={item.title} content={item.content} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
