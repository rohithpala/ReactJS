import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AgeCalculator from "./components/age-calculator";
import AboutMe from "../components/about-me";
import HowItAllWorks from "./components/how-it-all-works.js";
import Feedback from "./components/feedback-form";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <Header />

            <Switch>
               <Router path="/" exact component={AgeCalculator} />
               <Router path="/about" component={AboutMe} />
               <Router path="/how-it-all-works" component={HowItAllWorks} />
               <Router path="/feedback-form" component={Feedback} />
            </Switch>

            <Footer />
         </React.Fragment>
      );
   }
}

export default App;