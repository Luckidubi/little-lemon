import React from "react";
import GreekSalad from "../../assets/greek salad.jpg";
import "./MenuCard.css";
function MenuCard() {
  return (
    <>
      <div className="MenuCard__container">
        <div className="MenuCard__imagebox">
          <img src={GreekSalad} alt="dish" />
        </div>
        <div className="MenuCard__details">
        <div className="MenuCard__dish-price">
          <p>Greek salad</p>
          <p id="price">$12.99</p>
        </div>
        <div className="MenuCard__description">
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
        </div>
        <div className="MenuCard__order">
          <p>Order a delivery</p>
        </div>
        </div>

      </div>
    </>
  );
}

export default MenuCard;
