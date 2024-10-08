import { Items } from "./constant/items";
import Card from "./components/card";

export default function Js() {
  
  /*return (
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
}*/
return (
  <section className="relative py-16 bg-cover bg-center" style={{backgroundImage: "url('/../../../src/assets/img/JavaScript.png')"}}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
    <div className="container relative px-4 mx-auto z-10">
      <h2 className="mb-8 text-4xl font-bold text-white">
        JavaScript: Unleashing Interactive Experiences
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Items.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  </section>
);
};



