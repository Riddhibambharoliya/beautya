import React from "react";
import Mackup from '../../assets/makeupimage.png'

const SkincareMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" hidden fixed md:flex flex-1 inset-0 bg-black bg-opacity-50 backdrop-blur-sm  top-20 justify-center h-screen w-full">
      <div className="bg-white p-5 shadow-lg h-fit w-full ">
        <button
          className="absolute top-3 right-3 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-row  justify-center 2xl:gap-[152px] lg:gap-[120px] md:gap-[32px] md:text-sm 2xl:px-0 md:px-5">
          <div>
            <ul className="font-bold">
              <li>New</li>
              <li>Best Sellers</li>
              <li>Travel Size</li>
              <li>Professional Treatments</li>
              <li>Daily Defense</li>
              <li>Virtual Skincare Analysis</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold 2xl:text-lg md:text-base">By Category</li>
              <li>Cleansers</li>
              <li>Exfoliators</li>
              <li>Toners</li>
              <li>Retinols</li>
              <li>Peels And Masques</li>
              <li>Moisturizer</li>
              <li>Night Cream</li>
              <li>Facial Oil</li>
              <li>Sunscreen</li>
              <li>Eye Care</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold 2xl:text-lg md:text-base">By Skin Condition</li>
              <li>Brightening</li>
              <li>Hydration</li>
              <li>Acne</li>
              <li>Anti-Ageing</li>
              <li>Redness</li>
              <li>Sensitive Skin</li>
              <li>Sun Protection</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold 2xl:text-lg md:text-base">Collection</li>
              <li>Beautya Cleansing</li>
              <li>Beautya Prestige</li>
              <li>Beautya Light-In-White</li>
              <li>Capture Totale</li>
              <li>Capture Youth</li>
              <li>Capture Dreamskin</li>
              <li>One Essential</li>
              <li>Professional Solution</li>
              <li>Beautya Hydra Life</li>
            </ul>
          </div>
          <div className="2xl:w-80 md:w-40 gap-2 flex flex-col">
            <img src={Mackup} alt="Product" className="2xl:w-full 2xl:h-52 md:w-48 h-40"/>
            <p>Capture Totale Super Potent Rich Cream</p>
            <p>
              Global Age-Defying Rich Cream - Intense Nourishment &
              Revitalization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkincareMenu;
