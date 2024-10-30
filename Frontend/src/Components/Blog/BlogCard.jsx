import React, { useState } from "react";
import { FaThumbsUp, FaComment, FaShareAlt } from "react-icons/fa";

const BlogCard = ({ item }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleComment = () => setComments(comments + 1);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md  shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="md:grid justify-between grid-cols-2 md:grid-cols-3 sm:h-[400px]  md:h-[320px]">
        {/* Image Section */}
        <div className="col-span-1 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:h-full h-[170px] rounded-md  object-cover  transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="md:col-span-2 col-span-1 p-6 flex flex-col justify-between">
          <div>
            <h1 className="md:text-xl text-md font-bold text-gray-800 dark:text-white mb-2">
              {item.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-justify mb-4">
              {item.discription}
            </p>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {item.date}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <FaThumbsUp />
              <span>{likes} Likes</span>
            </button>

            <button
              onClick={handleComment}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <FaComment />
              <span>{comments} Comments</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
