import React from "react";
import image from "../../assets/Hero_Image/image1.jpg";

const About = () => {
  return (
    <div className="container mx-auto p-5 md:p-10 lg:p-12 my-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-y-14 transition-colors duration-300">
      {/* First Section */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        {/* Info Section */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            درباره مطبعه تمدن
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            چاپخانه ما با بهره‌گیری از تکنولوژی‌های مدرن و تیمی مجرب به ارائه
            خدمات چاپی با کیفیت بالا می‌پردازد. هدف ما ارائه بهترین خدمات به
            مشتریان و برآورده‌سازی نیازهای چاپی در تمامی ابعاد است.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Print Shop"
            className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="stats-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* Our Experience */}
        <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="absolute -top-7 px-5 py-2 rounded-lg text-xl font-bold text-white bg-indigo-600 dark:bg-indigo-500">
            تجربه ما
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            بیش از ۱۰ سال تجربه در زمینه ارائه خدمات چاپ و تبلیغات.
          </p>
        </div>

        {/* Team Member */}
        <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="absolute -top-7 px-5 py-2 rounded-lg text-xl font-bold text-white bg-indigo-600 dark:bg-indigo-500">
            اعضای تیم
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            تیمی مجرب و حرفه‌ای برای ارائه بهترین خدمات به مشتریان.
          </p>
        </div>

        {/* Our Branches */}
        <div className="relative bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="absolute -top-7 px-5 py-2 rounded-lg text-xl font-bold text-white bg-indigo-600 dark:bg-indigo-500">
            شعبات ما
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-8 leading-relaxed">
            دارای چندین شعبه در سراسر کشور برای دسترسی راحت‌تر به خدمات ما.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
