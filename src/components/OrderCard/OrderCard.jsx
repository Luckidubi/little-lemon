import { Button } from "@chakra-ui/react";
import React from "react";
import "./OrderCard.css";
function OrderCard({ img, name, price, onClick1, onClick2 }) {
  return (
    <>
      <div className="OrderCard__container">
        <div className="OrderCard__imagebox">
          <img src={img} alt="dish" />
        </div>
        <div className="OrderCard__details">
          <div className="OrderCard__dish-price">
            <p>{name}</p>
            <p id="price">${price}</p>
          </div>

          <div className="OrderCard__order">
            <Button colorScheme="yellow" onClick={onClick1}>
              +
            </Button>
            <Button colorScheme="yellow" onClick={onClick2}>
              -
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
