import React from "react";

function Todo({ todo, index, toggleCompleteTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => toggleCompleteTodo(index)}>
          {todo.isCompleted ? "Incomplete" : "Complete"}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;
