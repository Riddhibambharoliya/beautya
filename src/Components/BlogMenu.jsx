import React from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { GoChevronRight } from "react-icons/go";
import Blog from "./Common/Blog";

const BlogMenu = () => {
  return (
    <>
      <div className="bg-[#FAF9F5]">
        <Navbar />

        <div className="flex flex-col justify-center items-center w-full h-auto md:mb-10 my-5">
          <div className="container">
            <div className="flex flex-col mx-3 md:py-0">
              <div className="2xl:pl-0 md:pl-12 pl-0">
                <p className="flex flex-row items-center gap-1 text-xs md:text-base mb-2">
                  Home <GoChevronRight />
                  <span className="font-bold"> Blogs</span>
                </p>
                <h1 className="text-2xl font-bold">Blog</h1>
              </div>
              <div className="flex flex-row flex-wrap w-full justify-center">
                <div className="flex flex-wrap md:flex-row flex-col md:gap-4 gap-2 mt-5 justify-center">
                  <Blog />
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

export default BlogMenu;
