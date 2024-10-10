import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function SimpleLaptop(props) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (hovered) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 0.1, 1]} />
      <meshStandardMaterial color={hovered ? "#00ffff" : "#666666"} />
      <mesh position={[0, 0.1, -0.4]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial color={hovered ? "#00ffff" : "#333333"} />
      </mesh>
    </mesh>
  );
}

const Contact = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white p-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm mb-4">Robust Software Solutions</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#00ffff] hover:text-[#ff00ff]">
                GitHub
              </a>
              <a href="#" className="text-[#00ffff] hover:text-[#ff00ff]">
                Whatsapp
              </a>
              <a href="#" className="text-[#00ffff] hover:text-[#ff00ff]">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-2/3">
            <div className="w-1/2 md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">
            © 2024 Sierra-Esperanza Creations LLC. Made in West Palm Beach.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{ height: "100%", pointerEvents: "none" }}
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SimpleLaptop position={[0, 0, 0]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </footer>
  );
};

export default Contact;
