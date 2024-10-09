import Card from "./components/card";
import { Items } from "./constant/items";
import ImgProve from "./../../assets/img/ProvenTrack.png";

export default function ProvenTrack() {
  return (
    <section className="flex justify-between px-10 py-10 bg-gray-200 ">
      <div className="container px-4  w-[800px]">
        <h2 className="mb-8 text-5xl font-bold">
          Proven Track Record of Success
        </h2>
        <div className="">
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
      <div>
        <img alt="" src={ImgProve} className="rounded-lg aspect-auto" />
      </div>
    </section>
  );
}
