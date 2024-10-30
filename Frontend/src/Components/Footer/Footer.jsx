import React from "react";
import logo from "../../assets/logo/Tamadon.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="about" className="bg-slate-800 text-gray-200 py-5 ">
      <div className="container px-5 md:px-0 flex gap-6 items-center mx-auto">
        <img src={logo} className="w-[70px]" alt="" />
        <span className="text-3xl font-bold text-yellow-300 tracking-wider">
          مطبعه تمدن
        </span>
      </div>
      <div className="container mx-auto px-4 grid py-5 grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">لینک های سریع</h3>
          <ul className="grid grid-cols-2  gap-5 md:block">
            <li className="mb-1">
              <a href="#home" className="hover:text-yellow-400">
                صفحه اصلی
              </a>
            </li>
            <li className="mb-1">
              <a href="#service" className="hover:text-yellow-400">
                خدمات
              </a>
            </li>
            <li className="mb-1">
              <a href="#blog" className="hover:text-yellow-400">
                بلاگ
              </a>
            </li>
            <li className="mb-1">
              <a href="#about" className="hover:text-yellow-400">
                درباره ما
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">تماس با ما</h3>
          <p className="mb-1">آدرس: کابل، افغانستان</p>
          <p className="mb-1">تلفن: +93772387935</p>
          <p className="mb-1">ایمیل: anwarmohammadi1390@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 tracking-wide">
            ما را دنبال نمایید
          </h3>
          <div className="flex text-2xl justify-center md:justify-start gap-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400  px-4">
        <hr className="max-w-[50%] mx-auto" />
        <p className="pt-4">
          &copy; {new Date().getFullYear()} TET TEAM. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
