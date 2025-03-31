import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Web/Angular/slide.png";
import img2 from "../../../images/Web/Angular/about.jpg";
import Footer from "../../../components/Footer";

const Angularjs = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="angular">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={img1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Transform Your Web Experience with Expert angular Development
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ is a premier Angular development company, delivering tailored
            solutions to businesses ranging from startups to enterprises.
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
              Why Choose Angular for Your Web Development Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5 ">
              <li>
                <strong>Cross-Platform Development:</strong> Angular facilitates
                the creation of applications that function seamlessly across
                various platforms, including web, mobile, and desktop, ensuring
                a consistent user experience.
              </li>
              <li>
                <strong>Code Consistency and Maintainability:</strong> Angular's
                use of TypeScript enhances code consistency and maintainability,
                reducing errors and improving overall code quality.
              </li>
              <li>
                <strong>Comprehensive Tooling:</strong> The Angular CLI offers a
                suite of powerful tools for code scaffolding, testing, and
                deployment, streamlining the development process and boosting
                productivity.
              </li>
              <li>
                <strong>Strong Community Support:</strong> Backed by Google and
                a robust community, Angular provides extensive resources,
                regular updates, and a wealth of third-party tools and libraries
                to support developers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Angular Development Workflow
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
                  In the initial phase, we engage with the client to understand
                  their requirements, goals, and vision. We define the project
                  scope, outline key features, and create a comprehensive plan
                  that includes user stories and technical specifications.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-2 h-12">
                  UI Development & State Management{" "}
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  A modular component-based structure is implemented using
                  Material UI, Tailwind CSS, or Styled Components. State
                  management is efficiently handled using React’s built-in
                  useState and useReducer, while Redux Toolkit or Context API
                  manages global state.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  API Integration & Backend Communication
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  Smooth backend interaction is achieved using RESTful APIs or
                  GraphQL. API requests are managed using Axios or Fetch API,
                  with caching handled via React Query or SWR. Authentication is
                  implemented using JWT, OAuth, or Firebase Authentication.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Testing & Debugging
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  Comprehensive testing is performed using Jest, React Testing
                  Library, Cypress, and Playwright to ensure reliability.
                  Debugging tools like React DevTools and Redux DevTools help in
                  troubleshooting and fixing issues efficiently.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment, Monitoring & Maintenance{" "}
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  The application is deployed using platforms like Vercel,
                  Netlify, AWS, or Firebase. CI/CD pipelines with GitHub Actions
                  or Jenkins automate the deployment process. Post-launch, tools
                  like Google Analytics, Sentry, and LogRocket help monitor
                  performance, track errors, and ensure continuous improvements.{" "}
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

export default Angularjs;
