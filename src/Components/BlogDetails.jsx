import React, { useEffect, useState } from "react";
import Navbar from "./Common/Navbar";
import { OurBlog } from "../../public/Blog";
import { GoChevronRight } from "react-icons/go";
import Footer from "./Common/Footer";
import Blog1 from "../assets/blog1.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";
import { GrReddit } from "react-icons/gr";
import { MdOutlineCopyAll } from "react-icons/md";

const BlogDetails = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(OurBlog);
  }, []);
  return (
    <>
      <div className="bg-[#FAF9F5]">
        <Navbar />

        <div className="flex flex-col justify-center items-center w-full h-auto md:mb-10 my-5">
          <div className="container">
            <div className="flex flex-col mx-3 md:py-0">
              <div className="2xl:pl-0 md:pl-12 pl-0">
                <p className="flex flex-row items-center gap-1 text-xs md:text-base mb-2">
                  Home <GoChevronRight /> Blogs <GoChevronRight />
                  <span className="font-bold"> How To Get Clear Skin Fast</span>
                </p>
              </div>
              <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-1 w-full 2xl:gap-10 md:gap-5 gap-10">
                <div className="2xl:col-span-3 md:col-span-2">
                  <div className="flex gap-3 flex-col">
                    <img
                      src={Blog1}
                      alt=""
                      className="w-full md:h-[35rem] h-[20rem]"
                    />
                    <h1 className="font-bold text-2xl">
                      How To Get Clear Skin Fast
                    </h1>
                    <p className="flex flex-row gap-2 text-sm text-slate-400">
                      Jan 20, 2021 <span>|</span>Dr. Wade Warren<span>|</span>
                      Skincare
                    </p>
                    <div className="flex flex-col gap-2 md:text-lg text-sm">
                      <p>
                        <span className="font-bold text-4xl md:text-7xl">
                          N
                        </span>
                        Umerous Skin Care Tips Exist For Different Skin Types,
                        And There Are Also General Tips That People Can Try.
                        Anyone Uncertain About Their Skin Care Routine Should
                        Consult A Dermatologist For Additional Advice.
                      </p>
                      <p>
                        Many People Find It Difficult To Get Clear Skin. The
                        Methods For Getting Clear Skin Will Vary, Depending On
                        The Person's Skin Type. In General, People Struggling
                        With Acne Or Blemishes Have Skin That Is Dry, Oily, Or A
                        Combination Of The Two.
                      </p>

                      <p className="font-bold text-lg py-2">
                        Avoid popping pimples
                      </p>
                      <p>
                        A Pimple Indicates Trapped Oil, Sebum, And Bacteria. It
                        Is Also A Sign That The Body's Natural Healing Mechanism
                        Is Working.
                      </p>
                      <p>
                        Popping The Pimple Disrupts This Healing Process.
                        Additionally, The Released Liquids Expose The
                        Surrounding Skin To Similar Bacteria, Increasing The
                        Risk Of Additional Pimples Forming.
                      </p>
                      <p>
                        The Exposed Pimple May Also Lead To Permanent Scarring.
                        Whenever possible, Avoid Popping Pimples. If They Drain,
                        Keep The Area Clean.
                      </p>
                      <p className="font-bold text-lg py-2">
                        Wash twice daily, and again after sweating
                      </p>
                      <p>
                        The American Academy Of Dermatology Recommend That
                        People Wash Twice Daily And Then Again After Sweating.
                        Leaving Sweat On The Skin And Allowing It To Dry Can
                        Make Acne Worse, So It Is Best To Wash The Skin As Soon
                        As Possible After Sweating.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                  <div className="text-[#3D021E] text-2xl flex  bg-white border justify-around w-full py-5 items-center">
                    <MdOutlineCopyAll />
                    <GrReddit />
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                  </div>
                  <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-2xl">Latest</h1>
                    {blogs.map((blog, index) => {
                      return (
                        <>
                          <div className="flex flex-row items-center bg-white border">
                            <div>
                              <img
                                src={blog.imageUrl}
                                alt=""
                                className="h-28 2xl:w-full lg:w-full md:w-60"
                              />
                            </div>
                            <div className="p-4">{blog.question}</div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetails;
