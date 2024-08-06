import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const BranchesStockModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [size, setSize] = useState("30 ML");
  const [address, setAddress] = useState("");
  const [viewMap, setViewMap] = useState(false);
  const [viewBranch, setViewBranch] = useState(false);

  const [view, setView] = useState("Map");

  const locationArea = [
    {
      Store: "Dickins & Jones_STR 0502 Richmond",
      Address: "80 George Streeet, RichMond, Tw9 1 HA",
      Status: "Closed - Opens At 6:00pm",
      Stock: "4 In Stock",
    },
    {
      Store: "Dickins & Jones_STR 0502 Richmond",
      Address: "80 George Streeet, RichMond, Tw9 1 HA",
      Status: "Closed - Opens At 6:00pm",
      Stock: "4 In Stock",
    },
    {
      Store: "Dickins & Jones_STR 0502 Richmond",
      Address: "80 George Streeet, RichMond, Tw9 1 HA",
      Status: "Closed - Opens At 6:00pm",
      Stock: "4 In Stock",
    },
    {
      Store: "Dickins & Jones_STR 0502 Richmond",
      Address: "80 George Streeet, RichMond, Tw9 1 HA",
      Status: "Closed - Opens At 6:00pm",
      Stock: "4 In Stock",
    },
    {
      Store: "Dickins & Jones_STR 0502 Richmond",
      Address: "80 George Streeet, RichMond, Tw9 1 HA",
      Status: "Closed - Opens At 6:00pm",
      Stock: "4 In Stock",
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-50 ${
          window.innerWidth < 768
            ? "flex justify-center items-center"
            : "flex justify-center items-center overflow-x-hidden overflow-y-auto"
        } bg-black bg-opacity-50 backdrop-blur-sm`}
      >
        <div
          className={`relative ${
            window.innerWidth < 768
              ? "w-full h-full overflow-auto"
              : "w-auto my-6 mx-auto max-w-4xl"
          }`}
        >
          <div className="border-0 relative flex flex-col bg-[#FAF9F5] outline-none focus:outline-none md:p-10 md:py-10 py-4 p-0 gap-3 overflow-auto">
            <div className="flex flex-row justify-between items-center px-5 md:px-0">
              <h1 className="text-lg font-bold">Check In Branches Stock</h1>
              <span onClick={onClose} className="cursor-pointer">
                <RxCross2 />
              </span>
            </div>
            <div className="flex flex-col gap-3 w-fit  h-auto px-5 md:px-0">
              <p>What Size Are You Looking For?</p>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-transparent border-b-2 py-2"
              >
                <option value="30 ML">30 ML</option>
                <option value="40 ML">40 ML</option>
                <option value="50 ML">50 ML</option>
                <option value="60 ML">60 ML</option>
                <option value="70 ML">70 ML</option>
                <option value="80 ML">80 ML</option>
              </select>
            </div>
            <div
              className={`md:grid md:grid-cols-2 flex flex-col justify-between gap-4 px-5 md:h-auto md:px-0 ${
                viewMap ? "h-auto" : "h-[80vh]"
              }`}
            >
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="bg-transparent p-2 border-b-2 focus:outline-none"
                />
                <p className="text-xs pl-2">City, Street Or Zip Code</p>
              </div>
              <div
                className={`flex md:flex-row h-fit md:gap-4 items-center w-full ${
                  viewMap ? "flex-row gap-5" : "flex-col gap-1"
                }`}
              >
                <button
                  className={`bg-[#A10550] text-white py-2 2xl:px-14 lg:px-14 md:px-10 w-full md:w-auto md:auto `}
                  onClick={() => setViewMap(!viewMap)}
                >
                  Search
                </button>
                <span className={` md:flex ${viewMap ? "hidden" : "md:flex"}`}>
                  Or
                </span>
                <button
                  className={`flex flex-row items-center justify-center gap-3 border md:w-auto border-[#A10550] text-[#A10550] py-2 2xl:px-9 lg:px-9 md:px-5 ${
                    viewMap ? "px-5" : "w-full"
                  }`}
                >
                  <TbLocation className="text-xl" />
                  <span className={`md:flex ${viewMap ? "hidden" : "md:flex"}`}>
                    Around Me
                  </span>
                </button>
              </div>
            </div>
            <div
              className={`md:hidden flex mb-0 px-5 md:px-0 ${
                viewMap ? "flex" : "hidden"
              }`}
            >
              <button
                className={`w-1/2 py-2  ${
                  view === "Map"
                    ? "border-b-2 border-[#A10550] text-[#A10550]"
                    : "border-0"
                }`}
                onClick={() => setView("Map")}
              >
                Map
              </button>
              <button
                className={`w-1/2 py-2 ${
                  view === "List"
                    ? "border-b-2 border-[#A10550] text-[#A10550]"
                    : "border-0"
                }`}
                onClick={() => setView("List")}
              >
                List
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <div
                className={`md:flex flex-col overflow-auto  h-[28rem] md:order-first order-last  px-5 md:px-0 ${
                  view === "List" ? "flex h-[33rem]" : "hidden"
                }`}
              >
                {/* <div
                  className={`flex items-center justify-center pb-3 ${
                    view === "List" ? "hidden" : "flex"
                  }`}
                >
                  <FaChevronDown className="text-xl" />
                </div> */}
                {locationArea.map((location, index) => (
                  <div
                    key={index}
                    className="border-b flex flex-col gap-5 p-4 bg-white border-2"
                  >
                    <h1 className="flex flex-row gap-3 items-center text-[#A10550] font-bold w-fit">
                      <IoLocationOutline className="md:text-xl text-4xl" />
                      <span>
                        {location.Store}{" "}
                        <span className="text-sm text-slate-400 font-normal">
                          (2.43 Kms)
                        </span>
                      </span>
                    </h1>
                    <div>
                      <p className="flex flex-row gap-3 items-center">
                        <TbLocation className="md:text-xl text-2xl" />
                        {location.Address}
                      </p>
                      <p className="text-sm flex flex-row items-center">
                        <span className="font-bold text-base flex flex-row items-center gap-3">
                          <MdOutlineWatchLater className="text-xl" />
                          {location.Status}
                        </span>
                      </p>
                      <p className="font-bold flex flex-row items-center gap-3">
                        <IoMdCheckmark className="text-xl" />
                        {location.Stock}
                      </p>
                    </div>
                    <button className="p-2 border-2 border-[#A10550] text-[#A10550]">
                      More Details
                    </button>
                  </div>
                ))}
              </div>
              <div
                className={`md:flex ${viewMap ? "flex" : "hidden"} ${
                  view === "Map" ? "flex" : "hidden"
                }`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238034.7516207152!2d72.57489779453128!3d21.220227099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6c883e4341%3A0x7c331510e42db020!2sShree%20Swaminarayan%20Mandir%20Kalakunj!5e0!3m2!1sen!2sin!4v1722602761749!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`w-full md:h-full h-[29rem]`}
                ></iframe>
              </div>

              <div
                className={`md:hidden w-full px-5 ${
                  viewMap ? "flex" : "hidden"
                } ${view==="List" ? "hidden" : "flex"}`}
              >
                <button
                  className="border-2 border-black w-full py-2"
                  onClick={() => setView("List")}
                >
                  View All Branches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchesStockModal;
