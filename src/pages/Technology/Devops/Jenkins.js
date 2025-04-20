import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Devops/Jenkins/slide.jpeg";
import img2 from "../../../images/Devops/Jenkins/about.jpeg";
import Footer from "../../../components/Footer";
const Jenkins = () => {
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
            Streamline Your Development Pipeline with Expert Jenkins Integration
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            STL specializes in optimizing CI/CD workflows with Jenkins, enabling
            startups and enterprises to automate builds, testing, and
            deployments efficiently.
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
              className="rounded-t w-3/4 h-auto object-cover mx-auto"
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
              Why Choose Jenkins for Your CI/CD Pipeline?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Open-Source & Extensible:</strong> Jenkins is a free and
                highly customizable automation server with a vast plugin
                ecosystem to fit diverse CI/CD needs.
              </li>
              <li>
                <strong>Scalability & Flexibility:</strong> Supports distributed
                builds, multiple environments, and cloud-based deployments,
                making it suitable for small and large teams.
              </li>
              <li>
                <strong>Seamless Integration:</strong> Works with popular
                version control systems like Git, build tools like Maven and
                Gradle, and deployment platforms like Kubernetes and Docker.
              </li>
              <li>
                <strong>Automated Testing & Deployment:</strong> Enables
                continuous integration and delivery with automated testing,
                reducing manual effort and deployment risks.
              </li>
              <li>
                <strong>Active Community & Support:</strong> Backed by a strong
                developer community, Jenkins has extensive documentation,
                regular updates, and a wide range of plugins.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Flutter App Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & UI Planning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Gather client requirements, define the app's core
                  functionality, and design UI/UX with Flutter’s widget-based
                  approach for a seamless experience.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  App Architecture & State Management
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Establish a clean architecture using Provider, Riverpod, or
                  Bloc for efficient state management and scalable app
                  development.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  API Integration & Backend Connectivity
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Connect the app to RESTful APIs or GraphQL, implement
                  real-time data handling using Firebase Firestore, and ensure
                  smooth network requests.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Performance Optimization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Optimize Flutter apps using efficient rendering techniques,
                  lazy loading, and minimizing unnecessary widget rebuilds for
                  smooth performance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Testing & Debugging
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use Flutter’s built-in testing framework for unit, widget, and
                  integration tests, and debug effectively with DevTools and
                  Flutter Inspector.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Maintenance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Publish apps to Google Play and App Store using Flutter’s
                  build tools. Continuously monitor app performance with
                  Firebase Crashlytics and analytics.
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

export default Jenkins;
