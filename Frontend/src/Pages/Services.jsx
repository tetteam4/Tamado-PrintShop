import React from "react";
import ServicesCard from "../Components/Services/ServicesCard";
import { services } from "../Components/Services/servicesdata";

function Services() {
  return (
    <section id="" className="py-6 bg-gray-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-5">
            خدمات ما
          </h1>
        </div>
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
