import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo3.png";
import OfferCards from "./OfferCards";

const OperationalAndServicabilityScreen = ({
  employmentConfidence = 0,
  pincodeConfidence = 0,
}) => {
  const [company, setCompany] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [otherType, setOtherType] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleLocatePincode = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          );
          const data = await res.json();
          const address = data.results[0].address_components;
          const pincodeObj = address.find((component) =>
            component.types.includes("postal_code")
          );

          if (pincodeObj) {
            setPincode(pincodeObj.long_name);
          } else {
            alert("Pincode not found in location data");
          }
        } catch (error) {
          console.error("Error fetching location data", error);
          alert("Failed to fetch pincode");
        }
      },
      (error) => {
        alert("Failed to get your location");
        console.error(error);
      }
    );
  };

  const isFormValid =
    (employmentConfidence === 100 ||
      ((employmentType === "salaried" || employmentType === "self-employed") &&
        company.trim() !== "") ||
      (employmentType === "others" && otherType.trim() !== "")) &&
    (pincodeConfidence === 100 || pincode.trim() !== "");

  const handleProceed = async () => {
    try {
      // if (employmentConfidence !== 100) await submitEmploymentDetails(...);
      // if (pincodeConfidence !== 100) await submitPincode(...);
      navigate("/journey/income");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen md:h-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-1 p-1 shadow-md bg-white z-10 relative">
        <div className="flex items-center gap-2 px-2 py-1">
          <img src={logo} alt="Equall Logo" className="h-8 w-8" />
          <h2 className="text-lg font-semibold text-[#1b1b1f]">EQUALL</h2>
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
      <motion.div className="flex-1 overflow-y-auto bg-[#f9f9fc] mt-4">
        <OfferCards />

        <div className="flex flex-col gap-6 mt-4 px-4">
          {/* Employment Card */}
          {employmentConfidence !== 100 && (
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-sm font-medium text-[#1b1b1f] mb-2">
                Provide your employment details
              </h3>

              <div className="flex gap-3">
                {["salaried", "self-employed", "others"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEmploymentType(type)}
                    className={`flex-1 text-center py-2 border border-gray-300 rounded-xl text-sm focus:outline-none ${
                      employmentType === type
                        ? "bg-[#6750A4] text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() +
                      type.slice(1).replace("-", " ")}
                  </button>
                ))}
              </div>

              {employmentType === "others" && (
                <input
                  type="text"
                  value={otherType}
                  onChange={(e) => setOtherType(e.target.value)}
                  placeholder="Enter employment type"
                  className="mt-3 w-full text-center border border-gray-300 rounded-xl py-2 text-sm"
                />
              )}

              {(employmentType === "salaried" ||
                employmentType === "self-employed") && (
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={
                    employmentType === "salaried"
                      ? "Enter company name"
                      : "Enter business name"
                  }
                  className="mt-3 w-full text-center border border-gray-300 rounded-xl py-2 text-sm"
                />
              )}
            </div>
          )}

          {/* Pincode Card */}
          {pincodeConfidence !== 100 && (
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-sm font-medium text-[#1b1b1f] mb-2">
                Provide your pincode
              </h3>

              <button
                type="button"
                onClick={handleLocatePincode}
                className="mb-2 text-sm text-[#6750A4] font-medium flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                Detect my location
              </button>

              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter pincode"
                className="w-full text-center border border-gray-300 rounded-xl py-2 text-sm"
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* Proceed Button */}
      <div className="p-4 shadow-inner bg-white z-10">
        <button
          onClick={handleProceed}
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

export default OperationalAndServicabilityScreen;
