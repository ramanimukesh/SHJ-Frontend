import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Devops/Docker/slide.png";
import img2 from "../../../images/Devops/Docker/about.png";
import Footer from "../../../components/Footer";
const Docker = () => {
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
            Optimize Your Workflow with Docker Containerization
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ empowers businesses with seamless Docker solutions, enabling
            efficient application deployment, scalability, and infrastructure
            management with ease.
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
              Why Choose Docker for Your Application Deployment?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Containerization Efficiency:</strong> Docker allows
                applications to run consistently across different environments,
                reducing deployment issues and compatibility concerns.
              </li>
              <li>
                <strong>Scalability & Portability:</strong> Easily scale your
                applications and move them across cloud providers or on-premise
                infrastructure with minimal effort.
              </li>
              <li>
                <strong>Resource Optimization:</strong> Docker enables
                lightweight containers that use fewer system resources than
                traditional virtual machines, improving performance.
              </li>
              <li>
                <strong>Rapid Deployment & Updates:</strong> With Docker images,
                you can quickly deploy, update, and roll back applications,
                streamlining CI/CD workflows.
              </li>
              <li>
                <strong>Secure & Isolated Environment:</strong> Docker ensures
                better security by isolating applications in containers,
                preventing conflicts between dependencies.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Docker Containerization Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Environment Setup & Dependency Management
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Define application dependencies in a Dockerfile and manage
                  configurations with Docker Compose for a consistent
                  development environment.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Containerization & Image Creation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-40">
                  Build lightweight, portable Docker images with optimized layer
                  caching for faster deployment and minimal storage overhead.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Networking & Service Orchestration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Configure Docker networking for seamless communication between
                  containers, and orchestrate multi-container setups with Docker
                  Compose or Kubernetes.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Performance Optimization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Reduce build times with multi-stage Docker builds, optimize
                  resource utilization, and minimize image size for efficient
                  deployment.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Security & Compliance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Secure Docker environments with best practices such as image
                  vulnerability scanning, least privilege access, and secrets
                  management.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy containers to cloud platforms like AWS, GCP, or Azure,
                  and monitor performance using Docker Stats, Prometheus, or
                  Grafana.
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

export default Docker;
