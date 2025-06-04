import React from "react";
import logo from "../../assets/logo3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MyBadges from "./MyBadges"; // Assuming you have a MyBadges component
import badge from "../../assets/badge-1.png"; // Placeholder for badge image
const ServicesDashboard = () => {
    const navigate = useNavigate();
    
    const badges = [
      {
        id: 1,
        title: "EMI Star",
        description: "You paid 800 EMIs on time",
        image: badge,
      },
      {
        id: 2,
        title: "Saver Pro",
        description: "Saved consistently for 12 months",
        image: badge,
      },
      {
        id: 3,
        title: "Smart Spender",
        description: "Great budget management",
        image: badge,
      },
      {
        id: 4,
        title: "EMI Star",
        description: "You paid 800 EMIs on time",
        image: badge,
      },
      {
        id: 5,
        title: "Saver Pro",
        description: "Saved consistently for 12 months",
        image: badge,
      },
      {
        id: 6,
        title: "Smart Spender",
        description: "Great budget management",
        image: badge,
      },
    ];
      

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

      {/* Main Content */}
      <motion.div
        className="flex-1 overflow-y-auto px-6 py-4 md:px-4 flex flex-col items-center gap-4 md:gap-2 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className=" bg-gradient-to-br from-[#d8d5f0] to-[#bfc2f6]
 shadow-md rounded-2xl p-2 w-full text-center"
        >
          <p className="text-md md:text-sm font-medium text-[#1b1b1f] ">
            You are in the top{" "}
            <span className="text-lg md:text-sm font-bold text-[#0c0ce2]">
              1%
            </span>{" "}
            of ‘most-eligible’ borrowers
          </p>
          <p className="text-2xl md:text-xl font-bold text-[#0c0ce2] ">
            Rs. 200000
          </p>
        </div>
        {/* Card: Loan Info */}

        <div
          className="bg-gradient-to-br from-[#d8d5f0] to-[#bfc2f6]
  text-[#1b1b1f] rounded-2xl p-4 w-full relative"
        >
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <h1 className="text-sm font-semibold">Hi, Anshul</h1>
          </div>
          <div className="pt-8">
            <h3 className="text-[#1b1b1f] text-lg md:text-sm font-semibold mb-2">
              Your Education loan
            </h3>
            <div className="grid grid-cols-2  gap-x-4 md:gap-1 ">
              <div className="  bg-gradient-to-br from-[#6750A4] to-[#644da5] rounded-lg shadow-md p-4 md:p-2 text-[#f4f4f6]">
                <p className="text-sm">Loan Amount</p>
                <p className="text-lg md:text-sm font-bold">Rs 2,00,000</p>
              </div>

              <div className="bg-gradient-to-br from-[#6750A4] to-[#644da5] rounded-lg shadow-md p-4 md:p-2 text-[#f4f4f6]">
                <p className="text-sm">Payoff by</p>
                <p className="text-lg md:text-sm font-bold">5th May 2028</p>
              </div>
            </div>
            {/* <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-bold">
                  11/24
                </div>
                <p className="text-xs mt-1">EMIs paid</p>
              </div>
            </div> */}
          </div>

          <div className="mt-4 flex justify-around">
            <button className=" bg-gradient-to-br from-[#4142C3] to-[#3232c6] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700">
              Pay Now
            </button>
            <button className="bg-white text-[#4b2c82] px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
              Foreclose
            </button>
          </div>
        </div>

        {/* //Blank section as of now */}
        <div
          className="bg-gradient-to-br from-[#d8d5f0] to-[#bfc2f6]
  text-[#1b1b1f]
 shadow-md rounded-2xl p-4 w-full"
        >
          <h3 className="text-lg font-semibold text-[#1b1b1f] mb-2">
            Your Loan Journey
          </h3>
          <p className="text-sm text-[#1b1b1f]">
            Your loan journey is currently being processed. Please check back
            later for updates.
          </p>
        </div>

        
        {/* Badge Section */}
        <MyBadges badges={badges} />
      </motion.div>

      {/* Bottom CTA */}
      <div className="p-4 shadow-inner bg-white z-10">
        <button
          onClick={() => navigate("/journey/x")}
          className="w-full text-[#F4F4F6] font-medium py-2 rounded-xl bg-[#4142C3] hover:bg-[#D8CCE8]"
        >
          Enter the EQUALL Experience
        </button>
      </div>
    </div>
  );
};

export default ServicesDashboard;
