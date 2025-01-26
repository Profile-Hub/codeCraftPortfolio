import React from "react";
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
import ScrollToSupport from "../BrandsLogo/scrollToTop";


import { MdDeveloperMode, MdWeb, MdCloudQueue, MdDesignServices,MdOutlineSmartToy,MdOutlineDataUsage,MdDevicesOther,MdOutlineManageAccounts,MdSecurity ,MdVerified,MdOutlineCategory,MdOutlineCampaign,MdCreate,MdPeople,MdSupport} from "react-icons/md";
const skillsData = [
    {
      name: "App Development",
      icon: <MdDeveloperMode className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Build scalable, secure, and high-performance mobile apps tailored to your business needs with Code Craft Consulting.",
      aosDelay: "0",
    },
    {
      name: "Web Development",
      icon: <MdWeb className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Develop dynamic, user-friendly websites with responsive designs and seamless functionality.",
      aosDelay: "300",
    },
    {
      name: "Cloud Cost Reduction",
      icon: <MdCloudQueue className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Optimize cloud usage to reduce costs while ensuring scalability and reliability.",
      aosDelay: "700",
    },
    {
      name: "QA and Automation",
      icon: <MdDesignServices className="text-4xl text-primary" />,
      link: "#",
      description:
        "Ensure software quality and efficiency with advanced testing and automation strategies.",
      aosDelay: "500",
    },
    {
      name: "AI Integration",
      icon: <MdOutlineSmartToy className="text-4xl text-primary" />,
      link: "#",
      description:
        "Embed AI into your workflows for smarter automation and data-driven decisions.",
      aosDelay: "900",
    },
    {
      name: "Data Science & Engineering",
      icon: <MdOutlineDataUsage className="text-4xl text-primary" />,
      link: "#",
      description:
        "Leverage data to drive insights with scalable pipelines and predictive models.",
      aosDelay: "1100",
    },
    {
      name: "IoT Development",
      icon: <MdDevicesOther className="text-4xl text-primary" />,
      link: "#",
      description:
        "Design and deploy IoT solutions to connect and automate your devices seamlessly.",
      aosDelay: "1300",
    },
    {
      name: "Program Management",
      icon: <MdOutlineManageAccounts className="text-4xl text-primary" />,
      link: "#",
      description:
        "Streamline project execution with expert planning, risk management, and delivery.",
      aosDelay: "1400",
    },
    {
      name: "Security & VAPT",
      icon: <MdSecurity className="text-4xl text-primary" />,
      link: "#",
      description:
        "Protect your business with vulnerability assessments and penetration testing.",
      aosDelay: "1500",
    },
    {
      name: "Product Management",
      icon: <MdOutlineCategory className="text-4xl text-primary" />,
      link: "#",
      description:
        "Define strategies, manage roadmaps, and deliver innovative products.",
      aosDelay: "1700",
    },
    {
      name: "UI/UX Design",
      icon: <MdDesignServices className="text-4xl text-primary" />,
      link: "#",
      description:
        "Create intuitive and engaging designs for seamless user experiences.",
      aosDelay: "1600",
    },
    {
      name: "ISO Certifications",
      icon: <MdVerified className="text-4xl text-primary" />,
      link: "#",
      description:
        "Achieve compliance with ISO certifications for global standards.",
      aosDelay: "1700",
    },
    {
      name: "Digital Marketing",
      icon: <MdOutlineCampaign className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Boost your online presence with SEO, social media, and targeted campaigns.",
      aosDelay: "1800",
    },
    {
      name: "Content Creation",
      icon: <MdCreate className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Engage your audience with compelling blogs, videos, and infographics.",
      aosDelay: "1900",
    },
    {
      name: "Hiring (Tech & Non-Tech)",
      icon: <MdPeople className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Find the right talent for tech and non-tech roles to fuel your growth.",
      aosDelay: "2100",
    },
    {
      name: "Finance, HR & Tech Support",
      icon: <MdSupport className="text-4xl text-primary" />, 
      link: "#",
      description:
        "Simplify operations with expert finance, HR, and tech support solutions.",
      aosDelay: "2300",
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
            <a 
            href="https://www.linkedin.com/company/code-craft-consulting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </a>

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
                   
                    {/* <div className="links">
                      <a href="#bring-your-best" className="link">BRING YOUR BEST SELF TO WORK</a>
                      <a href="#explore-careers" className="link">EXPLORE THE CAREERS BLOG</a>
                    </div> */}
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
        <ScrollToSupport/>
      </div>
    </>
  );
};

export default Services;
