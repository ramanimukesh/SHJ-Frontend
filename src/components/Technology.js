import React, { useState } from "react";

const Technology = () => {
  const [activeTab, setActiveTab] = useState("web-dev");

  return (
    <div id="technology" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Technologies
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>

          {/* Navbar for technology categories */}
          <div className="flex justify-center my-6">
            {["web-dev", "mobile-dev", "backend", "design", "testing"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  activeTab === tab
                    ? "bg-blue-900 text-white"
                    : "bg-white text-blue-900 border"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "web-dev"
                  ? "Web Development"
                  : tab === "mobile-dev"
                  ? "Mobile Development"
                  : tab === "backend"
                  ? "Backend Development"
                  : tab === "design"
                  ? "Design"
                  : "Testing"}
              </button>
            ))}
          </div>

          {/* Web Development Section */}
          {activeTab === "web-dev" && (
            <div className="mt-6 mx-12 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6">
                We specialize in modern web development technologies, ensuring
                high-performance web applications.
              </p>

              <div className="flex flex-wrap justify-center gap-10">
                {[
                  { name: "A", fullName: "Angular" },
                  { name: "R", fullName: "React" },
                  { name: "N", fullName: "Node.js" },
                  { name: "J", fullName: "Java" },
                  { name: "T", fullName: "TypeScript" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="w-40 h-40 flex items-center justify-center rounded-full bg-blue-900 text-white text-3xl font-bold shadow-md">
                      {tech.name}
                    </div>
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {tech.fullName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Development Section */}
          {activeTab === "mobile-dev" && (
            <div className="mt-6 mx-12 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6">
                Our mobile development expertise ensures seamless cross-platform experiences.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "R", fullName: "React Native" },
                  { name: "F", fullName: "Flutter" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="w-40 h-40 flex items-center justify-center rounded-full bg-blue-900 text-white text-3xl font-bold shadow-md">
                      {tech.name}
                    </div>
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {tech.fullName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend Development Section */}
          {activeTab === "backend" && (
            <div className="mt-6 mx-12 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6">
                Our backend development ensures scalable, secure, and high-performing systems.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "N", fullName: "Node.js" },
                  { name: "P", fullName: "Python" },
                  { name: "P", fullName: "PHP" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="w-40 h-40 flex items-center justify-center rounded-full bg-blue-900 text-white text-3xl font-bold shadow-md">
                      {tech.name}
                    </div>
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {tech.fullName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design Section */}
          {activeTab === "design" && (
            <div className="mt-6 mx-12 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6">
                We create visually appealing and user-friendly designs to enhance user experiences.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "P", fullName: "Photoshop" },
                  { name: "F", fullName: "Figma" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="w-40 h-40 flex items-center justify-center rounded-full bg-blue-900 text-white text-3xl font-bold shadow-md">
                      {tech.name}
                    </div>
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {tech.fullName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testing Section */}
          {activeTab === "testing" && (
            <div className="mt-6 mx-12 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6">
                We ensure the highest quality and reliability through comprehensive testing practices.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "J", fullName: "Jest" },
                  { name: "C", fullName: "Chai" }
                ].map((tech) => (
                  <div key={tech.name} className="text-center">
                    <div className="w-40 h-40 flex items-center justify-center rounded-full bg-blue-900 text-white text-3xl font-bold shadow-md">
                      {tech.name}
                    </div>
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {tech.fullName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Technology;
