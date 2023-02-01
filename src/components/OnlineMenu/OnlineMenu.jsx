import React from "react";
import "./OnlineMenu.css";
import { useMenuContext } from "../../context/MenuContext";
import MenuCard from "../MenuCard/MenuCard";

function OnlineMenu() {
  const { menu } = useMenuContext();
  return (
    <>
      <section className="llemon__OnlineMenu section__padding">
        <div className="llemon__OnlineMenu-title">
          <h1>Little Lemon Menu</h1>
        </div>
        <div className="llemon__OnlineMenu-container">
          {menu.map((item, index) => (
            <MenuCard
            key={index}
              img={item.img}
              name={item.title}
              price={item.price}
              desc={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default OnlineMenu;
