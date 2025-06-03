import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-[#D8CCE8] via-[#A18CD1] to-[#6750A4] p-8">
      {/* Animated Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold text-white drop-shadow-xl mb-4">
          Our Services
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
          We provide fast, secure, and flexible loans tailored to your financial
          needs — empowering your goals every step of the way.
        </p>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default Features;
