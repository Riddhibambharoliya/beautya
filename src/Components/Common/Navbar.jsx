import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ic_header.png";
import { FiMenu } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import SkincareMenu from "./SkincareMenu";
import SearchMenu from "./SearchMenu";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSkinCareModalOpen, setIsSkinCareModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleMenuClick=()=>{
    setIsSkinCareModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsSkinCareModalOpen(false);
  };
  const handleSearchClick=()=>{
    setIsSearchModalOpen(true);
  }
  const handleSearchCloseModal = () => {
    setIsSearchModalOpen(false);
  };
  return (
    <>
      <div className="bg-white/30 backdrop-blur-md sticky top-0 z-10">
        <header className="grid grid-cols-5 p-3 md:flex md:flex-row md:items-center md:justify-around">
          <div className="grid col-span-4 grid-cols-subgrid text-center md:flex order-last md:order-first">
            <img src={logo} alt="Logo" className="h-14 col-start-2 col-end-4" />
          </div>
          <ul className="md:flex md:flex-row md:gap-5 md:font-bold lg:gap-12 hidden md:text-sm">
            <li to={"#"} onClick={handleMenuClick} className="cursor-pointer">Home</li>
            <li to={"#"} onClick={handleMenuClick} className="cursor-pointer">Women Skincare</li>
            <li to={"#"} onClick={handleMenuClick} className="cursor-pointer">All Products</li>
            <li to={"#"} onClick={handleMenuClick} className="cursor-pointer">Branches</li>
            <li to={"#"} onClick={handleMenuClick} className="cursor-pointer">Our Brand</li>
          </ul>
          <div className="flex flex-row gap-4 items-center ps-4 ">
            {isNavOpen ? (
              <span
                className="md:hidden text-xl"
                onClick={() => setIsNavOpen(false)}
              >
                <RxCross2 />
              </span>
            ) : (
              <span
                className="md:hidden text-xl"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <FiMenu />
              </span>
            )}
            <span className="text-xl cursor-pointer" onClick={handleSearchClick}>
              <GrSearch />
            </span>
          </div>
        </header>
      </div>
        <SkincareMenu isOpen={isSkinCareModalOpen} onClose={handleCloseModal}/>
        <SearchMenu isOpen={isSearchModalOpen} onClose={handleSearchCloseModal}/>

      <div className={isNavOpen ? "flex md:hidden" : "hidden"}>
        <div className="w-full h-screen p-4">
          <div className="flex flex-row gap-3 items-center pb-3 pl-2">
            <FaChevronLeft />
            <span>Skincare</span>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-col gap-1">
              <li className="p-2 bg-white flex flex-row justify-between items-center">
                Women Make Up
                <span>
                  <FaCaretRight />
                </span>
              </li>
              <li className="p-2 bg-white flex flex-row justify-between items-center">
                Women Skincare
                <span>
                  <FaCaretRight />
                </span>
              </li>
              <li className="p-2 bg-white flex flex-row justify-between items-center">
                Gifts & Sets
                <span>
                  <FaCaretRight />
                </span>
              </li>
              <li className="p-2 bg-white">Branches</li>
              <li className="p-2 bg-white">Our Brand</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
