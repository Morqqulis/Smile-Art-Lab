"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import Stars from "./Stars/Stars";

const Slider = () => {
  const sliderData = [
    {
      name: "Danilo Strumendo",
      text: "I’ve been working with SmileArt for 5 years now! They deliver Exceptional work and service and are at the forefront of digital dentistry. They are up to date with the latest and best dental technology to help my patients achieve a smile they can wear with pride and excitement.",
    },
    {
      name: "Rick Iskandar",
      text: "Great communication, excellent quality work. Would highly recommend Ricky and Yannick to any dentist wanting a higher level of consistency and quality to their lab work.",
    },
    {
      name: "Colin Sar",
      text: "Cannot recommend their service enough. I find they are easily available to communicate and discuss finer details of cases. The lab work is also of a much higher standard than most.",
    },
  ];

  return (
    <div className="Slider mobile:py-15 relative mx-auto mb-6 max-w-[1172px] px-5 py-20 mobile:pt-5">
      <Swiper
        className=" mx-auto w-full max-w-[932px] rounded-[60px] shadow-[35px_35px_60px_0px_rgba(0,_0,_0,_0.15)]"
        modules={[Navigation, Mousewheel, Autoplay]}
        slidesPerView={1}
        speed={3000}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        mousewheel
        loop
        autoHeight
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          reverseDirection: false,
        }}
      >
        {sliderData.map((data, i) => (
          <SwiperSlide
            key={i}
            className="min-h-[264px] bg-white p-[50px]  tablets:p-5"
          >
            <div className="mb-[22px]">
              <span
                className={`mb-[5px] block font-[Merriweather] text-xl font-bold underline`}
              >
                {data.name}
              </span>
              <Stars />
            </div>
            <div className="text-lg font-light text-[#080A11]">
              <p>{data.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev absolute left-[10px] top-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-[1.4] hover:cursor-pointer tablets:bottom-0 tablets:left-[40%] tablets:top-auto">
        <svg
          className="rotate-180"
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.38916 33.0846L17.6118 17.8619L2.44728 2.69741"
            stroke="#C3A24D"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="next absolute right-[10px] top-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-[1.4] hover:cursor-pointer tablets:bottom-0 tablets:right-[40%] tablets:top-auto">
        <svg
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.38916 33.0846L17.6118 17.8619L2.44728 2.69741"
            stroke="#C3A24D"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
