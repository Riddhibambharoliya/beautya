import React, { useEffect, useState } from "react";
import { SellerProduct } from "../../../public/BestSeller";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "../../Custom-Swiper-Button.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const productsPerPage = 4;

  useEffect(() => {
    setProducts(SellerProduct);
  }, []);

  return (
    <div className="flex flex-col items-center my-5 ">
      <h1 className="font-bold text-center md:text-2xl mb-5 text-xl">
        Our Best Seller
      </h1>
      <div className="relative w-full flex flex-row items-center justify-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper cursor-pointer grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 m-3 w-[75rem] md:h-[37rem] h-[34=3rem]"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="flex flex-col 2xl:w-72 md:w-44">
              <div className="border flex flex-col">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="object-contain"
                />
                <div className="md:p-5 p-2 flex flex-col gap-3">
                  <p className="font-bold text-[#A10550] md:text-lg text-sm ">
                    {product.title}
                  </p>
                  <p className="text-sm">{product.description}</p>
                  <p className="md:text-lg text-sm">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
