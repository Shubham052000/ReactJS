import React from "react";
import { todoStruct } from "../App";

type TodosProps = {
  todos: todoStruct[];
  onRemove: () => void;
};
const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
