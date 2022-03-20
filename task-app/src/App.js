import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./stylesheets/App.css";

import Task from "./components/task";
import AddTaskModal from "./components/addTaskModal";

class App extends Component {
  state = {
    addTaskModal: true
  }

  handleAddTask = () => {
    React.render(<AddTaskModal />, document.getElementById("root"));
  }

  render() {
    return (
      <React.Fragment>
        <div className="top-container">
          <button className="add-btn" onClick={this.handleAddTask}>
            Add New Task <FontAwesomeIcon icon={faPlus} />
          </button>
          <a href="https://github.com/rohithpala/ReactJS/tree/main/task-app" target="_blank" rel="noreferrer">
            <div className="code">Code</div>
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
