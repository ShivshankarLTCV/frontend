import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo3.png"; // Adjust the path as necessary
const UserInfoScreen = () => {
  const [fullName, setFullName] = useState("");
  // const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log("User Info:", { fullName });
    navigate("/journey/employment-detail"); 
  };

  const isFormValid = fullName.trim() !== ""; // Add validation for lastName if needed

  return (
    <div className="flex flex-col h-screen bg-white md:h-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-1 p-1 shadow-md bg-white z-10">
        <div className="relative flex items-center justify-center px-2 py-1">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Equall Logo" className="h-8 w-8" />
            <h2 className="text-lg font-semibold">
              <span className="text-1.5xl font-bold text-[#1b1b1f]">
                EQUALL
              </span>
            </h2>
          </div>
        </div>

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

      {/* Content */}
      <motion.div
        className="flex-1 overflow-y-auto px-6 py-4 bg-[#f9f9fc] flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-6 text-center">
          {/* Heading */}
          <h3 className="text-lg font-bold text-[#1b1b1f]">
            Let’s get to know you!
          </h3>

          <div className="flex items-center gap-2">
            {/* First Name */}
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="flex-1 text-center border border-gray-300 rounded-xl py-2 px-4 text-lg text-gray-700 focus:outline-none"
            />
          </div>

          {/* <div className="flex items-center gap-2">
            //Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="flex-1 text-center border border-gray-300 rounded-xl py-2 text-sm text-gray-700 focus:outline-none"
            />
          </div> */}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="p-4 shadow-inner bg-white z-10">
        <button
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`w-full text-[#F4F4F6] font-medium py-2 rounded-xl ${
            isFormValid
              ? "bg-[#4142C3] hover:bg-[#D8CCE8]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default UserInfoScreen;
