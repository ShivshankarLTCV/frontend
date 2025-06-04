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
          className="w-full relative px-4 mb-5"
        >


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

            <p className="text-xs text-[#1b1b1f] ">
              You're eligible for {"  "}
              <span className="text-sm font-extrabold text-[#1b1b1f] tracking-wide mb-1">
                ₹1,50,000
              </span>{" "}
              <br className="hidden md:block" />
              Instant Personal Loan
            </p>

            <h4 className="text-xs text-[#1b1b1f] font-medium mb-1">
              at an interest of{" "}
              <span className="text-sm font-extrabold text-[#6750A4]">18%</span> with{" "}
              <span className="text-sm font-extrabold text-[#6750A4]">zero</span>{" "}
              processing fee.
            </h4>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferCards;