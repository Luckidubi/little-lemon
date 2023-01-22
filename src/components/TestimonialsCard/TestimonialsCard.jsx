import React from "react";
import Rating from "../Rating/Rating";

import "./TestimonialsCard.css"

function TestimonialsCard({rating, photo, name, review}) {
  return (
    <>
      <div className="TestimonialsCard__container">
        <div className="TestimonialsCard__rating"><p>Rating:</p> <Rating count={rating}/></div>
        <div className="TestimonialsCard__info">
          <img src={photo} alt="user" /> <p>{name}</p>
        </div>
        <div className="TestimonialsCard__review">
          <p>{review}</p>
        </div>
      </div>
    </>
  );
}

export default TestimonialsCard;
