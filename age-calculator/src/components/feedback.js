import React, { Component } from 'react';

import "../stylesheets/feedback.css";

class Feedback extends Component {
   
   // function noOfCharactersLeft() {
   //    const feedback = document.getElementById("feedback-input");
   //    const clPara = document.getElementById("characters-left-para");
   //    len = feedback.value.length;
   //    if (len === 0) {
   //       clPara.style.visibility = "hidden";
   //       document.getElementById("success-message").style.visibility = "hidden";
   //    } else {
   //       clPara.style.visibility = "visible";
   //       clPara.style.color = "#87ceeb";
   //       if (len > 500) {
   //          clPara.style.color = "#f00";
   //       }
   //       document.getElementById("characters-left").innerText = 500 - len;
   //    }
   // }
   
   // function submitAlert() {
   //    const feedback = document.getElementById("feedback-input");
   //    const successMessage = document.getElementById("success-message");
   //    if (feedback.value.length > 500) {
   //       alert("Feedback Exceeded Maximum Allowed Characters.\nReduce your feedback to at max of 500 characters");
   //    } else {
   //       if (feedback.value === "") {
   //          alert("Your Feedback is Empty. Please type your Feedback");
   //       } else {
   //          if (confirm("We'll Send your Feedback")) {
   //             document.getElementById("characters-left-para").style.visibility = "hidden";
   //             successMessage.style.visibility = "visible";
   //          }
   //          setTimeout(function () {
   //             feedback.value = "";
   //             successMessage.style.visibility = "hidden";
   //          }, 5000);
   //       }
   //    }
   // }
   

   render() {
      return (
         <div className="feedback-div">
            <p><u>Leave your Valuable Feedback here</u> :</p>

            <textarea className="feedback-input" oninput="noOfCharactersLeft()" rows="10" cols="70"></textarea><br />

            <p className="characters-left-para">You are left with <strong className="characters-left">500</strong> characters.</p>

            <button className="submit-button" type="submit" onclick="submitAlert()">Submit</button><br />

               <p className="success-message">Your feedback is Successfully Submitted. Thank You for the valuable feedback</p>
         </div>
      );
   }
}

export default Feedback;
