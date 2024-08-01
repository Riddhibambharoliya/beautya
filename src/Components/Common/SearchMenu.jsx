import React, { useEffect, useState } from "react";
import { SellerProduct } from "../../../public/BestSeller";
import { GrSearch } from "react-icons/gr";

const SearchMenu = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(SellerProduct);
  }, []);
  if (!isOpen) return null;

  return (
    <div className="inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:flex top-20 justify-center h-screen w-full ">
      <div className="fixed flex flex-1  md:bg-white bg-[#FAF9F5] 2xl:p-5 md:p-0 shadow-lg h-screen w-full" style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <button
          className="absolute top-3 right-3 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col gap-7 md:text-sm 2xl:px-0 md:px-5 py-5 ">
          <div className="2xl:mx-44 lg:mx-6 mx-5 ">
            <div className="border-b-2 border-b-slate-400 focus:border-b-pink-600 flex gap-5 flex-row p-3">
              <GrSearch className="text-xl" />
              <input
                type="text"
                name="product"
                id="product"
                placeholder="What Are You Looking For?"
                className="focus:outline-none w-full bg-transparent"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col 2xl:pl-44 lg:pl-5 md:pl-0 2xl:gap-32 lg:gap-12 md:gap-5">
            <div>
              <div className="md:flex flex-col md:px-0 mx-5 hidden">
                <div className="mb-7 text-slate-700">
                  <h1 className="font-bold 2xl:text-xl md:text-sm pb-3 text-black">
                    Trending Now
                  </h1>
                  <p className="lg:text-sm md:text-xs">Advanced Night Repair</p>
                  <p className="lg:text-sm md:text-xs">Pure Color</p>
                  <p className="lg:text-sm md:text-xs">Moisturizer</p>
                  <p className="lg:text-sm md:text-xs">Serum</p>
                </div>
                <div className=" text-slate-700">
                  <h1 className="font-bold 2xl:text-xl md:text-sm pb-3 text-black">
                    Your Recent Searches
                  </h1>
                  <p className="lg:text-sm md:text-xs">Facial Serum</p>
                  <p className="lg:text-sm md:text-xs">Eye Cream</p>
                </div>
              </div>
              <div className="md:px-0 mx-5 md:hidden">
                <h1 className="font-bold 2xl:text-xl md:text-sm pb-3 text-black">Suggestion</h1>
                <p>Cream</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between md:px-0 px-5 md:pt-0 pt-6">
                <h1 className="font-bold 2xl:text-lg md:text-base hidden">
                  Popular Products
                </h1>
                <p className="md:text-base text-sm">Showing 4 Of 18 Results</p>
                <button className="text-[#A10550] 2xl:text-lg md:text-base text-sm">
                  View All
                </button>
              </div>
              <div className="md:flex md:flex-row flex-wrap grid grid-cols-2 2xl:gap-4 md:px-0 px-5 lg:gap-1 md:gap-1 gap-2 my-3">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col 2xl:w-64 border"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="object-contain"
                    />
                    <div className="p-3 flex flex-col gap-3">
                      <p className="font-bold text-xs text-[#A10550] 2xl:text-base md:text-sm">
                        {product.title}
                      </p>
                      <p className="text-xs md:flex hidden">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
