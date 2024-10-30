import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/Tamadon.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ResNavbar from "./ResNavbar";

const navItems = [
  {
    id: 1,
    title: "صفحه اصلی",
    path: "/",
  },
  {
    id: 2,
    title: "خدمات",
    path: "/",
  },
  {
    id: 3,
    title: "وبلاگ",
    path: "/blog",
  },
  {
    id: 4,
    title: "درباره ما",
    path: "#about",
  },
];

function Navbar() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const activeHandler = (index) => {
    setActive(index);
  };
  const [darkmode, setDarkmode] = useState(() => {
    const mode = localStorage.getItem("darkmode");
    return mode === "true";
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkmode", String(darkmode));
  }, [darkmode]);

  return (
    <>
      <nav className="bg-gray-800 dark:bg-slate-900">
        <div className="md:container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-white text-md md:text-xl font-bold">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="logo" className=" w-[50px] md:w-[70px]" />
              <span className="text-yellow-300 tracking-wider">مطبعه تمدن</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li
                  onClick={() => activeHandler(index)}
                  key={index}
                  className={`relative group cursor-pointer text-md font-medium ${
                    active === index
                      ? "text-yellow-300" // Active link color
                      : "text-gray-300 dark:text-gray-400"
                  }`}
                >
                  <a
                    href={item.path}
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    {item.title}
                    <span
                      className={`absolute right-0 -bottom-2 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full ${
                        active === index ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Search Input and Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className="flex items-center cursor-pointer transition-all gap-2 duration-300"
              onClick={() => setDarkmode(!darkmode)}
            >
              <span className="text-sm font-bold mr-2 text-gray-100 dark:text-gray-300">
                {darkmode ? "حالت شب" : "حالت روز"}
              </span>
              {darkmode ? (
                <MdDarkMode className="text-blue-500 text-2xl" /> // Dark mode icon color
              ) : (
                <MdLightMode className="text-yellow-400 text-2xl" /> // Light mode icon color
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {!open ? (
              <MdMenu className="text-4xl text-gray-100 hover:text-gray-400" />
            ) : (
              <FaXmark className="text-4xl text-gray-100 hover:text-gray-400" />
            )}
          </div>
        </div>
      </nav>
      <ResNavbar open={open} active={active} navItems={navItems} activeHandler={activeHandler}  />
    </>
  );
}

export default Navbar;
