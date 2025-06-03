import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import personalLoan from "../../assets/personal-loan.png"; // Replace with real images
import carLoan from "../../assets/car-loan.png"; // Replace with real images
import homeLoan from "../../assets/home-loan.png"; // Replace with real images
import debtConsolidation from "../../assets/debt-consolidation-loan.png"; // Replace with real images
import businessLoan from "../../assets/business-loan.png"; // Replace with real images

const imageList = [
  { src: personalLoan, alt: "Feature Slide 1" },
  { src: carLoan, alt: "Feature Slide 2" },
  { src: homeLoan, alt: "Feature Slide 3" },
  { src: debtConsolidation, alt: "Feature Slide 4" },
  { src: businessLoan, alt: "Feature Slide 5" },
];

const Carousel = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        className="w-full max-w-5xl px-4 py-10"
      >
        {imageList.map((image, index) => (
          <SwiperSlide
            key={index}
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-40 sm:h-44 md:h-48 lg:h-56 overflow-hidden rounded-3xl shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styling for center/side slides */}
      <style>{`
        .swiper-slide {
          opacity: 0.3;
          transition: all 0.5s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
          z-index: 10;
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.6;
          transform: scale(0.9);
        }
      `}</style>
    </div>
  );
};

export default Carousel;
