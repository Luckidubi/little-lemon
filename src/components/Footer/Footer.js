import React from "react";
import "./Footer.css";
import logo from '../../assets/logo-footer.png'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
      <section className="llemon__footer-container section__padding">
        <div className="llemon__footer-logo">
         <Link to="/"> <img src={logo} alt="footer logo" /></Link>
        </div>
        <div className="llemon__footer-navigation">
          <h4>Doormat Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Reservations</p>
          <p>Order Online</p>
          <p>Login</p>
        </div>
        <div className="llemon__footer-contact">
          <h4>Contact</h4>
          <p>2395 Maldove Way,
Chicago Illinois</p>
          <p>+12445345345</p>
          <p>support@littlelemon.com</p>
        </div>
        <div className="llemon__footer-social">
          <h4>Social Media Links</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
