import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Healthcare/slide.webp";
import img2 from "../../images/Healthcare/about.webp";
import Footer from "../../components/Footer";
const Healthcare = () => {
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
            Scale Your Applications with High-Performance healthcare Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
          SHJ offers scalable database solutions that empower healthcare providers to create secure, efficient, and high-performance patient management systems.
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
              About Healthcare Industries
            </h3>
            <p className="my-3 text-xl text-gray-600 font-semibold text-left">
              Our healthcare solutions are designed to help organizations
              securely manage patient data, streamline clinical workflows, and
              deliver responsive digital experiences across platforms. With a
              focus on compliance, performance, and scalability, we build
              systems that support electronic health records (EHR), telemedicine
              platforms, appointment scheduling, and real-time health
              monitoring. From private practices to large hospitals, our
              technology ensures secure integrations with third-party tools,
              data-driven decision-making, and personalized care delivery while
              maintaining strict data privacy standards.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Healthcare Platform Implementation Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirements & Compliance Analysis
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Understand healthcare-specific needs and ensure compliance
                  with standards like HIPAA, HL7, and GDPR for secure patient
                  data handling.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Platform & Architecture Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design scalable, modular system architecture that supports
                  integrations with EHRs, medical devices, telehealth, and
                  analytics tools.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Secure Data Management
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement strong data encryption, anonymization techniques,
                  and access control to safeguard sensitive patient and provider
                  information.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Integration with Healthcare Ecosystems
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Connect with third-party services such as insurance systems,
                  lab results, pharmacies, and wearable devices for a unified
                  healthcare experience.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Testing & Regulatory Validation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Perform rigorous testing, including accessibility,
                  performance, and compliance validation to meet regulatory
                  standards before deployment.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Monitoring & Continuous Improvement
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use real-time monitoring, analytics, and patient feedback to
                  ensure continuous platform improvement and better health
                  outcomes.
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

export default Healthcare;
