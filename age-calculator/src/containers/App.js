import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import "../stylesheets/App.css";
import AgeCalculator from "./age-calculator";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <Header />
            <AgeCalculator />
            <Footer />
         </React.Fragment>
      );
   }
}

export default App;