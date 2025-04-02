import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Web/Typescript/slide.jpg";
import img2 from "../../../images/Web/Typescript/about.png";
import Footer from "../../../components/Footer";
const TypeScript = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="typescript">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={img1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Transform Your Web Experience with Expert TypeScript Development
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ is a premier TypeScript development company serving a diverse
            range of businesses, from startups to enterprises.
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
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center items-center">
            <img
              alt="card img"
              className="rounded-t w-[600px] h-[600px] object-cover"
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
              Why Choose TypeScript for Your Web Development Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Static Typing for Reliability:</strong> TypeScript
                provides static type checking, reducing runtime errors and
                improving code quality.
              </li>
              <li>
                <strong>Improved Developer Productivity:</strong> Features like
                autocompletion, inline documentation, and type inference
                streamline development and debugging.
              </li>
              <li>
                <strong>Better Code Maintainability:</strong> TypeScript
                enforces structured coding practices, making large-scale
                applications easier to manage and refactor.
              </li>
              <li>
                <strong>Enhanced JavaScript Ecosystem:</strong> TypeScript is
                compatible with existing JavaScript libraries, allowing gradual
                adoption and integration.
              </li>
              <li>
                <strong>Robust Tooling Support:</strong> With first-class
                support in IDEs like VS Code and integration with build tools,
                TypeScript simplifies development workflows.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          TypeScript Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Project Setup & Configuration */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Project Setup & Configuration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Initialize a TypeScript project using <code>tsc --init</code>.
                  Configure <code>tsconfig.json</code> for strict type checking,
                  module resolution, and target environments. Use ESLint and
                  Prettier for consistent code quality.
                </p>
              </div>
            </div>

            {/* Type-Driven Development */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Type-Driven Development
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Define interfaces and types to ensure clear API contracts.
                  Leverage generics for reusable components and functions. Use
                  utility types like <code>Partial&lt;T&gt;</code> and{" "}
                  <code>Pick&lt;T&gt;</code> to streamline object structures.
                </p>
              </div>
            </div>

            {/* Component & State Management */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Component & State Management
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  In React, use TypeScript with functional components and hooks.
                  Define prop types with interfaces and manage global state
                  using Redux Toolkit or Context API with type-safe actions and
                  reducers.
                </p>
              </div>
            </div>

            {/* API Integration & Data Fetching */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  API Integration & Data Fetching
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Fetch data using Axios or Fetch API with strict type
                  definitions for request and response data. Use libraries like
                  React Query for caching and ensure API calls return properly
                  typed objects.
                </p>
              </div>
            </div>

            {/* Testing & Debugging */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Testing & Debugging
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Perform unit tests with Jest and React Testing Library using
                  type-safe mocks. Use TypeScript-friendly debugging tools like
                  VS Code IntelliSense and TypeScript Watch Mode for error
                  detection.
                </p>
              </div>
            </div>

            {/* Deployment & Monitoring */}
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy with Vercel, Netlify, or AWS. Automate builds using
                  CI/CD pipelines. Monitor logs and errors using Sentry and
                  LogRocket for TypeScript-specific issues.
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

export default TypeScript;
