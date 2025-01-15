import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"

const Testimonial = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      content: (
        <div
          className="wrap mcb-wrap mcb-wrap-c95052cc8 one tablet-one mobile-one clearfix"
          data-desktop-col="one"
          data-tablet-col="tablet-one"
          data-mobile-col="mobile-one"
    
        ></div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          className="wrap mcb-wrap mcb-wrap-bdgzrxz5m one-fourth tablet-one-second mobile-one-second clearfix"
          data-desktop-col="one-fourth"
          data-tablet-col="tablet-one-second"
          data-mobile-col="mobile-one-second"
        ></div>
      ),
    },
    {
      id: 3,
      content: (
        <div
          className="wrap mcb-wrap mcb-wrap-ywj14bqdy one-fourth tablet-one-second mobile-one-second clearfix"
          data-desktop-col="one-fourth"
          data-tablet-col="tablet-one-second"
          data-mobile-col="mobile-one-second"
        ></div>
      ),
    },
    {
      id: 4,
      content: (
        <div
          className="wrap mcb-wrap mcb-wrap-qgvbcpgwd one-fourth tablet-one-second mobile-one-second clearfix"
          data-desktop-col="one-fourth"
          data-tablet-col="tablet-one-second"
          data-mobile-col="mobile-one-second"
        ></div>
      ),
    },
    {
      id: 5,
      content: (
        <div
          className="wrap mcb-wrap mcb-wrap-iqh2q0qmg one-fourth tablet-one-second mobile-one-second clearfix"
          data-desktop-col="one-fourth"
          data-tablet-col="tablet-one-second"
          data-mobile-col="mobile-one-second"
        ></div>
      ),
    },
  ];

  return (
    <div>
    <div className="feedback">
<div className="feedback-client">
  <Slider {...settings}>
    <div className="card feedback-card" style={{ width: "15rem;" }}>
      <div className="card-body">
        <span className="material-symbols-outlined quote">format_quote</span>
        <p className="card-text pb-4">
          The mobile app developed by Code Craft Consulting exceeded our
          expectations. It’s user-friendly, efficient, and has significantly
          streamlined our operations.
        </p>
        <h6 className="card-title">Rajesh Kumar</h6>
        <p>Happy Client - Mobile App Development</p>
      </div>
    </div>
    <div className="card feedback-card" style={{ width: "15rem;" }}>
      <div className="card-body">
        <span className="material-symbols-outlined quote">format_quote</span>
        <p className="card-text pb-4">
          Their web development services are top-notch! Our website now has an
          impressive design and functionality, driving more engagement than
          ever.
        </p>
        <h6 className="card-title">Priya Sharma</h6>
        <p>Happy Client - Web Development</p>
      </div>
    </div>
    <div className="card feedback-card" style={{ width: "15rem;" }}>
      <div className="card-body">
        <span className="material-symbols-outlined quote">format_quote</span>
        <p className="card-text pb-4">
          Code Craft Consulting delivered an exceptional iOS app. The interface
          is sleek, and the app’s performance is flawless. Highly recommend
          them!
        </p>
        <h6 className="card-title">Anjali Verma</h6>
        <p>Happy Client - iOS App Development</p>
      </div>
    </div>
    <div className="card feedback-card" style={{ width: "15rem;" }}>
      <div className="card-body">
        <span className="material-symbols-outlined quote">format_quote</span>
        <p className="card-text pb-4">
          Their software product is a game-changer for our business. It’s
          reliable, innovative, and has improved our efficiency multifold.
        </p>
        <h6 className="card-title">Deepak Singh</h6>
        <p>Happy Client - Software Product</p>
      </div>
    </div>
  </Slider>
</div>
        </div>
        <div className="container  brandlogo">
                  <h1 className="text-center"></h1>
                  <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3 ">
                    
                  </div>
                </div>
                </div>
  );
};

export default Testimonial;
