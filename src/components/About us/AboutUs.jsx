import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import profile from '../../assets/website/shubham2crop.png';
import profilerishu from '../../assets/website/rishu.jpg';
import sidepic from '../../assets/website/mub.jpeg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LazyLoad from 'react-lazyload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./AboutUs.css";
import ScrollToSupport from '../BrandsLogo/scrollToTop';
import { FaBullseye, FaEye, FaCogs } from 'react-icons/fa';
import BrandsLogo from "../BrandsLogo/BrandsLogo";

const skillsData = [
  {
    name: "Our Mission",
    icon: <FaBullseye className="text-4xl text-primary" />,
    link: "#",
    description:
      "At Code Craft Consulting, our mission is to foster innovation and drive progress in software development. We are committed to delivering Python-driven analytical tools and real-time monitoring systems, which serve as the foundation of our technological advancements. By creating impactful software solutions, we empower businesses and individuals to enhance productivity and achieve progress across various industries. With a focus on technological excellence, we aim to shape the future through creativity, innovation, and exceptional software development.",
    aosDelay: "0",
  },
  {
    name: "Our Vision",
    icon: <FaEye className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our vision at Code Craft Consulting is to be a leader in the software development industry, delivering groundbreaking solutions that seamlessly integrate into daily life. We aim to create software-based analytical tools and real-time monitoring applications that drive positive change. By anticipating future challenges and needs, we strive to provide solutions that address current demands while paving the way for tomorrow’s advancements, making a global impact and contributing to societal progress.",
    aosDelay: "300",
  },
  {
    name: "Our Approach",
    icon: <FaCogs className="text-4xl text-primary" />,
    link: "#",
    description:
      "At Code Craft Consulting, we prioritize innovation and strategic problem-solving in software development. By leveraging Python-based analytical tools and real-time monitoring applications, we remain at the forefront of technological advancements. Our proactive approach ensures that our solutions not only meet industry needs but also anticipate future demands. Through this visionary mindset, we empower our clients to succeed in an ever-evolving technological landscape.",
    aosDelay: "500",
  },
];

const Aboutus = () => {
  const [count, setcount] = useState(false);

  const settings_client = {
    dots: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Section content part start */}
      <section className="bg-1">
        <div className="carrier-top-cover">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center mb-4" data-aos="fade-up">
                  <h1 className="about-1 text-white">About Us</h1>
                  <span className="text-white"></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section content part end */}

      {/* Section A part start */}
      <section className="section">
        <div className="container">
          <div className="row flex justify-center items-center">
            <div className="col-lg-5">
              <div className="about-item md:pr-3 mb-5 mb-lg-0 md:px-3" data-aos="fade-up">
                <h2>
                  <span className="h5 text-color mb-3">What We Do:</span>
                </h2>
                <h2 className="my-3 position-relative content-title">
                  We create software to solve daily life problems.
                </h2>
                <p className="mb-3">
                  At <strong>Code Craft Consulting</strong>, we specialize in delivering cutting-edge software
                  solutions and world-class consulting services tailored to meet the unique needs of businesses
                  worldwide. Our expertise includes custom software development to streamline operations and
                  drive growth, user-centric web and mobile app development designed for performance and scalability,
                  Software as a Product (SaaP) solutions to address common business challenges, and technology
                  consulting to guide businesses in adopting the right tools and strategies for maximum impact.
                  With a passion for innovation and a commitment to excellence, we empower our clients to thrive
                  in an ever-evolving digital landscape.
                </p>
                <a
                  href="https://www.linkedin.com/showcase/code-craftconsulting/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-main btn-round-full"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="col-lg-5 flex justify-center items-center" data-aos="fade-up">
              <div className="flex justify-center items-center">
                <LazyLoad placeholder={<Skeleton width={240} height={240} />}>
                  <img
                    style={{borderRadius:"10px"}}
                    loading="lazy"
                    src={sidepic}
                    alt="About Us"
                    className="img-fluid"
                  />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section A part End */}

      {/* Section B part start */}
      <div className='creater'>
        <h1 className='content-title title-founder-head'>Our Founder</h1>
      </div>
      <div className='ceo-quotes'>
        <div className='cover-ceo'>
          <div className='ceo-photo-bg'>
            <div className='ceo-photo'>

            </div></div>
            <div className='ceo-few p-3'>
            <h3 className="mt-2 mb-1 position-relative content-title text-gray founder-head">
              Innovation and Stability Do Not Coexist
            </h3>
            <p className="mb-1">
              At <strong>Code Craft Consulting</strong>, we understand that pursuing
              groundbreaking innovation often requires stepping out of comfort zones. This reflects the profound
              realization that, while achieving everything at once is impossible, prioritizing what truly aligns
              with our mission and values is crucial. Our approach emphasizes focusing on transformative solutions that
              matter most to our clients, ensuring meaningful and lasting impact. By aligning our efforts with what
              genuinely drives value for businesses, we foster a journey of growth and achievement. This reminds us that
              true progress comes from embracing challenges and staying focused on what matters most.
            </p>

            <h2 className="mt-2 mb-1 position-relative content-title text-gray name-font content-title">Sanjit Singh</h2>
            <p className='text-gray founder-font founder-font '><strong>CEO</strong></p>
            <a href="https://www.linkedin.com/in/sanjit-s-a033a564/" target="_blank" className="pointer text-gray-700"><LinkedInIcon/>Linkedin</a>

          </div>
        </div>
      </div>

      {/* Section B part End */}

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
      {/* Section C part End */}
      {/* Section vision part start */}
      <section className="about-info section md:px-8 py-16">
        <div className="container">
          <p>Best Reason</p>
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
                <h2 className="mt-1 mb-3 position-relative content-title ">Why Choose Us</h2>
                <p
                  data-aos="fade-up"
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  We are self-service data analytics software that lets you create
                  visually.
                </p>
              </div>

              {/* services cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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



              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section vision part End */}
      {/* Section D part start */}
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h3 text-color content-title">Our Founding Engineers</span>
                {/* <h1 className="mt-3 content-title">Expert Team profileber to get best service</h1> */}
              </div>
              <div className="founded">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={profile}
                    className="card-img-top fixed-image"
                    alt="Profile of Shubham Kumar Garg"
                  />
                  <div className="card-body">
                    <h3 className="card-title content-title">Shubham Kumar Garg</h3>
                    <p>Full-Stack Engineer</p>
            <a href="https://www.linkedin.com/in/shubham-kumar-garg-b5a9bb234/" target="_blank" className="pointer text-gray-700"><LinkedInIcon/>Linkedin</a>

                  </div>
                </div>
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src={profilerishu}
                    className="card-img-top fixed-image"
                    alt="Profile of Rishu Mehta"
                  />
                  <div className="card-body">
                    <h3 className="card-title content-title">Rishu Mehta</h3>
                    <p>Full-Stack Engineer</p>
            <a href="https://www.linkedin.com/in/rishu-mehta05/" target="_blank" className="pointer text-gray-700"><LinkedInIcon/>Linkedin</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <div className='container '> */}



      <div className='team-detail' >



      </div>



      {/* </div> */}
      {/* Section D part End */}

      {/* Section E part start */}



      <div className='feedback'>
<div className="feedback-client">
  <Slider {...settings_client}>
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

      <ScrollToSupport/>
      {/* Section E part End */}


    </div>
  )
}

export default Aboutus
