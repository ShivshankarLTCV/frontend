import React, { useState } from "react";
import indiaFlag from "../../assets/india.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo3.png"; // Adjust the path as necessary
const SignInScreen = () => {
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  const isFormValid = phone.length === 10 && checked;
  
  const handleGetOtp = () => {
    if (!checked) {
      alert("Please accept the terms and privacy policy.");
      return;
    }

    if (phone.length === 10) {
      console.log("OTP sent to", phone);
      navigate("/journey/otp", { state: { phoneNumber: phone } });
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white md:h-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-1 md:p-1 p-2 shadow-md bg-white z-10">
        <div className="relative flex items-center justify-center px-2 py-1">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="Equall Logo" className="h-8 w-8" />
            <h2 className="text-lg font-semibold">
              <span className="text-2xl font-bold text-[#1b1b1f]">EQUALL</span>
            </h2>
          </div>
        </div>

        {/* //add an arrow icon to go back to the previous page */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <motion.div
        className="flex-1 overflow-y-auto px-6 py-4 bg-[#f9f9fc]  flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col  gap-6 text-center">
          {/* Heading */}
          <div>
            <h2 className="text-md font-bold text-[#1b1b1f] font-arimo">
              We have something inside!
            </h2>
            <h3 className="text-sm text-gray-500">Log in to continue</h3>
          </div>

          {/* Phone Input */}
          <div className="w-full">
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
              <div className="flex items-center px-3 py-2 bg-white border-r border-gray-200">
                <img src={indiaFlag} alt="Flag" className="w-5 h-3.5 mr-2" />
                <span className="text-sm font-medium text-gray-700">+91</span>
              </div>
              <input
                type="tel"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter Phone Number"
                className="flex-1 text-center bg-transparent focus:outline-none text-gray-700 text-sm py-2"
              />
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="text-xs text-gray-400 flex items-start gap-2 text-left w-full">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mt-0.5"
            />
            <span>
              By continuing, I accept the{" "}
              <a href="#" className="underline text-[#4142C3]">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="#" className="underline text-[#4142C3]">
                Terms of Service
              </a>
              .
            </span>
          </label>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="p-6 shadow-inner bg-white z-10 md:mb-0 mb-18">
        <button
          onClick={handleGetOtp}
          disabled={!isFormValid}
          className={`w-full text-[#F4F4F6] font-medium py-2 rounded-xl ${
            isFormValid
              ? "bg-[#4142C3] hover:bg-[#D8CCE8]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Generate OTP
        </button>
      </div>
    </div>
  );
};

export default SignInScreen;
