import React from "react";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import "./Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Roy, Rita, Richard, Anna, Ada } from "../TestimonialsCard/index";
const UserInfo = [
  {
    id: "0r3jfljk67",
    rating: 3,
    photo: Roy,
    name: "Roy",
    review:
      "Lorem iAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "045jsljfe7",
    rating: 4,
    photo: Rita,
    name: "Rita",
    review:
      "Lorem iAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "0r3jsdfgsdf7",
    rating: 5,
    photo: Richard,
    name: "Richard",
    review:
      "Lorem iAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "0r35eejk67",
    rating: 4,
    photo: Anna,
    name: "Anna",
    review:
      "Lorem iAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: "043j5g5gtk0",
    rating: 5,
    photo: Ada,
    name: "Ada",
    review:
      "Lorem iAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <section className="llemon__Testimonials section__padding">
        <div className="llemon__Testimonials-title">
          <h2>Testimonials</h2>
        </div>
        <div className="llemon__Testimonials-cards">
          <Carousel
            responsive={responsive}
            infinite={true}
            customTransition="3s"
            autoPlay={true}
            autoPlaySpeed={9000}
            keyBoardControl={true}
            showDots={true}
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
          >
            {UserInfo.map((item) => (
              <TestimonialsCard
                key={item.id}
                rating={item.rating}
                photo={item.photo}
                name={item.name}
                review={item.review}
              />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
