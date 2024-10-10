import Card from "./components/card";
import { Items } from "./constant/Items";
import ImgColl from "./../../assets/img/Collaborative.png";

export default function Collaborative() {
  return (
    <section className="flex justify-between px-10 py-10">
      <div className="container px-4  w-[800px]">
        <h2 className="mb-8 text-5xl font-bold ">
          Collaborative Approach to Project Delivery
        </h2>
        <div className="space-y-6 ">
          {Items.map((item) => (
            <Card key={item.id} title={item.title} content={item.content} />
          ))}{" "}
        </div>
      </div>
      <div>
        <img alt="" src={ImgColl} className="rounded-lg aspect-auto"/>
      </div>
    </section>
  );
}
