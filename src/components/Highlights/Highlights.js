import React from "react";
import MenuCard from "../MenuCard/MenuCard";
import "./Highlights.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Highlights() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section id="Menu" className="llemon__highlights section__padding">
        <div className="llemon__highlights-tittle">
          <h2>This week's Specials</h2>
          <button>Online Menu</button>
        </div>
        {/* <div className="llemon__higlights-card"> */}
        <Carousel
          responsive={responsive}
           // means to render carousel on server-side.
          keyBoardControl={true}
          showDots={true}

          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"

        >
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />

        </Carousel>

        {/* </div> */}
      </section>
    </>
  );
}

export default Highlights;
