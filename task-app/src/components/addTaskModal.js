import React, { Component } from "react";

import "../stylesheets/addTaskModal.css";

class AddTaskModal extends Component {
   render() {
      return (
         <div className="add-task-modal">
            <div className="task-input-modal">
               <span>Type your task here</span>
               <textarea className="task-input"></textarea>
            </div>
         </div>
      );
   }
}

export default AddTaskModal;