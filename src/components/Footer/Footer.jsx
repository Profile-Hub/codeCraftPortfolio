import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "../Testimonial/ScrollToTop ";

const FooterLinks = [
  { title: "About", link: "/About-us" },
  { title: "Services", link: "/Services" },
  { title: "Contact us", link: "/contact-us" },
];

const HelpLinks = [
  { title: "Customer Support", link: "/#support" },
  { title: "Delivery Details", link: "/#delivery-details" },
  { title: "Terms & Conditions", link: "/term-Condition" },
  { title: "Privacy Policy", link: "/Privacy-Policy" },
];

const ResourcesLinks = [
  { title: "Free Ebooks", link: "/#ebooks" },
  { title: "How To Blog", link: "/#blogs" },
  {
    title: "Subscribe TCJ",
    link: "#",
    external: true, // Specify if the link is external
  },
];

const Footer = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-dark text-white">
        <section className="container py-10">
          <div className="grid md:grid-cols-3 py-5">
            {/* Company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Code Craft Consulting
              </h1>
              <p className="text-sm">
                We are your trusted partner in creating custom applications and websites that combine innovation, functionality, and design excellence.
                Revolutionize your brand with software solutions and web services crafted to maximize efficiency and amplify impact.
              </p>
              <br />
              {/* Social Handles */}
              <div className="flex items-center gap-4 mt-6">
                <a href="#">
                  <FaInstagram className="text-2xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl hover:text-primary duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/code-craft-consulting/about/"
                  target="blank"
                >
                  <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li key={link.title}>
                      {link.external ? (
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                        >
                          {link.title}
                        </a>
                      ) : (
                        <Link
                          to={link.link}
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400"
                        >
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
