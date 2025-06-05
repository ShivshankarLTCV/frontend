import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MyBadges = ({ badges }) => {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  const visibleBadges = [
    badges[(centerIndex - 1 + badges.length) % badges.length],
    badges[centerIndex],
    badges[(centerIndex + 1) % badges.length],
  ];

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
    ref.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      ref.removeEventListener("wheel", handleScroll);
    };
  }, [badges.length, canScroll]);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + badges.length) % badges.length);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % badges.length);
  };

  return (
    <div className="relative mt-6">
      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1b1b1f] shadow rounded-full p-1 z-10"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1b1b1f] shadow rounded-full p-1 z-10"
      >
        <ChevronRight size={18} />
      </button>

      {/* Badge Carousel */}
      <div
        ref={containerRef}
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
              className="relative transition-all"
              animate={position}
              variants={variants}
              transition={{ duration: 0.4 }}
            >
              <img
                src={badge.img}
                alt={badge.title}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full"
              />
              {position === "center" && (
                <div className="text-center mt-1">
                  <p className="text-[13px] font-bold text-[#1b1b1f]">
                    {badge.title}
                  </p>
                  <p className="text-[11px] text-gray-500">{badge.subtitle}</p>
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
