import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="w-full p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img
              alt="card img"
              className="rounded-t w-full h-auto object-cover"
              // src={img}
              data-aos="fade-left"
              data-aos-delay="700"
            />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold">
              About Us
            </h2>
            <div>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Our enthusiasm has led us to become a top IT company in USA for
                delivering various industry-led mobility solutions in web and
                mobile application development domains leveraging futuristic
                technologies like Internet of Things (IoT), AI-ML, AR-VR, Voice
                assistants and Voice Skills, DevOps & Cloud computing, etc.
              </p>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                We feel empowered with our certified tech experts and our R&D
                team who have always challenged themselves to help global
                clientele with a plethora of IT services and solutions.
                Engagement with our team guarantees our clients to save huge
                money on project development with faster delivery.{" "}
              </p>
            </div>
            <Link
              to="/contact"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-2"
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
    </>
  );
};

export default Intro;
