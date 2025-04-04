import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/NavBar";
import img1 from "../../../images/Design/Photoshop/slide.webp";
import img2 from "../../../images/Design/Photoshop/about.png";
import Footer from "../../../components/Footer";
const Photoshop = () => {
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
            Unlock Your Creative Potential with Adobe Photoshop
          </h1>
          <div className="text-xl font-semibold tracking-tight mb-5 text-white">
            SHJ specializes in advanced Photoshop solutions, helping designers
            and businesses create stunning visuals, seamless edits, and
            professional-grade digital content with ease.
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
              Why Choose Photoshop for Your Design Projects?
            </h3>
            <ul className="my-3 text-xl text-gray-600 font-semibold text-left list-disc pl-5">
              <li>
                <strong>Powerful Editing Tools:</strong> Photoshop offers an
                extensive set of editing tools to create detailed and
                high-quality designs, from image manipulation to advanced
                retouching.
              </li>
              <li>
                <strong>Advanced Layer Management:</strong> Easily manage
                layers, create complex compositions, and apply effects
                non-destructively, allowing for flexibility in design creation.
              </li>
              <li>
                <strong>Seamless Integration:</strong> Photoshop integrates well
                with other Adobe products such as Illustrator, After Effects,
                and Lightroom, enhancing your workflow across various platforms.
              </li>
              <li>
                <strong>Extensive File Compatibility:</strong> Photoshop
                supports a wide range of file formats, ensuring that your work
                can be easily shared, edited, and used in different projects.
              </li>
              <li>
                <strong>Industry Standard:</strong> As the industry-leading
                software, Photoshop is trusted by professional designers,
                photographers, and artists, providing powerful tools for both
                creative and technical tasks.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-16 flex flex-col items-center text-center">
        <h2 className="my-4 text-3xl text-blue-900 uppercase font-bold">
          Photoshop Design Workflow
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-4"></div>
        </div>
        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Design Brief & Conceptualization
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Gather client requirements, define design objectives, and
                  create mood boards to establish a visual concept for the
                  project.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Image Sourcing & Asset Creation
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Gather high-quality images or create custom assets using
                  Photoshop's powerful tools for drawing, painting, and photo
                  manipulation.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Design Execution & Composition
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Combine images, illustrations, and text using Photoshop’s
                  layers and blending modes to create polished, cohesive
                  designs.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Color Grading & Enhancement
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Enhance visual appeal by adjusting colors, contrast, and
                  saturation with Photoshop’s advanced color correction tools.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Final Touches & Detailing
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Add textures, filters, or special effects, and refine details
                  to give the design a professional and polished finish.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h3 className="font-semibold my-4 text-lg md:text-2xl text-center mb-8 h-12">
                  Export & Delivery
                </h3>
                <p className="text-lg font-medium leading-6 h-auto md:h-48">
                  Export the final design in various formats (JPG, PNG, PSD) for
                  different platforms and deliver to the client or team for use.
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

export default Photoshop;
