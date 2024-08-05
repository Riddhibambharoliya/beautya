import React, { useState } from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { GoChevronRight } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const items = [
    "Brunches",
    "Skin Type",
    "Special Offer And Promotion",
    "Returns And Refunds",
    "Product And Stock",
  ];

  return (
    <div className="bg-[#FAF9F5]">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-auto md:mb-10 my-5">
        <div className="container">
          <div className="flex flex-col md:mx-7 mx-3 md:py-0">
            <div className="flex flex-col gap-2">
              <p className="flex flex-row items-center gap-1 text-xs md:text-base mb-2">
                Home <GoChevronRight /> <span className="font-bold">Contact Us</span>
              </p>
              <h1 className="font-bold py-3 text-2xl"> Contact Us</h1>
              <div className="text-sm md:text-base">
              <p>
                Beautya Client Service Center Is Happy To Help You With Any
                Questions You May Have Regarding Our Products And Corporate
                Information.
              </p>
              <p>
                Contact Us By Phone: 1-802-526-2463 Monday To Friday, 9am to
                9pm, And Saturday-Sunday, 9am to 6pm Or Fill In The Form Below
                To Send Us An Email.
              </p>
              <p>
                Please Fill In This Form To Send Us Your Inquiry. We'll Be More
                Than Happy To Help And Will Reply To You As Soon As Possible.
              </p>
              </div>
            </div>
            <div className="bg-white 2xl:w-[74rem] w-full h-auto md:px-10 px-5 py-8 my-8 ">
              <h1 className="flex flex-row gap-2 items-center text-lg text-[#A10550] font-bold">
                <MdOutlineEmail /> Write Us
              </h1>
              <div className="flex flex-col py-5">
                <div>
                  <h1 className="font-bold pb-3">Your Information</h1>
                  <div className="md:grid md:grid-cols-2 flex flex-col gap-6 md:border-b border-b-slate-200 pb-10">
                    <select
                      name=""
                      id=""
                      className="col-start-1 focus:outline-none border-b border-b-slate-300 p-3"
                    >
                      <option value="">Title</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="First Name"
                      className="col-start-1 p-3 focus:outline-none border-b border-b-slate-300"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Last Name"
                      className="col-start-2 p-3 focus:outline-none border-b border-b-slate-300"
                    />
                    <select
                      name=""
                      id=""
                      className="col-start-1 focus:outline-none border-b border-b-slate-300 p-3"
                    >
                      <option value="">Country/Region</option>
                      <option value="Country1">Country1</option>
                      <option value="Country2">Country2</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="col-start-2 focus:outline-none border-b border-b-slate-300 p-3"
                    >
                      <option value="">Language</option>
                      <option value="Language1">Language1</option>
                      <option value="Language2">Language2</option>
                    </select>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email Address"
                      className="col-start-1 p-3 focus:outline-none border-b border-b-slate-300"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone Number(Optional)"
                      className="col-start-2 p-3 focus:outline-none border-b border-b-slate-300"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold pb-3 py-5 md:flex hidden">Your Request</h1>
                  <h3 className="pb-3">Subject</h3>
                  <ul className="flex md:flex-row flex-col gap-3">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className={`py-1 2xl:px-7 px-3 text-xs 2xl:text-base border-2 cursor-pointer ${
                          activeIndex === index
                            ? "bg-[#FBEFF2] text-[#A10550] border-[#A10550]"
                            : "border-2"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="my-4">
                    <textarea
                      name=""
                      id=""
                      className="w-full h-20 p-3 focus:outline-none border-b border-b-slate-300"
                      placeholder="Your Text"
                    ></textarea>
                    <p className="text-end">0/360</p>
                    <div className="md:m-0 p-3">
                      <input type="checkbox" name="" id="" className="mr-3" />
                      <span className="2xl:text-lg text-sm">
                        I Have Read And Understood The Contact Us Privacy And
                        Policy
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button className="text-[#A10550] py-2 px-9 border-2 cursor-pointer border-[#A10550] w-full md:w-auto">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 2xl:my-5 my-0">
              <div className="flex flex-col gap-3 bg-white md:w-96 w-full p-7">
                <h1 className="flex flex-row gap-3 items-center font-bold text-[#A10550] pb-2 uppercase text-sm 2xl:text-lg">
                  <MdOutlineMessage className="text-2xl" /> CHAT ONLINE
                </h1>
                <p className="font-bold">Looking For Personalized Advice?</p>
                <p className="text-sm">
                  The Option To Chat Becomes Active When One Of Our Client
                  Advisors Is Available.
                </p>
                <button className="text-[#A10550] border-2 border-[#A10550] w-full py-2 ">
                  Ask Your Question
                </button>
              </div>
              <div className="flex flex-col bg-white md:w-96 w-full p-7">
                <h1 className="flex flex-row gap-3 items-center font-bold  text-[#A10550] text-sm 2xl:text-lg pb-5 uppercase">
                  <MdOutlinePhone className="text-2xl" /> CALL US
                </h1>
                <p className="font-bold">
                  Our Client Advisors Would Be Delighted To Assist You.
                </p>
                <p className="font-bold pb-3">
                  You May Contact Us At{" "}
                  <span className="text-[#A10550] font-bold">
                    1-802-526-2463
                  </span>
                </p>
                <p className="text-sm">
                  Service Available From Monday To Friday From 10 Am To 8 Pm And
                  Saturday From 10 Am To 6 Pm
                </p>
              </div>
              <div className="flex flex-col gap-3 bg-white md:w-96 w-full p-7">
                <h1 className="flex flex-row gap-3 items-center font-bold text-sm 2xl:text-lg text-[#A10550] pb-2 uppercase">
                  <FiMessageSquare className="text-2xl" /> Instant Message
                </h1>
                <p className="font-bold">
                  Would You Like To Contact Us On An Instant Messaging App?
                </p>
                <p className="text-sm">
                  Our Client Advisors Will Be Delighted To Assist You
                </p>
                <button className="text-[#A10550] border-2 border-[#A10550] w-full py-2">
                  Ask Your Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
