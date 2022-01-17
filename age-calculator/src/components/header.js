import React, { Component } from 'react';
import '../stylesheets/header.css';

class Header extends Component {
   render() {
      return (
         <header>
            <ul id="menu">
               <li><a href="../age-calculator/age-calculator.html">Home</a></li>
               <li><a href="../about-us/about-us.html">About Us</a></li>
               <li><a href="../how-it-works/how-it-works.html">How it all Works?</a></li>
               <li><a href="../feedback-form/feedback-form.html">Leave Us a Feedback</a></li>
            </ul>
         </header>
      );
   }
}

export default Header;