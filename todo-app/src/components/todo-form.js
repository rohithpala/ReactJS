import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
   const [input, setInput] = useState(props.edit ? props.edit.value : "");

   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   });

   const handleChange = (e) => {
      setInput(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // This changes the todos in todo-list component
      props.changeTodos({
         id: Math.floor(Math.random() * 10000),
         text: input
      });

      setInput("");
   };

   return (
      <form className="todo-form" onSubmit={handleSubmit}>
         <input
            type="text"
            className={"todo-input" + (props.edit ? " edit" : "")}
            placeholder={props.edit ? "Update the TODO" : "Add the TODO"}
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
         />

         <button type="submit" className={"todo-button" + (props.edit ? " edit" : "")}>{props.edit ? "Update" : "Add"}</button>
      </form>
   )
}

export default TodoForm;
