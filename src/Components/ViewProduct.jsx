import React, { useEffect, useState } from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { GoChevronRight } from "react-icons/go";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import serum from "../assets/Serum.png";
import captureYouth from "../assets/CaptureYouth.png";
import skincare from "../assets/skincareimage.png";
import diorPrestige from "../assets/DiorPrestige.png";
import giftsSet from "../assets/giftsImage.png";
import { MdCardGiftcard } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { BsTags } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ProductDetails from "./Common/ProductDetails";
import Banner from "../assets/Banner.png";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import ProductQuestions from "./Common/ProductQuestions";
import { SellerProduct } from "../../public/BestSeller";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import NewSeller from "./Common/NewSeller";
import offer from "../assets/Offer.png";
import BranchesStockModal from "./Modal/BranchesStockModal";

const ViewProduct = () => {
  const [dropList, setDropList] = useState(false);
  const [isVisible, setIsVisible] = useState(null);
  const [isReadable, setIsReadable] = useState(false);
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false);
  const productsPerPage = 4;

  useEffect(() => {
    setProducts(SellerProduct);
  }, []);

  const ProductImages = [
    diorPrestige,
    skincare,
    giftsSet,
    serum,
    captureYouth,
    diorPrestige,
    skincare,
    giftsSet,
    serum,
    captureYouth,
  ];

  const images = [Banner, Blog1, Blog2, Blog3];

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

  const visibleProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const toggleSection = (section) => {
    if (isVisible === section) {
      setIsVisible(null);
    } else {
      setIsVisible(section);
    }
  };

  const readableSection = (section) => {
    if (isReadable === section) {
      setIsReadable(null);
    } else {
      setIsReadable(section);
    }
  };

  const handleOpenModal = () => {
    setIsBranchModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsBranchModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#FAF9F5]">
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full h-auto md:mb-10 my-5">
          <div className="container">
            <div className="flex flex-col md:m-5 mx-3  md:py-0 gap-5">
              <div>
                <p className="flex flex-row items-center gap-1 text-xs md:text-base">
                  Home <GoChevronRight /> All Products <GoChevronRight />{" "}
                  <span className="font-bold">De Rose Advanced Serum</span>
                </p>
              </div>
              <div className="flex md:flex-row flex-col gap-5 2xl:gap-10">
                <div className="md:hidden flex flex-col gap-5">
                  <h1 className="md:text-2xl font-bold text-lg text-[#A10550]">
                    Beautya Prestige LA Micro-Huile De Rose Advanced Serum
                  </h1>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">Anti-Aging Face Serum</p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      All Types Of Skin | Am Or Pm | Brightening
                    </p>
                    <p className="text-gray-700 font-medium">
                      Formulated With 92% Natural-Origin Ingredients
                    </p>
                  </div>
                </div>
                <div className="flex flex-col 2xl:flex-row lg:flex-row gap-5 2xl:gap-10">
                  <div className="flex justify-center order-first lg:order-last">
                    <img
                      src={serum}
                      alt="Main Product"
                      className="object-fit w-[50rem] 2xl:max-h-[40rem] lg:max-h-[35rem] md:max-h-[30rem]"
                    />
                  </div>
                  <div className="2xl:w-36 lg:w-28 flex 2xl:flex-col lg:flex-col flex-row items-center justify-center w-full">
                    <button className="hidden lg:flex justify-center bg-white lg:py-1 border w-full">
                      <FaCaretUp />
                    </button>
                    <div className="flex 2xl:flex-col lg:flex-col flex-row gap-2 my-2 2xl:max-h-[35rem] md:max-h-[30rem] h-full overflow-auto">
                      {ProductImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt=""
                          className="lg:w-28 lg:h-28 md:h-24 md:w-24 h-20 object-cover"
                        />
                      ))}
                    </div>
                    <button className="hidden lg:flex justify-center bg-white py-1 border w-full">
                      <FaCaretDown />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col lg:gap-5 md:gap-3 gap-5">
                  <div className="hidden md:flex flex-col lg:gap-5 md:gap-3">
                    <h1 className="2xl:text-2xl font-bold md:text-lg text-[#A10550]">
                      Beautya Prestige LA Micro-Huile De Rose Advanced Serum
                    </h1>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Anti-Aging Face Serum</p>
                      <p className="text-gray-600 md:text-xs 2xl:text-sm">
                        All Types Of Skin | Am Or Pm | Brightening
                      </p>
                      <p className="text-gray-700 font-medium">
                        Formulated With 92% Natural-Origin Ingredients
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-2xl">$520.00</p>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="inline-flex justify-between border-b items-center border-b-gray-300 md:px-4 px-4 py-2 font-medium text-gray-700 w-full md:w-96"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => setDropList(!dropList)}
                    >
                      <p className="flex justify-between w-full">
                        <span className="">30 ML</span> <span>$520.00</span>
                      </p>
                      <FaCaretDown
                        className="ml-2 -mr-1 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </button>
                    {dropList && (
                      <div
                        className="origin-top-right absolute left-0 mt-2 w-full md:w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                          >
                            <p className="flex justify-between w-full">
                              <span className="">30 ML</span>{" "}
                              <span>$520.00</span>
                            </p>
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                          >
                            <p className="flex justify-between w-full">
                              <span className="">50 ML</span>{" "}
                              <span>$620.00</span>
                            </p>
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                          >
                            <p className="flex justify-between w-full">
                              <span className="">70 ML</span>{" "}
                              <span>$720.00</span>
                            </p>
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                          >
                            <p className="flex justify-between w-full">
                              <span className="">90 ML</span>{" "}
                              <span>$820.00</span>
                            </p>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="hidden bg-[#A10550] text-white py-2 px-4 my-3 md:flex flex-row justify-center items-center gap-2"
                    onClick={handleOpenModal}
                  >
                    <IoLocationOutline className="text-lg" /> Check in Branch
                    Stock
                  </button>
                  <button
                    className="bg-[#A10550] text-white py-2 px-4 md:hidden fixed bottom-0 left-0 right-0 w-full flex flex-row justify-center items-center gap-2"
                    onClick={handleOpenModal}
                  >
                    <IoLocationOutline className="text-lg" /> Check in Branch
                    Stock
                  </button>
                  <BranchesStockModal
                    isOpen={isBranchModalOpen}
                    onClose={handleCloseModal}
                  />
                  <div className="flex flex-col gap-3 md:text-base text-xs md:p-5 p-3 bg-[#FBEFF2] text-[#A10550]">
                    <p className="flex gap-4 items-center">
                      <span className="md:text-xl text-lg">
                        <MdCardGiftcard />
                      </span>
                      Receive 2 Free Samples When You $100
                    </p>
                    <p className="flex gap-4 items-center">
                      <span className="md:text-xl text-lg">
                        <BsTags />
                      </span>
                      Receive $2 When You Return 5 Empty Containers
                    </p>
                    <p className="flex gap-4 items-center">
                      <span className="md:text-xl text-lg">
                        <LuMessagesSquare />
                      </span>
                      Receive Free 1-2-1 Expert Advice In Branches
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ProductDetails />
          </div>
          <div className="flex flex-col gap-5 my-7 w-full items-center justify-center bg-[#510228] px-5 py-10">
            <div className="flex flex-row gap-3 overflow-auto ">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="object-cover h-64 w-64"
                />
              ))}
            </div>
            <div className="text-white flex flex-col justify-center items-center">
              <p>
                <span className="font-bold">In just 1 week : </span> It Appears
                Firmer, Stronger And Smoother.
              </p>
              <p>
                <span className="font-bold">In 3 weeks :</span> 2x Improvement
                In The Look Or Feel Of Skin Elasticity
              </p>
              <p>
                <span className="font-bold">After 1 month :</span> The Skin
                Looks Firmer +60% | The Skin Looks Denser +56%
              </p>
            </div>
          </div>
          <div className="container">
            <div className=" mx-3">
              <h1 className="text-center text-lg font-bold mb-3">
                Prestige LA Micro-Huile Serum Frequently Asked Questions
              </h1>
              <ProductQuestions />
            </div>

            <div className="flex flex-col items-center my-5">
              <h1 className="font-bold text-center flex flex-wrap md:text-2xl md:mb-5 px-3 mb-0 text-xl">
                Recommended Skincare Routine
              </h1>
              <div className="flex flex-row items-center">
                <div
                  className={`border p-2 cursor-pointer hidden md:flex ${
                    startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handlePrev}
                >
                  <FaCaretLeft className="text-xl text-gray-600" />
                </div>
                <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 m-3">
                  {visibleProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex flex-col 2xl:w-72 md:w-44 border"
                    >
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
                  ))}
                </div>
                <div
                  className={`border p-2 cursor-pointer hidden md:flex ${
                    startIndex + productsPerPage >= products.length
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNext}
                >
                  <FaCaretRight className="text-xl text-gray-600" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center my-5">
              <img src={offer} alt="" className="md:h-[30rem] md:w-[50rem]" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center my-5 py-10 bg-[#FBEFF2]">
            <h1 className="font-bold text-center flex flex-wrap md:text-2xl md:mb-5 px-3 mb-0 text-xl">
              You My Also Like
            </h1>
            <div className="flex flex-row items-center">
              <div
                className={`border p-2 cursor-pointer hidden md:flex ${
                  startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrev}
              >
                <FaCaretLeft className="text-xl text-gray-600" />
              </div>
              <div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 m-3">
                {visibleProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col 2xl:w-72 md:w-44 border bg-white"
                  >
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
                ))}
              </div>
              <div
                className={`border p-2 cursor-pointer hidden md:flex ${
                  startIndex + productsPerPage >= products.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNext}
              >
                <FaCaretRight className="text-xl text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ViewProduct;