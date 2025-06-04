import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import badges from "../../../data"; // Assuming badges data is exported from data.js

export default function Dashboard() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);

  const handleHover = (index) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col h-screen md:h-full bg-gradient-to-b from-[#ffffff] via-[#ece4fd] to-[#6750a4]">
      {/* Fixed Logo Header */}
      <div className="text-center py-4 ">
        <img src={logo} className="w-6 h-6 mx-auto" />
        <p className="font-bold text-indigo-900">EQUALL</p>
      </div>

      {/* Main Body */}
      {/* Offer Section */}
      <div className="text-center px-4 md:mb-5 mb-21 mt-5 py-2">
        <p className="text-lg mb-2">
          You're a top <span className="text-green-600 font-bold">1%</span>{" "}
          customer
        </p>
        <p>So, we offer you </p>
        <div className="mt-4 bg-[#eee7f9] to-[#ece4fd] rounded-2xl shadow-lg px-4 py-3 text-center relative overflow-hidden">
          <h2 className="text-2xl font-bold text-[#1b1b1f] mb-1">
            Personal Loan
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {/* <p className="text-xl font-medium text-[#1b1b1f] mt-2">
            We offer you a <br />{" "}
            <span className="text-2xl font-semibold">Personal Loan</span> <br />
            of
          </p> */}
            <div className="flex flex-col items-center bg-[#A18CD1] text-white rounded-lg p-2">
              <h3 className="text-lg font-bold text-[#f4f4f6] ">Rs. 3,00,000</h3>
              <p className="text-[#1f1f1b]">Loan Amount</p>
            </div>
            <div className="flex flex-col items-center bg-[#A18CD1] text-white rounded-lg p-2">
              <h3 className="text-lg font-bold text-[#f4f4f6]">18%</h3>
              <p className="text-[#1b1b1f]">Interest Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Badge Carousel Section */}
      <div className=" pt-15  px-4">
        <h3 className="text-center text-[#f4f4f6] font-bold mb-2 text-xl">
          My Badges
        </h3>
        <div className="flex justify-center items-center gap-x-2 gap-y-0">
          {badges.map((badge, index) => (
            <div
              key={badge.id}
              onClick={() =>
                navigate("/journey/badge", {
                  state: {
                    badge: {
                      img: badge.img,
                      title: badge.title,
                      subtitle: badge.subtitle, // or badge.infoTitle if different
                      desc: badge.desc, // or badge.infoBody if different
                    },
                  },
                })
              }
              onMouseEnter={() => handleHover(index)}
              className={`transition-all duration-300 flex flex-col items-center cursor-pointer ${
                index === current
                  ? "scale-100 z-10 opacity-100"
                  : "scale-80 opacity-50"
              }`}
            >
              <img
                src={badge.img}
                alt={badge.title}
                className="w-18 h-18 rounded-full object-cover shadow-lg mb-1"
              />
              {index === current && (
                <>
                  <p className="text-white font-bold text-arimo text-sm">
                    {badge.title}
                  </p>
                  <p className="text-white text-sm text-center">
                    {badge.subtitle}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-6">
        <button className="w-full text-[#f4f4f6] font-medium py-2 rounded-xl bg-[#4142C3] hover:bg-[#5d5fe1] mt-6">
          Let’s Get Started
        </button>
      </div>
    </div>
  );
}
