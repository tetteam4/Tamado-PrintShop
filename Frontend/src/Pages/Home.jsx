import React from "react";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Blog from "../Components/Blog/Blog";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Services />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
