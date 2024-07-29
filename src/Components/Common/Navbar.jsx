import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ic_header.png";
import { FiMenu } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
      <div className="bg-white/30 backdrop-blur-md">
        <header className="grid grid-cols-5 p-3 md:flex md:flex-row md:items-center md:justify-around">
          <div className="grid col-span-4 grid-cols-subgrid text-center md:flex order-last md:order-first">
            <img src={logo} alt="Logo" className="h-14 col-start-2 col-end-4" />
          </div>
          <div className="md:flex md:flex-row md:gap-5 md:font-bold lg:gap-12 hidden md:text-sm">
            <Link to={"#"}>Women Make Up</Link>
            <Link to={"#"}>Women Skincare</Link>
            <Link to={"#"}>Gifts & Sets</Link>
            <Link to={"#"}>Branches</Link>
            <Link to={"#"}>Out Brand</Link>
          </div>
          <div className="flex flex-row gap-4 items-center ps-4 md:">
            <span className="md:hidden text-xl"><FiMenu /></span>
            <span className="text-xl"><GrSearch /></span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
