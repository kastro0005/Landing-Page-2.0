import React from 'react';
import { ChevronRight, Code, Database, Globe, Server } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Full-Stack Developer Expertise</h1>
          <p className="text-xl mb-8">Crafting dynamic, robust, and interactive experiences - your one-stop-shop for all your development needs.</p>
          <div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold mr-4">Explore Our Services</button>
            <button className="border border-white text-white px-6 py-2 rounded-full font-semibold">Contact Us</button>
          </div>
        </div>
      </header>

      {/* React/Redux Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">React/Redux: Crafting Dynamic User Interfaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
              <p>Leverage React's component-based architecture to build user interfaces that adapt seamlessly across devices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">State Management</h3>
              <p>Utilize Redux to manage the complex state of your application, ensuring a consistent and predictable user experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Optimized Performance</h3>
              <p>Benefit from React's virtual DOM and Redux's efficient data flow to create lightning-fast web applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Django & Python Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Django & Python: Robust Server-side Solutions</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold">Rapid Prototyping</h3>
                <p>Django's batteries-included approach allows for rapid development of feature-rich web applications.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold">Scalable Architecture</h3>
                <p>Python's efficiency and Django's solid ORM make it easy to scale your application as your needs grow.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold">Secure & Reliable</h3>
                <p>Leverage Django's robust security features and the proven reliability of the Python ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JavaScript Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">JavaScript: Unleashing Interactive Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <Code className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scripting</h3>
              <p>Leverage JavaScript to add interactivity, animations, and dynamic content to your web applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Globe className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Browser-based</h3>
              <p>JavaScript is the language of the web, enabling a wide range of client-side functionality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Server className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Server-side</h3>
              <p>With Node.js, JavaScript can also be used for server-side development and APIs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Database className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
              <p>Leverage powerful JavaScript frameworks like React, Angular, and Vue to build complex UIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">DevOps: Streamlining Deployment and Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Continuous Integration</h3>
              <p>Implement robust CI/CD workflows to ensure seamless and reliable application deployments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
              <p>Leverage tools like Terraform and Ansible to manage your cloud infrastructure programmatically.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Containerization</h3>
              <p>Package your applications in Docker containers for consistent, scalable, and portable deployments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Monitoring and Observability</h3>
              <p>Implement comprehensive monitoring and observability solutions to ensure the health of your systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us for Your Development Needs</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
            Get in Touch <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;