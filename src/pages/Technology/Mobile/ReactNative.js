import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Mobile/React Native/slide.png";
import img2 from "../../../images/Mobile/React Native/about.jpeg";
import Footer from "../../../components/Footer";
const ReactNative = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="react-native">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={img1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Enhance Your Mobile App Experience with Expert React Native
            Development
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            STL is a top-tier React Native development company, serving a
            diverse range of businesses, from startups to established
            enterprises.
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
              Why Choose React Native for Your Mobile App Development Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Cross-Platform Compatibility:</strong> React Native
                allows you to build applications for both iOS and Android
                platforms with a single codebase, significantly reducing
                development time and costs.
              </li>
              <li>
                <strong>Performance Optimization:</strong> React Native uses
                native components, offering a seamless user experience with high
                performance on mobile devices.
              </li>
              <li>
                <strong>Hot Reloading:</strong> React Native's hot reloading
                feature enables developers to instantly see changes without
                rebuilding the entire app, boosting productivity.
              </li>
              <li>
                <strong>Large Developer Community:</strong> React Native boasts
                a vast and active developer community, providing extensive
                resources, libraries, and third-party integrations to accelerate
                development.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          React Native Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & Project Planning{" "}
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Gather requirements, define project scope, and set clear
                  objectives to align with business goals. Establish key
                  milestones and choose the tech stack.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Project Structure Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Organize the codebase with modular architecture and reusable
                  components. Set up navigation, state management, and essential
                  libraries for scalability.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Database Integration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Choose databases like Firebase, SQLite, or PostgreSQL for data
                  storage. Design schemas to optimize performance, security, and
                  scalability.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Middleware Implementation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement authentication, authorization, logging, and caching
                  using JWT or Firebase Authentication. Enhance security and
                  request processing.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Testing & Debugging
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use Jest and React Native Testing Library for unit and
                  integration tests. Debug efficiently with tools like Flipper
                  and React Native Debugger.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy apps on Play Store/App Store using Expo or Fastlane.
                  Monitor performance with Firebase Analytics and Sentry for
                  continuous improvements.
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

export default ReactNative;
