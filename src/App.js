import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Code Laravel 6.0",
      isCompleted: false
    },
    {
      id: 2,
      text: "Learn React JS",
      isCompleted: false
    },
    {
      id: 3,
      text: "Learn Ionic React",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const todo = {
      id: Date.now(),
      text,
      isCompleted: false
    };
    setTodos([...todos, todo]);
  };
  const toggleCompleteTodo = index => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.isCompleted = !todo.isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            index={index}
            todo={todo}
            toggleCompleteTodo={toggleCompleteTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
