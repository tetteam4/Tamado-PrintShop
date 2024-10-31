import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ResNavbar = ({ open, navItems, active, activeHandler, setOpen }) => {
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
          <div className="text-xl text-white py-10 bg-slate-900 font-semibold uppercase">
            <ul className="flex flex-col items-center justify-center px-20 text-white gap-3">
              {navItems.map((nav, index) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    activeHandler(index);
                    setOpen(false); // Close the navbar after selection
                  }}
                  className={`hover:bg-gray-100 text-center w-full py-2 rounded-md font-bold hover:text-slate-900
                    ${
                      active === index
                        ? "text-yellow-300"
                        : "text-gray-300 dark:text-gray-400"
                    }
                `}
                >
                  <a href={nav.path}>{nav.title}</a>
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
