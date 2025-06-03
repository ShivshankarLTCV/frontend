import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import images
import heroImage from "../../assets/hero-section-bg.png";
import heroImageMobile from "../../assets/hero-section-bg-mobile.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image visible only on devices "sm" and larger */}
      <div className="hidden sm:block">
        <picture>
          {/* 
              This source tag is now redundant since we’re removing the image entirely on
              devices below the "sm" breakpoint. But if you want to adjust the image based on
              larger breakpoints, you can leave it.
          */}
          <source media="(max-width: 640px)" srcSet={heroImageMobile} />
          <img
            loading="lazy"
            src={heroImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-[center_top] z-0"
          />
        </picture>
      </div>

      {/* Text Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        // On small devices, center the text; on larger screens, align to the left.
        className="relative z-20 flex items-center justify-center sm:justify-start h-full px-6 md:px-20"
      >
        <motion.div
          className="max-w-xl text-center sm:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Fast & Easy <br />
            <span className="text-purple-600">Personal Loans</span> Online
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Apply in minutes, get approved instantly. No paperwork, no stress —
            just the funds you need, when you need them.
          </motion.p>

          <motion.button
            onClick={() => navigate("/journey")}
            className="bg-[#4142C3] text-[#f4f4f6] px-6 py-2 mt-4 sm:mt-6 rounded-lg hover:bg-[#D8CCE8] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
