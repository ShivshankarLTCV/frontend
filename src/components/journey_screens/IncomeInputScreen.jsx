import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo3.png";
import OfferCards from "./OfferCards";
// Import the OfferCards component
const IncomeInputScreen = () => {
  const [income, setIncome] = useState("");
  const [customIncome, setCustomIncome] = useState("");
  const [showOtherSources, setShowOtherSources] = useState(false);
  const [hasOtherIncome, setHasOtherIncome] = useState(null);
  const [selectedSources, setSelectedSources] = useState([]);
  const [incomeOptions, setIncomeOptions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call
    setIncomeOptions([
      { label: "₹0 - ₹25,000", value: "range1" },
      { label: "₹25,000 - ₹50,000", value: "range2" },
    ]);
  }, []);

  const toggleSource = (source) => {
    setSelectedSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  };

  const isFormValid =
    ((income && income !== "others") ||  
    (customIncome && customIncome !== "")) &&
    ((hasOtherIncome === "no" )||
    (hasOtherIncome === "yes" && selectedSources.length > 0));
  

  const handleProceed = () => {
    const dataToSend = {
      income: income === "others" ? customIncome : income,
      otherIncomeSources: hasOtherIncome === "yes" ? selectedSources : [],
    };

    console.log("Sending to backend:", dataToSend);
    navigate("/journey/personal-detail");
  };



  return (
    <div className="flex flex-col h-screen md:h-full">
      {/* <div className="md:flex md:flex-col md:h-screen "> */}
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
      {/* 💸 Offer Card */}
      <motion.div className="flex-1 overflow-y-auto px-0 py-4 bg-[#f9f9fc]">
        <OfferCards />
        <div className="flex flex-col gap-6 mt-6 px-6">
          <h3 className="text-lg font-large text-[#1b1b1f] font-bold">
            Monthly Income
          </h3>
          <p className="text-sm text-[#1b1b1f]">
            Choose your current range to get your best offer.
          </p>

          {/* Income Range Buttons */}
          <div className="flex flex-col gap-3">
            {incomeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setIncome(opt.value)}
                className={`text-center py-2 border border-gray-300 rounded-xl text-sm ${
                  income === opt.value
                    ? "bg-[#6750A4] text-[#F4F4F6]"
                    : "bg-white text-gray-700"
                }`}
              >
                {opt.label}
              </button>
            ))}
            <button
              onClick={() => setIncome("others")}
              className={`text-center py-2 border border-gray-300 rounded-xl text-sm ${
                income === "others"
                  ? "bg-[#6750A4] text-[#F4F4F6]"
                  : "bg-white text-gray-700"
              }`}
            >
              Others
            </button>
          </div>

          {/* Custom Income Input */}
          {income === "others" && (
            <input
              type="number"
              placeholder="Enter your income"
              className="w-full text-center border border-gray-300 rounded-xl py-2 text-gray-700 text-sm focus:outline-none"
              onChange={(e) => setCustomIncome(e.target.value)}
            />
          )}

          {/* Other Income Source Question */}
          {(income || customIncome) && hasOtherIncome === null && (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#1b1b1f]">
                Do you have any other source of income?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setHasOtherIncome("yes");
                    setShowOtherSources(true);
                  }}
                  className="flex-1 py-2 border border-gray-300 rounded-xl text-sm bg-white text-gray-700"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setHasOtherIncome("no");
                    setShowOtherSources(false);
                  }}
                  className="flex-1 py-2 border border-gray-300 rounded-xl text-sm bg-white text-gray-700"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* Other Income Source Options */}
          {showOtherSources && (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#1b1b1f] font-medium">
                Select your other income sources:
              </p>
              {[
                "Rental income",
                "Freelance",
                "Investments",
                "Side business",
                "Consulting",
                "Royalties",
              ].map((source) => (
                <button
                  key={source}
                  onClick={() => toggleSource(source)}
                  className={`text-left py-2 px-3 border rounded-xl text-sm ${
                    selectedSources.includes(source)
                      ? "bg-[#6750A4] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {source}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Bottom Proceed Button */}
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
    // </div>
  );
};

export default IncomeInputScreen;
