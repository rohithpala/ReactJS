import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "../stylesheets/task.css";

class Task extends Component {

   handleEdit = () => {

   }

   handleDelete = () => {

   }

   render() {
      return (
         <div className="task">
            <span className="task-content">Task</span>
            <div className="btn-container">
               <button className="icon edit-btn" onClick={this.handleEdit}><FontAwesomeIcon icon={faEdit} /></button>
               <button className="icon delete-btn" onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
         </div>
      );
   }
}

export default Task;