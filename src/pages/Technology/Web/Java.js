import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import slide from "../../../images/Web/Java/slide.webp";
import about from "../../../images/Web/Java/about.png";
import Footer from "../../../components/Footer";

const Java = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="angular">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={slide}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Transform Your Web Experience with Expert Java Development
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            STL is a premier Java development company, delivering tailored
            solutions to businesses ranging from startups to enterprises.
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
              src={about}
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
              Why Choose Java for Your Web Development Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Platform Independence:</strong> Java’s “write once, run
                anywhere” philosophy allows applications to run on any device
                with a JVM, ensuring broad compatibility and flexibility.
              </li>
              <li>
                <strong>Robust Performance & Scalability:</strong> Java is known
                for its high performance and scalability, making it ideal for
                building large-scale enterprise-level applications.
              </li>
              <li>
                <strong>Strong Ecosystem & Frameworks:</strong> Java offers
                mature frameworks like Spring Boot, Hibernate, and Jakarta EE
                that accelerate development, simplify integration, and enhance
                application stability.
              </li>
              <li>
                <strong>Security & Reliability:</strong> Java is built with a
                strong focus on security and reliability, making it a trusted
                choice for mission-critical web applications across industries.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Java Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & Architecture Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  We collaborate closely with clients to gather business needs
                  and define system requirements. A scalable architecture is
                  designed using MVC or microservices, setting the foundation
                  for a robust and flexible Java-based solution.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
              <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
              Backend Development with Spring Boot
                </h3>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  Java and Spring Boot are used to create RESTful APIs, handle
                  business logic, and manage database interactions. Modular
                  services, DTOs, and validation ensure clean code and scalable
                  development.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Frontend Integration & API Communication
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  REST APIs developed in Spring Boot are integrated with
                  frontend frameworks like React or Angular. Secure
                  communication is ensured using HTTPS, CORS configurations, and
                  token-based authentication (JWT, OAuth2).
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  Testing & Quality Assurance
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  Unit and integration testing are done using JUnit and Mockito.
                  End-to-end testing is handled with tools like Selenium or REST
                  Assured. Continuous quality checks ensure maintainability and
                  bug-free releases.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment, Monitoring & Maintenance
                </h4>
                <p className="text-lg font-medium leading-5 h-auto md:h-48">
                  Applications are deployed on servers or cloud platforms like
                  AWS, Azure, or GCP using Docker and CI/CD pipelines (Jenkins,
                  GitHub Actions). Monitoring is handled via Prometheus, ELK
                  Stack, or New Relic.
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

export default Java;
