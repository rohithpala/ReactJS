import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./stylesheets/App.css";

import Task from "./components/task";

class App extends Component {
  state = {
    addTaskModal: true
  }

  render() {
    return (
      <React.Fragment>
        <div className="top-container">
          <div className="animated-btn">
            Add New Task <FontAwesomeIcon icon={faPlus} />
          </div>
          <a href="https://github.com/rohithpala/ReactJS/tree/main/task-app"
            target="_blank" rel="noreferrer" className="animated-btn">
            Code <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </React.Fragment>
    );
  }
}

export default App;
