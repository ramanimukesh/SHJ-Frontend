import React, { useState, useEffect, useRef } from "react";
import NavLinks from "../Navbar/NavLinks";
import img from "../../images/Navbar/STL.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  // Scroll to top when clicking "Home"
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
    className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg transition duration-300 ease-in-out"
    style={{ overflow: "visible" }}
    >
      <div className="flex items-center justify-between py-2 px-4 lg:px-12 w-full">
        {/* Left Side - Logo & Hamburger */}
        <div className="flex items-center">
          {/* Hamburger Menu - Mobile Only */}
          <button
            className="p-1 text-blue-900 lg:hidden mr-2"
            onClick={handleClick}
          >
            {isOpen ? "✖️" : "☰"}
          </button>

          <img
            src={img}
            alt="Swaminarayan Construction LLC"
            title="Swaminarayan Construction LLC"
            className="h-20 sm:h-20 md:h-22 lg:h-23 lg:ml-56 cursor-pointer scale-110"
            onClick={scrollToTop}
          />
        </div>

        {/* NavLinks - Desktop */}
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLinks scrollToTop={scrollToTop} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-xl z-40 p-6 flex flex-col items-center space-y-6 lg:hidden"
          style={{ maxWidth: "75vw" }}
        >
          <button className="self-end text-xl" onClick={handleClick}>
            ✖️
          </button>
          {/* Logo - Clicking it scrolls to the top */}
          <img
            src={img}
            alt="Swaminarayan Construction LLC"
            title="Swaminarayan Construction LLC"
            className="h-12 sm:h-14 md:h-16 cursor-pointer" // Added cursor pointer for better UX
            onClick={scrollToTop} // Scroll to top on logo click
          />

          <NavLinks scrollToTop={scrollToTop} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
