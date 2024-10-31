import React from "react";
// import topimage1 from "../../assets/Hero_Image/imagetop1.jpg";
// import topimage2 from "../../assets/Hero_Image/imagetop2.jpg";
import BlogCard from "./BlogCard";

const blogItem = [
  {
    id: 1,
    title: "رشد چاپخانه‌ها در سال 2024",
    date: "2024-10-01",
    discription:
      "Web development trends in 2024 are changing rapidly, with a focus on modern frameworks like React and the rise of Tailwind CSS. In this article, we explore the future of web development.",
    image: null,
  },

  {
    id: 2,
    title: "راهنمای شروع به کار با چاپ دیجیتال",
    date: "2024-09-25",
    discription:
      "Tailwind CSS is gaining popularity for its utility-first approach. This guide will walk you through the basics and show you how to get started with Tailwind.",
    image: null,
  },

  {
    id: 3,
    title: "تکنیک‌های جدید چاپ برای افزایش کیفیت",
    date: "2024-10-10",
    discription:
      "Web development trends in 2024 are changing rapidly, with a focus on modern frameworks like React and the rise of Tailwind CSS. In this article, we explore the future of web development.",
    image: null,
  },

  {
    id: 4,
    title: "چاپ سازگار با محیط زیست",
    date: "2024-09-30",
    discription:
      "Tailwind CSS is gaining popularity for its utility-first approach. This guide will walk you through the basics and show you how to get started with Tailwind.",
    image: null,
  },
];

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
