import React from "react";
import MenuCard from "../MenuCard/MenuCard";
import "./Highlights.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useNavigate} from "react-router-dom"
import {greekSalad, bruschetta, lemonDessert} from "./index"
function Highlights() {
  const navigate = useNavigate()

  const highlights = [
    {
        name: 'Greek Salad',
        price: '12.99$',
        desc: 'This easy Greek salad recipe is our new favorite summer side dish! Just 7 ingredients make it refreshing & delicious.',
        image: greekSalad
    },
    {
        name: 'Bruschetta',
        price: '5.99$',
        desc: 'Bruschetta is a classic Italian appetizer that is easy to make at home. Toasted bread is topped with tomatoes, Parmesan cheese, garlic, and fresh basil.',
        image: bruschetta
    },
    {
        name: 'Lemon Dessert',
        price: '5.00$',
        desc: 'Pretty as a picture, this syrup-soaked lemon cake has a secret ingredient.',
        image: lemonDessert
    }
]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <section id="Menu" className="llemon__highlights section__padding">
        <div className="llemon__highlights-tittle">
          <h2>Specials</h2>
          <button onClick={()=>navigate("/online-menu")}>Online Menu</button>
        </div>
        {/* <div className="llemon__higlights-card"> */}
        <Carousel
          responsive={responsive}
           // means to render carousel on server-side.
          keyBoardControl={true}
          showDots={true}

          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"

        >
         {highlights.map((item,index) => (
         <MenuCard
         key={index + "ef48"}
          img={item.image}
          name={item.name}
          price={item.price}
          desc={item.desc}

          />
         ))}

        </Carousel>

        {/* </div> */}
      </section>
    </>
  );
}

export default Highlights;
