import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
// import img1 from "../../../images/Devops/Docker/slide.png";
// import img2 from "../../../images/Devops/Docker/about.png";
import Footer from "../../components/Footer";
const MobileDev = () => {
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
            Transform Your Vision with Mobile App Development
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ builds intuitive, high-performance mobile apps that enhance user
            engagement, streamline operations, and scale with your business —
            from concept to launch.
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
              Why Choose Mobile App Development?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Enhanced User Experience:</strong> Mobile app
                development allows you to create a tailored and engaging user
                experience with intuitive interfaces and optimized performance
                for smartphones and tablets.
              </li>
              <li>
                <strong>Increased Brand Visibility:</strong> Having a mobile app
                helps to increase your brand’s visibility as it provides a
                direct platform to communicate with users and promotes your
                services/products at all times.
              </li>
              <li>
                <strong>Offline Capabilities:</strong> Mobile apps offer offline
                functionality, allowing users to access certain features or data
                without the need for an internet connection.
              </li>
              <li>
                <strong>Better Performance:</strong> Mobile apps are typically
                faster and more responsive than web apps, providing a smoother
                and more reliable experience for users.
              </li>
              <li>
                <strong>Push Notifications:</strong> Mobile apps allow
                businesses to send personalized notifications directly to users,
                improving user engagement and promoting new content, updates, or
                promotions in real-time.
              </li>
              <li>
                <strong>Access to Device Features:</strong> Mobile apps have
                full access to device features like the camera, GPS,
                accelerometer, and more, enabling the development of unique
                functionalities that enhance the user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Mobile App Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  App Planning & Requirement Gathering
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Begin with thorough planning by defining the app's features,
                  goals, and target audience. Gather requirements and create a
                  roadmap for development.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  UI/UX Design
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-40">
                  Create intuitive and engaging user interfaces by focusing on
                  seamless UX design principles, ensuring a user-friendly
                  experience on mobile devices.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  App Development & Coding
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Develop the application using modern frameworks and languages
                  like React Native, Flutter, Swift, or Kotlin, ensuring fast
                  and scalable mobile solutions.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Testing & Quality Assurance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Conduct thorough testing to ensure a bug-free app by
                  performing unit tests, integration tests, and user acceptance
                  tests (UAT) to guarantee the app's functionality and
                  performance.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Store Submission
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy your app to app stores like Google Play and the Apple
                  App Store, ensuring it meets all store guidelines for
                  submission and publication.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Maintenance & Updates
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Continuously monitor and maintain your app to ensure smooth
                  performance. Provide regular updates and new features based on
                  user feedback and market trends.
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

export default MobileDev;
