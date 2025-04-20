import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Education/slide.jpg";
import img2 from "../../images/Education/about.jpeg";
import Footer from "../../components/Footer";
const Education = () => {
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
            STL builds smart, scalable education platforms for impactful digital
            learning.
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            STL provides scalable database solutions to help educational
            institutions build dynamic and high-performance learning platforms.
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
              className="rounded-t w-3/4 h-[400px] object-cover mx-auto"
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
              About Education Industries
            </h3>
            <p className="my-3 text-xl text-gray-600 font-semibold text-left">
              Our education solutions are built to empower institutions and
              edtech platforms with fast, secure, and highly engaging learning
              experiences. Focused on scalability, accessibility, and real-time
              responsiveness, we create systems that support large student
              enrollments, adaptive learning paths, and seamless integration
              with LMS platforms, assessment tools, and content libraries.
              Whether you're managing a virtual classroom, a university portal,
              or a skill-based training platform, our technology helps you stay
              ahead of evolving educational needs while enhancing student
              engagement and academic success across all devices.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold text-center">
          Education Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Curriculum Data Modeling
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Structure your curriculum, courses, modules, and student
                  records using efficient key-value modeling to ensure optimized
                  performance and scalability across semesters and programs.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  User Access & Roles Provisioning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Define access levels for students, teachers, and admins using
                  AWS IAM and fine-grained authorization to manage learning
                  paths, content visibility, and administrative privileges.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Assignment & Content Indexing
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use Global and Local Secondary Indexes to quickly query
                  assignments, quizzes, video content, and grades by student,
                  topic, or due date for seamless classroom interactions.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Real-Time Progress Tracking
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Leverage DynamoDB Streams and Lambda triggers to capture and
                  process real-time student activity logs, assessments, and
                  learning milestones for dynamic progress updates.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Backup & Academic Data Retention
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement automated backups, point-in-time recovery, and
                  long-term storage strategies to retain student records and
                  academic data in compliance with education policies.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Monitoring & Adaptive Optimization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Monitor usage with Amazon CloudWatch and optimize read/write
                  throughput to scale with student load during peak hours like
                  exam weeks or enrollment periods.
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

export default Education;
