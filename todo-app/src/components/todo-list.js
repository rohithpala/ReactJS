import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todo-form";

function TodoList() {
   const [todos, setTodos] = useState([]);

   // Add the todo
   const addTodo = (todo) => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
         return;
      }

      setTodos([todo, ...todos]);
   };

   // Edit todo with id
   const editTodo = (id, newText) => {
      if (!newText.text || /^\s*$/.test(newText.text)) {
         return;
      }

      setTodos(prev => prev.map(item => (item.id === id ? newText : item)));
   };

   // Set the todo with id as complete
   const setAsComplete = (id) => {
      let updatedTodos = todos.map(todo => {
         if (todo.id === id)
            todo.isComplete = !todo.isComplete;
         return todo;
      });
      setTodos(updatedTodos);
   };

   // Remove the todo with id from the list
   const removeTodo = (id) => {
      setTodos([...todos].filter(todo => todo.id !== id));
   };

   return (
      <>
         <h1>Track your TODOs here</h1>
         <TodoForm changeTodos={addTodo} />
         <Todo
            todos={todos}
            setAsComplete={setAsComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
         />
      </>
   );
}

export default TodoList;
