import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import AgeCalculator from "./components/age-calculator";
import AboutMe from "./components/about-me";
import Working from "./components/working";
import Feedback from "./components/feedback";
import Footer from "./components/footer";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route exact path="/" element={<AgeCalculator />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/working" element={<Working />} />
                  <Route path="/feedback" element={<Feedback />} />
               </Routes>
               <Footer />
            </BrowserRouter>
         </React.Fragment>
      );
   }
}

export default App;
