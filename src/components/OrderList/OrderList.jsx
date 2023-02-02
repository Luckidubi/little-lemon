import { Input, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import OrderCard from "../OrderCard/OrderCard";
import "./OrderList.css";
import useSearch from "../../hooks/useSearch";
import { useMenuContext } from "../../context/MenuContext";
import CartList from "../../components/CartList/CartList";
import OrderForm from "../OrderForm/OrderForm";
function OrderList() {
  const { dispatch } = useMenuContext();

  const [search, setSearch] = useState("");
  const { searchMenu } = useSearch({ search });
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  function handleAddToCart(item) {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  }

  function handleRemoveFromCart(item) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  }

  return (
    <>
      <section className="llemon__OrderList section__padding">
        <div className="llemon__OrderList-title">
          <h1>Order Online</h1>
        </div>
        <div className="llemon__OrderList-search">
          <Input
            type="search"
            placeholder="Search Menu e.g salad"
            value={search}
            onChange={handleChange}
            w="md"
          />
        </div>
        <div className="llemon_OrderList-sidebar">
          <main>
            <div className="llemon__OrderList-container">
              {searchMenu().map((item) => (
                <OrderCard
                  key={item.id}
                  img={item.img}
                  name={item.title}
                  price={item.price}
                  onClick1={() => handleAddToCart(item)}
                  onClick2={() => handleRemoveFromCart(item.id)}
                />
              ))}
            </div>
          </main>
          <aside>
            <h2>Cart List</h2>
            <CartList />
            {isLargerThan768 ? <OrderForm /> : ""}
          </aside>
        </div>
      </section>
    </>
  );
}

export default OrderList;
