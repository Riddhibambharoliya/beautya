import React, { useEffect, useState } from "react";
import { SellerProduct } from "../../../public/BestSeller";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(SellerProduct);
  }, []);
  console.log(products);
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="font-bold text-center md:text-2xl md:mb-5 mb-0 text-xl">
        Our Best Seller
      </h1>
      <div className="flex flex-row items-center">
        <div className="border p-2 cursor-pointer hidden md:flex">
          <FaCaretLeft className="text-xl text-gray-600" />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 m-3">
          {products?.map((product, index) => {
            return (
              <>
                <div className="flex- flex-col 2xl:w-72 md:w-44 border">
                  <div key={index}>
                    <img src={product.imageUrl} alt="" />
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
        <div className="border p-2 cursor-pointer hidden md:flex">
          <FaCaretRight className="text-xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
