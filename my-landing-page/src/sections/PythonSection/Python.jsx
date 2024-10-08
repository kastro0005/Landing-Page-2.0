import React from 'react';
import Card from "./components/card";
import { Items } from "./constant/items";

export default function Python() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="mb-8 text-3xl font-bold text-white">
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
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/../../../src/assets/img/Python.png"
                alt="Server visualization"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}