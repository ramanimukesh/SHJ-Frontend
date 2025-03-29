import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import { userContact } from "../api/nodejs-api.js";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  useDocTitle("SWC");

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    captcha: ""  // Store CAPTCHA response
  });

  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    captcha: "" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleCaptchaChange = (value) => {
    setFormData({ ...formData, captcha: value });
    setIsCaptchaVerified(!!value); // Set the captcha verification state
    validateField("captcha", value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = !value ? "Email is required" : !emailRegex.test(value) ? "Enter a valid email address" : "";
        break;
      case "phone":
        const phoneRegex = /^[0-9]{10}$/;
        newErrors.phone = !value ? "Phone number is required" : !phoneRegex.test(value) ? "Enter a valid 10-digit phone number" : "";
        break;
      case "name":
        newErrors.name = !value ? "First Name is required" : "";
        break;
      case "lastname":
        newErrors.lastname = !value ? "Last Name is required" : "";
        break;
      case "message":
        newErrors.message = !value ? "Message is required" : "";
        break;
      case "captcha":
        newErrors.captcha = !value ? "Please complete the CAPTCHA" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    let formValid = true;
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "captcha") {
        validateField(key, formData[key]);
        formValid = false;
      }
    });
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    var submitButton =  document.getElementById("submitBtn");

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
      // API call to submit the form data
      const response = await userContact(formData);
      if (response.status === 201) {

        submitButton.style.backgroundColor = "#4CAF50"; // Change to green
        submitButton.innerHTML = "Message sent successfully.";

        setFormData({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
          captcha: ""  // Reset captcha after successful form submission
        });
      } else {
        throw new Error(response.data.message || "An error occurred");
      }
    } catch (error) {
        submitButton.style.backgroundColor = "#F44336"; // Change to red
        submitButton.innerHTML = "Unable to submit message.";
    }
     // Set a timeout to change the button label back after 2 seconds
     setTimeout(function() {
         submitButton.style.backgroundColor = ""; // Change to original
         submitButton.innerHTML = "Submit"; // Change back to the original label
     }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center text-blue-900 uppercase text-4xl">Reach Out for a Free Estimate</h1>
              <p className="my-3 text text-gray-600 font-semibold text-left text-justify">Thinking about remodeling your kitchen or bathroom? Leverage Swaminarayan Construction's years of expertise to bring your vision to life. Simply fill out our online form today to schedule a personalized in-home consultation and receive an accurate cost estimate.</p>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                {["name", "lastname", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-gray-700">
                      {field === "name" ? "First Name" : field === "lastname" ? "Last Name" : field.charAt(0).toUpperCase() + field.slice(1)}
                      <span className="required-asterisk"> *</span>
                    </label>
                    <input
                      id={field}
                      name={field}
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                      type={field === "email" ? "email" : field === "phone" ? "number" : "text"}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-gray-700">Message <span className="required-asterisk"> *</span></label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

             {/* <div className="mt-5">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                  onChange={handleCaptchaChange}
                />
                {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
             </div> */}

              <div className="mt-8">
                <button
                  type="submit"
                  id="submitBtn"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                  // Disable the submit button based on CAPTCHA verification
                  // disabled={!isCaptchaVerified}
                  >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;