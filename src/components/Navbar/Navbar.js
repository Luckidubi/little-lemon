import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import hambuger from "../../assets/hambuger.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((t) => !t);
  };
  const Menu = () => {
    return (
      <>
         <Link to="/"><p>
         Home
        </p></Link>
        <Link to="/#About"><p>
          About
        </p></Link>
        <Link to="/online-menu"><p>Menu</p></Link>
        <Link to="/booking">  <p>Reservations</p></Link>
        <Link to='/order'> <p>Order Online</p></Link>
        <p>Login</p>
      </>
    );
  };

  return (
    <>
      <nav className="llemon__navbar">
       <Link to="/"> <img src={Logo} alt="Little Lemon Logo" /></Link>
        <div className="llemon__navbar-links_container">
          <div className="llemon__navbar-links">
            <Menu />
          </div>
        </div>
        <div className="llemon__navbar-menu">
          {toggleMenu ? (
            <div onClick={handleToggle}>X</div>
          ) : (
            <img
              src={hambuger}
              style={{ width: "24px", height: "24px" }}
              alt="hambuger icon"
              onClick={handleToggle}
            />
          )}
          {toggleMenu && (
            <div className="llemon__navbar-menu_container scale-up-center">
              <div className="llemon__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
