import React, { Component } from "react";
import "../stylesheets/working.css";

class Working extends Component {
   render() {
      return (
         <div className="how-it-works">
            <h1><u>How It all Works ???</u></h1>
            <strong>
               <ol>
                  <li>First we find the difference between the date of birth and today's date in <br />
                     terms of milliseconds, then convert it to days</li><br />
                  <li>Then based on no. of days we find the no. of years</li><br />
                  <li>Then the no. of days in that year are subtracted so as to get the remaining days</li><br />
                  <li>Same is done with respect to months but it's done with the remaining days</li><br />
                  <li>Then finally we add the no. of leap years to the final remaining days to get correct output.</li>
               </ol>
            </strong>
         </div>
      );
   }
}

export default Working;
