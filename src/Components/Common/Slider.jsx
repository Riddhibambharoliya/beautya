import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="md:h-[40rem] h-[20rem]"
    >
      {items?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center justify-center w-full md:h-full h-80 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-4">
                <h2 className="md:text-4xl text-white md:mt-72 mt-40 font-bold md:mb-6 mb-3 text-center text-xl">
                  Unlock Your Natural Glow{" "}
                </h2>
                <button className="md:px-9 px-4 md:py-2 py-1 text-white md:border-[3px] border">
                  Know More
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
