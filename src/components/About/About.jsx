import React from 'react'
import AboutImg from "../../assets/about.png"
import "./About.css"
function About() {
  return (
    <>
    <section className='llemon__About section__padding'>
    <div className='llemon__About-content'>
  <div className='llemon__About-title'>
<h1>Little Lemon</h1>
<p>Chicago</p>
  </div>
  <div className='llemon__About-description'>
    <p>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
    </p>
  </div>

</div>
<div className='llemon__About-image'>
  <img src={AboutImg} alt="llemon restaurant"/>
</div>

    </section>
    </>
  )
}

export default About