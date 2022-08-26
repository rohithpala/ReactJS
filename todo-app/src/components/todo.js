import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./todo-form";

function Todo({ todos, setAsComplete, removeTodo, editTodo }) {
   const [edit, setEdit] = useState({
      id: null,
      value: ""
   });

   const handleEdit = (value) => {
      editTodo(edit.id, value);
      setEdit({
         id: null,
         value: ""
      });
   };

   if (edit.id) {
      return <TodoForm edit={edit} changeTodos={handleEdit} />
   }

   return todos.map((todo, index) => {
      return (
         <div className={"todo-row" + (todo.isComplete ? " complete" : "")} key={index}>
            <div
               key={todo.id}
               onClick={() => setAsComplete(todo.id)}
            >
               {todo.text}
            </div>

            <div className="icons">
               <RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(todo.id)} />
               <TiEdit className="edit-icon" onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </div>
         </div>
      )
   });
}

export default Todo;
