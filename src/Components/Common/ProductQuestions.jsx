import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const ProductQuestions = () => {
  const [isVisible, setIsVisible] = useState(null);
  const toggleSection = (section) => {
    if (isVisible === section) {
      setIsVisible(null);
    } else {
      setIsVisible(section);
    }
  };

  const productQuestions = [
    {
      question: "What is The best way to use this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi architecto, in optio praesentium deserunt iusto nesciunt accusantium ex incidunt inventore quasi maxime reprehenderit quod, laboriosam, quo labore corrupti. Odio soluta laboriosam, iste aperiam blanditiis libero quas voluptatum minus labore aspernatur eaque eligendi explicabo minima adipisci molestias debitis praesentium repellat assumenda delectus provident consectetur voluptate hic! Laboriosam itaque quas harum necessitatibus optio rerum, repudiandae sequi temporibus hic quidem enim cupiditate quibusdam. Ipsa consectetur odit assumenda, officiis, deserunt tempora voluptatibus eos atque soluta corrupti earum eligendi omnis neque veritatis dolorum dolor nisi necessitatibus ducimus dolorem et aliquid mollitia. Maiores ex ad adipisci.",
    },
    {
      question: "Can this product be used on all skin types?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
    {
      question: "How often should i use this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
    {
      question: "How should i store this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
    {
      question: "How long will it take to see result from using this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
    {
      question: "How often should i use this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
    {
      question: "How should i store this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
    {
      question: "How long will it take to see result from using this product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum eius nisi quasi odit, debitis aspernatur, ipsa exercitationem  consequatur voluptatum ullam repellendus excepturi itaque.",
    },
  ];
  return (
    <>
      {/* <div className="">
        <h1 className="text-center text-lg font-bold mb-3">
          Prestige LA Micro-Huile Serum Frequently Asked Questions
        </h1> */}
        <div className="flex flex-col md:mx-3 mx-0 bg-white border-t">
          {productQuestions?.map((ques, index) => {
            return (
              <div key={index} className="flex flex-col  gap-3 border-b p-3">
                <div
                  className="flex flex-row justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <h2
                    className={`font-bold ${
                      isVisible === index ? "text-[#A10550]" : "text-black"
                    }`}
                  >
                    {ques.question}
                  </h2>
                  <span className="flex">
                    {isVisible === index ? (
                      <span className="text-[#A10550]">
                        <FiMinus />
                      </span>
                    ) : (
                      <FiPlus />
                    )}
                  </span>
                </div>
                <div
                  className={`${isVisible === index ? "block pl-2" : "hidden"}`}
                >
                  {ques.answer}
                </div>
              </div>
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
};

export default ProductQuestions;
