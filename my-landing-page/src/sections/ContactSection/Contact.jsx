import { ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 ">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold">
          Contact Us for Your Development Needs
        </h2>
        <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full">
          Get in Touch <ChevronRight className="inline ml-2" />
        </button>
      </div>
    </section>
  );
}
