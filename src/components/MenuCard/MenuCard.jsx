import React from "react";
import "./MenuCard.css";
function MenuCard({img, name, desc, price}) {
  return (
    <>
      <div className="MenuCard__container">
        <div className="MenuCard__imagebox">
          <img src={img} alt="dish" />
        </div>
        <div className="MenuCard__details">
        <div className="MenuCard__dish-price">
          <p>{name}</p>
          <p id="price">{price}</p>
        </div>
        <div className="MenuCard__description">
          <p>
            {desc}
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
