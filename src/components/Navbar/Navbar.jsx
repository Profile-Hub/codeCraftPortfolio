import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import { Link } from 'react-router-dom';
import './Navbar.css'

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About us",
    link: "/About-us",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "Carrier",
    link: "/Carrier",
  },
];
const Navbar = () => {
  const [showMedia, setMedia] = useState(false)
  const [showdrop, setdrop] = useState(false)

  return (
    <div>
      <div className="navigate">

        <ul className="nav">
          <li className="email">
            <a href="https://wa.me/919654596949?text=Hello%20from%20your%20website" target="_blank">
              <i className="fab fa-whatsapp fa-brands what phone"></i> <button>Contact Us on WhatsApp</button>
            </a>
          </li>
          <li className="email">
            <span className="material-symbols-outlined phone gmail">mail</span>
            <a href="mailto:sanjit@codecraftconsulting.in" className="pointer">sanjit@codecraftconsulting.in</a>
          </li>
          <li className="email">
            <span className="material-symbols-outlined phone call">call</span>
            <a href="tel:+919654596949" className="pointer text-gray-700">Call Us: +91 9654596949</a>
          </li>
        </ul>

        <div id="navbar" >
          <div className="container">
            <div className="row">
              <div className="nav-show">
                <nav className="navbar navbar-expand-lg px-0 py-2">
                  <div className='logo-cover'>
                    <Link to='/' className="navbar-brand navlogo  " >
                      <img src={Logo} alt="" className="w-5" style={{ width: "3.25rem" }} />
                      <div className="text-2xl sm:text-3xl font-semibold logoname whitespace-normal">
                        Code Craft Consulting
                      </div>

                    </Link>

                  </div>


                  <div className='nav-list'>
                    <div className={showMedia ? " nav-animation" : " nav-hide"} id="navbarsExample09">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item @@home " onClick={() => setMedia(!showMedia)} >
                          <Link className="nav-link pointer" to="/" onClick={() => setdrop(false)}>Home</Link>
                        </li>
                        <li className="nav-item @@service" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/about-us" onClick={() => setMedia(!showMedia)} >About Us</Link></li>
                        <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/services" onClick={() => setMedia(!showMedia)} >Services</Link></li>

                        {/* <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/porfolio" onClick={() => setMedia(!showMedia)} >Portfolio</Link></li> */}
                        {/* <li className="nav-item @@project" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/carrier" onClick={() => setMedia(!showMedia)} >Career</Link></li> */}

                        <li className="nav-item @@service" onClick={() => setdrop(false)}><Link className="nav-link pointer" to="/contact-us" onClick={() => setMedia(!showMedia)} ><button className="primary-btn">Get in Touch</button></Link></li>

                      </ul>

                    </div>

                  </div>
                  <button className="navbar-toggler collapsed" onClick={() => setMedia(!showMedia)} type="button" data-toggle="collapse" data-target="#navbarsExample09"
                    aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation" >{showMedia ?
                      (<span className="material-symbols-outlined">
                        dangerous
                      </span>) : (<span className="material-symbols-outlined">
                        menu
                      </span>)}
                  </button>
                </nav>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
