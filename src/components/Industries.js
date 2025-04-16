import React from "react";
import { Link } from "react-router-dom";
import slide from "../images/Industries/slide.webp";
import NavBar from "../components/Navbar/NavBar";
import Health from "../images/Industries/healthcare.webp";
import Finance from "../images/Industries/Finance.jpg";
import comm from "../images/Industries/E-comm.jpg";
import education from "../images/Industries/education.jpeg";
import banking from "../images/Industries/Banking.webp";
import Footer from "../components/Footer";

const Industries = () => {
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
            Empowering Industries with Tailored Digital Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ empowers diverse industries with customized digital solutions
            that drive innovation, efficiency, and growth.
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
      <div className="w-full px-4 py-12 md:px-8 lg:px-16" id="services">
        {/* 1. Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">Healthcare </h2>
            <p className="text-gray-600 text-lg">
              We help healthcare organizations digitize patient experiences,
              streamline workflows, and ensure compliance through secure,
              user-centric platforms. From telemedicine solutions to health
              record management, our digital services enhance care delivery and
              patient engagement.
            </p>
          </div>
          <Link to="/healthcare">
            <img
              src={Health}
              alt="Health"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 2. Image Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">Finance </h2>
            <p className="text-gray-600 text-lg">
              Our solutions in the finance sector focus on secure transactions,
              data analytics, and intuitive interfaces for both B2B and B2C
              applications. We empower banks, fintechs, and financial
              institutions to deliver trustworthy and innovative digital
              experiences.
            </p>
          </div>
          <Link to="/finance">
            <img
              src={Finance}
              alt="Architecture"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 3. Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">E-commerce </h2>
            <p className="text-gray-600 text-lg">
              We build scalable and personalized e-commerce platforms that drive
              conversions and enhance customer retention. From storefronts to
              inventory management and secure payments, our tech elevates
              digital commerce experiences across all devices.
            </p>
          </div>
          <Link to="/ecommerce">
            <img
              src={comm}
              alt="DevOps"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 4. Image Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">Education </h2>
            <p className="text-gray-600 text-lg">
              We design and develop interactive learning platforms, LMS tools,
              and mobile apps that make education accessible and engaging. Our
              solutions support virtual classrooms, assessments, and
              personalized learning paths for institutions and edtech startups.
            </p>
          </div>
          <Link to="/education">
            <img
              src={education}
              alt="Mobile Development"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 5. Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">
              Digital-Banking
            </h2>
            <p className="text-gray-600 text-lg">
              We empower financial institutions with secure, user-centric
              digital banking solutions—enabling seamless transactions,
              personalized experiences, and real-time access to services through
              modern web and mobile platforms.
            </p>
          </div>
          <Link to="/digital-banking">
            <img
              src={banking}
              alt="Digital-Banking"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Industries;
