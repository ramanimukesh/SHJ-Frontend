import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const Services = () => {
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
            Elevate User Experiences with Digital Product Design
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ crafts intuitive and engaging digital interfaces by blending
            user research, usability testing, and iterative design—ensuring
            products that resonate with users and drive business success.
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
              className="rounded-t w-full h-[500px] object-cover"
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
              Why Choose Digital Product Design?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>User-Centered Approach:</strong> Digital product design
                focuses on understanding user needs and behaviors, ensuring the
                final product provides a seamless, intuitive experience.
              </li>
              <li>
                <strong>Enhanced Usability:</strong> By conducting thorough
                usability testing, designers identify pain points and refine the
                product for better navigation and user satisfaction.
              </li>
              <li>
                <strong>Responsive & Scalable Design:</strong> Digital product
                design ensures that the application is adaptable to various
                devices and screen sizes, offering a consistent experience
                across platforms.
              </li>
              <li>
                <strong>Brand Consistency:</strong> By integrating brand
                elements into the design, digital product design enhances your
                brand’s identity, making your product visually appealing and
                recognizable.
              </li>
              <li>
                <strong>Faster Time to Market:</strong> A well-designed product
                can accelerate development cycles, enabling faster releases and
                quick iterations based on user feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Digital Product Design Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Research & Discovery
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Conduct in-depth user research and market analysis to
                  understand user needs, pain points, and business objectives,
                  laying the foundation for a successful design.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Wireframing & Prototyping
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-40">
                  Create wireframes and interactive prototypes that showcase the
                  structure and functionality of the product, ensuring it aligns
                  with user needs and business goals.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Visual & UI Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design visually engaging user interfaces with a focus on
                  aesthetics, user flow, and usability, ensuring a seamless and
                  intuitive experience.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Usability Testing & Feedback
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Perform usability testing to gather real-user feedback,
                  identifying areas for improvement and validating design
                  choices before final implementation.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Iterative Design & Refinement
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Continuously refine and iterate on designs based on user
                  feedback and testing, ensuring the product evolves to meet
                  both user expectations and business goals.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Final Handoff & Implementation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Provide final designs with comprehensive guidelines for
                  development, ensuring smooth implementation while maintaining
                  design integrity.
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

export default Services;
