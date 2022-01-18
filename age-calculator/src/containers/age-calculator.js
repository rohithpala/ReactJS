import React, { Component } from 'react';
import "../stylesheets/age-calculator.css";

function changeDate(calledBy) {
   if ((calledBy === "month") || (calledBy === "year" && document.getElementById("month-dd").value === "2"))
      document.getElementById('date-dd').selectedIndex = 0;
}

class AgeCalculator extends Component {
   state = {
      dateArray: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
   }

   checkMonthAndYear = () => {
      let inputMonth = document.getElementById("month-dd");
      let inputYear = document.getElementById("year-ip");

      const monthCheck = (inputMonth.value === "select"), yearCheck = (inputYear.value === "");
      if (monthCheck && yearCheck) {
         alert("Please input the Month and Year before inputting date");
      } else if (monthCheck) {
         alert("Please input Month before inputting date");
      } else if (yearCheck) {
         alert("Please input Year before inputting date");
      } else {
         const inputDate = document.getElementById("date-dd");
         inputMonth = parseInt(inputMonth.value);
         inputYear = parseInt(inputYear.value);

         const d29 = document.querySelector("#date-dd option[value='29']");
         const d30 = document.querySelector("#date-dd option[value='30']");
         const d31 = document.querySelector("#date-dd option[value='31']");

         if (inputMonth === 2) {
            if (inputYear % 4 === 0) {
               const array = Array.from(inputDate.options).map((opt) => opt.value);
               if (!array.includes("29")) inputDate.innerHTML += "<option value='29'>29</option>";
               if (array.includes("30")) d30.remove();
               if (array.includes("31")) d31.remove();
            } else {
               const array = Array.from(inputDate.options).map((opt) => opt.value);
               if (array.includes("29")) d29.remove();
               if (array.includes("30")) d30.remove();
               if (array.includes("31")) d31.remove();
            }
         } else {
            const array = Array.from(inputDate.options).map((opt) => opt.value);
            if (!array.includes("29")) inputDate.innerHTML += "<option value='29'>29</option>";
            if (!array.includes("30")) inputDate.innerHTML += "<option value='30'>30</option>";

            if (this.state.dateArray[inputMonth] === 30 && array.includes("31")) {
               d31.remove();
            } else if (this.state.dateArray[inputMonth] === 31 && !array.includes("31")) {
               inputDate.innerHTML += "<option value='31'>31</option>";
            }
         }
      }
   }

   noOfLeapYears = (yearOfBirth) => {
      const currentYear = new Date().getFullYear();
      let i, leapYears = 0;
      for (i = yearOfBirth; i < currentYear; i++)
         if (i % 4 === 0) leapYears++;
      return leapYears;
   }

   checkFields = () => {
      if (document.getElementById("date-dd").value === "select" ||
         document.getElementById("month-dd").value === "select" ||
         document.getElementById("year-ip").value === "") {
         alert("Please input all the fields");
         return false;
      }
      return true;
   }

   calculateAge = () => {
      if (this.checkFields()) {
         const inputDate = document.getElementById("date-dd");
         const inputMonth = document.getElementById("month-dd");
         const inputYear = document.getElementById("year-ip");
         const dateOfBirth = parseInt(inputDate.value);
         const yearOfBirth = parseInt(inputYear.value);
         const today = new Date().getTime();
         const birth = new Date(inputMonth.value + "/" + dateOfBirth + "/" + yearOfBirth).getTime();

         if (dateOfBirth === null || inputMonth.value === "select" || yearOfBirth === null) {
            alert("Please fill all the fields");
         } else if (birth > today) {
            alert("Birth date should be less than today: " + new Date());
         } else {
            let days = parseInt((today - birth) / (1000 * 3600 * 24));

            const years = parseInt(days / 365);
            days -= years * 365.25;

            const months = parseInt(days / 30);
            days -= months * 30.4167;

            days += this.noOfLeapYears(yearOfBirth);

            console.log(1);
            const age = document.getElementById('age');
            age.style.display = "inherit";
            age.innerText = years + " years " + months + " months " + parseInt(days) + " days";
         }
      }
   }

   render() {
      return (
         <div id="main">
            <div id="heading">
               <h1>Age Calculator:</h1>
               <pre>  </pre>
               <a href="../how-it-works/how-it-works.html"><i className="fas fa-info-circle" id="info"></i></a>
            </div>

            <div id="dmy-container">
               <div id="date-container">
                  <label>Date:</label>
                  <select id="date-dd" onClick={this.checkMonthAndYear}>
                     <option value="select">Select Date</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                     <option value="13">13</option>
                     <option value="14">14</option>
                     <option value="15">15</option>
                     <option value="16">16</option>
                     <option value="17">17</option>
                     <option value="18">18</option>
                     <option value="19">19</option>
                     <option value="20">20</option>
                     <option value="21">21</option>
                     <option value="22">22</option>
                     <option value="23">23</option>
                     <option value="24">24</option>
                     <option value="25">25</option>
                     <option value="26">26</option>
                     <option value="27">27</option>
                     <option value="28">28</option>
                     <option value="29">29</option>
                     <option value="30">30</option>
                     <option value="31">31</option>
                  </select>
               </div>

               <div id="month-container">
                  <label>Month:</label>
                  <select id="month-dd" onChange="changeDate('month')">
                     <option value="select">Select Month</option>
                     <option value="1">January</option>
                     <option value="2">February</option>
                     <option value="3">March</option>
                     <option value="4">April</option>
                     <option value="5">May</option>
                     <option value="6">June</option>
                     <option value="7">July</option>
                     <option value="8">August</option>
                     <option value="9">September</option>
                     <option value="10">October</option>
                     <option value="11">November</option>
                     <option value="12">December</option>
                  </select>
               </div>

               <div id="year-container">
                  <label>Year:</label>
                  <input id="year-ip" type="number" min="1" max={new Date().getFullYear()} placeholder="Year" onInput="changeDate('year')" />
               </div>
            </div>

            <div id="btn-container">
               <button id="age-button" type="submit" onClick={this.calculateAge}>Calculate Age</button>
            </div>

            <div id="age-container">
               <span id="age"></span>
            </div>
         </div>
      );
   }
}

export default AgeCalculator;