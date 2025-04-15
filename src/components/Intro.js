import React from "react";
import { Link } from "react-router-dom";
import img from "../images/Home/about.jpg";
import web from "../images/Services/web.webp";
import ui from "../images/Services/UI.jpg";
import Devops from "../images/Services/devops.webp";
import Project from "../images/Services/Promanage.jpg";
import API from "../images/Services/API.jpeg";
import Quality from "../images/Services/Quality.avif";
import { useState } from "react";

const Intro = () => {
  const [activeTab, setActiveTab] = useState("web-dev");

  return (
    <>
      <div className="w-full p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t w-full h-auto object-cover"
              src={img}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold">
              About Us
            </h2>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Our enthusiasm has led us to become a top IT company in USA for
                delivering various industry-led mobility solutions in web and
                mobile application development domains leveraging futuristic
                technologies like Internet of Things (IoT), AI-ML, AR-VR, Voice
                assistants and Voice Skills, DevOps & Cloud computing, etc.
              </p>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                We feel empowered with our certified tech experts and our R&D
                team who have always challenged themselves to help global
                clientele with a plethora of IT services and solutions.
                Engagement with our team guarantees our clients to save huge
                money on project development with faster delivery.{" "}
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
              <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                services
              </h2>

              <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900"></div>
              </div>
              <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                Sahajanand Technologies provides end-to-end software development
                services seamlessly
                <br />
                tailored to meet the unique requirements of your projects and
                business.
              </h2>
            </div>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={web}
                    />
                    <h2 className="font-semibold my-6 text-2xl text-center">
                      <Link to="/kitchen" className="hover:text-gray-300">
                        Web & Mobile App development
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={ui}
                    />
                    <h2 className="font-semibold my-6 text-2xl text-center">
                      <Link to="/bathroom" className="hover:text-gray-300">
                        UI/UX Design
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={Devops}
                    />
                    <h2 className="font-semibold my-6 text-2xl text-center">
                      <Link to="/laundry" className="hover:text-gray-300">
                        DevOps
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={Project}
                    />
                    <h2 className="font-semibold my-6 text-2xl text-center">
                      <Link to="/basement" className="hover:text-gray-300">
                        Project management services
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={API}
                    />
                    <h2 className="font-semibold my-6 text-2xl text-center">
                      <Link to="/deck" className="hover:text-gray-300">
                        Custom API Development
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                  <div className="m-2 text-justify text-sm">
                    <img
                      alt="card img"
                      className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                      src={Quality}
                    />
                    <h2 className="font-semibold my-6 text-2xl text-center">
                      <Link to="/roof" className="hover:text-gray-300">
                        Quality assurance
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-gray-100 py-12">
          <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
              <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                Our Technologies
              </h2>

              <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900"></div>
              </div>

              {/* Navbar for technology categories */}
              <div className="my-6 overflow-x-auto md:overflow-visible scrollbar-hide">
                <div className="flex space-x-4 min-w-max px-4 md:justify-center md:px-0">
                  {[
                    "web-dev",
                    "mobile-dev",
                    "backend",
                    "design",
                    "testing",
                  ].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap ${
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
              </div>

              {/* Web Development Section */}
              {activeTab === "web-dev" && (
                <div className="mt-6 mx-12 text-center">
                  <p className="text-xl lg:text-2xl font-semibold text-blue-900 mb-6">
                    We specialize in modern web development technologies,
                    ensuring high-performance web applications.
                  </p>

                  <div className="flex flex-wrap justify-center gap-10">
                    {[
                      { name: "A", fullName: "Angular" },
                      { name: "R", fullName: "React" },
                      { name: "N", fullName: "Node.js" },
                      { name: "J", fullName: "Java" },
                      { name: "T", fullName: "TypeScript" },
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
                    Our mobile development expertise ensures seamless
                    cross-platform experiences.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    {[
                      { name: "R", fullName: "React Native" },
                      { name: "F", fullName: "Flutter" },
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
                    Our backend development ensures scalable, secure, and
                    high-performing systems.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    {[
                      { name: "N", fullName: "Node.js" },
                      { name: "P", fullName: "Python" },
                      { name: "P", fullName: "PHP" },
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
                    We create visually appealing and user-friendly designs to
                    enhance user experiences.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    {[
                      { name: "P", fullName: "Photoshop" },
                      { name: "F", fullName: "Figma" },
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
                    We ensure the highest quality and reliability through
                    comprehensive testing practices.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    {[
                      { name: "J", fullName: "Jest" },
                      { name: "C", fullName: "Chai" },
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
      </div>
    </>
  );
};

export default Intro;
