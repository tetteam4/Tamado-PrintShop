import React from "react";

import BlogCard from "../Components/Blog/BlogCard";
import { blogItem } from "../Components/Blog/blogdata";

const Blog = () => {
  return (
    <div>
      <section className=" bg-gray-100 dark:bg-slate-800 py-5">
        <div className="container mx-auto px-4">
          <div class="md:flex justify-between gap-6 p-4 ">
            <div class=" ">
              <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-5">
                وبلاگ
              </h1>
            </div>

            <div className="flex">
              <div class=" ">
                <input
                  type="text"
                  placeholder="جستجو در پست‌ها"
                  class="w-full md:w-3/4 p-2 rounded-md border border-gray-300 focus:outline-none "
                />
              </div>

              <div class="  ">
                <select class="w-full md:w-[200px] px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>فیلتر </option>
                  <option>جدیدترین</option>
                  <option>پرطرفدارترین</option>
                  <option>پست‌های پیشنهادی</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 rounded-md lg:grid-cols-2 gap-10">
            {blogItem.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
