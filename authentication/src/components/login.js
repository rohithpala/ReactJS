import React, { Component } from "react";
import "../stylesheets/login.css";

class Login extends Component {
   render() {
      return (
         <div className="split right login-container">
            <form action="#" method="post">
               <label>Email Address:</label>
               <input className="email" type="email" placeholder="Email Address" />

               <label>Password:</label>
               <input className="password" type="password" placeholder="Password" />

               <div className="button-container">
                  <input type="submit" value="Login" />
               </div>
            </form>
         </div>
      );
   }
}

export default Login;
