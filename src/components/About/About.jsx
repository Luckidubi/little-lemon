import React from "react";
import AboutImg from "../../assets/about.png";
import "./About.css";
function About() {
  return (
    <>
      <section id="About" className="llemon__About section__padding">
        <div className="llemon__About-content">
          <div className="llemon__About-title">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
          </div>
          <div className="llemon__About-description">
            <p>
              Little Lemon opened in 1995 by two Italian brothers, Adrian and
              Mario. Despite the city's diversity, the two brothers recognized
              the lack of Mediterranean cuisine in Chicago, and were inspired to
              bring the flavors of their hometown in Italy to the people of
              Chicago. The two brothers continue to oversee the Little Lemon
              restaurant, nearly thirty years later.
            </p>
          </div>
        </div>
        <div className="llemon__About-image">
          <img src={AboutImg} alt="llemon restaurant" />
        </div>
      </section>
    </>
  );
}

export default About;
