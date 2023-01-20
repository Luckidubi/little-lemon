import React from 'react'
import headerImg from "../../assets/restauranfood.jpg"
import "./Header.css"
function Header() {
  return (
    <>
<section className="llemon__header section__padding">
<div className='llemon__header-content'>
  <div className='llemon__header-title'>
<h1>Little Lemon</h1>
<p>Chicago</p>
  </div>
  <div className='llemon__header-description'>
    <p>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
<div className='llemon__header-cta'>
<button>Reserve a Table</button>
</div>
</div>
<div className='llemon__header-image'>
  <img src={headerImg} alt="llemon Header"/>
</div>
</section>
    </>
  )
}

export default Header