import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import img1 from "../../images/E-comm/slide.avif";
import img2 from "../../images/E-comm/about.jpeg";
import Footer from "../../components/Footer";

const Ecommerce = () => {
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
            SHJ delivers secure, scalable finance solutions for modern digital
            growth.
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ builds fast, secure, and scalable eCommerce platforms,
            delivering seamless user experiences and powerful backend systems to
            help brands grow in the digital marketplace.
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
              className="rounded-t w-3/4 h-auto object-cover mx-auto"
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
              About E-Commerce Industries
            </h3>
            <p className="my-3 text-xl text-gray-600 font-semibold text-left">
              Our eCommerce solutions are designed to help businesses deliver
              fast, secure, and seamless online shopping experiences. With a
              focus on scalability, user-centric design, and real-time
              performance, we build platforms that support high-volume
              transactions, personalized user journeys, and smooth integrations
              with payment gateways, inventory systems, and third-party
              services. Whether you're a startup or an enterprise, our
              technology enables you to adapt quickly to market trends,
              streamline operations, and maximize customer satisfaction across
              all devices.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          E-Commerce Development Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white hover:scale-105 rounded-lg shadow-2xl p-3 transition-all">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Product Catalog Setup
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Define and structure your product data with categories,
                  variants, pricing, and availability to ensure a smooth
                  shopping experience.
                </p>
              </div>
            </div>

            <div className="bg-white hover:scale-105 rounded-lg shadow-2xl p-3 transition-all">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  User Authentication & Roles
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Implement secure sign-up/login processes, customer accounts,
                  and admin roles with JWTs and session management.
                </p>
              </div>
            </div>

            <div className="bg-white hover:scale-105 rounded-lg shadow-2xl p-3 transition-all">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Shopping Cart & Checkout
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Build a dynamic cart with quantity updates, discount codes,
                  tax calculations, and a seamless, multi-step checkout flow.
                </p>
              </div>
            </div>

            <div className="bg-white hover:scale-105 rounded-lg shadow-2xl p-3 transition-all">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Payment Gateway Integration
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Integrate with trusted payment providers like Stripe,
                  Razorpay, or PayPal to ensure secure and smooth transactions.
                </p>
              </div>
            </div>

            <div className="bg-white hover:scale-105 rounded-lg shadow-2xl p-3 transition-all">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Order Management & Fulfillment
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Track orders from placement to delivery with real-time status
                  updates, stock deduction, and shipment management.
                </p>
              </div>
            </div>

            <div className="bg-white hover:scale-105 rounded-lg shadow-2xl p-3 transition-all">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Customer Support & Feedback
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Enable product reviews, customer inquiries, return/refund
                  processes, and build loyalty with excellent post-sale support.
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

export default Ecommerce;
