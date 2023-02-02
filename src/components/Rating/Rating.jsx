import React from "react";
import star from "../../assets/Star.png";
const createArray = (length) => [...Array(length)];
function Rating({ count }) {
  return (
    <>
      {createArray(count).map((n, i) => (
        <img key={i} src={star} alt="rating" />
      ))}
    </>
  );
}

export default Rating;
