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
import { MdDeveloperMode, MdWeb, MdCloudQueue, MdDesignServices,MdOutlineSmartToy,MdOutlineDataUsage,MdDevicesOther,MdOutlineManageAccounts,MdSecurity ,MdVerified,MdOutlineCategory,MdCreate,MdOutlineCampaign,MdPeople,MdSupport} from "react-icons/md";
import SupportModal from "../BrandsLogo/SupportModal";
import slideimg7 from "../../assets/website/tumbnel.png";
import vedio from "../../assets/website/vediomedo.mp4"
import VideoCard from "../clientvideo_ads/VideoCard";
const Hero = () => {
  const [count, setcount] = useState(false);
  
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
                Building Brands at{" "}
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
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/code-craft-consulting/posts/?feedView=all",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
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
          <h1 className="text-center headingcounter-text">Milestones</h1>
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
                  <p className="text-gray-500">Projects undertaken</p>
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
                  <p className="text-gray-500">Delivered</p>
                </div>
                <div className="counter-item text-center mb-5 sm:mb-0">
                  <h3 className="mb-0">
                    <span className="counter-text">
                      {count && (
                        <CountUp start={0} end={20} duration={2} delay={0} />
                      )}
                    </span>
                  </h3>
                  <p className="text-gray-500">Available Country</p>
                </div>
                <div className="counter-item text-center">
                  <h3 className="mb-0">
                    <span className="counter-text">
                      {count && (
                        <CountUp start={0} end={10} duration={2} delay={0} />
                      )}
                    </span>
                  </h3>
                  <p className="text-gray-500">Awards</p>
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
            {/* <button className="primary-btn">Learn More</button> */}

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
          <p href="#bring-your-best" className="link">BRING YOUR BEST SELF TO WORK</a>
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
            <div className="Vedio-head"><h1>""Connect Seamlessly Across Devices iOS & Android": Watch the Demo!"
</h1></div>        
            <div className="video-component">
   
            <VideoCard
                      thumbnail={slideimg7}
                      videoSrc={vedio}
                    />
                   </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
