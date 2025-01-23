import React from 'react'
import Hero from "./Hero";
import Services from "../Services/Services.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import ScrollToSupport from '../BrandsLogo/scrollToTop.jsx';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Testimonial />
      <ScrollToSupport/>
    </>
  )
}
export default Homepage;