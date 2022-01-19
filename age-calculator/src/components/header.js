import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/header.css";

class Header extends Component {
   render() {
      return (
         <header>
            <ul className="menu">
               <Link to="/" className="menu-item">Home</Link>
               <Link to="/about" className="menu-item">About Me</Link>
               <Link to="/working" className="menu-item">How it all Works?</Link>
               <Link to="/feedback" className="menu-item">Leave Us a Feedback</Link>
            </ul>
         </header>
      );
   }
}

export default Header;