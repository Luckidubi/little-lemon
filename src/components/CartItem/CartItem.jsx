import React from "react";
import "./CartItem.css";
function CartItem({ title, quantity }) {
  return (
    <>
      <dl className="CartItem-list">
        <dt className="CartItem-list__key">{title}</dt>

        <dd className="CartItem-list__value">X{quantity}</dd>
      </dl>
    </>
  );
}

export default CartItem;
