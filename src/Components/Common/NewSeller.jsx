import React, { useEffect, useState } from "react";
import { NewProduct } from "../../../public/NewProduct";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import Banner from "../../assets/Banner.png";

const NewSeller = () => {
  const [products, setProducts] = useState([]);
  const [isBanner, setIsBanner] = useState(true);
  useEffect(() => {
    setProducts(NewProduct);
  }, []);
  console.log(products);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-center md:text-2xl md:mb-5 mb-0 text-xl text-white">
        New In
      </h1>
      <div className="flex flex-row items-center">
        {!isBanner && <div className="border p-2 cursor-pointer hidden md:flex bg-white">
          <FaCaretLeft className="text-xl text-gray-600" />
        </div>}
        <div className="flex flex-row md:gap-5 gap-2 m-5 flex-wrap justify-center">
          {isBanner && (
            <div className="md:w-[35rem] gap-0">
              <div>
                <img src={Banner} alt="" />
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <p className="font-bold text-[#FDABD2] md:text-lg text-sm ">
                  Beauty La Mousse Off/On Foaming Cleaner
                </p>
                <p className="text-sm text-white flex flex-wrap">
                  Amet Minim Molit Non Deserunt UllamcoEst Sit Aliqua Dolor Do
                  Amet Sint,  Velit Officia Consequat Duis En Velit Mollit.
                </p>
              </div>
            </div>
          )}
          {products?.map((product, index) => {
            return (
              <>
                <div className="flex flex-col 2xl:w-72 lg:w-52 md:w-48 w-[136px] border bg-white">
                  <div key={index}>
                    <img src={product.imageUrl} alt="" className="w-full"/>
                  </div>

                  <div className="md:p-5 p-2 flex flex-col gap-3">
                    <p className="font-bold text-[#A10550] md:text-lg text-sm ">
                      {product.title}
                    </p>
                    <p className="text-sm">{product.description}</p>
                    <p className="md:text-lg text-sm">{product.price}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="border p-2 cursor-pointer hidden md:flex bg-white">
          <FaCaretRight className="text-xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default NewSeller;
