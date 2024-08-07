import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programmes from "./Components/Programs/Programmes";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle={"Our PROGRAMMES"} title={"What we Offer"} />
        <Programmes />
        <About />
        <Title subTitle={"Gallery"} title={"Campus Photos"} />
        <Campus />
        <Title subTitle={"Testimonials"} title={"What Students Say"} />
        <Testimonials />
        <Title subTitle={"Contact Us"} title={"Get in Touch"} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
