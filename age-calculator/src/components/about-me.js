import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/about-me.css";

class AboutMe extends Component {
   render() {
      return (
         <div className="about-me">
            <h2>About Me:</h2>
            <p>
               I am an Age Calculator that shows your age in terms of years, months and days.
               <br /> <br />
               Many Age Calculators doesn't really include leap years in their calculations and that is the speciality of me
               <br /> <br />
               I am an open-sourse project done using React and you can find the whole code <a href="https://github.com/rohithpala/ReactJS/tree/main/age-calculator" target="_blank">here</a>.
               <br /> <br />
               You can also know how I do my calculations <Link to="/working">here</Link>
            </p>
         </div>
      );
   }
}

export default AboutMe;
