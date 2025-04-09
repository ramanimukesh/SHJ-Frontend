import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Softwareartitect/slide.jpg";
import img2 from "../../images/Softwareartitect/about.jpg";
import Footer from "../../components/Footer";
const SoftwareArchitect = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="flutter">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={img1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Build Scalable Solutions with Robust Software Architecture
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ delivers modular, future-ready software architectures that drive
            system stability, scalability, and performance—empowering your
            business to grow with confidence.
          </div>

          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-1"
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
      </div>
      <div className="w-full p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t w-full h-auto object-cover"
              src={img2}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl text-blue-900 font-bold">
              Why Choose a Software Architecture?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>System Scalability & Flexibility:</strong> A software
                architect ensures that the system is designed to scale
                efficiently, handling growing user bases and data volumes
                without sacrificing performance.
              </li>
              <li>
                <strong>Modularity & Maintainability:</strong> By using modular
                design principles, architects create systems that are easy to
                maintain, update, and expand, reducing long-term technical debt.
              </li>
              <li>
                <strong>Optimal Performance:</strong> Software architects make
                sure that the system is optimized for speed, ensuring smooth
                performance by selecting the right technologies, algorithms, and
                infrastructure.
              </li>
              <li>
                <strong>Risk Mitigation:</strong> With a comprehensive
                architectural plan, architects can identify potential risks
                early on, ensuring that security, compliance, and other critical
                factors are addressed before they become issues.
              </li>
              <li>
                <strong>Alignment with Business Goals:</strong> A software
                architect ensures that the system is built in alignment with
                business objectives, enabling growth, flexibility, and better
                ROI.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Software Architecture Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & Planning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Collaborate with stakeholders to gather requirements and plan
                  the system architecture. This involves defining business
                  objectives, technical constraints, and system performance
                  goals.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Architecture Design & Modeling
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-40">
                  Design scalable and modular software architectures using
                  various architectural patterns (e.g., microservices,
                  monolithic, layered), ensuring flexibility, maintainability,
                  and performance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Technology Stack Selection
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Carefully choose the right technology stack (e.g., databases,
                  frameworks, cloud solutions) based on project requirements,
                  team expertise, and scalability considerations.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  High Availability & Fault Tolerance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design systems for high availability by implementing
                  redundancy, failover mechanisms, and disaster recovery
                  strategies to ensure minimal downtime and uninterrupted
                  service.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Security & Compliance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement security best practices by incorporating encryption,
                  access control, and secure communication protocols to
                  safeguard sensitive data and comply with industry regulations.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Scalability & Performance Optimization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design systems for horizontal and vertical scalability,
                  optimize performance by identifying bottlenecks, and ensure
                  the architecture can handle increasing user loads and data
                  volumes efficiently.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy the system on various environments (e.g., cloud,
                  on-premise), and set up continuous monitoring using tools like
                  Prometheus or Grafana to ensure the system operates smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SoftwareArchitect;
