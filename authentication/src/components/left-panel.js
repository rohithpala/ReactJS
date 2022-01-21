import React, { Component } from "react";
import "../stylesheets/left-panel.css";
import Logo from "../media/logo.png";

class LeftPanel extends Component {
   render() {
      return (
         <div className="split left">
            <div className="center">
               <img src={Logo} alt="logo" />
               <p>Some text about your website</p>
            </div>
         </div>
      );
   }
}

export default LeftPanel;
