import React, { Component } from 'react';
import '../stylesheets/footer.css';
import 'https://kit.fontawesome.com/23538a4f23.js';

class Footer extends Component {
   render() {
      return (
         <footer>
            <div id="logo">
               <a href="../age-calculator/age-calculator.html">age calculator</a>
            </div>

            <div className="vertical-line"></div>

            <div id="links">
               <p>Links</p>
               <hr />
               <ul>
                  <li><a href="../about-us/about-us.html">About Us</a></li>
                  <li><a href="../how-it-works/how-it-works.html">How it all Works?</a></li>
                  <li><a href="../feedback-form/feedback-form.html">Leave Us a Feedback</a></li>
               </ul>
            </div>

            <div className="vertical-line"></div>

            <div id="contact-us">
               <p>Contact Us</p>
               <hr />
               <div>
                  <a href="mailto:programmerrohith@gmail.com">
                     <i className="fas fa-envelope icon" id="email"></i>
                  </a>
                  <a href="https://github.com/rohithpala" target="_blank" rel="noreferrer">
                     <i className="fab fa-github icon" id="github"></i>
                  </a>
                  <a href="https://instagram.com/rohith._.pala._" target="_blank" rel="noreferrer">
                     <i className="fab fa-instagram icon" id="instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UC_HL-GS9SzPh3O7i71qX2Ww" target="_blank" rel="noreferrer">
                     <i className="fab fa-youtube icon" id="youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/rohithpala" target="_blank" rel="noreferrer">
                     <i className="fab fa-linkedin icon" id="linkedin"></i>
                  </a>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;