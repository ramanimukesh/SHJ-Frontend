import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
// import img1 from "../../../images/Devops/Docker/slide.png";
// import img2 from "../../../images/Devops/Docker/about.png";
import Footer from "../../components/Footer";
const Augmentation = () => {
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
            Accelerate Your Growth with Expert Staff Augmentation
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ provides businesses with on-demand, specialized talent to drive
            success. Scale your team quickly, access critical skills, and adapt
            to project needs with ease.
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
              Why Choose SHJ for Staff Augmentation?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Access to Top Talent:</strong> SHJ provides on-demand
                experts in various domains, ensuring you have the right skill
                set for your projects.
              </li>
              <li>
                <strong>Scalability & Flexibility:</strong> Easily scale your
                team up or down based on project requirements, ensuring you
                maintain agility and control over costs.
              </li>
              <li>
                <strong>Cost-Effective Solution:</strong> Save on recruitment
                overhead and long-term employment costs while gaining immediate
                access to qualified professionals.
              </li>
              <li>
                <strong>Speed to Market:</strong> With rapid deployment of
                skilled resources, we help you accelerate project timelines and
                improve time-to-market.
              </li>
              <li>
                <strong>Seamless Integration:</strong> Our professionals
                integrate effortlessly with your existing team, ensuring smooth
                collaboration and a streamlined workflow.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Staff Augmentation Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Talent Acquisition & Onboarding
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  SHJ identifies top-tier professionals to seamlessly integrate
                  into your team, ensuring a quick and efficient onboarding
                  process for immediate contribution.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Tailored Skillset Match
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-40">
                  We match the right experts to your project needs, ensuring
                  that you have the specific skill sets required to achieve your
                  goals.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Seamless Integration & Collaboration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Our professionals integrate smoothly into your existing
                  workflows, ensuring effective collaboration and achieving
                  results faster.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Flexible Resource Scaling
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Scale your team according to project requirements, allowing
                  you to stay agile, meet deadlines, and manage costs
                  effectively.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Cost-Effective Talent Solutions
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Save on recruitment overhead and long-term employment costs
                  while benefiting from specialized skills on demand for your
                  projects.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Rapid Deployment & Flexibility
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Quickly deploy experts to meet project deadlines with the
                  flexibility to adjust your team as project demands evolve.
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

export default Augmentation;
