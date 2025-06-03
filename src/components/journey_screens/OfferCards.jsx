import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OfferCards = () => {
  const [showCards, setShowCards] = useState(true);

  return (
    <AnimatePresence>
      {showCards && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="w-full relative px-4"
        >
          {/* Dismiss Button */}
          <button
            onClick={() => setShowCards(false)}
            className="absolute top-2 left-7 text-gray-500 hover:text-gray-950 z-10 text-lg"
          >
            ✕
          </button>

          {/* New container wrapping both cards */}
          {/* Offer Amount Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="bg-gradient-to-br from-[#EBDDF7] to-[#D8CCE8] rounded-2xl shadow-lg px-4 py-2 text-center relative overflow-hidden "
          >
            {/* Coin / sparkle icon animation area */}
            <div className="absolute top-2 right-2 animate-bounce text-2xl">
              🎉
            </div>

            <p className="text-xs text-[#4a4a4f] mb-1">You're eligible for</p>

            <div className="text-2xl font-extrabold text-[#1b1b1f] tracking-wide mb-1">
              ₹1,50,000
            </div>

            <p className="text-xs text-[#5a5a5a]">Instant Personal Loan</p>

            <h4 className="text-sm text-[#6750A4] font-medium mb-1">
              @ 12% per annum
            </h4>
          </motion.div>

          {/* Encourage Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="bg-[#F3EDFA] border border-[#D8CCE8] rounded-2xl px-4 py-2 flex items-center gap-3 shadow-md mt-2"
          >
            {/* Text */}
            <div className="flex-1">
              <p className="text-sm font-medium text-[#3F3F46] leading-tight">
                Share more details for a better offer.📈
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferCards;