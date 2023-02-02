import React from "react";
import { useMenuContext } from "../../context/MenuContext";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";

function CartList() {
  const { cart } = useMenuContext();

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, value) => acc + value, 0)
    .toFixed(2);
  return (
    <>
      <section className="llemon-CartList section__padding">
        <div className="llemon-CartList__container">
          {cart.length === 0 ? (
            <p>Cart empty!</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  quantity={item.quantity}
                />
              ))}
              <div className="llemon-CartList__total">Total: ${total}</div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default CartList;
