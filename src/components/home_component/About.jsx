import React from "react";
import { useInView } from "react-intersection-observer";
import logo from "../../assets/logo3.png";
import arrow from "../../assets/arrow-icon.svg.svg";
import { useNavigate } from "react-router-dom";
// AnimatedText splits a given text into characters so that each character animates individually.
const AnimatedText = ({ text, delayIncrement = 0.05, className = "" }) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(-20px)",
            animation: `fadeInUp 0.5s forwards`,
            animationDelay: `${index * delayIncrement}s`,
            whiteSpace: "pre", // Ensures space characters are preserved
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const About = () => {
  // useInView triggers when 30% of the component is visible.
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const navigate = useNavigate();

  return (
    <div className="bg-[#f4f4f6] px-4 py-10 sm:px-8 md:px-16 min-h-[60vh] flex flex-col items-center justify-center">
      <div ref={ref} className="w-full max-w-3xl mx-auto">
        {/* Brand Introduction */}
        {inView && (
          <div className="flex flex-col items-center mb-6 animate-fadeInDown">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              Introducing EQUALL
            </div>
            <img
              loading="lazy"
              src={logo}
              alt="Equall Logo"
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
          </div>
        )}

        {/* Main Headline */}
        {inView && (
          <h1 className="text-1xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#1b1b1f] mb-6 animate-fadeInDown leading-tight">
            <span className="whitespace-pre">
              <AnimatedText
                text="Empower Your Financial Journey"
                delayIncrement={0.1}
              />
            </span>
          </h1>
        )}

        {/* Description Paragraph */}
        {inView && (
          <p className="text-base sm:text-lg md:text-xl text-[#1b1b1f] text-center mb-8 animate-fadeInDown max-w-2xl mx-auto">
            <span className="whitespace-pre-line">
              <AnimatedText
                text={`Discover a smarter way to access loans.
At Equall, we offer flexible and transparent 
financing solutions to fuel your success and 
support your dreams.`}
                delayIncrement={0.02}
              />
            </span>
          </p>
        )}

        {/* Call-to-Action */}
        {inView && (
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 animate-fadeInDown justify-center">
            <button
              onClick={() => navigate("/journey")}
              className="bg-[#4142C3] text-[#f4f4f6] px-6 py-2 rounded-lg hover:bg-[#D8CCE8] transition"
            >
              {" "}
              Apply Now
            </button>
            <img
              loading="lazy"
              src={arrow}
              alt="Arrow Icon"
              className="w-6 h-6"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
