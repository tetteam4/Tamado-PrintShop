// src/ImageSlider.js
import React, { useState, useEffect } from "react";
import image1 from "../../assets/Hero_Image/image1.jpg";
import image2 from "../../assets/Hero_Image/image2.jpg";
import image3 from "../../assets/Hero_Image/image3.jpg";
import image4 from "../../assets/Hero_Image/image4.jpg";
import image5 from "../../assets/Hero_Image/image5.jpg";

const images = [image1, image2, image3, image4, image5];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="relative w-full transition-all duration-300 ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full bg-cover h-[450px]"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white text-2xl bg-opacity-50 rounded-full p-2"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white text-2xl bg-opacity-50 rounded-full p-2"
        >
          &#10095;
        </button>
        <div className="absolute bottom-10 right-[50%]">
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-yellow-300" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
