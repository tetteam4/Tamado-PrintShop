import React from "react";
import Hero from "../Components/Hero/Hero";
import { services } from "../Components/Services/servicesdata";
import ServicesCard from "../Components/Services/ServicesCard";
import { Link } from "react-router-dom";
import BlogHomeCard from "../Components/Blog/BlogHomeCard";
import WhyChooseUs from "../Components/WhyChooseUs";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900  dark:text-white mb-5">
              خدمات ما
            </h1>
            <Link to="/service">
              <button className="px-3 py-2 rounded-md bg-gray-600">
                دیدن بشتر !
              </button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 ">
            {services.slice(0, 5).map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
          </div>
        </div>
        <WhyChooseUs />
        <BlogHomeCard />
        <BlogHomeCard />
        <About />
      </div>
    </div>
  );
};

export default Home;
