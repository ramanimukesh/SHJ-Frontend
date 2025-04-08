import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
// import img1 from "../../../images/Database/Dynamodb/slide.png";
// import img2 from "../../../images/Database/Dynamodb/about.jpg";
import Footer from "../../components/Footer";

const Manufacturer = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="flutter">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          // src={img1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Scale Your Applications with High-Performance manufactur Solutions
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
              // src={img2}
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
              About Manufacturer Industries
            </h3>
            <p className="my-3 text-xl text-gray-600 font-semibold text-left">
              Our manufacturing solutions empower businesses to optimize
              production processes, improve supply chain visibility, and achieve
              operational excellence through smart automation and real-time data
              integration. Built for scalability and resilience, our platforms
              support everything from inventory management and predictive
              maintenance to quality control and logistics coordination. Whether
              you're managing a single plant or a global network, our technology
              streamlines workflows, enhances equipment utilization, and enables
              data-driven decisions to boost productivity, reduce downtime, and
              meet market demand efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Manufacturing Digital Transformation Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Smart Production Planning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Leverage data-driven demand forecasting and production
                  scheduling to minimize waste, optimize throughput, and meet
                  delivery targets efficiently.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Inventory & Supply Chain Optimization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Monitor and manage raw materials, parts, and finished goods in
                  real time, ensuring accurate stock levels, optimized
                  procurement, and smooth vendor collaboration.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Quality Control & Compliance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Automate quality checks, track compliance metrics, and analyze
                  production data to detect anomalies and ensure consistent
                  output standards.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Asset Tracking & Maintenance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Track machine performance and schedule predictive maintenance
                  to reduce downtime, increase operational efficiency, and
                  extend equipment lifespan.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Real-Time Production Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement dashboards to visualize production KPIs, monitor
                  workflows, and identify bottlenecks or inefficiencies in real
                  time.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Analytics & Continuous Improvement
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Analyze historical and live data to uncover patterns, drive
                  lean manufacturing practices, and continuously improve
                  processes and profitability.
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

export default Manufacturer;
