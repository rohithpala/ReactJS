import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LeftPanel from "./components/left-panel";
import Login from "./components/login";
import SignUp from "./components/signup";

class App extends Component {
   render() {
      <BrowserRouter>
         <LeftPanel />
         <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
         </Routes>
      </BrowserRouter>
   }
}

export default App;
