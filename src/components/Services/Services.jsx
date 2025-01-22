import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import serviceImg from '../../assets/website/download (1).jpg'
import BrandsLogo from "../BrandsLogo/BrandsLogo";
import { Link } from "react-router-dom";
import "./Services.css"
import 'react-loading-skeleton/dist/skeleton.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slideimg1 from "../../assets/brands/imagelogin.png";
import slideimg2 from "../../assets/brands/sidebar.png";
import slideimg3 from "../../assets/brands/subscribe.png";
import slideimg4 from "../../assets/brands/profile.png";
import slideimg5 from "../../assets/brands/doner.png";
import slideimg6 from "../../assets/brands/details.png";
import slideimg7 from "../../assets/brands/filter.png";



import { MdDeveloperMode, MdWeb, MdCloudQueue, MdDesignServices } from "react-icons/md";
const skillsData = [
  {
    name: "App Development",
    icon: <MdDeveloperMode className="text-4xl text-primary" />, 
    link: "#",
    description:
      "An app developer specializes in designing, creating, and maintaining mobile and web applications. With a focus on user experience, functionality, and performance, they transform ideas into intuitive, scalable, and secure digital solutions. From concept to deployment, app developers leverage cutting-edge technologies and frameworks to deliver customized apps that meet unique business or individual needs.",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <MdWeb className="text-4xl text-primary" />, 
    link: "#",
    description:
      "Web designing is the art and science of creating visually appealing, user-friendly, and responsive websites. It combines elements of graphic design, layout, and coding to craft digital experiences that are both functional and engaging. A web designer focuses on aesthetics, navigation, and compatibility to ensure websites are accessible across devices, optimized for performance, and aligned with the brand’s identity and goals.",
    aosDelay: "300",
  },
  {
    name: "Cloud Cost Reduction",
    icon: <MdCloudQueue className="text-4xl text-primary" />, 
    link: "#",
    description:
      "At Code Craft Consulting, we specialize in helping businesses optimize their cloud infrastructure to reduce costs without compromising performance. Our team of experts analyzes your current cloud usage, identifies inefficiencies, and implements strategies to minimize expenses while ensuring scalability and reliability. By leveraging advanced tools and best practices, we ensure your cloud operations are both cost-effective and future-ready. Trust Code Craft Consulting to deliver measurable savings and enhanced cloud efficiency for your organization.",
    aosDelay: "700",
  },
  {
    name: "Graphic Designing",
    icon: <MdDesignServices className="text-4xl text-primary" />,
    link: "#",
    description:
      "Graphic designing is the creative process of visual communication using typography, imagery, colors, and layouts to convey messages effectively. It involves crafting designs for various mediums, including print, digital, and branding materials, to captivate audiences and enhance brand identity. A graphic designer combines artistic skills and technical expertise to create logos, advertisements, social media visuals, and more, transforming ideas into impactful visual content.",
    aosDelay: "500",
  },

];
const Services = () => {
  const settings_client = {
    dots: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <section className=" bg-1">
        <div className='carrier-top-cover' >
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center  mb-4" data-aos="fade-up">
                  <h1 className="about-1  text-white">Services </h1>
                  <span className=" text-white "></span>

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="ourproduct">Our Products</h1>

        <div className='portfolio-card-container '>
          <div className='portfolio-card'>
            <Slider {...settings_client}>
              <div className="card card-show" style={{ width: "fit-content", border: "1px solid black", padding: "10px" }}>
                <div className="product-img">

                  <div className="sliderquotes">
                    <h3>Register</h3>

                  </div>
                  <div className="slider-img">
                    <img src={slideimg1} />
                  </div>
                </div>
              </div>
              <div className="card card-show" style={{ width: "fit-content", border: "1px solid black", padding: "10px" }}>
                <div className="product-img">

                  <div className="sliderquotes">
                    <h3>Matchup</h3>

                  </div>
                  <div className="slider-img">
                    <img src={slideimg2} />
                  </div>
                </div>
              </div>
              <div className="card card-show" style={{ width: "fit-content", border: "1px solid black", padding: "10px" }}>
                <div className="product-img">

                  <div className="sliderquotes">
                    <h3>Subscribtion</h3>

                  </div>
                  <div className="slider-img">
                    <img src={slideimg3} />
                  </div>
                </div>
              </div>
              <div className="card card-show" style={{ width: "fit-content", border: "1px solid black", padding: "10px" }}>
                <div className="product-img">

                  <div className="sliderquotes">
                    <h3>DonerDetails</h3>

                  </div>
                  <div className="slider-img">
                    <img src={slideimg4} />
                  </div>
                </div>
              </div>
              <div className="card card-show" style={{ width: "fit-content", border: "1px solid black", padding: "10px" }}>
                <div className="product-img">

                  <div className="sliderquotes">
                    <h3>Real time Chat feature</h3>

                  </div>
                  <div className="slider-img">
                    <img src={slideimg5} />
                  </div>
                </div>
              </div>
              <div className="card card-show" style={{ width: "fit-content", border: "1px solid black", padding: "10px" }}>
                <div className="product-img">

                  <div className="sliderquotes">
                    <h3>Update Profile</h3>

                  </div>
                  <div className="slider-img">
                    <img src={slideimg6} />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section> */}
      <span id="about"></span>
      <div className="bg-gray-100  py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-700 dark:text-gray-700 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>

            <BrandsLogo />


            <div className="outer-box">

              <div className="inner-box1">
                <section className="careers-section">
                  <div className="content-container">
                    <h1 className="heading">Code craft Consulting</h1>
                    <h2 className="subheading">Go Beyond the Expected</h2>
                    <p className="description">
                      We're dedicated to helping our clients do amazing things and unlocking the potential of those who advance the world. Join us, and you can too.
                    </p>
                           <Link to="/contact-us" className="apply-button">Contact us</Link>
                   
                    <div className="links">
                      <a href="#bring-your-best" className="link">BRING YOUR BEST SELF TO WORK</a>
                      <a href="#explore-careers" className="link">EXPLORE THE CAREERS BLOG</a>
                    </div>
                  </div>
                </section>

              </div>

              <div className="inner-box2">
                <div className="inner-babybox2 ">
                  <img src={serviceImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
