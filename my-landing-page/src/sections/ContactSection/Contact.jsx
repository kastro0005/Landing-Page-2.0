import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const CodeFragment = ({ position }) => {
  const mesh = useRef();
  const { viewport } = useThree();
  const codeSnippets = [
    "function()",
    "if (condition)",
    "for (let i = 0;",
    "const data =",
    "return result;",
    "class MyClass",
    "import React",
    "useState()",
    "useEffect()",
    "<div>",
    "</div>",
  ];

  const text = useMemo(
    () => codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
    []
  );

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
    mesh.current.position.y -= 0.01;
    if (mesh.current.position.y < -viewport.height / 2 - 1) {
      mesh.current.position.y = viewport.height / 2 + 1;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <Text
        color="cyan"
        anchorX="center"
        anchorY="middle"
        fontSize={0.5}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        opacity={0.2} // Reduced opacity for a more faded look
      >
        {text}
      </Text>
    </mesh>
  );
};

const CodeAnimation = () => {
  const { viewport } = useThree();
  const fragments = useMemo(
    () =>
      Array.from(
        { length: 100 },
        (
          _,
          i // Increased number of fragments
        ) => (
          <CodeFragment
            key={i}
            position={[
              Math.random() * viewport.width - viewport.width / 2,
              Math.random() * viewport.height - viewport.height / 2,
              Math.random() * 10 - 15,
            ]}
          />
        )
      ),
    [viewport]
  );

  return <>{fragments}</>;
};

const Contact = () => {
  return (
    <footer
      id="Contact"
      className="relative overflow-hidden text-white bg-gray-900">
      <div className="absolute inset-0 w-full h-full ">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <CodeAnimation />
        </Canvas>
      </div>
      <div className="relative z-10 pt-10 ">
        <div className="flex flex-wrap px-10">
          <div className="w-full mb-8 md:w-1/4 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold">
              Sierra-Esperanza Creations LLC{" "}
            </h2>
            <p className="mb-4">Software Development.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kastro0005"
                className="text-cyan-400 hover:text-cyan-300">
                GitHub
              </a>
              <a
                href="www.linkedin.com/in/adrian-c-sierra-082326280"
                className="text-cyan-400 hover:text-cyan-300">
                LinkedIn
              </a>
              <a
                href=" https://wa.me/+15616762439"
                className="text-cyan-400 hover:text-cyan-300">
                Whatsapp
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-3/4">
            <div className="w-full mb-8 md:w-1/3 md:mb-0">
              <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Tasks Automatization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    IT Support and Assistance
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mb-8 md:w-1/3 md:mb-0">
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Liability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Legal USage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <ul className="space-y-2">
                <li>sierraesperanzac@gmail.com</li>
                <li>+1 (562) 300-5819</li>
                <li>West Palm Beach, FL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full py-2 mt-8 text-sm text-center border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Designed and
            implemented by:&nbsp;{" "}
            <span className="inline-block ">Sierra-Esperanza Creations</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
