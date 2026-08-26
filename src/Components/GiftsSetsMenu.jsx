import React, { useEffect, useState } from "react";
import makeupimage from "../assets/makeupimage.png";
import serum from "../assets/Serum.png";
import captureYouth from "../assets/CaptureYouth.png";
import skincare from "../assets/skincareimage.png";
import diorPrestige from "../assets/DiorPrestige.png";
import giftsSet from "../assets/giftsImage.png";
import { GoChevronRight } from "react-icons/go";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import ads1 from "../assets/Ads1.png";
import ads2 from "../assets/Ads2.png";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const OutOfStockToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <div className="bg-white p-3 flex items-start justify-between md:border-b border-y">
      <p className="font-bold text-base">Out Of Stock Items</p>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="block bg-[#A10550] w-10 h-6"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 transition ${
              isChecked ? "transform translate-x-full " : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

const GiftsSetsMenu = () => {
  const [products, setProducts] = useState([]);
  const [dropList, setDropList] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [viewFilters, setViewFilters] = useState(false);
  const navigate = useNavigate();
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleItemList = (item) => {
    setSelectedFilters((prev) => [...prev, item]);
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const images = [diorPrestige, makeupimage, skincare, giftsSet];
    const imageAds1 = [ads1];
    const imageAds2 = [ads2];
    const newList = [];

    for (let i = 0; i < 10; i++) {
      const selectedImage = images[Math.floor(Math.random() * images.length)];
      newList.push({
        imageUrl: selectedImage,
        title: "Beatuya Prestige La Mousse Micellaire",
        description: "Anti-Aging Face Serum, With Purifying French Water Lily",
        price: "$520.00",
      });
    }

    // for (let i = 0; i < 2; i++) {
    imageAds1.forEach((ad) => {
      let inserted = false;
      while (!inserted) {
        const position = Math.floor(Math.random() * newList.length);
        const isValidPosition =
          position > 0 &&
          newList[position - 1].imageUrl !== ad &&
          position < newList.length - 1 &&
          newList[position + 1].imageUrl !== ad;
        if (isValidPosition) {
          newList.splice(position, 0, {
            imageUrl: ad,
            isAd: true,
            isVertical: true,
          });
          inserted = true;
        }
      }
    });

    imageAds2.forEach((ad) => {
      let inserted = false;
      while (!inserted) {
        const position = Math.floor(Math.random() * newList.length);
        const isValidPosition =
          position > 0 &&
          newList[position - 1].imageUrl !== ad &&
          position < newList.length - 1 &&
          newList[position + 1].imageUrl !== ad;
        if (isValidPosition) {
          newList.splice(position, 0, {
            imageUrl: ad,
            isAd: true,
            isVertical: false,
          });
          inserted = true;
        }
      }
    });
    // }
    setProducts(newList);
  };

    const menuData = [
      {
        title: "Category",
        items: [
          "Cleansers",
          "Exfoliator",
          "Toners",
          "Retinols",
          "Peels And Masques",
          "Moisturizer",
          "Night Cream",
          "Facial Cream",
          "Sunscreen",
          "Eye Care",
        ],
      },
      {
        title: "Skin Condition",
        items: [
          "Brightening",
          "Hydration",
          "Acne",
          "Anti-Aging",
          "Redness",
          "Sensitive Skin",
          "Sun Protection",
        ],
      },
      {
        title: "Featured",
        items: [
          "New",
          "Best Seller",
          "Travel Size",
          "Professional Treatments",
          "Daily Defense",
        ],
      },
      {
        title: "Price",
        items: [
          "$50.00 - $150.00",
          "$150.00 - $250.00",
          "$250.00 - $350.00",
          "$350.00 - $450.00",
          "$450.00 - $550.00",
        ],
      },
    ];

  return (
    <>
      <div className="bg-[#FAF9F5]">
        <Navbar />
        <div className="flex justify-center h-auto w-full">
          <div className="flex flex-col 2xl:p-5 md:p-4 py-4 md:py-0">
            <div className="flex flex-col gap-5 mb-4 ">
              <p className="flex flex-row items-center gap-1">
                Home <GoChevronRight />
                <span className="font-bold">All Products</span>
              </p>
              <p>
                <span className="text-xl font-bold">All Products</span> (216)
              </p>
              {selectedFilters.length > 0 && (
                <div className="flex flex-col gap-3 pt-3 md:hidden">
                  <div className="flex flex-row justify-between">
                    <p className="font-bold">Applied Filters</p>
                    <p
                      className="text-[#A10550] cursor-pointer pb-3"
                      onClick={clearAllFilters}
                    >
                      Clear All Filters
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {selectedFilters.map((filter, index) => (
                      <li
                        key={index}
                        className="p-2 border flex gap-2 justify-between items-center"
                      >
                        {filter}
                        <span
                          onClick={() => removeFilter(filter)}
                          className="cursor-pointer"
                        >
                          <RxCross2 />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg hidden md:block">Filter</p>
                <button
                  type="button"
                  className="md:hidden flex flex-row justify-center border border-gray-300 md:px-8 px-6 py-2 bg-white text-sm text-gray-700"
                  id="menu-button"
                  onClick={() => setViewFilters(!viewFilters)}
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <p className="flex flex-row gap-3 items-center">
                    <HiOutlineAdjustmentsHorizontal className="text-lg" />
                    Filter
                  </p>
                </button>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex justify-center border border-gray-300 md:px-4 px-4 py-2 bg-white text-sm font-medium text-gray-700"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setDropList(!dropList)}
                  >
                    <p className="text-xs">
                      <span className="font-bold">Sort :</span> Recommended
                    </p>
                    <FaCaretDown
                      className="ml-2 -mr-1 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </button>
                  {dropList && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                          Recommended
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                        >
                          Price: Low to High
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                        >
                          Price: High to Low
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                        >
                          New Arrivals
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md:grid grid-cols-4 md:gap-4 gap-0 flex justify-center">
              <div className="col-start-1 md:flex flex-col gap-1">
                <div className="md:flex flex-col gap-3 bg-white mr-5 px-3 pt-3 hidden">
                  <p className="font-bold">Applied Filters</p>
                  <ul className="flex flex-col gap-2">
                    {selectedFilters.map((filter, index) => (
                      <li
                        key={index}
                        className="p-2 border flex gap-2 justify-between items-center"
                      >
                        {filter}
                        <span
                          onClick={() => removeFilter(filter)}
                          className="cursor-pointer"
                        >
                          <RxCross2 />
                        </span>
                      </li>
                    ))}
                  </ul>
                  {selectedFilters.length > 0 && (
                    <p
                      className="text-[#A10550] cursor-pointer pb-3"
                      onClick={clearAllFilters}
                    >
                      Clear All Filters
                    </p>
                  )}
                </div>
                <div
                  className={`fixed inset-0  bg-white p-4 transform transition-transform duration-300 ease-in-out md:relative md:p-0 ${
                    viewFilters
                      ? "  translate-x-0 overflow-y-scroll z-50"
                      : "translate-x-full "
                  } md:translate-x-0 flex flex-col md:gap-1 md:mr-5 ${
                    viewFilters ? "h-full w-full" : ""
                  } md:block`}
                >
                  <div className="flex justify-between items-center bg-white p-3 md:hidden">
                    <p className="text-lg font-bold">Filters</p>
                    <span
                      className="cursor-pointer text-3xl"
                      onClick={() => setViewFilters(false)}
                    >
                      &times;
                    </span>
                  </div>
                  <div>
                  <OutOfStockToggle />
                  {menuData.map((menu, index) => (
                    <div className="bg-white border-b">
                      <div
                        className={`flex flex-row justify-between items-center cursor-pointer p-3 ${
                          isVisible ? "text-[#A10550]" : "text-black"
                        }`}
                        onClick={toggleVisibility}
                      >
                        <p className="font-bold text-base">{menu.title}</p>
                        <span>
                          {isVisible ? <FaCaretUp /> : <FaCaretDown />}
                        </span>
                      </div>
                      <ul className={`${isVisible ? "block p-3" : "hidden"}`}>
                        {menu?.items &&
                          menu?.items?.map((item, index) => (
                            <li key={index} className=" flex py-1 gap-2">
                              <input
                                type="checkbox"
                                name={item}
                                id={item}
                                checked={selectedFilters.includes(item)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    handleItemList(e.target.name);
                                  } else {
                                    removeFilter(e.target.name);
                                  }
                                }}
                              />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                  </div>
                  <div className="border-t md:hidden">
                    <div className="grid grid-cols-2 p-3">
                      <button
                        className="bg-transparent text-[#A10550] px-2 py-2"
                        onClick={clearAllFilters}
                      >
                        Clear Filters
                      </button>
                      <button
                        className="text-white bg-[#A10550] px-2 py-2"
                        onClick={() => setViewFilters(false)}
                      >
                        Applied Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 col-span-3 gap-4">
                {products.map((product, index) => {
                  return product.isAd === true && product.isVertical ? (
                    <>
                      {/* <div></div> */}
                      <div
                        key={index}
                        className="flex flex-col 2xl:w-64 lg:w-60 md:w-44 w-36 border bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${product.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </>
                  ) : product.isAd === true && product.isVertical === false ? (
                    <>
                      {/* <div></div> */}
                      <div
                        key={index}
                        className="col-span-2 2xl:w-[33rem] lg:w-[31rem] md:w-[23rem] w-[19rem] h-fit border"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          className="object-contain"
                        />
                      </div>
                    </>
                  ) : (
                    <div
                      key={index}
                      className="flex flex-col 2xl:w-64 lg:w-60 md:w-44 w-36 h-fit border bg-white cursor-pointer"
                      onClick={()=>navigate("/View_Products")}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className=" object-contain"
                      />
                      <div className="flex flex-col gap-1 p-3">
                        <p className="font-bold text-[#A10550] md:text-sm">
                          {product.title}
                        </p>
                        <p className="text-xs">{product.description}</p>
                        <p className="md:text-sm text-sm">{product.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GiftsSetsMenu;
