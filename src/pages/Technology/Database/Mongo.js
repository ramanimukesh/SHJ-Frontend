import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Database/Mongodb/slide.png";
import img2 from "../../../images/Database/Mongodb/about.jpg";
import Footer from "../../../components/Footer";
const MongoDB = () => {
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
            Power Your Applications with Scalable MongoDB Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ specializes in high-performance MongoDB database solutions,
            helping startups and enterprises manage data efficiently with
            scalability, flexibility, and reliability.
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
              Why Choose MongoDB for Your Database Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Scalability & Flexibility:</strong> MongoDB’s
                schema-less design and horizontal scaling with sharding make it
                ideal for handling growing data needs.
              </li>
              <li>
                <strong>High Performance:</strong> Optimized for high-speed read
                and write operations, MongoDB delivers low-latency performance
                for real-time applications.
              </li>
              <li>
                <strong>Document-Oriented Structure:</strong> Unlike relational
                databases, MongoDB uses JSON-like documents, making it more
                natural and flexible for modern applications.
              </li>
              <li>
                <strong>Robust Security Features:</strong> MongoDB offers
                encryption, authentication, and fine-grained access controls to
                ensure data security and compliance.
              </li>
              <li>
                <strong>Cost-Effective & Open-Source:</strong> As an open-source
                solution with cost-efficient scaling, MongoDB provides a
                budget-friendly approach for startups and enterprises alike.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          MongoDB Deployment Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & Database Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Identify data requirements, define schema design with
                  collections and indexes, and plan an optimized database
                  structure for scalability and efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Infrastructure Setup & Deployment
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy MongoDB on-premise, in the cloud, or using MongoDB
                  Atlas. Configure replica sets and sharding for high
                  availability and scalability.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  API Integration & Data Access Layer
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Connect MongoDB with backend applications using Mongoose,
                  MongoDB drivers, or GraphQL. Ensure efficient data retrieval
                  and indexing.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Performance Optimization & Indexing
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Optimize query performance using indexes, aggregation
                  pipelines, and caching strategies. Monitor slow queries with
                  MongoDB Profiler.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Security & Data Protection
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement authentication, authorization, and encryption for
                  secure data access. Enforce role-based access controls and
                  backup strategies.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use MongoDB Atlas or self-hosted tools for automated
                  deployments. Monitor performance, replication, and database
                  health with MongoDB Compass and Ops Manager.
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

export default MongoDB;
