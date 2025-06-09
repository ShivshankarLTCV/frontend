// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import arrow from "../../assets/right-arrow.svg";
import MyBadges from "./MyBadges";
import badges from "../../../data";
import frame2 from "../../assets/frame3.png";
import tick from "../../assets/tick.svg";

export default function Dashboard() {
  const navigate = useNavigate();
  // const [current, setCurrent] = useState(1);

  // const handleHover = (index) => {
  //   setCurrent(index);
  // };

  const handleApplyNow = () => {
    // Logic for applying now, e.g., navigating to a loan application form
    navigate("/journey/employment-detail");
  }
  return (
    <div className="flex flex-col min-h-screen bg-white pb-6 px-1 md:px-0">
      {/* Logo Header */}
      <div
        onClick={() => navigate("/")}
        className="text-center pt-6 mb-6 md:pt-4 md:mb-4 md:mt-1"
      >
        <img src={logo} className="w-8 h-8 mx-auto" alt="Logo" />
        <p className="font-bold text-indigo-900 text-sm">EQUALL</p>
      </div>

      {/* Loan Offer Card */}
      <div
        className="rounded-3xl md:rounded-2xl text-white  md:px-0 py-8 md:py-4 mx-4  mb-12 md:mb-8 relative shadow-lg"
        style={{
          backgroundImage: `url(${frame2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Offer Text */}
        <div className="text-center px-6 mt-4 md:mt-1 mb-6 md:mb-4 shadow bg-[#ddc6ff]">
          <p className="text-sm text-black">
            You're an{" "}
            <span className="text-[#4142c3] font-bold text-xl md:text-[16px] px-1">ELITE</span>{" "}
            customer
          </p>
        </div>

        <p className="text-xs px-4 ">
          You are <span className="font-semibold text-sm md:text-xs mx-1 md:mx-0">Pre-Approved</span>{" "}
          for a <span className="font-semibold text-sm md:text-xs ">Personal Loan</span> of
        </p>
        <h2 className="text-3xl md:text-2xl font-extrabold my-3 md:my-2 px-4">₹ 3 Lakh</h2>
        <p className="flex items-center text-sm md:text-xs mt-2 px-4">
          <img src={tick} alt="tick" className="w-4 h-4 mr-2" />
          With
          <span className="font-extrabold mx-1"> ZERO</span> processing fee
        </p>
        <p className="flex items-center text-sm md:text-xs mt-2 px-4">
          <img src={tick} alt="tick" className="w-4 h-4 mr-2" />
          No Hidden Charges
        </p>
      </div>

      {/* No Hidden Charges */}
      {/* <div className="text-center text-[#4142c3] font-semibold text-sm my-5 mb-10 md:mb-5 shadow py-2 mx-4 bg-gray-100 rounded">
        No Hidden Charges
      </div> */}

      {/* My Badges Section */}
      <div className="rounded-xl px-3 py-4 mx-4 mb-6 bg-gray-50 shadow">
        <h3 className="text-sm font-semibold text-black text-center mb-2">
          My Badges
        </h3>
        <MyBadges badges={badges} />
      </div>

      {/* Apply Now Button */}
      <div className="px-4 mt-6 md:mt-2">
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
}
