import { useState, useRef } from "react";
import badge from "../../assets/badge-1.png";
import frame from "../../assets/frame3.png";
import pl from "../../assets/pl-card.png";
import home from "../../assets/home-card.png";
import emergency from "../../assets/emergency-card.png";
import loanCard from "../../assets/loan-card.png";
import leftArrow from "../../assets/left-icon.svg";
import rightArrow from "../../assets/right-icon.svg";

const cards = [
  {
    id: 1,
    title: " Debt Consolidation",
    desc: "Combine multiple debts into one easy-to-manage loan.",
    img: loanCard,
  },
  {
    id: 2,
    title: "Medical Emergencies",
    desc: "Get instant funds for urgent medical needs.",
    img: emergency,
  },
  {
    id: 3,
    title: "Education or Skill Development",
    desc: "Finance courses or education for better opportunities.",
    img: pl,
  },
  {
    id: 4,
    title: "Home Renovation",
    desc: "Upgrade or repair your home without upfront costs.",
    img: home,
  },
];

// Card sizes for mobile and md+
const CARD_WIDTH = 290; // px
const CARD_WIDTH_MD = 220; // px
const CARD_GAP = 22; // px

const GenericDashboardCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev === cards.length - 1 ? cards.length - 1 : prev + 1
    );
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current !== null) {
      if (touchStartX.current - touchEndX > 40) handleNext();
      else if (touchEndX - touchStartX.current > 40) handlePrev();
    }
    touchStartX.current = null;
  };

  // Responsive card width
  const getCardWidth = () =>
    window.innerWidth >= 768 ? CARD_WIDTH_MD : CARD_WIDTH;

  // Calculate translateX for the carousel
  const getTranslate = () => {
    const width =
      typeof window !== "undefined" && window.innerWidth >= 768
        ? CARD_WIDTH_MD
        : CARD_WIDTH;
    return `translateX(calc(50% - ${(width + CARD_GAP) / 2}px - ${
      current * (width + CARD_GAP)
    }px))`;
  };

  // For SSR safety, fallback to CARD_WIDTH
  const cardWidth =
    typeof window !== "undefined" && window.innerWidth >= 768
      ? CARD_WIDTH_MD
      : CARD_WIDTH;

  return (
    <div className="w-full flex flex-col items-center select-none">
      <div
        className="relative w-full max-w-xs md:max-w-md mx-auto overflow-visible"
        style={{ height: 340 + "px" }}
      >
        {/* Left Arrow (md and up only) */}
        <button
          type="button"
          onClick={handlePrev}
          className="hidden md:flex absolute left-[-px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 justify-center items-center  hover:scale-1.5 transition"
          disabled={current === 0}
        >
          <img src={leftArrow} alt="prev" className="w-5 h-5" />
        </button>
        {/* Right Arrow (md and up only) */}
        <button
          type="button"
          onClick={handleNext}
          className="hidden md:flex absolute right-[-0px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 justify-center items-center     transition"
          disabled={current === cards.length - 1}
        >
          <img src={rightArrow} alt="next" className="w-5 h-5" />
        </button>
        <div
          className="flex items-center transition-transform duration-300 ease-in-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: getTranslate(),
            touchAction: "pan-y",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, idx) => {
            // Card position logic
            let scale = 1,
              opacity = 1,
              zIndex = 10,
              translateY = 0,
              boxShadow = "0 4px 24px rgba(65,66,195,0.10)";
            if (idx === current) {
              scale = 1;
              opacity = 1;
              zIndex = 20;
              translateY = 0;
              boxShadow = "0 8px 32px rgba(65,66,195,0.15)";
            } else if (idx === current - 1) {
              scale = 0.93;
              opacity = 0.6;
              zIndex = 5;
              translateY = 24;
            } else if (idx === current + 1) {
              scale = 0.93;
              opacity = 0.6;
              zIndex = 5;
              translateY = 24;
            } else {
              scale = 0.85;
              opacity = 0.2;
              zIndex = 1;
              translateY = 40;
            }
            return (
              <div
                key={card.id}
                className="rounded-2xl shadow-lg flex flex-col items-start justify-between px-6 py-7 transition-all duration-300 bg-[#4747c7]"
                style={{
                  width: cardWidth + "px",
                  minWidth: cardWidth + "px",
                  height: "340px",
                  backgroundImage: `url(${frame})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  opacity,
                  zIndex,
                  boxShadow,
                  pointerEvents: idx === current ? "auto" : "none",
                }}
                onClick={() => setCurrent(idx)}
              >
                <div>
                  <h2 className="text-white text-xl font-bold mb-4">
                    {card.title}
                  </h2>
                  <p className="text-white text-sm  mb-2">{card.desc}</p>
                  <img src={card.img} alt="" className="w-30 h-30 my-5 mx-8" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full mx-1 transition-all duration-200 ${
              idx === current ? "bg-[#4747c7]" : "bg-[#d1cdf3]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GenericDashboardCarousel;
