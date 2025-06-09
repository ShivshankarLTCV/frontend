import React from "react";
import logo from "../../assets/logo3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Assuming you have a MyBadges component
import badge from "../../assets/badge-1.png";
import MyBadges from "./MyBadges"; // Importing MyBadges component
// Placeholder for badge image
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
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
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
