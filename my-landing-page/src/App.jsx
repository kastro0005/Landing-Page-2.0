import Contact from "./sections/ContactSection/Contact";
import DevOps from "./sections/DevOpsSection/DevOps";
import Hero from "./sections/HeroSection/Hero";
import Js from "./sections/JsSection/Js";
import Python from "./sections/PythonSection/Python";
import React from "./sections/ReactSection/React";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-gray-800 bg-gray-100">
      <Hero />
      <React />
      <Python />
      <Js />
      <DevOps />
      <Contact />
    </div>
  );
};

export default LandingPage;
