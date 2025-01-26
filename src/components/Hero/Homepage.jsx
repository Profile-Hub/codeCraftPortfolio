import React from 'react'
import Hero from "./Hero";
import Testimonial from "../Testimonial/Testimonial.jsx";
import ScrollToSupport from '../BrandsLogo/scrollToTop.jsx';
import ClientVideos from '../clientvideo_ads/ClientVideoes.jsx'

const Homepage = () => {
  return (
    <>
      <Hero />
      {/* <ClientVideos/> */}
      <Testimonial />
      <ScrollToSupport/>
    </>
  )
}
export default Homepage;