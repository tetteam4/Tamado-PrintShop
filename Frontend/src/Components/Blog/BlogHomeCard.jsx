import React from "react";
import { blogItem } from "./blogdata";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogHomeCard = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-5">
          وبلاگ
        </h1>
        <Link to="/blog">
          <button className="px-3 py-2 rounded-md bg-gray-600">
            وبلاگ را بخوانید !
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 rounded-md lg:grid-cols-2 gap-10">
        {blogItem.slice(0, 4).map((item) => (
          <BlogCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogHomeCard;
