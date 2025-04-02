import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import "../../styles/tooltip.css";

const NavLinks = ({ scrollToTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);
  const dropdownRef = useRef(null);
  const techDropdownRef = useRef(null);
  const buttonRef = useRef(null);
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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Home Link */}
      <Link className="px-4 font-extrabold text-blue-900 hover:text-blue-900" to="/#" onClick={scrollToTop}>
        HOME
      </Link>

      {/* About Link */}
      <Link className="px-4 font-extrabold text-blue-900 hover:text-blue-900" to="/" onClick={() => smoothScroll("about")}>
        ABOUT
      </Link>

      {/* Services Dropdown */}
      <div className="relative inline-block" ref={dropdownRef}>
        <button className="px-4 font-extrabold text-blue-900 hover:text-blue-900" onClick={() => setIsOpen((prev) => !prev)} ref={buttonRef}>
          SERVICES ▼
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-2xl">
            {[{ label: "Kitchen Remodeling", id: "service1", path: "/kitchen" },
              { label: "Bathroom Remodeling", id: "service2", path: "/bathroom" },
              { label: "Laundry Room Remodeling", id: "service3", path: "/laundry" },
              { label: "Basement Remodeling", id: "service4", path: "/basement" },
              { label: "Deck & Fencing", id: "service5", path: "/deck" },
              { label: "Roof Replacement", id: "service6", path: "/roof" },
              { label: "Flooring", id: "service7", path: "/flooring" },
              { label: "Quartz", id: "service8", path: "/quartz" },
            ].map(({ label, id, path }) => (
              <li key={id}>
                <Link className="block px-6 py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 transition" to={path} onClick={() => smoothScroll(id)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Technology Dropdown */}
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
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Our Technologies
      </h2>

      {/* Flexbox layout for technologies */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Web Tech */}
        <div className=" min-w-[200px]">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Web Tech
          </h3>
          <div className="space-y-2">
            {[{ label: "ReactJS", id: "webtech1", path: "/react" },
              { label: "Angular", id: "webtech2", path: "/angular" },
              { label: "NodeJs", id: "webtech3", path: "/node" },
              { label: "Java", id: "webtech4", path: "/next" },
              { label: "TypeScript", id: "webtech5", path: "/typescript" },
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
        <div className=" min-w-[200px]">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Mobile Tech
          </h3>
          <div className="space-y-2">
            {[{ label: "React Native", id: "mobiletech1", path: "/react-native" },
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
        <div className=" min-w-[200px]">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Backend Dev
          </h3>
          <div className="space-y-2">
            {[{ label: "NodeJS", id: "backenddev1", path: "/nodejs" },
              { label: "Python", id: "backenddev3", path: "/django" },
              { label: "Spring Boot", id: "backenddev4", path: "/spring" },
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
        <div className=" min-w-[200px]">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Design</h3>
          <div className="space-y-2">
            {[{ label: "Figma", id: "design1", path: "/figma" },
              { label: "Photoshop", id: "design2", path: "/adobe-xd" },
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

        {/* Testing */}
        <div className=" min-w-[200px]">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Testing</h3>
          <div className="space-y-2">
            {[{ label: "Jest", id: "testing1", path: "/selenium" },
              { label: "Chai", id: "testing2", path: "/cypress" },  
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
      <Link className="px-4 font-extrabold text-blue-900 hover:text-blue-900" to="/contact" onClick={scrollToTop}>
        CONTACT
      </Link>

      {/* Vendor Link */}
      <Link className="px-4 font-extrabold text-blue-900 hover:text-blue-900" to="/vendor" onClick={scrollToTop}>
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
