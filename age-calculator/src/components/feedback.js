import React, { Component } from "react";

import "../stylesheets/feedback.css";

class Feedback extends Component {

   noOfCharactersLeft = () => {
      const feedback = document.querySelector(".feedback-input");
      const clPara = document.querySelector(".characters-left-para");
      const len = feedback.value.length;
      if (len === 0) {
         clPara.style.visibility = "hidden";
         document.querySelector(".success-message").style.visibility = "hidden";
      } else {
         clPara.style.visibility = "visible";
         clPara.style.color = "#87ceeb";
         if (len > 500) {
            clPara.style.color = "#f00";
         }
         document.querySelector(".characters-left").innerText = 500 - len;
      }
   }

   submitAlert = () => {
      const feedback = document.querySelector(".feedback-input").value;
      if (feedback.length > 500) {
         alert("Feedback Exceeded Maximum Allowed Characters.\nReduce your feedback to at max of 500 characters");
      } else {
         if (feedback === "") {
            alert("Your Feedback is Empty. Please type your Feedback");
         } else {
            if (window.confirm("We'll Send your feedback")) {
               window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=programmerrohith@gmail.com&subject=" + encodeURIComponent("Feedback for the Age Calculator") + "&body=" + encodeURIComponent(feedback));
               document.querySelector(".characters-left-para").style.visibility = "hidden";
            }
         }
      }
   }

   render() {
      return (
         <div className="feedback-div">
            <p><u>Leave your Valuable Feedback here</u> :</p>
            <textarea className="feedback-input" onInput={this.noOfCharactersLeft} rows="10" cols="70"></textarea><br />
            <p className="characters-left-para">You are left with <strong className="characters-left">500</strong> characters.</p>
            <button className="submit-button" type="submit" onClick={this.submitAlert}>Submit</button>
         </div>
      );
   }
}

export default Feedback;
