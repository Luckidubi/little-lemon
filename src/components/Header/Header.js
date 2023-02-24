import React from "react";
import headerImg from "../../assets/restauranfood.webp";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <section className="llemon__header section__padding">
        <div className="llemon__header-content">
          <div className="llemon__header-title">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
          </div>
          <div className="llemon__header-description">
            <p>
              We are a family owned Mediterranean restaurant, located on Maldove
              Street in Chicago, Illionis. We focus on traditional recipes
              served with a modern twist.
            </p>
          </div>
          <div className="llemon__header-cta">
            <button onClick={() => navigate("/booking")}>
              Reserve a Table
            </button>
          </div>
        </div>
        <div className="llemon__header-image">
          <img src={headerImg} alt="llemon Header" />
        </div>
      </section>
    </>
  );
}

export default Header;
