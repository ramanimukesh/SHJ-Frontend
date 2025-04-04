import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Design/Figma/slide.jpg";
import img2 from "../../../images/Design/Figma/about.avif";
import Footer from "../../../components/Footer";
const Figma = () => {
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
            Transform Your UI/UX Workflow with Figma’s Cutting-Edge Tools
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ specializes in intuitive Figma-based design solutions, enabling
            startups and enterprises to collaborate seamlessly, streamline
            prototyping, and build pixel-perfect user experiences.
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
              Why Choose Figma for UI/UX Design?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Seamless Team Collaboration:</strong> Work with
                designers, developers, and stakeholders in real time—no need for
                file transfers.
              </li>
              <li>
                <strong>Powerful Auto Layout:</strong> Design flexible,
                responsive components that automatically adjust based on content
                changes.
              </li>
              <li>
                <strong>Plugins & Integrations:</strong> Extend Figma’s
                capabilities with plugins for icons, illustrations,
                accessibility checks, and more.
              </li>
              <li>
                <strong>Version Control & History:</strong> Access past versions
                of your designs without worrying about manual backups.
              </li>
              <li>
                <strong>Design & Code Consistency:</strong> Use shared styles,
                grids, and variables to maintain consistency across teams.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Figma Design & Prototyping Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Gathering & Wireframing
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Understand project goals, define user personas, and create
                  low-fidelity wireframes to establish the app's layout and
                  structure.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  UI Design & Component Creation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design high-fidelity UI screens using Figma’s auto-layout,
                  grids, and reusable components for a consistent and scalable
                  design system.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Prototyping & Interaction Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Create interactive prototypes, define user flows, and add
                  micro-interactions to simulate real user experiences before
                  development.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Design Collaboration & Feedback
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Share designs with teams, collect feedback using Figma
                  comments, and iterate based on usability testing insights.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Handoff to Developers
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use Figma’s inspect mode to provide developers with
                  pixel-perfect specifications, assets, and design tokens for
                  seamless implementation.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Design System & Maintenance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Maintain a scalable design system with reusable components,
                  global styles, and version control for long-term consistency.
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

export default Figma;
