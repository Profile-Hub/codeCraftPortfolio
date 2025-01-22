import React from "react";
import yellowCar from "../../assets/website/team.png";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import serviceImg from '../../assets/website/download (1).jpg'
import BrandsLogo from "../BrandsLogo/BrandsLogo";
import { Link } from "react-router-dom";
import { MdDeveloperMode, MdWeb, MdCloudQueue, MdDesignServices } from "react-icons/md";
const Hero = () => {
   const [count, setcount] = useState(false);
  
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
  return (
    <div>
    <div className="">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Building Brands in the{" "}
              <span className="text-primary">Code Craft Consulting</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Your trusted partner in creating custom applications and websites that combine innovation, functionality, and design excellence.
Revolutionize your brand with software solutions and web services designed to maximize efficiency and amplify impact.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <ScrollTrigger
        onEnter={() => setcount(true)}
        onExit={() => setcount(false)}
      >
        <h1 className="text-center headingcounter-text">Achievement</h1>
        <section className="section counter">
        
          <div className="counter-container  py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="counter-item text-center mb-5 sm:mb-0">
                <h3 className="mb-0">
                  <span className="counter-text">
                    {count && (
                      <CountUp start={0} end={100} duration={2} delay={0} />
                    )}
                  </span>{" "}
                  +
                </h3>
                <p className="text-gray-500">Projects Ordered</p>
              </div>
              <div className="counter-item text-center mb-5 sm:mb-0">
                <h3 className="mb-0">
                  <span className="counter-text">
                    {count && (
                      <CountUp start={0} end={90} duration={2} delay={0} />
                    )}{" "}
                  </span>
                  +{" "}
                </h3>
                <p className="text-gray-500">Project Completed</p>
              </div>
              <div className="counter-item text-center mb-5 sm:mb-0">
                <h3 className="mb-0">
                  <span className="counter-text">
                    {count && (
                      <CountUp start={0} end={5} duration={2} delay={0} />
                    )}
                  </span>
                </h3>
                <p className="text-gray-500">Available Country</p>
              </div>
              <div className="counter-item text-center">
                <h3 className="mb-0">
                  <span className="counter-text">
                    {count && (
                      <CountUp start={0} end={2} duration={2} delay={0} />
                    )}
                  </span>
                </h3>
                <p className="text-gray-500">Award Winner</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
      </div>
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
              className="text-gray-600 dark:text-gray-400 text-sm"
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
    </div>
  );
};

export default Hero;
