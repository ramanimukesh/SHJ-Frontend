import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Phone } from "lucide-react";
import "../styles/tooltip.css";

const Footer = () => {
  return (
    <footer className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 py-30 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
            <ul className="text-md">
              <li className="mb-2">
                <HashLink
                  to="/"
                  scroll={(el) =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out"
                >
                  About us
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="/contact"
                  className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out"
                >
                  Contact us
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto text-center sm:text-center">
            <h6 className="text-[#013289] text-xl font-bold mb-4">OUR PAGES</h6>
            <ul className="text-md">
              <li className="mb-2">
                <Link
                  to="/kitchen"
                  className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/service"
                  className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/industries"
                  className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out"
                >
                  Industries
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/technology"
                  className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out"
                >
                  Technologies
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto text-center">
            <h6 className="text-[#013289] text-xl font-bold mb-4">
              Contact Us
            </h6>

            <div className="text-md font-medium mb-6 flex justify-center items-center">
              <Phone className="w-5 h-5 mr-2 text-[#013289]" />
              <label htmlFor="phone" className="tooltip">
                <span className="text-[#013289]">732-347-9171</span>{" "}
                <span className="tooltip-text">
                  <span className="tooltip-icon">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span className="tooltip-text-content">732-34-SWAMI</span>
                </span>
              </label>
            </div>

            <div className="flex justify-center space-x-4">
              <Link
                to="#"
                className="text-blue-900 hover:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>

              <Link
                to="#"
                className="text-blue-900 hover:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>

              <Link
                to="#"
                className="text-blue-900 hover:text-gray-500 transition duration-150 ease-in-out"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27 4H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM10.5 25H7V13h3.5v12zM8 11.5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm16.5 13.5h-3.5v-5.9c0-1.4-.6-2.1-1.8-2.1s-1.9.8-1.9 2v6h-3.5V13h3.5v1.7a3.6 3.6 0 0 1 3.2-1.7c2.3 0 4 1.5 4 4.8V25z" />
                </svg>
              </Link>

              <a
                href="mailto:ramani.mukesh@gmail.com"
                className="text-blue-900 hover:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Email"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27 6H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.4 2L16 14.7 6.4 8zm1.4 16H5V10.4l11 7.4 11-7.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-5 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <HashLink className="hover:text-gray-900">
            Swaminarayan Construction
          </HashLink>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
