import Card from "./components/card";
import { Items } from "./constant/items";

const DevOpsStreamlining = () => {
  return (
    <section 
      className="relative py-16 bg-cover bg-center" 
      style={{backgroundImage: "url('/../../../src/assets/img/DevOps.png')"}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-50"></div>
      <div className="container relative px-4 mx-auto z-10">
        <h2 className="mb-8 text-4xl font-bold text-white">
          DevOps: Streamlining Deployment and Infrastructure
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Items.map((item) => (
            <Card
              key={item.id}
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