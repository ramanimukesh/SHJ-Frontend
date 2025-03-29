import React from "react";
import { Link } from "react-router-dom";
import img from "../images/Kitchen/kitchen.jpeg";
import img2 from "../images/Bathroom/image2.jpg";
import img3 from "../images/Laundry/laundry.jpg";
import img4 from "../images/Flooring/vinyl-floor.jpg";
import img5 from "../images/Basement/image2.jpg";
import img6 from "../images/Deck/image1.jpg";
import img7 from "../images/Roof/image4.jpg";
import img8 from "../images/Quartz/quartz6.jpg";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Sahajanand Technologies provides end-to-end software development
            services seamlessly
            <br />
            tailored to meet the unique requirements of your projects and
            business.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mr-40 ml-40">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/kitchen" className="hover:text-gray-300">
                    Web & Mobile App development
                  </Link>
                </h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/bathroom" className="hover:text-gray-300">
                    UI/UX Design
                  </Link>
                </h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/laundry" className="hover:text-gray-300">
                    DevOps
                  </Link>
                </h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img5}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/basement" className="hover:text-gray-300">
                    Project management services
                  </Link>
                </h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img6}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/deck" className="hover:text-gray-300">
                    Custom API Development
                  </Link>
                </h2>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="w-full h-80 object-cover rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img7}
                />
                <h2 className="font-semibold my-6 text-2xl text-center">
                  <Link to="/roof" className="hover:text-gray-300">
                    Quality assurance{" "}
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
