import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div>
      <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-white text-center px-4">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
