import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/Engineering/slide.jpg";
import img2 from "../../images/Engineering/about.avif";
import Footer from "../../components/Footer";
const Engineering = () => {
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
            Accelerate Innovation with Digital Engineering & DevOps
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ bridges development and operations with automated CI/CD
            pipelines, cloud-native infrastructure, and agile engineering
            practices — empowering your teams to deliver faster, safer, and
            smarter.
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
  Why Choose Engineering & DevOps?
</h3>
<ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
  <li>
    <strong>Seamless Integration:</strong> DevOps bridges the gap between development and operations, ensuring smooth collaboration for faster software delivery and continuous improvement.
  </li>
  <li>
    <strong>Automation & Efficiency:</strong> With automated workflows for testing, deployment, and monitoring, DevOps improves the efficiency of your software delivery pipeline, reducing manual effort and human error.
  </li>
  <li>
    <strong>Scalability & Flexibility:</strong> DevOps practices enable scalable infrastructure and software architectures, allowing you to meet growing demands while maintaining flexibility across environments.
  </li>
  <li>
    <strong>Faster Time-to-Market:</strong> By combining development, testing, and deployment in a continuous cycle, DevOps accelerates the delivery process, enabling faster rollouts and iterative improvements.
  </li>
  <li>
    <strong>Improved Reliability & Monitoring:</strong> DevOps integrates real-time monitoring and automated testing, ensuring higher system reliability, proactive issue resolution, and enhanced performance.
  </li>
</ul>

          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Engineering & DevOps Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Infrastructure Automation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Automate infrastructure provisioning using tools like
                  Terraform, Ansible, and CloudFormation to ensure consistency
                  and scalability across environments.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Continuous Integration & Delivery (CI/CD)
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-40">
                  Streamline code integration and delivery pipelines with tools
                  like Jenkins, GitLab CI, and CircleCI for faster and more
                  reliable software deployments.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Monitoring & Logging
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Set up real-time monitoring and centralized logging with tools
                  like Prometheus, Grafana, ELK Stack, and Splunk to proactively
                  manage and troubleshoot systems.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Cloud-Native Architectures
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Design and deploy cloud-native applications using
                  microservices, Kubernetes, and containerization to improve
                  scalability, resilience, and resource optimization.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Security & Compliance
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement robust security practices including vulnerability
                  scanning, threat detection, and compliance monitoring for
                  applications and infrastructure.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Automated Testing & Validation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Establish automated testing frameworks for unit, integration,
                  and end-to-end tests to ensure continuous quality assurance in
                  your DevOps pipelines.
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

export default Engineering;
