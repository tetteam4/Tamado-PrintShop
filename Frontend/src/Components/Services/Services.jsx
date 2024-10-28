import React, { useRef, useState, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "طراحی گرافیک",
    description: "بهترین طراحی گرافیکی.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "چاپ حرفه ای",
    description: "چاپ با کیفیت بالا.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "بازاریابی دیجیتال",
    description: "کمک به تبلیغ کسب و کار.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "عکاسی حرفه ای",
    description: "عکاسی با کیفیت بالا.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "چاپ سه بعدی",
    description: "خدمات چاپ سه بعدی دقیق.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "طراحی وب",
    description: "ایجاد وب سایت های پویا.",
    image: "https://via.placeholder.com/300x200",
  },
];

function Services() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll function with loop logic
  const scroll = (direction) => {
    const nextIndex =
      direction === "next" ? currentIndex + 1 : currentIndex - 1;

    // Wrap the index around to create a looping effect
    const newIndex = (nextIndex + services.length) % services.length;
    setCurrentIndex(newIndex);

    // Calculate scroll amount based on card width (adjust `w-72` for consistent width)
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: newIndex * scrollRef.current.children[0].offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Centering card on first render for responsiveness
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.children[0].offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-6 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-10">
          خدمات ما
        </h2>
        <div className="relative">
          {/* Scrollable Container */}
          <div ref={scrollRef} className="flex overflow-hidden">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-72 relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-center px-4">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("prev")}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
