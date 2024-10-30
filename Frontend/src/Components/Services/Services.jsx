import React from "react";
import ServicesCard from "./ServicesCard";
// import topimage1 from "../../assets/Hero_Image/imagetop1.jpg";
// import topimage2 from "../../assets/Hero_Image/imagetop2.jpg";
// import topimage3 from "../../assets/Hero_Image/imagetop3.jpg";
// import topimage4 from "../../assets/Hero_Image/imagetop4.jpg";
// import topimage5 from "../../assets/Hero_Image/imagetop5.jpg";

const services = [
  {
    id: 1,
    title: "طراحی گرافیک",
    description: "ما بهترین طراحی های گرافیکی را به شما ارائه می دهیم.",
    image: null, // Replace with actual image URLs
  },
  {
    id: 2,
    title: "چاپ حرفه ای",
    description: "ما خدمات چاپ با کیفیت بالا ارائه می دهیم.",
    image: null,
  },
  {
    id: 3,
    title: "بازاریابی دیجیتال",
    description: "ما به شما در تبلیغ کسب و کارتان در فضای دیجیتال کمک می کنیم.",
    image: null,
  },
  {
    id: 4,
    title: "بازاریابی دیجیتال",
    description: "ما به شما در تبلیغ کسب و کارتان در فضای دیجیتال کمک می کنیم.",
    image: null,
  },
  {
    id: 5,
    title: "بازاریابی دیجیتال",
    description: "ما به شما در تبلیغ کسب و کارتان در فضای دیجیتال کمک می کنیم.",
    image: null,
  },
  // Add more services as needed
];

function Services() {
  return (
    <section id="service" className="py-6 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-5">
          خدمات ما
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
