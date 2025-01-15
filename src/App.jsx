import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './app.css'
// Component importimport AOS from "aos";
import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
// src/Allroutes.jsx
import Homepage from './components/Hero/Homepage';

import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contactus from "./components/Services/Contactus.jsx";

import Aboutus from "./components/About us/AboutUs.jsx";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="">
       <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/Services" element={<Services />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
