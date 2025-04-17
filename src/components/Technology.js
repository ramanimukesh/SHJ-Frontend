import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import { Link } from "react-router-dom";
import AWS from "../images/Devops/AWS/slide.png";
import DynamoDB from "../images/Database/Dynamodb/Dynamo.jpeg";
import tech from "../images/Tech/Technology.jpg";
import Footer from "../components/Footer";

const Technology = () => {
  const [activeTab, setActiveTab] = useState("web-dev");

  return (
    <>
      <div className="hero w-full h-screen relative" id="flutter">
        <NavBar />
        <img
          alt="Hero Image"
          className="w-full h-full object-cover"
          src={tech}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
            Innovative Technologies Powering Industry-Specific Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ leverages the latest technologies to build custom software
            solutions that meet the unique needs of startups, enterprises, and
            growing businesses.
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

      <div className="w-full p-2 md:p-12" id="services">
        {/* 1. Web Development (Image Right) */}
        <div
          className="flex flex-col lg:flex-row py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">
              Web Development
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              We create responsive, user-friendly websites using modern
              technologies like React and Next.js to deliver high-performance
              digital experiences.
            </p>
            <Link
              to="/react"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <div className="grid grid-cols-2 gap-12 p-10 bg-gray-100 rounded-lg shadow-lg">
              <a href="/react" title="React">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="/node" title="Node.js">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="/angular" title="Angular">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"
                  alt="Angular"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="/typescript" title="TypeScript">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Mobile App Development (Image Right) */}
        <div
          className="flex flex-col lg:flex-row-reverse py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">
              Mobile App Development
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              We develop high-quality mobile applications for Android and iOS
              platforms, combining performance with sleek, intuitive user
              experiences.
            </p>
            <Link
              to="/react-native"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <div className="grid grid-cols-2 gap-12 p-10 bg-gray-100 rounded-lg shadow-lg">
              {/* React Native */}
              <a href="/react-native" title="React Native">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React Native"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>

              {/* Flutter */}
              <a href="/flutter" title="Flutter">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
                  alt="Flutter"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">Front-end</h2>
            <p className="text-xl text-gray-600 font-semibold">
              We specialize in crafting responsive, intuitive, and accessible
              web interfaces using cutting-edge technologies like React,
              Next.js, and TypeScript. Our focus is on delivering fast, seamless
              digital experiences that elevate user engagement.
            </p>
            <Link
              to="/angular"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <div className="grid grid-cols-2 gap-12 p-10 bg-gray-100 rounded-lg shadow-lg">
              <a href="/react" title="React">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt="React"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="/angular" title="Angular">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"
                  alt="Angular"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row-reverse py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">Back-end</h2>
            <p className="text-xl text-gray-600 font-semibold">
              Backend technologies power the server-side of web and mobile
              applications, handling data management, business logic, and
              client-server communication. Developers use languages like Python,
              Java, Ruby, PHP, and Node.js, along with frameworks such as
              Django, Spring, Rails, Laravel, and Express.js to streamline and
              scale backend development efficiently.
            </p>
            <Link
              to="/node"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <div className="grid grid-cols-2 gap-12 p-10 bg-gray-100 rounded-lg shadow-lg">
              <a href="/node" title="Node.js">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
              {/* Flutter */}
              <a href="/java" title="Java">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  alt="Java"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 3. UI/UX Design (Image Left) */}
        <div
          className="flex flex-col lg:flex-row py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">
              UI/UX Design
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              We design engaging user interfaces with a focus on usability,
              accessibility, and aesthetic appeal—ensuring an intuitive
              experience for all users.
            </p>
            <Link
              to="/figma"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="grid grid-cols-2 gap-12 p-10 bg-gray-100 rounded-lg shadow-lg">
              {/* Figma */}
              <a href="/figma" title="Figma">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                  alt="Figma"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>

              {/* Photoshop */}
              <a href="/photoshop" title="Photoshop">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                  alt="Photoshop"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 4. Cloud Solutions (Image Left) */}
        <div
          className="flex flex-col lg:flex-row-reverse py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">
              DevOps Development
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              We offer scalable cloud infrastructure solutions on AWS, Azure,
              and GCP—ensuring performance, security, and business continuity.
            </p>
            <Link
              to="/docker"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="grid grid-cols-3 gap-10 p-10 bg-gray-100 rounded-lg shadow-lg">
              {/* Docker */}
              <a href="/docker" title="Docker">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>

              {/* Jenkins */}
              <a href="/jenkins" title="Jenkins">
                <img
                  src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg"
                  alt="Jenkins"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>

              {/* AWS */}
              <a href="/aws" title="AWS">
                <img
                  src={AWS}
                  alt="AWS"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 5. DevOps & Automation (Image Right) */}
        <div
          className="flex flex-col lg:flex-row py-8 justify-between items-center"
          data-aos="fade-up"
        >
          <div
            className="w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h2 className="text-4xl text-blue-900 font-bold mb-4">
              Database Developement
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              Streamline your delivery pipelines with CI/CD, Docker, and
              Kubernetes. We help automate infrastructure for faster, reliable
              deployments.
            </p>
            <Link
              to="/mongodb"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Leran More
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </Link>
          </div>
          <div
            className="w-full lg:w-1/2 flex justify-center items-center lg:mx-4 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="grid grid-cols-3 gap-10 p-10 bg-gray-100 rounded-lg shadow-lg">
              {/* MongoDB */}
              <a href="/mongodb" title="MongoDB">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>

              {/* DynamoDB */}
              <a href="/dynamodb" title="DynamoDB">
                <img
                  src={DynamoDB}
                  alt="DynamoDB"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>

              {/* MySQL */}
              <a href="/mysql" title="MySQL">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                  className="w-[180px] h-[160px] object-contain hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Technology;
