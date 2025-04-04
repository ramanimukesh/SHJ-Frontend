import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Database/Dynamodb/slide.png";
import img2 from "../../../images/Database/Dynamodb/about.jpg";
import Footer from "../../../components/Footer";
const DynamoDB = () => {
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
            Scale Your Applications with High-Performance DynamoDB Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ specializes in fully managed NoSQL database solutions, enabling
            startups and enterprises to build fast, scalable, and highly
            available applications with AWS DynamoDB.
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
              Why Choose AWS DynamoDB for Your Database Needs?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Seamless Scalability:</strong> DynamoDB offers automatic
                scaling to handle any workload, from startups to
                enterprise-level applications, with no downtime.
              </li>
              <li>
                <strong>Blazing Fast Performance:</strong> With single-digit
                millisecond response times, DynamoDB ensures high-speed read and
                write operations for demanding applications.
              </li>
              <li>
                <strong>Fully Managed & Serverless:</strong> Eliminate
                infrastructure management with DynamoDB’s fully managed NoSQL
                database, allowing teams to focus on innovation.
              </li>
              <li>
                <strong>Cost-Optimized Efficiency:</strong> Pay only for what
                you use with on-demand or provisioned capacity pricing, helping
                businesses optimize costs without compromising performance.
              </li>
              <li>
                <strong>Enterprise-Grade Security & Reliability:</strong>{" "}
                DynamoDB provides built-in encryption, automated backups,
                multi-region replication, and 99.999% availability for
                mission-critical applications.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          AWS DynamoDB Implementation Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Data Modeling & Schema Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Define efficient data models using partition keys and sort
                  keys to optimize read and write operations while ensuring
                  scalability.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Capacity Planning & Provisioning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Choose between on-demand and provisioned capacity modes based
                  on workload requirements to ensure cost-efficiency and
                  performance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Indexing & Query Optimization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Utilize Global Secondary Indexes (GSI) and Local Secondary
                  Indexes (LSI) to enhance query flexibility and improve
                  performance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Data Security & Access Control
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Secure data with AWS IAM policies, encryption, and
                  fine-grained access control using DynamoDB Streams and AWS
                  KMS.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Backup & Disaster Recovery
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Ensure data durability with automated backups, point-in-time
                  recovery, and multi-region replication for disaster
                  resilience.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Monitoring & Performance Tuning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use Amazon CloudWatch and AWS X-Ray to monitor queries, track
                  read/write capacity, and optimize performance dynamically.
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

export default DynamoDB;
