import Card from "./components/card";
import { Items } from "./constant/items";
import ImgPy from "./../../../src/assets/img/Python.png";

export default function Python() {
  return (
    <section className="flex justify-between px-10 py-10 bg-gray-200">
      <div className="container px-4  w-[800px]">
        <h2 className="mb-8 text-5xl font-bold">
          Django & Python: Robust Server-side Solutions
        </h2>
        <div className="">
          {Items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <div>
        <img
          src={ImgPy}
          alt="Server visualization"
          className="rounded-lg aspect-auto"
        />
      </div>
    </section>
  );
}
