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


import { MdDeveloperMode, MdWeb, MdCloudQueue, MdDesignServices,MdOutlineSmartToy,MdOutlineDataUsage,MdDevicesOther,MdOutlineManageAccounts,MdSecurity ,MdVerified,MdOutlineCategory} from "react-icons/md";
const skillsData = [
     {
       name: "App Development",
       icon: <MdDeveloperMode className="text-4xl text-primary" />, 
       link: "#",
       description:
       "Code Craft Consulting specializes in web development services, focusing on designing, building, and maintaining high-performance, scalable, and secure websites and web applications. We work closely with clients to understand their unique business needs, functionality, and performance. From custom website design to full-stack development, we leverage the latest technologies and frameworks to create dynamic, responsive, and user-friendly websites. Our team ensures that every project aligns with business goals, is optimized for speed, and provides a seamless experience across all devices."
        ,aosDelay: "0",
     },
     {
       name: "Web Development",
       icon: <MdWeb className="text-4xl text-primary" />, 
       link: "#",
       description:
       "Code Craft Consulting offers comprehensive web development services to build dynamic, secure, and scalable websites tailored to meet unique business needs. Combining cutting-edge technologies and industry best practices, our team specializes in creating responsive, user-friendly, and high-performance websites. From front-end development with sleek, intuitive interfaces to robust back-end solutions, we ensure seamless functionality and integration. Our expertise includes custom web applications, all designed to align with your brand identity, optimize user experience, and drive growth."
        ,aosDelay: "300",
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
       name: "QA and Automation",
       icon: <MdDesignServices className="text-4xl text-primary" />,
       link: "#",
       description:
       "A QA and Automation specialist focuses on ensuring software quality through meticulous testing and automated processes. They design and implement testing strategies to identify and resolve issues, ensuring optimal performance, security, and functionality. By leveraging advanced tools and methodologies, they streamline workflows, integrate with CI/CD pipelines, and maintain compliance with industry standards. From planning to execution, QA and Automation experts enhance reliability and efficiency, delivering seamless and dependable digital solutions tailored to specific business needs."
       ,  aosDelay: "500",
     },
     {
      name: "AI Integration",
      icon: <MdOutlineSmartToy className="text-4xl text-primary" />,
      link: "#",
      description:
        "Code Craft Consulting empowers businesses with AI integration services, enabling smarter automation, decision-making, and personalized experiences. Our team specializes in developing and deploying machine learning models, natural language processing systems, and computer vision solutions. By seamlessly embedding AI into your workflows and applications, we help you drive innovation, improve efficiency, and unlock the potential of intelligent technologies for your organization.",
      aosDelay: "900",
    },
    {
      name: "Data Science & Data Engineering",
      icon: <MdOutlineDataUsage className="text-4xl text-primary" />,
      link: "#",
      description:
        "At Code Craft Consulting, we help organizations leverage data as a strategic asset through our Data Science and Data Engineering services. From designing scalable data pipelines to building predictive analytics models, we deliver end-to-end solutions tailored to your business needs. Our expertise in big data platforms, cloud services, and machine learning enables us to transform raw data into actionable insights, fueling data-driven decision-making and sustainable growth for your organization.",
      aosDelay: "1100",
    },
    {
      name: "IoT Development",
      icon: <MdDevicesOther className="text-4xl text-primary" />,
      link: "#",
      description:
        "Code Craft Consulting offers cutting-edge IoT Development services to help businesses connect and automate devices for smarter operations. From prototyping IoT-enabled hardware to building secure and scalable IoT platforms, we specialize in designing solutions that integrate seamlessly with your existing systems. Our expertise in IoT protocols, cloud integration, and real-time analytics ensures optimized performance and enhanced productivity, enabling you to unlock the full potential of IoT technology for your business.",
      aosDelay: "1300",
    },
    {
      name: "Program Management",
      icon: <MdOutlineManageAccounts className="text-4xl text-primary" />,
      link: "#",
      description:
        "Streamline your projects with Code Craft Consulting's Program Management services. Our team specializes in end-to-end project planning, execution, and delivery, ensuring alignment with your business goals. From risk assessment to stakeholder communication, we use proven methodologies to drive efficiency and achieve measurable outcomes for your organization.",
      aosDelay: "1400",
    },
    {
      name: "Security & VAPT",
      icon: <MdSecurity className="text-4xl text-primary" />,
      link: "#",
      description:
        "Protect your business with Code Craft Consulting's Security and Vulnerability Assessment & Penetration Testing (VAPT) services. We identify and mitigate potential risks in your IT infrastructure, applications, and networks. Our comprehensive approach includes vulnerability scanning, threat modeling, and detailed reporting to safeguard your critical assets and ensure compliance with industry standards.",
      aosDelay: "1500",
    },
    {
      name: "Product Management",
      icon: <MdOutlineCategory className="text-4xl text-primary" />,
      link: "#",
      description:
          "Drive innovation and deliver value with Code Craft Consulting's Product Management services. We specialize in defining product strategies, managing roadmaps, and ensuring successful product launches. Our team works closely with stakeholders to align business goals with customer needs, delivering market-ready solutions that exceed expectations.",
      aosDelay: "1700",
    },
    {
      name: "UI/UX Design",
      icon: <MdDesignServices className="text-4xl text-primary" />,
      link: "#",
      description:
        "Enhance user satisfaction with Code Craft Consulting's UI/UX Design services. We create intuitive, engaging, and visually appealing designs tailored to your brand identity. Our team focuses on user-centered design principles, ensuring seamless navigation, accessibility, and an exceptional user experience across all platforms.",
      aosDelay: "1600",
    },
    {
      name: "ISO Certifications",
      icon: <MdVerified className="text-4xl text-primary" />,
      link: "#",
      description:
        "Achieve compliance and enhance credibility with Code Craft Consulting's ISO Certification services. We provide end-to-end assistance in obtaining ISO certifications, including ISO 9001, ISO 27001, and more. Our experts guide you through the entire process, from documentation and implementation to audits, ensuring your organization meets global standards.",
      aosDelay: "1700",
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
