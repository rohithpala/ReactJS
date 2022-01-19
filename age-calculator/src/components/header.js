import React, { Component } from 'react';
import '../stylesheets/header.css';

class Header extends Component {
   render() {
      return (
         <header>
            <ul id="menu">
               <li className="menu-link">Home</li>
               <li className="menu-link">About Us</li>
               <li className="menu-link">How it all Works?</li>
               <li className="menu-link">Leave Us a Feedback</li>
            </ul>
         </header>
      );
   }
}

export default Header;