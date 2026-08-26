import React, { useState } from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { GoChevronRight } from "react-icons/go";
import ProductQuestions from "./Common/ProductQuestions";

const FAQs = () => {
  const [activeTab, setActiveTab] = useState("Product Information");

  const tabs = [
    "Product Information",
    "Gifts",
    "Career"
  ];

  return (
    <div className="bg-[#FAF9F5]">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-auto md:mb-10 my-5">
        <div className="container">
          <div className="flex flex-col md:mx-7 mx-3 md:py-0">
            <div className="flex flex-col gap-2">
              <p className="flex flex-row items-center gap-1 text-xs md:text-base mb-2">
                Home <GoChevronRight />
                <span className="font-bold">FAQs</span>
              </p>
            </div>
            <div className="md:grid grid-cols-5 flex md:mb-2 my-6 md:my-0">
              <div className="md:col-span-4 md:col-start-2 flex justify-start items-center">
                <h1 className="font-bold text-2xl md:pl-3">FAQs</h1>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 flex flex-col gap-5">
              <div className="">
                <ul className="flex md:flex-col flex-row gap-1 md:bg-white md:border-t border-b">
                  {tabs.map((tab) => (
                    <li
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`p-2 md:border-b font-bold cursor-pointer ${
                        activeTab === tab
                          ? "border-b-2 border-[#A10550] text-[#A10550]"
                          : ""
                      }`}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-4 w-full">
                {activeTab === "Product Information" && <ProductQuestions />}
                {activeTab === "Gifts" && <ProductQuestions />}
                {activeTab === "Career" && <ProductQuestions />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
