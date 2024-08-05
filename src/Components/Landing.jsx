import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import main_image1 from "../assets/Main_Image.png";
import main_image2 from "../assets/Main_Image1.png";
import main_image3 from "../assets/Main_Image2.png";
import Slider from "./Common/Slider";
import makeupimage from "../assets/makeupimage.png";
import skincare from "../assets/skincareimage.png";
import giftsSet from "../assets/giftsImage.png";
import QRCode from "../assets/QRCode.png";
import skinCareAnalysis from "../assets/SkincareAnalysis.png";
import BestSeller from "./Common/BestSeller";
import NewSeller from "./Common/NewSeller";
import Offer from "../assets/Offer.png";
import Brand from "../assets/Brand.png";
import Blog from "./Common/Blog";
import ScrollToTopButton from "./Common/ScrollToTopButton";
import OnlineChatButton from "./Common/OnlineChatButton";

const Landing = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300; // Adjust this value based on your image width

  const images = [main_image1, main_image2, main_image3];

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <>
      <div className="bg-[#FAF9F5]">
        <Navbar />
        <div className="h-auto">
          <Slider items={images} />

          <div className="my-10">
            <h1 className="font-bold text-center md:text-2xl md:mb-5 mb-0 text-xl">
              Product's Categories
            </h1>
            <div className="flex gap-5 items-center justify-center p-5">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
                <img src={makeupimage} alt="" />
                <p className="text-sm md:text-lg flex flex-row gap-2">
                  <span className="hidden md:flex">Women</span> Make Up
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
                <img src={skincare} alt="" />
                <p className="text-sm md:text-lg flex flex-row gap-2">
                  <span className="hidden md:flex">Women</span> Skincare
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
                <img src={giftsSet} alt="" />
                <p className="text-sm md:text-lg flex flex-row">Gifts & Sets</p>
              </div>
            </div>
          </div>

          <div className="md:m-10 my-10 flex md:flex-row flex-col justify-center items-center md:text-[#FBEFF2] text-black">
            <div className="md:h-auto md:w-[75rem] md:bg-[#3D021E] grid grid-cols-1 md:grid-cols-2 bg-[#FBEFF2] ">
              <div className="md:flex hidden flex-col py-7 px-10">
                <p className="text-xl font-bold mb-2">
                  New Virtual Skincare Analysis
                </p>
                <p>
                  Looking For a Full Skincare Routine? Our NEW Virtual Skincare
                  Analysis Tool Evaluates Your Skin And Provides The Most
                  Personalized Recommendations.
                </p>
                <div className="flex flex-row justify-between gap-14 mt-4">
                  <div>
                    <p className="font-bold text-lg">
                      Scan WIth Your Phone TO Get Started
                    </p>
                    <p>Or</p>
                    <button className="border-2 py-2 px-4 mt-2">
                      Answer A Few Questions
                    </button>
                  </div>
                  <div>
                    <img src={QRCode} alt="QRCode" className="w-24 h-20 pt-3" />
                  </div>
                </div>
              </div>

              <div className="md:hidden flex items-center justify-center p-2">
                <p className="text-lg font-bold">Virtual Skincare Analysis</p>
              </div>
              <div className="h-full w-full">
                <img
                  src={skinCareAnalysis}
                  alt="skinCareAnalysis"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:hidden flex flex-col gap-4 pt-4 p-5">
                <p className="text-sm">
                  Looking For a Full Skincare Routine? Our NEW Virtual Skincare
                  Analysis Tool Evaluates Your Skin And Provides The Most
                  Personalized Recommendations.
                </p>
                <div className="flex flex-row gap-3 items-center">
                  <p className="text-[#CB0665] text-sm">
                    Answer a Few Questions
                  </p>
                  <button className="bg-[#A10550] px-4 py-2 text-[#FBEFF2]">
                    Take a Selfie
                  </button>
                </div>
              </div>
            </div>
          </div>

          <BestSeller />

          <div className="bg-[#3D021E] py-6 my-10 ">
            <NewSeller />
          </div>

          <div className="my-10 md:bg-[#FBEFF2] bg-none">
            <div className="flex md:flex-row flex-col justify-center items-center md:gap-10 gap-4 md:p-5 md:py-0">
              <div className=" flex font-bold text-xl md:hidden">
                Special Offers
              </div>
              <div className="h-full">
                <img src={Offer} alt="" />
              </div>
              <div className="md:flex flex-col 2xl:gap-5 md:gap-2 hidden w-[37rem] py-5">
                <p className="font-bold text-lg">Special Offers</p>
                <p className="text-[#A10550] text-2xl font-bold">
                  Save Up To 50%
                </p>
                <p>Mother's Day Is Coming!</p>
                <p>
                  For Everything She's Given It's Time To Give Back. Shower Her
                  With Love, Happiness, And The Best Of Beautya.
                </p>
                <p className="text-[#A10550] font-bold">
                  Visit Your Local Beautya Brances To Find Out More About Our
                  Special Offers In Make Up And Skincare Products.
                </p>
                <div className="flex justify-end items-center">
                  <button className="bg-[#A10550] px-5 py-2 text-[#FBEFF2]">
                    Find Branches
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:hidden gap-2 px-5">
                <p className="text-base font-bold">Mother's Day Is Coming!</p>
                <p>
                  Visit Your Local Beautya Brances To Find Out More About Our
                  Special Offers In Make Up And Skincare Products.
                </p>
                <div className="flex justify-center items-center mt-2">
                  <button className="text-[#A10550] border border-[#A10550] px-6 py-2">
                    Find Branches
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:m-10 my-10 flex md:flex-row flex-col justify-center items-center md:text-[#FBEFF2] text-black">
            <div className="md:h-auto md:w-[75rem] bg-[#3D021E] grid grid-cols-1 md:grid-cols-2 ">
              <div className="md:flex hidden flex-col py-7 px-20 gap-2 justify-center">
                <p className="text-xl font-bold mb-2">Our Brand</p>
                <p>
                  We Believe That Beauty Thrives And Discovery. Our Purpose Is
                  To Expand The Way The World Sees Beauty By Empowering The
                  Extraordinary In Each Od Us.
                </p>
                <button className="border-2 py-2 px-4 mt-2 w-40">
                  Discover More
                </button>
              </div>
              <div className="md:hidden flex items-center justify-center p-2">
                <p className="text-lg font-bold text-white">Our Brand</p>
              </div>
              <div className="h-full w-full flex md:justify-end justify-center">
                <img
                  src={Brand}
                  alt="Brand"
                  className="md:object-cover md:px-0 md:pt-0 pt-5"
                />
              </div>
              <div className="md:hidden flex flex-col gap-4 pt-4 p-5 text-white">
                <p className="text-sm">
                  We Believe That Beauty Thrives And Discovery. Our Purpose Is
                  To Expand The Way The World Sees Beauty By Empowering The
                  Extraordinary In Each Od Us.
                </p>
                <div className="flex flex-row gap-3 items-center justify-center">
                  <button className="border-2 px-4 py-2">Discover More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center my-10">
            <div>
              <h1 className="font-bold text-center md:text-2xl text-xl">
                Our Blog
              </h1>
              <div className="flex flex-col-reverse md:flex-col w-full">
                <div className="flex md:justify-end justify-center md:pr-14 mt-4 md:mt-0">
                  <button className="text-[#A10550]">View All</button>
                </div>
                <div className="flex flex-row justify-center items-center md:w-[80rem]">
                  <div className="flex flex-wrap md:flex-row flex-col md:gap-5 gap-2 mt-5 justify-center">
                    <Blog />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <ScrollToTopButton />
        <OnlineChatButton />
      </div>
    </>
  );
};

export default Landing;
