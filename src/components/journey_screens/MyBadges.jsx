import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DOT_COUNT = 6; // Total number of badges

export default function MyBadges({ badges }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = scrollRef.current;
      const scrollLeft = scrollEl.scrollLeft;
      const childWidth = scrollEl.firstChild?.offsetWidth || 1;
      const index = Math.round(scrollLeft / (childWidth + 16)); // 16px = space-x-4
      setActiveIndex(index);
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-25 md:mt-8 px-6 pb-10 md:pb-8">
      <h3 className="text-center text-[#6750A4] font-semibold mb-6 md:mb-4 text-xl">
        My Badges
      </h3>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto  snap-x no-scrollbar flex space-x-4 px-1 py-2  "
      >
        {badges.map((badge) => (
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
            className="flex-shrink-0 snap-center flex flex-col items-center    shadow-md transition-transform hover:scale-105 md:hover:scale-105 cursor-pointer"
          >
            <img
              src={badge.img}
              alt={badge.title}
              className="w-20 h-20 md:w-15 md:h-15 rounded-full object-cover shadow"
            />
            <p className="mt-2 font-semibold text-sm text-black text-center">
              {badge.title}
            </p>
            <p className="text-xs text-gray-600 text-center">{badge.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="mt-4 flex justify-center space-x-2">
        {badges.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "bg-[#4142C3]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
