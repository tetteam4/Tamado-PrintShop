import React from "react";
import topimage1 from "../../assets/Hero_Image/imagetop1.jpg";
import topimage2 from "../../assets/Hero_Image/imagetop2.jpg";
import BlogCard from "./BlogCard";

const blogItem = [
  {
    id: 1,
    title: "The Rise of Web Development in 2024",
    date: "2024-10-01",
    discription:
      "Web development trends in 2024 are changing rapidly, with a focus on modern frameworks like React and the rise of Tailwind CSS. In this article, we explore the future of web development.",
    image: topimage1,
  },

  {
    id: 2,
    title: "How to Master Tailwind CSS: A Beginner's Guide",
    date: "2024-09-25",
    discription:
      "Tailwind CSS is gaining popularity for its utility-first approach. This guide will walk you through the basics and show you how to get started with Tailwind.",
    image: topimage2,
  },
  {
    id: 3,
    title: "The Rise of Web Development in 2024",
    date: "2024-10-01",
    discription:
      "Web development trends in 2024 are changing rapidly, with a focus on modern frameworks like React and the rise of Tailwind CSS. In this article, we explore the future of web development.",
    image: topimage1,
  },
  {
    id: 4,
    title: "How to Master Tailwind CSS: A Beginner's Guide",
    date: "2024-09-25",
    discription:
      "Tailwind CSS is gaining popularity for its utility-first approach. This guide will walk you through the basics and show you how to get started with Tailwind.",
    image: topimage2,
  },
];

const Blog = () => {
  return (
    <div>
      <section className=" bg-gray-100 dark:bg-slate-800 py-5">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-10">
            وبلاگ ما
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
