import React from "react";
import { todoStruct } from "../App";
import Todo from "./Todo";

type TodosProps = {
  todos: todoStruct[];
  onRemove: () => void;
};
const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <Todo
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
