import React from "react";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Blog from "../Components/Blog/Blog";
import About from "../Components/About/About";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Services />
        <About />
      </div>
    </div>
  );
};

export default Home;
