import React, { Component } from 'react';
import '../stylesheets/header.css';

class Header extends Component {
   render() {
      return (
         <header>
            <ul id="menu">
               <li><a href="../age-calculator/age-calculator.html" className="menu-link">Home</a></li>
               <li><a href="../about-us/about-us.html" className="menu-link">About Us</a></li>
               <li><a href="../how-it-works/how-it-works.html" className="menu-link">How it all Works?</a></li>
               <li><a href="../feedback-form/feedback-form.html" className="menu-link">Leave Us a Feedback</a></li>
            </ul>
         </header>
      );
   }
}

export default Header;