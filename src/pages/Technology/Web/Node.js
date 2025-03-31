import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Web/Node/slide.png";
import img2 from "../../../images/Web/Node/about.jpg";
import Footer from "../../../components/Footer";
const Nodejs = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="react">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={img1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Elevate Your Web Presence with Professional Node.js Development
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ is a leading Node.js development company, catering to a wide
            array of businesses, from startups to large enterprises.
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
              Why Choose NodeJS for Your Web Development Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5 ">
              <li>
                <strong>Asynchronous and Event-Driven Architecture:</strong>
                Node.js utilizes a non-blocking, event-driven architecture,
                allowing it to handle multiple concurrent connections
                efficiently. This design is particularly beneficial for
                applications requiring high throughput and scalability.
              </li>
              <li>
                <strong>High Performance:</strong> Built on Google's V8
                JavaScript engine, Node.js compiles JavaScript directly to
                native machine code, resulting in fast execution and improved
                performance for web applications.
              </li>
              <li>
                <strong>Scalability:</strong> Node.js's lightweight and
                efficient design makes it well-suited for building scalable
                network applications, capable of handling numerous simultaneous
                connections with minimal resource consumption.
              </li>
              <li>
                <strong>Active Community Support:</strong> A large and active
                community contributes to continuous improvements, robust
                documentation, and a wealth of resources, ensuring developers
                have access to the latest tools and best practices.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          NodeJS Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & Project Planning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Engage with stakeholders to gather detailed requirements,
                  define the project scope, and establish clear objectives. This
                  foundational phase ensures alignment with business goals and
                  user needs.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Project Structure Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Organize the codebase using a modular architecture, dividing
                  functionalities into distinct modules or components to enhance
                  maintainability. This approach facilitates scalability and
                  collaborative development.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  API Development & Integration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design and implement RESTful APIs or GraphQL endpoints,
                  ensuring seamless communication between the frontend and
                  backend systems. Efficient API integration is vital for
                  responsive and dynamic applications.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Database Integration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Choose an appropriate database (e.g., MongoDB, PostgreSQL) and
                  integrate it with the application, establishing schemas and
                  data models as needed. Proper database design ensures data
                  integrity and performance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Middleware Implementation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Develop and integrate middleware functions to handle tasks
                  such as authentication, logging, and error handling, thereby
                  enhancing application functionality. Middleware streamlines
                  request processing and security.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Testing & Debugging
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Conduct comprehensive testing, including unit and integration
                  tests, to identify and resolve issues, ensuring the
                  application operates as intended. Robust testing frameworks
                  contribute to software reliability.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy the application to a production environment using
                  platforms like AWS or Heroku, and implement monitoring tools
                  to track performance and user engagement. Continuous
                  monitoring ensures optimal application health and user
                  satisfaction.
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

export default Nodejs;
