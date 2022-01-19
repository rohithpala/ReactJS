import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/footer.css";
import "https://kit.fontawesome.com/23538a4f23.js";

class Footer extends Component {
   render() {
      return (
         <footer>
            <div className="logo-container">
               <Link to="/"><span>age calculator</span></Link>
            </div>

            <div className="vertical-line"></div>

            <div className="links-container">
               <p>Links</p>
               <hr />
               <ul>
                  <Link to="/about" className="link">About Me</Link>
                  <Link to="/working" className="link">How it all Works?</Link>
                  <Link to="/feedback" className="link">Leave Us a Feedback</Link>
               </ul>
            </div>

            <div className="vertical-line"></div>

            <div className="contact-us">
               <p>Contact Us</p>
               <hr />
               <div>
                  <a href="mailto:programmerrohith@gmail.com">
                     <i className="fas fa-envelope icon email"></i>
                  </a>
                  <a href="https://github.com/rohithpala" target="_blank" rel="noreferrer">
                     <i className="fab fa-github icon github"></i>
                  </a>
                  <a href="https://instagram.com/rohith._.pala._" target="_blank" rel="noreferrer">
                     <i className="fab fa-instagram icon instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UC_HL-GS9SzPh3O7i71qX2Ww" target="_blank" rel="noreferrer">
                     <i className="fab fa-youtube icon youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/rohithpala" target="_blank" rel="noreferrer">
                     <i className="fab fa-linkedin icon linkedin"></i>
                  </a>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;