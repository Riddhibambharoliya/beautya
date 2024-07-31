import React from "react";
import { GiRabbit } from "react-icons/gi";
import { LuLeaf } from "react-icons/lu";
import { LuWheat } from "react-icons/lu";
import { FaRecycle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";
import { GrReddit } from "react-icons/gr";
import { FaRegCopyright } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#FBEFF2] grid 2xl:grid-cols-4 lg:grid-cols-2 px-5 2xl:px-44 md:px-20  grid-cols-1 py-5 gap-5 text-[#510228]">
          <div className="flex gap-4 md:gap-5">
            <GiRabbit className="text-2xl" />
            <span className="text-xs md:text-base">No Tests On Animals</span>
          </div>
          <div className="flex gap-4 md:gap-5">
            <LuLeaf className="text-2xl" />
            <span className="text-xs md:text-base">
              No Animal-Derived Ingredient
            </span>
          </div>
          <div className="flex gap-4 md:gap-5">
            <LuWheat className="text-2xl" />
            <span className="text-xs md:text-base">
              No Gluten, Or Gluten Byproducts{" "}
            </span>
          </div>
          <div className="flex gap-4 md:gap-5">
            <FaRecycle className="text-2xl" />
            <span className="text-xs md:text-base">Recyclable Packaging</span>
          </div>
        </div>
        <div className="bg-[#510228] py-10 2xl:px-44 md:px-20  md:gap-20 2xl:gap-80  gap-10 flex md:flex-row flex-col flex-wrap px-5 text-[#FBEFF2]">
          <div>
            <p className="font-bold text-lg text-[#FBEFF2] pb-3">
              How Can We Help?
            </p>
            <p>Beautya Branches</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Our Brand</p>
            <p>Blog</p>
          </div>
          <div>
            <p className="font-bold text-lg text-[#FBEFF2] pb-3">Products</p>
            <p>Women Make Up</p>
            <p>Women Skincare</p>
            <p>Gifts & Sets</p>
          </div>
          <div>
            <p className="font-bold text-lg text-[#FBEFF2] pb-3">
              keep In Touch With Beautya
            </p>
            <p>
              Join The Beautya Newsletter And Be To Hear About News, Offers And
              Skincare Advice
            </p>
            <form action="" className="flex flex-col md:flex-row gap-3 pt-5">
              <div className="flex gap-3 pt-5 flex-col w-auto">
                <div className="flex border-b md:border-none border-b-rose-400">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="bg-transparent border-0 md:border-b md:border-b-rose-400 focus:outline-none text-rose-300 placeholder:text-rose-300 w-full p-3"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" name="" id="" className="mt-1" />
                  <span className="">
                    I agree to Beautya's Terms and Conditions and Privacy and
                    Policy
                  </span>
                </div>
              </div>
              <div className="w-auto pt-6">
                <button className="p-2 border w-full border-rose-300 bg-transparent text-rose-300 md:flex">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[#3D021E] px-5 2xl:px-44 md:px-20  py-5 flex justify-between md:flex-row flex-col gap-7">
          <div className="flex md:flex-row text-[#FBEFF2] gap-5 flex-col">
            <div className="flex gap-3 items-center">
              <CiLocationOn className="text-[#FA58A6] text-2xl" />
              <span>Dr. Richardson, California</span>
            </div>
            <span className="text-[#FA58A6] hidden md:flex">|</span>
            <div className="flex gap-3 items-center ">
              <MdOutlineCall className="text-[#FA58A6] text-2xl" />
              <span>1-802-526-2463</span>
            </div>
          </div>
          <div className="text-[#FA58A6] text-2xl flex gap-6">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <BiLogoPinterest />
            <GrReddit />
            <FaTiktok />
          </div>
        </div>
        <div className="bg-[#14010A] text-[#FBEFF2] flex px-5 2xl:px-44 md:px-20  py-5 justify-between md:flex-row flex-col gap-7">
          <div>
            <span className="flex items-center gap-3">
              <FaRegCopyright />
              2023 Beautya, All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
