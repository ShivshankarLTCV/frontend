// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import arrow from "../../assets/right-arrow.svg";
// import frame from "../../assets/frame3.png";
// import badge from "../../assets/badge-1.png";

import GenericDashboardCarousel from "./GenericDashboardCarousel";


const GenericDashboard = () => {
  const navigate = useNavigate();


  const handleApplyNow = () => {
    navigate("/journey/employment-detail");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pb-6 px-1 md:px-0">
      <div
        onClick={() => navigate("/")}
        className="text-center pt-6  md:pt-4 md:mb-4 md:mt-2"
      >
        <img src={logo} className="w-8 h-8 mx-auto" alt="Logo" />
        <p className="font-bold text-indigo-900 text-sm">EQUALL</p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <GenericDashboardCarousel />
      </div>

      <div className="px-6  md:mt-2 max-w-md mx-auto w-full mb-18 md:mb-40">
        <button
          className="w-full flex items-center justify-center text-white text-md md:text-sm font-medium py-3 rounded-lg bg-[#4142C3] hover:bg-[#5d5fe1] transition-colors"
          onClick={handleApplyNow}
        >
          Apply Now
          <span className="flex ml-2 space-x-1">
            <img src={arrow} alt="arrow" className="w-4 h-4 animate-pulse" />
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 animate-pulse delay-100"
            />
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 animate-pulse delay-200"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GenericDashboard;
