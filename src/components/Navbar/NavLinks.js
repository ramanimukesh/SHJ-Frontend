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
  const timeoutRef = useRef(null);

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

  const industryMouseEnter = () => {
    if (window.innerWidth >= 768) {
      clearTimeout(timeoutRef.current);
      setIsIndustryOpen(true);
    }
  };
  const serviceMouseEnter = () => {
    if (window.innerWidth >= 768) {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const serviceMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  const techMouseEnter = () => {
    if (window.innerWidth >= 768) {
      clearTimeout(timeoutRef.current);
      setIsTechOpen(true);
    }
  };

  const techMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setIsTechOpen(false);
      }, 150);
    }
  };

  const industryMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setIsIndustryOpen(false);
      }, 150); // short delay to allow interaction
    }
  };

  const ServiceClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  const IndustryClick = () => {
    if (window.innerWidth < 768) {
      setIsIndustryOpen(!isIndustryOpen);
    }
  };

  const TechClick = () => {
    if (window.innerWidth < 768) {
      setIsTechOpen(!isTechOpen);
    }
  };

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

      <div
        className="relative inline-block"
        ref={dropdownRef}
        onMouseEnter={serviceMouseEnter}
        onMouseLeave={serviceMouseLeave}
      >
        <div className="w-full flex justify-center">
          <button
            className="px-4 py-2 font-extrabold text-blue-900 hover:text-blue-900"
            ref={buttonRef}
            onClick={(e) => {
              if (window.innerWidth < 768) {
                e.preventDefault();
                ServiceClick();
              } else {
                window.location.href = "/service";
              }
            }}
          >
            SERVICES <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
          </button>
        </div>
        {/* Mobile View Dropdown */}
        {isOpen && (
          <div className="mt-1 pl-6 pr-4 block md:hidden ">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/digital-product"
                  className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
                  onClick={() => setIsOpen(false)}
                >
                  Digital Product Designnn
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
                    Transform your ideas into intuitive digital experiences. Our
                    design process is user-centered, data-informed, and focused
                    on creating real impact.
                  </p>
                </div>
              </Link>

              <Link to="/software-architect" onClick={() => setIsOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Software Architecture
                  </h3>
                  <p className="text-gray-700">
                    Build future-proof systems with scalable architecture. We
                    align your tech strategy with business goals to deliver
                    long-term success.
                  </p>
                </div>
              </Link>

              <Link to="/engineering" onClick={() => setIsOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Engineering & DevOps
                  </h3>
                  <p className="text-gray-700">
                    Automate, optimize, and scale with confidence. Our
                    engineering teams embrace DevOps principles to streamline
                    delivery and reduce downtime.
                  </p>
                </div>
              </Link>

              <Link to="/mobile-dev" onClick={() => setIsOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Mobile App Development
                  </h3>
                  <p className="text-gray-700">
                    We create sleek, high-performance apps for iOS and Android,
                    tailored to your brand and built for long-term engagement.
                  </p>
                </div>
              </Link>

              <Link to="/staff-augment" onClick={() => setIsOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Staff Augmentation
                  </h3>
                  <p className="text-gray-700">
                    Quickly extend your team with top engineering talent. Our
                    flexible staffing solutions help you deliver faster and
                    scale smarter.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div
        className="relative"
        ref={industriesDropdownRef}
        onMouseEnter={industryMouseEnter}
        onMouseLeave={industryMouseLeave}
      >
        {/* INDUSTRIES button - always visible */}
        <div className="w-full flex justify-center">
          <Link
            to={window.innerWidth >= 768 ? "/industries" : "#"}
            onClick={(e) => {
              if (window.innerWidth < 768) {
                e.preventDefault(); // prevent navigation in mobile
                IndustryClick(); // toggle dropdown
              }
            }}
          >
            <button
              className="px-4 font-extrabold text-blue-900 hover:text-blue-900"
              ref={industriesButtonRef}
            >
              INDUSTRIES
              <span className="ml-1 text-sm">{isIndustryOpen ? "▲" : "▼"}</span>
            </button>
          </Link>
        </div>

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
                  to="/digital-banking"
                  className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
                  onClick={() => setIsIndustryOpen(false)}
                >
                  Digital Banking
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
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Healthcare
                  </h3>
                  <p className="text-gray-700">
                    {" "}
                    The healthcare industry is a vital domain focused on
                    improving lives through medical services, digital health
                    solutions, and patient-centered technologies that enhance
                    care delivery and accessibility.
                  </p>
                </div>
              </Link>

              <Link to="/finance" onClick={() => setIsIndustryOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Finance
                  </h3>
                  <p className="text-gray-700">
                    The finance sector drives economic stability and growth
                    through banking, investment, insurance, and fintech
                    innovations that ensure secure, efficient, and intelligent
                    money management.
                  </p>
                </div>
              </Link>

              <Link to="/ecommerce" onClick={() => setIsIndustryOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    E-commerce
                  </h3>
                  <p className="text-gray-700">
                    {" "}
                    E-commerce revolutionizes the way consumers shop by offering
                    seamless, personalized online experiences, powered by
                    scalable platforms, real-time logistics, and secure payment
                    systems.
                  </p>
                </div>
              </Link>

              <Link to="/education" onClick={() => setIsIndustryOpen(false)}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Education
                  </h3>
                  <p className="text-gray-700">
                    {" "}
                    The education industry is transforming with digital learning
                    platforms, smart classrooms, and interactive content that
                    make knowledge more accessible, engaging, and inclusive for
                    all learners.
                  </p>
                </div>
              </Link>

              <Link
                to="/digital-banking"
                onClick={() => setIsIndustryOpen(false)}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Digital Banking
                  </h3>
                  <p className="text-gray-700">
                    Digital banking transforms financial services through
                    seamless online experiences, enhanced security, and
                    innovative solutions that simplify transactions and improve
                    customer satisfaction.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Technology Dropdown */}
      <div
        className="relative inline-block"
        ref={techDropdownRef}
        onMouseEnter={techMouseEnter}
        onMouseLeave={techMouseLeave}
      >
        <div className="w-full flex justify-center">
          <Link
            to={window.innerWidth >= 768 ? "/Technology" : "#"}
            onClick={(e) => {
              if (window.innerWidth < 768) {
                e.preventDefault(); // Stop navigation
                TechClick(); // Open dropdown
              }
            }}
          >
            <button
              className="px-4 py-2 font-extrabold text-blue-900 hover:text-blue-900"
              ref={techButtonRef}
            >
              TECHNOLOGY{" "}
              <span className="text-sm">{isTechOpen ? "▲" : "▼"}</span>
            </button>
          </Link>
        </div>

        {isTechOpen && (
          <>
            {/* Mobile View */}
            <div className="mt-1 pl-6 pr-4 block md:hidden max-h-60 overflow-y-auto">
              {[
                {
                  title: "Web Development",
                  links: [
                    { label: "ReactJS", path: "/react" },
                    { label: "Angular", path: "/angular" },
                    { label: "Node.js", path: "/node" },
                    { label: "TypeScript", path: "/typescript" },
                  ],
                },
                {
                  title: "Mobile Development",
                  links: [
                    { label: "React Native", path: "/react-native" },
                    { label: "Flutter", path: "/flutter" },
                  ],
                },
                {
                  title: "DevOps",
                  links: [
                    { label: "Docker", path: "/docker" },
                    { label: "Jenkins", path: "/jenkins" },
                    { label: "AWS", path: "/aws" },
                  ],
                },
                {
                  title: "Database",
                  links: [
                    { label: "MySQL", path: "/mysql" },
                    { label: "MongoDB", path: "/mongodb" },
                    { label: "DynamoDB", path: "/dynamodb" },
                  ],
                },
                {
                  title: "Design",
                  links: [
                    { label: "Figma", path: "/figma" },
                    { label: "Photoshop", path: "/photoshop" },
                  ],
                },
              ].map(({ title, links }) => (
                <div key={title} className="mb-2">
                  <h4 className="text-sm font-semibold text-[#0A2D5F] mb-1">
                    {title}
                  </h4>
                  <ul className="space-y-2">
                    {links.map(({ label, path }) => (
                      <li key={label}>
                        <Link
                          to={path}
                          className="block text-sm text-[#0A2D5F] font-medium hover:text-[#1E40AF]"
                          onClick={() => setIsTechOpen(false)}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="fixed top-20 left-0 w-full max-h-[80vh] bg-white border-t border-gray-300 shadow-xl z-50 p-8 overflow-auto hidden md:block">
              <button
                className="absolute top-4 right-8 text-2xl font-bold text-gray-700 hover:text-black"
                onClick={() => setIsTechOpen(false)}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 mt-10">
                Our Technology
              </h2>
              <div className="flex flex-wrap gap-6 justify-center mb-10">
                {[
                  {
                    title: "Web Development",
                    links: [
                      { label: "ReactJS", path: "/react", id: "webtech1" },
                      { label: "Angular", path: "/angular", id: "webtech2" },
                      { label: "NodeJs", path: "/node", id: "webtech3" },
                      { label: "TypeScript", path: "/typescript", id: "webtech4"},
                      {label: "Java", path: "/java", id: "webtech5"}
                    ],
                  },
                  {
                    title: "Mobile Development",
                    links: [
                      {
                        label: "React Native",
                        path: "/react-native",
                        id: "mobiletech1",
                      },
                      { label: "Flutter", path: "/flutter", id: "mobiletech2" },
                    ],
                  },
                  {
                    title: "DevOps Development",
                    links: [
                      { label: "Docker", path: "/docker", id: "devops1" },
                      { label: "Jenkins", path: "/jenkins", id: "devops2" },
                      { label: "AWS", path: "/aws", id: "devops3" },
                    ],
                  },
                  {
                    title: "Database Development",
                    links: [
                      { label: "MySQL", path: "/mysql", id: "db1" },
                      { label: "MongoDB", path: "/mongodb", id: "db2" },
                      { label: "DynamoDB", path: "/dynamodb", id: "db3" },
                    ],
                  },
                  {
                    title: "Design",
                    links: [
                      { label: "Figma", path: "/figma", id: "design1" },
                      { label: "Photoshop", path: "/photoshop", id: "design2" },
                    ],
                  },
                ].map(({ title, links }) => (
                  <div key={title} className="min-w-[300px]">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {title}
                    </h3>
                    <div className="space-y-2">
                      {links.map(({ label, path, id }) => (
                        <Link
                          key={id}
                          to={path}
                          className="block text-lg text-gray-700 hover:text-blue-600 transition"
                          onClick={() => smoothScroll(id)}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
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

      {/* Phone Button */}
      <button className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl">
        <Phone className="w-5 h-5 mr-2" />
        <label htmlFor="phone" className="tooltip">
          732-347-9171
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
