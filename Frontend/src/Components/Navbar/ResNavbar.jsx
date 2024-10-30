import { div } from "framer-motion/client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const ResNavbar = ({ open, navItems, active , activeHandler }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-10 left-0 w-full h-fit z-20"
        >
          <div className="text-xl texgt-white py-10  bg-primaryxl font-semibold uppercase bg-slate-900">
            <ul className="flex flex-col items-center justify-center px-20 text-white gap-3">
              {navItems.map((nav) => (
                <li
                onClick={()=>activeHandler(index)}
                  key={nav.id}
                  className={`hover:bg-gray-100 text-center w-full py-2 rounded-md font-bold hover:text-slate-900
                    ${
                      active === index
                        ? "text-yellow-300" // Active link color
                        : "text-gray-300 dark:text-gray-400"
                    }
                `}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResNavbar;
