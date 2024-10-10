import Card from "./components/card";
import { Items } from "./constant/items";
import ImgDev from "./../../assets/img/DevOps.png";

const DevOpsStreamlining = () => {
  return (
    <section
      style={{ backgroundImage: `url(${ImgDev})` }}
      className="relative  bg-center bg-cover px-10 py-16 Laptop:h-[700px] text-black">
      <div className="absolute inset-0 bg-gray-200 opacity-80" />

      <div className="flex flex-col items-start h-full gap-12 justify-evenly">
        <h2 className="z-20 text-5xl font-bold">
          DevOps: Streamlining Deployment and Infrastructure
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
    </section>
  );
};

export default DevOpsStreamlining;
