import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../../assets/logo3.png";
import info from "../../assets/info-icon.svg";
const PersonalDetailScreen = () => {
  const navigate = useNavigate();

  // Form fields
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);
  const [pan, setPan] = useState("");

  // Verification states
  const [isFullNameVerified, setIsFullNameVerified] = useState(false);
  const [isDobVerified, setIsDobVerified] = useState(false);
  const [isPanVerified, setIsPanVerified] = useState(false);

  // Name confidence API score simulation (if 100 then full name is not required)
  const [nameConfidenceScore, setNameConfidenceScore] = useState(null);
  const isNameRequired = nameConfidenceScore !== 100;

  // Simulate API call to fetch name confidence score once on mount
  useEffect(() => {
    setTimeout(() => {
      // Simulated response; change this value to 100 to simulate a perfect match.
      const fetchedScore = 100;
      setNameConfidenceScore(fetchedScore);
    }, 500);
  }, []);

  // If the score is 100, mark the name field as verified by default.
  useEffect(() => {
    if (nameConfidenceScore === 100) {
      setIsFullNameVerified(true);
    }
  }, [nameConfidenceScore]);

  // Verify input fields when they lose focus.
  const verifyField = (field) => {
    switch (field) {
      case "fullName":
        if (fullName.trim().length > 3) {
          setIsFullNameVerified(true);
        } else {
          setIsFullNameVerified(false);
        }
        break;
      case "dob":
        if (dob) {
          setIsDobVerified(true);
        } else {
          setIsDobVerified(false);
        }
        break;
      case "pan":
        if (/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
          setIsPanVerified(true);
        } else {
          setIsPanVerified(false);
        }
        break;
      default:
        break;
    }
  };

  // Form is valid if either fullName is not required or it is verified,
  // and both dob and pan are verified.
  const isFormValid =
    (!isNameRequired || isFullNameVerified) && isDobVerified && isPanVerified;

  const handleProceed = () => {
    console.log("Submitted:", { fullName, dob, pan });
    navigate("/journey/x"); // Replace with your actual path.
  };

  return (
    <div className="flex flex-col h-screen bg-white md:h-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-1 p-1 shadow-md bg-white z-10 relative">
        <div className="flex items-center justify-center px-2 py-1">
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
          className="absolute left-2 top-3  text-gray-500 hover:text-gray-700"
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
            Looks like we need to confirm a few details
          </h3>

          {/* Conditionally display Full Name field */}
          {isNameRequired && (
            <>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => verifyField("fullName")}
                  placeholder="Full name"
                  className="flex-1 text-center border border-gray-300 rounded-xl py-2 text-sm text-gray-700 focus:outline-none"
                />
                <input type="checkbox" checked={isFullNameVerified} readOnly />
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500 ">
                <img src={info} alt="i" className="h-3 w-3" />
                <span>
                  Please ensure your full name exactly matches your PAN record.
                </span>
              </div>
            </>
          )}

          {/* Date of Birth */}
          <div className="w-full flex items-center gap-2">
            <div className="flex-1">
              <DatePicker
                wrapperClassName="w-full"
                selected={dob}
                onChange={(date) => setDob(date)}
                onBlur={() => verifyField("dob")}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className="w-full text-center border border-gray-300 rounded-xl py-2 text-sm text-gray-700 focus:outline-none"
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </div>
            <input type="checkbox" checked={isDobVerified} readOnly />
          </div>

          {/* PAN Number */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              onBlur={() => verifyField("pan")}
              placeholder="PAN Number"
              maxLength={10}
              className="flex-1 text-center border border-gray-300 rounded-xl py-2 text-sm text-gray-700 focus:outline-none"
            />
            <input type="checkbox" checked={isPanVerified} readOnly />
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
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

export default PersonalDetailScreen;
