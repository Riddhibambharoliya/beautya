import React, { useEffect, useState } from "react";
import { OurBlog } from "../../../public/Blog";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(OurBlog);
  }, []);

  const handleBlog = () => {
    navigate("/Blog");
  };
  return (
    <>
      {blogs?.map((blog, index) => {
        return (
          <>
            <div
              className="flex flex-col w-72 border bg-white cursor-pointer"
              onClick={handleBlog}
            >
              <div key={index}>
                <img src={blog.imageUrl} alt="" className="w-full" />
              </div>

              <div className="md:p-5 p-2 flex flex-col gap-1">
                <p className="font-bold md:text-lg text-sm ">{blog.question}</p>
                <div className="flex flex-row text-xs gap-1">
                  <p>{blog.product}</p>|<p>{blog.name}</p>|<p>{blog.date}</p>
                  <p></p>
                </div>
                <p className="text-sm pt-3">{blog.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Blog;
