import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo3.png";

const OtpScreen = () => {
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "";
  const navigate = useNavigate();

  const MAX_ATTEMPTS = 3;
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendAttempts, setResendAttempts] = useState(0);
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const inputsRef = useRef([]);

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // only allow single digit

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Auto focus next input if not the last
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const isFormValid = otp.every((digit) => digit.length === 1);

  const handleLogin = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      console.log("OTP verified:", enteredOtp);
      navigate("/journey/user-info");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResend = () => {
    if (!isTimerActive && resendAttempts < MAX_ATTEMPTS) {
      console.log("Resending OTP...");
      setResendAttempts((prev) => prev + 1);
      if (resendAttempts + 1 < MAX_ATTEMPTS) {
        setTimer(30);
        setIsTimerActive(true);
      }
    }
  };

  const getButtonText = () => {
    if (resendAttempts >= MAX_ATTEMPTS) return "Limit Reached";
    if (isTimerActive) return `Resend OTP (${timer}s)`;
    return "Resend OTP";
  };

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
        className="flex-1 overflow-y-auto px-6 py-4 bg-[#f9f9fc] flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-6 text-center">
          {/* Title */}
          <h3 className="text-sm font-bold text-[#1b1b1f]">Enter OTP</h3>
          <p className="text-sm text-[#1b1b1f]">
            We’ve sent an OTP to{" "}
            <span className="font-medium">+91-{phoneNumber}</span>
          </p>

          {/* OTP Boxes */}
          <div className="flex justify-center gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-8 h-10 text-center border border-gray-300 rounded-md text-lg focus:outline-none"
              />
            ))}
          </div>

          {/* Resend */}
          <div>
            <button
              onClick={handleResend}
              disabled={isTimerActive || resendAttempts >= MAX_ATTEMPTS}
              className={`text-sm ${
                isTimerActive || resendAttempts >= MAX_ATTEMPTS
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#4142C3] hover:text-[#D8CCE8]"
              }`}
            >
              {getButtonText()}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="p-4 shadow-inner bg-white z-10">
        <button
          onClick={handleLogin}
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

export default OtpScreen;
