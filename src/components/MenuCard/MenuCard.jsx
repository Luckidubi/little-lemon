import React from "react";
import "./MenuCard.css";
import delivery from "../../assets/delivery.png"
import { Link } from "react-router-dom";
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
         <Link to="/order"><p>Order a delivery</p></Link> <img src={delivery} alt="delivery"/>
        </div>
        </div>

      </div>
    </>
  );
}

export default MenuCard;
