import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import slide from "../../images/Digital banking/slide.webp";
import about from "../../images/Digital banking/about.webp";
import Footer from "../../components/Footer";

const DigitalBank = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="flutter">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={slide}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Transform Financial Services with Secure Digital Banking Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            STL empowers banks and fintechs by delivering scalable, secure, and
            intuitive digital banking platforms.
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
              About Digital Banking Industry
            </h3>
            <p className="my-3 text-xl text-gray-600 font-semibold text-left">
              Our digital banking solutions help financial institutions
              modernize their services through secure, user-friendly platforms
              that enable 24/7 access to accounts, seamless transactions, and
              real-time insights. From mobile banking apps to core system
              integration and fraud detection, we empower banks to deliver
              personalized experiences, drive customer engagement, and stay
              ahead in a rapidly evolving financial landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Digital Banking Transformation Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Seamless Digital Onboarding
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Streamline account creation with e-KYC, digital signatures,
                  and real-time verification to improve user experience and
                  reduce onboarding time.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Personalized Customer Engagement
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use AI-driven insights to deliver tailored financial advice,
                  product recommendations, and alerts across digital
                  touchpoints.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Real-Time Fraud Detection
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Monitor transactions continuously using machine learning to
                  detect and block suspicious activity, ensuring security and
                  compliance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Omnichannel Banking Experience
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Enable consistent and integrated banking experiences across
                  web, mobile apps, ATMs, and contact centers for improved
                  customer retention.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Core Banking Modernization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Upgrade legacy systems to scalable cloud-native platforms for
                  faster processing, open banking integrations, and innovation
                  enablement.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Data Analytics & Insights
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Leverage big data and advanced analytics to gain insights into
                  customer behavior, optimize offerings, and drive strategic
                  decisions.
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

export default DigitalBank;
