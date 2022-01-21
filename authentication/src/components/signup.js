import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/signup.css";

class SignUp extends Component {
   render() {
      return (
         <div className="split right signup-container">
            <div className="center">
               <form action="#" method="post">
                  <label>Email Address:</label>
                  <input className="email" type="email" placeholder="Email Address" />

                  <label>Password:</label>
                  <input className="password" type="password" placeholder="Password" />
                  
                  <label>Re-type Password:</label>
                  <input className="re-password" type="password" placeholder="Re-type Password" />
                  
                  <div className="button-container">
                     <input type="submit" value="Sign Up" />
                  </div>
               </form>
               <p>Already have an Account? <Link to="/login">Login</Link></p>
            </div>
         </div>
      );
   }
}

export default SignUp;
