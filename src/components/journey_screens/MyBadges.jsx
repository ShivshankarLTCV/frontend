import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import left from "../../assets/left-icon.svg";
import right from "../../assets/right-icon.svg";

const MyBadges = ({ badges }) => {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const touchStartX = useRef(null);
  const navigate = useNavigate();

  const visibleBadges = [
    badges[(centerIndex - 1 + badges.length) % badges.length],
    badges[centerIndex],
    badges[(centerIndex + 1) % badges.length],
  ];

  // Handle mouse/touchpad wheel scrolling.
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (!canScroll) return;
      setCanScroll(false);

      const delta = e.deltaY || e.deltaX;
      delta > 0 ? handleNext() : handlePrev();

      setTimeout(() => setCanScroll(true), 300);
    };

    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (ref) {
        ref.removeEventListener("wheel", handleScroll);
      }
    };
  }, [badges.length, canScroll]);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + badges.length) % badges.length);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % badges.length);
  };

  // Touch event handlers for mobile swipe support.
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const threshold = 50; // Minimum distance in pixels to consider a swipe.

    if (touchStartX.current !== null) {
      if (touchStartX.current - touchEndX > threshold) {
        // Swiped left – move to the next badge.
        handleNext();
      } else if (touchEndX - touchStartX.current > threshold) {
        // Swiped right – move to the previous badge.
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Navigate to /journey/badge passing badge data
  const handleBadgeClick = (badge) => {
    navigate("/journey/badge", {
      state: {
        img: badge.img,
        title: badge.title,
        subtitle: badge.subtitle,
        desc: badge.desc,
      },
    });
  };

  return (
    <div className="relative mt-6">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex justify-center items-center"
      >
        <img src={left} alt="prev" className="w-full h-full" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex justify-center items-center"
      >
        <img src={right} alt="next" className="w-full h-full" />
      </button>

      {/* Badge Carousel with touch support */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex items-center justify-center gap-3 relative h-40 overflow-hidden"
      >
        {visibleBadges.map((badge, i) => {
          const position = i === 1 ? "center" : i === 0 ? "left" : "right";
          const variants = {
            center: { scale: 1, y: -10, opacity: 1, zIndex: 10 },
            left: { scale: 0.75, y: 0, opacity: 0.3, zIndex: 1 },
            right: { scale: 0.75, y: 0, opacity: 0.3, zIndex: 1 },
          };

          return (
            <motion.div
              key={badge.id}
              onClick={
                position === "center"
                  ? () => handleBadgeClick(badge)
                  : undefined
              }
              className={`relative transition-all duration-300 flex flex-col items-center justify-center ${
                position === "center" ? "cursor-pointer" : ""
              }`}
              animate={position}
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <img
                src={badge.img}
                alt={badge.title}
                className="w-20 h-20 rounded-full"
              />
              {position === "center" && (
                <div className="text-center mt-1">
                  <p className="text-[15px] font-bold text-[#1b1b1f]">
                    {badge.title}
                  </p>
                  <p className="text-[13px] text-gray-500">{badge.subtitle}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBadges;
