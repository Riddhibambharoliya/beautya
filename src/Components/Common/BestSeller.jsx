import React, { useEffect, useState } from "react";
import { SellerProduct } from "../../../public/BestSeller";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 4;

  useEffect(() => {
    setProducts(SellerProduct);
  }, []);

  const handleNext = () => {
    if (startIndex + productsPerPage < products.length) {
      setStartIndex(startIndex + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - productsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="font-bold text-center md:text-2xl md:mb-5 mb-0 text-xl">
        Our Best Seller
      </h1>
      <div className="flex flex-row items-center">
        <div
          className={`border p-2 cursor-pointer hidden md:flex ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handlePrev}
        >
          <FaCaretLeft className="text-xl text-gray-600" />
        </div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 m-3">
          {visibleProducts.map((product, index) => (
            <div key={index} className="flex flex-col 2xl:w-72 md:w-44 border">
              <img src={product.imageUrl} alt={product.title} className="object-contain" />
              <div className="md:p-5 p-2 flex flex-col gap-3">
                <p className="font-bold text-[#A10550] md:text-lg text-sm ">
                  {product.title}
                </p>
                <p className="text-sm">{product.description}</p>
                <p className="md:text-lg text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`border p-2 cursor-pointer hidden md:flex ${startIndex + productsPerPage >= products.length ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleNext}
        >
          <FaCaretRight className="text-xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;






// import React, { useEffect, useState } from "react";
// import { SellerProduct } from "../../../public/BestSeller";
// import { FaCaretRight } from "react-icons/fa";
// import { FaCaretLeft } from "react-icons/fa";

// const BestSeller = () => {
//   const [products, setProducts] = useState([]);
//   const [scrollIndex, setScrollIndex] = useState(0);
//   const scrollAmount = 1;

//   useEffect(() => {
//     setProducts(SellerProduct);
//   }, []);

//   const handleNext = () => {
//     if (scrollIndex + scrollAmount < products.length) {
//       setScrollIndex(scrollIndex + scrollAmount);
//     }
//   };

//   const handlePrev = () => {
//     if (scrollIndex > 0) {
//       setScrollIndex(scrollIndex - scrollAmount);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center my-10 ">
//       <h1 className="font-bold text-center md:text-2xl md:mb-5 mb-0 text-xl">
//         Our Best Seller
//       </h1>
//       <div className="relative  items-center">
//         <div
//           className={`absolute top-1/2 transform-translate-y-1/2 border p-2 cursor-pointer hidden md:flex bg-white shadow-md hover:shadow-lg ${scrollIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={handlePrev}
//         >
//           <FaCaretLeft className="text-xl text-gray-600" />
//         </div>
//         <div className="overflow-x-auto  scrollbar-hide mx-3">
//           <div className="inline-flex">
//             {products.map((product, index) => (
//               <div key={index} className="flex-shrink-0 2xl:w-72 md:w-44 border bg-white shadow-md hover:shadow-lg m-2">
//                 <img src={product.imageUrl} alt={product.title} className="object-contain w-full" />
//                 <div className="p-5 flex flex-col gap-3">
//                   <p className="font-bold text-[#A10550] text-lg">
//                     {product.title}
//                   </p>
//                   <p className="text-sm">{product.description}</p>
//                   <p className="text-lg">{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div
//           className={`absolute right-0 top-1/2 transform -translate-y-1/2 border p-2 cursor-pointer hidden md:flex bg-white shadow-md hover:shadow-lg ${scrollIndex + scrollAmount >= products.length ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={handleNext}
//         >
//           <FaCaretRight className="text-xl text-gray-600" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
