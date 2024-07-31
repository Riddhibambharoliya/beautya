import React, { useEffect, useState } from "react";
import { OurBlog } from "../../../public/Blog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(OurBlog);
  }, []);
  return (
    <div className="flex flex-col items-center my-10">
      <div>
        <h1 className="font-bold text-center md:text-2xl text-xl">
          Our Blog
        </h1>
        <div className="flex flex-col-reverse md:flex-col w-full">
          <div className="flex md:justify-end justify-center md:pr-14 mt-4 md:mt-0">
            <button className="text-[#A10550]">View All</button>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <div className="flex flex-wrap md:flex-row flex-col md:gap-5 gap-2 mt-5 justify-center">
              {blogs?.map((blog, index) => {
                return (
                  <>
                    <div className="flex flex-col w-72 border bg-white">
                      <div key={index}>
                        <img src={blog.imageUrl} alt="" className="w-full" />
                      </div>

                      <div className="md:p-5 p-2 flex flex-col gap-1">
                        <p className="font-bold md:text-lg text-sm ">
                          {blog.question}
                        </p>
                        <div className="flex flex-row text-xs gap-1">
                          <p>{blog.product}</p>|<p>{blog.name}</p>|
                          <p>{blog.date}</p>
                          <p></p>
                        </div>
                        <p className="text-sm pt-3">{blog.description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
