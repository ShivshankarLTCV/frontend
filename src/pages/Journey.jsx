import { motion } from "framer-motion";
import { useNavigate, Outlet } from "react-router-dom";
import logo from "../assets/logo3.png";
import arrow from "../assets/left-arrow.svg";

const Journey = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white md:bg-gradient-to-r md:from-[#D8CCE8] md:via-[#A18CD1] md:to-[#6750A4]">
      {/* Left Side (Hidden on Mobile) */}
      <motion.div
        className="hidden md:flex w-1/2 flex-col justify-center px-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        {/* <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 text-[#0F1C4D] hover:text-[#2c3e6b] font-medium"
        >
          <img
            src={arrow}
            alt="Back"
            className="w-12 h-12 hover:bg-[#D8CCE8] rounded-full  hover:scale-110"
          />
        </button> */}

        {/* Logo and Text */}
        <div className="flex items-center space-x-2 mb-6 mt-8 md:mt-0">
          <img src={logo} alt="Equall Logo" className="h-12 w-12" />
          <span className="text-4xl font-bold text-[#0F1C4D]">EQUALL</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Empower Your Financial Journey
        </h1>
        <p className="text-lg text-gray-700">
          Welcome to our innovative loan lending platform – your partner in
          turning ambition into achievement. Enjoy quick access to funds with
          flexible terms to nurture your growth and support your dreams.
        </p>
      </motion.div>

      {/* Right Side (Mobile View) */}
      <div className="w-full md:w-1/2 min-h-screen flex justify-center items-center bg-white">
        {/* Mobile frame only for md+ screens */}
        <div className="w-full h-full md:w-[320px] md:h-[640px] md:rounded-[2rem] md:shadow-2xl md:border overflow-hidden flex flex-col p-1">
          {/* Fixed Logo Header on Mobile */}

          {/* Scrollable Main Content */}
            <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default Journey;
