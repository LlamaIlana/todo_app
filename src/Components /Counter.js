import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const todos = useSelector((state) => state.toDo.list); // Get todos from Redux state

  // Calculate incomplete tasks count
  const incompleteCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <h3 className="counter">Incomplete Todos: {incompleteCount}</h3>
    </div>
  );
}
