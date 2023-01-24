import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Highlights from "../components/Highlights/Highlights";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default Home;
