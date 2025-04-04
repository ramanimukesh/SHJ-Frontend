import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Devops/AWS/slide.png";
import img2 from "../../../images/Devops/AWS/about.jpg";
import Footer from "../../../components/Footer";
const AWS = () => {
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
            Elevate Your Cloud Infrastructure with Expert AWS Solutions
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ specializes in scalable AWS solutions, empowering startups and
            enterprises with secure, high-performance cloud computing and
            seamless deployment.
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
              Why Choose AWS for Your Cloud Infrastructure?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Scalability & Flexibility:</strong> AWS provides
                on-demand scalability, allowing businesses to efficiently scale
                resources as their needs grow.
              </li>
              <li>
                <strong>High Performance:</strong> With a global network of data
                centers and optimized computing power, AWS ensures fast,
                reliable, and low-latency performance.
              </li>
              <li>
                <strong>Comprehensive Security:</strong> AWS offers
                industry-leading security features, including encryption,
                identity management, and compliance with top security standards.
              </li>
              <li>
                <strong>Cost-Effective Solutions:</strong> AWS’s pay-as-you-go
                model helps businesses optimize costs by only paying for the
                resources they use.
              </li>
              <li>
                <strong>Vast Ecosystem & Innovation:</strong> With continuous
                updates, AI-driven services, and an extensive range of
                integrations, AWS supports cutting-edge cloud solutions for
                businesses of all sizes.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          AWS Cloud Deployment Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Requirement Analysis & Cloud Strategy
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Identify business needs, select the right AWS services, and
                  define an architecture strategy to ensure scalability,
                  security, and cost efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Infrastructure Design & Provisioning
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Utilize AWS CloudFormation or Terraform to define and deploy
                  scalable, automated infrastructure, ensuring high availability
                  and resilience.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  API Integration & Serverless Computing
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Deploy scalable APIs using AWS API Gateway and Lambda
                  functions, ensuring seamless integration with databases,
                  microservices, and external systems.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Performance Optimization & Cost Efficiency
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Optimize AWS resources using Auto Scaling, Load Balancers, and
                  cost-management tools to improve performance and minimize
                  expenses.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Security & Compliance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement IAM roles, encryption, and security groups to
                  protect cloud resources while ensuring compliance with
                  industry regulations.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Deployment & Monitoring
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Use AWS CodeDeploy and CI/CD pipelines for automated
                  deployments. Monitor applications with CloudWatch and maintain
                  reliability with AWS Health Dashboard.
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

export default AWS;
