import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import frame from "../../assets/frame.png";
import arrow from "../../assets/right-arrow.svg";
import MyBadges from "./MyBadges";
import badges from "../../../data";

export default function Dashboard() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);

  const handleHover = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-white pb-4">
      {/* Logo Header */}
      <div className="text-center pt-4">
        <img src={logo} className="w-6 h-6 mx-auto" alt="Logo" />
        <p className="font-bold text-indigo-900 text-sm">EQUALL</p>
      </div>

      {/* Offer Text */}
      <div className="text-center px-3 mt-4 mb-6">
        <p className="text-base text-[13px] ">
          You're a top  {" "} <span className="text-[#4142c3] font-bold text-[20px] px-1"> { "  "}1%</span>{" "}
          customer
        </p>
        {/* <p className="text-sm"></p> */}
      </div>

      {/* Loan Offer Card */}
      <div
        className="rounded-xl  text-white px-4 py-5 mx-3 mb-5 relative"
        style={{
          backgroundImage: `url(${frame})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-[#1b1b1f] text-xs ">
          We offer you a <span className="text-[16px] font-semibold text-[#4142c3]">Personal Loan</span> of
        </p>
        <h2 className="text-[#1b1b1f] text-3xl font-extrabold my-2">₹ 3 Lakh</h2>
        {/* <p className="text-[#4142c3] text-xs font-bold">Loan Amount</p> */}
        <p className="text-black text-[15px] mt-2  ">
          With <span className="text-[#4142c3] font-extrabold">ZERO</span> processing fee
        </p>
      </div>

      {/* No Hidden Charges */}
      <div className="text-center text-[#4142c3] font-semibold text-sm mb-5 shadow  py-2  ">
        No Hidden Charges
      </div>

      {/* My Badges Section */}
      <div
        className="rounded-xl  px-2 py-2 mx-3 mb-4 text-white relative bg-[#f9f9f9]"
        // style={{
        //   backgroundImage: `url(${frame})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="flex justify-between items-center  ">
          <h3 className="text-xs font-semibold text-black">My Badges</h3>
          <button className="text-[10px] bg-white text-purple-600 px-2 py-[2px] rounded-full animate-bounce">
            Badges
          </button>
        </div>
        <MyBadges badges={badges} />
      </div>

      {/* Apply Now Button */}
      <div className="px-4 md:mt-0 mt-6">
        <button className="w-full flex items-center justify-center text-white text-sm font-medium py-2 rounded-lg bg-[#4142C3] hover:bg-[#5d5fe1] transition-all">
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
