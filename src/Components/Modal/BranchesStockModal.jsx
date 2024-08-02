import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TbLocation } from "react-icons/tb";

const BranchesStockModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto">
              <div className="border-0 relative flex flex-col w-full bg-[#FAF9F5] outline-none focus:outline-none p-10 gap-3">
                <div className="flex flex-row justify-between items-center">
                  <h1>Check In Branches Stock</h1>
                  <span>
                    <RxCross2 />
                  </span>
                </div>
                <div className="flex flex-col gap-3 ">
                  <p>What Size Are You Looking For?</p>
                  <select name="" id="">
                    <option value="">30 ML</option>
                    <option value="">40 ML</option>
                    <option value="">50 ML</option>
                    <option value="">60 ML</option>
                    <option value="">70 ML</option>
                    <option value="">80 ML</option>
                  </select>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="">Address</label>
                    <input type="text" />
                    <p>City, Street Or Zip Code</p>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <button>Search</button>
                    <span>Or</span>
                    <button className="flex flex-row items-center gap-2">
                      <TbLocation />
                      <span>Around Me</span>
                    </button>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col-reverse">
                  <div className="flex flex-col overflow-auto border">
                    <div className="border-b">
                      <h1>Dickins & Jones_STR 0502 Richmond</h1>
                      <p>
                        <span>
                          <TbLocation />
                        </span>
                        80 George Streeet, RichMond, Tw9 1 HA
                      </p>
                      <p>
                        <span>Closed</span> - Opens At 6:00pm
                      </p>
                      <p>4 In Stock</p>
                      <button>More Details</button>
                    </div>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238034.7516207152!2d72.57489779453128!3d21.220227099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6c883e4341%3A0x7c331510e42db020!2sShree%20Swaminarayan%20Mandir%20Kalakunj!5e0!3m2!1sen!2sin!4v1722602761749!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default BranchesStockModal;
