import React from "react";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import { GoChevronRight } from "react-icons/go";
import BrandImg from "../assets/Main_Image2.png";
import Blog2 from "../assets/blog2.png";
import BrandImg2 from "../assets/Brand.png";

const Brand = () => {
  return (
    <>
      <div className="bg-[#FAF9F5]">
        <Navbar />
        <div className="flex flex-col w-full h-auto md:mb-10 my-5">
          <div className="flex flex-col gap-2 2xl:px-0 justify-center items-center">
            <div className="container">
              <p className="pl-7 flex flex-row items-center gap-1 text-xs md:text-base mb-2">
                Home <GoChevronRight />
                <span className="font-bold">Our Brand</span>
              </p>
            </div>
          </div>
          <div className="my-5 bg-[#510228] w-full text-white flex justify-center items-center py-7 px-4 2xl:px-0">
            <div className="container">
              <div className="flex flex-col gap-3 md:items-start items-center md:pl-8 pl-0">
                <h1 className="font-bold text-2xl">Our Brand</h1>
                <img
                  src={BrandImg}
                  alt=""
                  className="md:w-3/4 md:h-auto w-60 h-52"
                />
                <p>
                  We Believe That Beauty Thrivers In Diversity And Discovery.
                  Our Purpose Is To Expand The Way The World Sees Beauty By
                  Empowering The ExtraOrdinary In Each Of Us.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="container">
              <div className="flex md:flex-row flex-col justify-between md:mx-10 mx-4 gap-4 md:gap-4 mb-4">
                <div className="flex flex-col gap-3 md:w-1/2">
                  <h1 className="font-bold text-xl">Heritage</h1>
                  <div className="text-sm md:text-base flex flex-col gap-2">
                    <p>
                      From The Very Beginning, Our Founder Believed That Beautya
                      Could Not Only Disrupt{" "}
                      <span className="text-[#A10550]"> Beauty </span> Retail,
                      But That It Would Have A Positive Impact On The World.
                    </p>

                    <p>
                      Our Story Began In 2015 When Our Founder, Jane, Realized
                      That There Were Very Few Cosmetic Brands That Catered To
                      Her Skin Type. She Started Experimenting With Different
                      Ingredients And Formulations In Her Kitchen, And Soon Her
                      Friends And Family Were Raving About Her Products.
                      Encouraged By Their Feedback, Jane Decided To Turn Her
                      Hobby Into A Business.
                    </p>
                    <p>
                      Today, Our Team Of Experts Works Hard To Create Cosmetics
                      That Are Not Only Effective But Also Sustainable And
                      Ethical.
                    </p>
                  </div>
                </div>
                <div className="h-full bg-slate-100">
                  <img src={Blog2} alt="" className="h-60 w-[25rem]" />
                </div>
              </div>
              <div className="flex flex-col md:mx-10 mx-4 gap-3 text-sm mt-5">
                <h1 className="font-bold text-lg">
                  Ethical And Sustainable Beauty:
                </h1>
                <p>
                  At Beautya Cosmetic Company, We Believe That Beauty Should
                  Never Come At The Expense Of Animals, The Environment, Or Our
                  Customers' Health. That's Why We've Made Sure That Our
                  Products Are Vegan, Curl-Free, Gluten- Free, And Packaged In
                  Recycled Materials
                </p>
                <h1 className="font-bold text-base">Vegan, Curl-Free</h1>
                <p>
                  When We Say Our Products Are Vegan, We Mean That We Never Use
                  Any Animal-Derived Ingredients Or Byproducts In Our
                  Formulations. We Believe That Cruelty-Free Beauty Is The Way
                  Of The Future, And We're Proud To Be A Part Of That Movement.
                </p>
                <h1 className="font-bold text-base">Gluten-Free Products</h1>
                <p>
                  For Those With Sensitivities Or Allergies To Gluten, We've
                  Made Sure That Our Products Are 100% Gluten-Free. You Can Use
                  Our Products With Confidence, Knowing That They Are Safe And
                  Gentle On Your Skin.
                </p>
                <h1 className="font-bold text-base">Recycled Packaging</h1>
                <p>
                  Finally, We're Committed To Doing Our Part For The
                  Environment, Which Is Why We've Packaged Our Products In
                  Recycled Materials. By Choosing Our Products, You're Making A
                  Positive Impact On The Planet And Reducing Your Environmental
                  Footprint.
                </p>
                <p>
                  We're Dedicated To Providing You With High-Quality,
                  Ethically-Sourced Beauty Solutions That You Can Feel Good
                  About Using.
                </p>
              </div>
              <div className="bg-[#510228]">
                <div className=" text-white flex md:flex-row items-center flex-col md:mx-10 mx-4 gap-3 text-sm mt-5 py-5">
                  <img
                    src={BrandImg2}
                    alt=""
                    className="md:w-96 w-52 md:h-80 h-48"
                  />
                  <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-xl">
                      Diversity Equity & Inclusion
                    </h1>
                    <p>
                      We Believe That Beauty Is A Form Of Self-Expression And
                      Should Be Inclusive Of All Cultures And Traditions, WHich
                      Is Why We Offer Products That Are Inspired By Diverse
                      Beauty Rituals From Around The World.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:mx-10 mx-4 gap-3 text-sm mt-5">
                <h1 className="font-bold text-lg">Our Commitments</h1>
                <p>
                  We Believe That Everyone Deserves Access To Safe, Effective
                  And Ethical Cosmetic Products, Regardless Of Their Lifestyle
                  Or Dietary Restrictions. Our Commitment To These Values
                  Extends Beyond Our Product Offerings To Include Sustainable
                  And Eco-Friendly Manufacturing Processes, Ethical Sourcing Of
                  Ingredients, And Giving Back To The Communities We Serve. At
                  Beautya, We Are Proud To Be A Leader In The Ethical And
                  Sustainable Beauty Industry, And We Look Forward To Continuing
                  To Innovate And Push Boundaries In Our Commitment To Providing
                  Our Customers With The Best Products And Experiences Possible
                </p>
                <h1 className="font-bold text-lg">
                  Global Branches & Satisfied Customers
                </h1>
                <p>
                  At Beautya, We Are Proud To Have A Global Presence With
                  Branches In Multiple Countries. Our Mission Is To Provide
                  High-Quality Cosmetic Products That Cater To A Diverse Range
                  Of Skin Types And Tones, While Also Delivering Exceptional
                  Customer Service. Our Team Members Are Trained To Listen To
                  Customers' Concerns And Preferences, And They Use Their
                  Expertise To Recommend Products That Are Tailored To Their
                  Individual Needs. In This Section, We Will Provide An Overview
                  Of Our Company's Branches And The Unique Services They Offer,
                  As Well As Share Some Of The Positive Feedback We Have
                  Received From Our Satisfied Customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brand;
