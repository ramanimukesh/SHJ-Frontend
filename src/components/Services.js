import React from "react";
import { Link } from "react-router-dom";
import service from "../images/Services/Service.jpg";
import NavBar from "../components/Navbar/NavBar";
import Digital from "../images/Services/digital.png";
import Engi from "../images/Services/DevOps.png";
import staff from "../images/Services/staff.jpg";
import mobile from "../images/Services/Mobile-App.png";
import Architect from "../images/Services/software.jpg";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="hero w-full h-screen relative" id="flutter">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={service}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Empowering Businesses with End-to-End Digital Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            At SHJ, we offer a comprehensive suite of services tailored to
            modern digital needs. From design and development to cloud
            infrastructure and team extension, we help businesses innovate,
            scale, and succeed in an ever-evolving tech landscape. Our goal is
            to deliver impactful results through creativity, technical
            excellence, and collaborative partnerships.
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
            <h2 className="text-3xl font-bold text-blue-900">
              Digital Product Design
            </h2>
            <p className="text-gray-600 text-lg">
              We specialize in creating beautiful and functional digital
              products. From wireframes to high-fidelity prototypes, our designs
              are intuitive, responsive, and user-centered. Our goal is to craft
              products that offer exceptional user experiences and visual
              appeal.
            </p>
          </div>
          <Link to="/digital-product">
            <img
              src={Digital}
              alt="Web"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 2. Image Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">
              Software Architecture
            </h2>
            <p className="text-gray-600 text-lg">
              We build scalable and maintainable software architectures that
              support long-term growth. Our approach ensures clean codebases,
              efficient performance, and easy extensibility. With a focus on
              modularity and security, we lay the foundation for reliable
              software systems.
            </p>
          </div>
          <Link to="/software-architect">
            <img
              src={Architect}
              alt="Architecture"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 3. Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">
              Engineering & DevOps
            </h2>
            <p className="text-gray-600 text-lg">
              Our engineering and DevOps services streamline development and
              deployment workflows. We implement CI/CD pipelines, automated
              testing, and scalable infrastructure using Docker, Jenkins, and
              AWS. This ensures faster releases, reduced downtime, and improved
              reliability.
            </p>
          </div>
          <Link to="/engineering">
            <img
              src={Engi}
              alt="DevOps"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 4. Image Left */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">
              MobileApp Development
            </h2>
            <p className="text-gray-600 text-lg">
              We create high-quality mobile applications for both Android and
              iOS platforms using React Native and Flutter. Our apps are
              optimized for performance, scalability, and user experience. We
              follow a mobile-first approach to deliver feature-rich
              applications that users love.
            </p>
          </div>
          <Link to="/mobile-dev">
            <img
              src={mobile}
              alt="Mobile Development"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* 5. Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900">
              Staff Augmentation
            </h2>
            <p className="text-gray-600 text-lg">
              Scale your team instantly with our expert developers, designers,
              and QA professionals. Whether you need short-term support or
              long-term collaboration, we offer flexible staffing solutions. Our
              team integrates seamlessly with your workflow to boost
              productivity and project success.
            </p>
          </div>
          <Link to="/staff-augment">
            <img
              src={staff}
              alt="Staff Augmentation"
              className="w-full lg:w-[500px] h-[350px] object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
