import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import "../../styles/tooltip.css";

const NavLinks = ({ scrollToTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const techDropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const industriesButtonRef = useRef(null);
  const techButtonRef = useRef(null);

  // Smooth scroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setIsTechOpen(false);
    }
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (
        techDropdownRef.current &&
        !techDropdownRef.current.contains(event.target) &&
        techButtonRef.current &&
        !techButtonRef.current.contains(event.target)
      ) {
        setIsTechOpen(false);
      }
      if (
        industriesDropdownRef.current &&
        !industriesDropdownRef.current.contains(event.target) &&
        industriesButtonRef.current &&
        !industriesButtonRef.current.contains(event.target)
      ) {
        setIsIndustryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Home Link */}
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/#"
        onClick={scrollToTop}
      >
        HOME
      </Link>

      {/* About Link */}
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/"
        onClick={() => smoothScroll("about")}
      >
        ABOUT
      </Link>

      <div className="relative inline-block" ref={dropdownRef}>
  <button
    className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
    onClick={() => setIsOpen((prev) => !prev)}
    ref={buttonRef}
  >
    SERVICES <span className="text-sm">{isOpen ? '▲' : '▼'}</span>
  </button>

  {/* Mobile View Dropdown */}
  {isOpen && (
    <div className="block md:hidden mt-1 pl-6 pr-4">
      <ul className="space-y-2">
        <li>
          <Link
            to="/digital-product"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsOpen(false)}
          >
            Digital Product Design
          </Link>
        </li>
        <li>
          <Link
            to="/software-architect"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsOpen(false)}
          >
            Software Architecture
          </Link>
        </li>
        <li>
          <Link
            to="/engineering"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsOpen(false)}
          >
            Engineering & DevOps
          </Link>
        </li>
        <li>
          <Link
            to="/mobile-dev"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsOpen(false)}
          >
            Mobile App Development
          </Link>
        </li>
        <li>
          <Link
            to="/staff-augment"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsOpen(false)}
          >
            Staff Augmentation
          </Link>
        </li>
      </ul>
    </div>
  )}

  {/* Desktop View Dropdown - unchanged */}
  {isOpen && (
    <div className="hidden md:block fixed top-20 left-0 w-full bg-white border-t border-gray-300 shadow-xl z-50 p-8 sm:max-h-[80vh] sm:overflow-auto sm:scroll-smooth">
      <button
        className="absolute top-4 right-8 text-2xl font-bold text-gray-700 hover:text-black"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 mt-5">
        Services We Serve
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
        <Link to="/digital-product" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Digital Product Design
            </h3>
            <p className="text-gray-700">
              We craft intuitive and visually compelling interfaces by
              combining user research, usability testing, and iterative
              design...
            </p>
          </div>
        </Link>

        <Link to="/software-architect" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Software Architecture
            </h3>
            <p className="text-gray-700">
              Our architects design scalable, modular, and maintainable
              software solutions...
            </p>
          </div>
        </Link>

        <Link to="/engineering" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Engineering & DevOps
            </h3>
            <p className="text-gray-700">
              We integrate agile development with DevOps best practices to
              accelerate deployment cycles...
            </p>
          </div>
        </Link>

        <Link to="/mobile-dev" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Mobile App Development
            </h3>
            <p className="text-gray-700">
              From concept to launch, we build high-performance mobile
              applications...
            </p>
          </div>
        </Link>

        <Link to="/staff-augment" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Staff Augmentation
            </h3>
            <p className="text-gray-700">
              Scale your team with top-tier IT talent...
            </p>
          </div>
        </Link>
      </div>
    </div>
  )}
</div>


      <div className="relative" ref={industriesDropdownRef}>
  {/* INDUSTRIES button - always visible */}
  <button
    className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
    onClick={() => setIsIndustryOpen((prev) => !prev)}
    ref={industriesButtonRef}
  >
    INDUSTRIES
    <span className="ml-1 text-sm">{isIndustryOpen ? '▲' : '▼'}</span>
  </button>

  {/* Mobile View Dropdown */}
  {isIndustryOpen && (
    <div className="mt-1 pl-6 pr-4 block md:hidden">
      <ul className="space-y-2">
        <li>
          <Link
            to="/healthcare"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsIndustryOpen(false)}
          >
            Healthcare
          </Link>
        </li>
        <li>
          <Link
            to="/finance"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsIndustryOpen(false)}
          >
            Finance
          </Link>
        </li>
        <li>
          <Link
            to="/ecommerce"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsIndustryOpen(false)}
          >
            E-commerce
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsIndustryOpen(false)}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="/manufacturing"
            className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
            onClick={() => setIsIndustryOpen(false)}
          >
            Manufacturing
          </Link>
        </li>
      </ul>
    </div>
  )}

  {/* Desktop View Dropdown */}
  {isIndustryOpen && (
    <div className="hidden md:block fixed top-20 left-0 w-full bg-white border-t border-gray-300 shadow-xl z-50 p-8 overflow-auto">
      <button
        className="absolute top-4 right-8 text-2xl font-bold text-gray-700 hover:text-black"
        onClick={() => setIsIndustryOpen(false)}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 mt-5">
        Industries We Serve
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
        <Link to="/healthcare" onClick={() => setIsIndustryOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Healthcare</h3>
            <p className="text-gray-700"> The healthcare industry is a vital domain focused on
                    improving lives through medical services, digital health
                    solutions, and patient-centered technologies that enhance
                    care delivery and accessibility.</p>
          </div>
        </Link>

        <Link to="/finance" onClick={() => setIsIndustryOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Finance</h3>
            <p className="text-gray-700">The finance sector drives economic stability and growth
                    through banking, investment, insurance, and fintech
                    innovations that ensure secure, efficient, and intelligent
                    money management.</p>
          </div>
        </Link>

        <Link to="/ecommerce" onClick={() => setIsIndustryOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">E-commerce</h3>
            <p className="text-gray-700"> E-commerce revolutionizes the way consumers shop by offering
                    seamless, personalized online experiences, powered by
                    scalable platforms, real-time logistics, and secure payment
                    systems.</p>
          </div>
        </Link>

        <Link to="/education" onClick={() => setIsIndustryOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Education</h3>
            <p className="text-gray-700"> The education industry is transforming with digital learning
                    platforms, smart classrooms, and interactive content that
                    make knowledge more accessible, engaging, and inclusive for
                    all learners.</p>
          </div>
        </Link>

        <Link to="/manufacturing" onClick={() => setIsIndustryOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <h3 className="text-xl font-bold mb-3 text-blue-900">Manufacturing</h3>
            <p className="text-gray-700"> Manufacturing integrates advanced automation, IoT, and
                    supply chain optimization to boost productivity, reduce
                    downtime, and enable smart, cost-effective production at
                    scale.</p>
          </div>
        </Link>
      </div>
    </div>
  )}
</div>


      {/* Technology Dropdown */}
      <div className="relative inline-block" ref={techDropdownRef}>
        <button
          className="px-4 py-2F font-extrabold text-blue-900 hover:text-blue-900"
          onClick={() => setIsTechOpen((prev) => !prev)}
          ref={techButtonRef}
        >
          TECHNOLOGY ▼
        </button>

        {isTechOpen && (
          <div className="fixed top-20 left-0 w-full h-40% bg-white border-t border-gray-300 shadow-xl z-50 p-8 overflow-auto">
            <button
              className="absolute top-4 right-8 text-2xl font-bold text-gray-700 hover:text-black"
              onClick={() => setIsTechOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 mt-10">
              Our Technology
            </h2>

            {/* Flexbox layout for technologies */}
            <div className="flex flex-wrap gap-6 justify-center mb-10">
              {/* Web Tech */}
              <div className=" min-w-[300px]">
                <h3 className="text-xl font-semibold text-gray-800 ">
                  Web Development
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "ReactJS", id: "webtech1", path: "/react" },
                    { label: "Angular", id: "webtech2", path: "/angular" },
                    { label: "NodeJs", id: "webtech3", path: "/node" },
                    {
                      label: "TypeScript",
                      id: "webtech5",
                      path: "/typescript",
                    },
                  ].map(({ label, id, path }) => (
                    <Link
                      key={id}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition"
                      to={path}
                      onClick={() => smoothScroll(id)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Tech */}
              <div className=" min-w-[300px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Mobile Development
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      label: "React Native",
                      id: "mobiletech1",
                      path: "/react-native",
                    },
                    { label: "Flutter", id: "mobiletech2", path: "/flutter" },
                  ].map(({ label, id, path }) => (
                    <Link
                      key={id}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition"
                      to={path}
                      onClick={() => smoothScroll(id)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Backend Dev */}
              <div className=" min-w-[300px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  DevOps Development
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Docker", id: "devopsdev1", path: "/docker" },
                    { label: "Jenkins", id: "devopsdev2", path: "/jenkins" },
                    { label: "AWS", id: "devopsdev3", path: "/aws" },
                  ].map(({ label, id, path }) => (
                    <Link
                      key={id}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition"
                      to={path}
                      onClick={() => smoothScroll(id)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className=" min-w-[300px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Database Development
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "MySQL", id: "database1", path: "/mysql" },
                    { label: "Mongo DB", id: "database2", path: "/mongodb" },
                    { label: "Dynamo DB", id: "database3", path: "/dynamodb" },
                  ].map(({ label, id, path }) => (
                    <Link
                      key={id}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition"
                      to={path}
                      onClick={() => smoothScroll(id)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className=" min-w-[300px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Design
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "Figma", id: "design1", path: "/figma" },
                    { label: "Photoshop", id: "design2", path: "/photoshop" },
                  ].map(({ label, id, path }) => (
                    <Link
                      key={id}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition"
                      to={path}
                      onClick={() => smoothScroll(id)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Link */}
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/contact"
        onClick={scrollToTop}
      >
        CONTACT
      </Link>

      {/* Vendor Link */}
      <Link
        className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
        to="/vendor"
        onClick={scrollToTop}
      >
        VENDOR
      </Link>

      {/* Phone Button */}
      <button className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl">
        <Phone className="w-5 h-5 mr-2" />
        <label htmlFor="phone" className="tooltip">
          855-557-9264
          <span className="tooltip-text">
            <span className="tooltip-icon">
              <Phone />
            </span>
            Call Now
          </span>
        </label>
      </button>
    </>
  );
};

export default NavLinks;
