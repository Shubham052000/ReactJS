import React from "react";
import { stateType } from "../App";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const Todos: React.FC = () => {
  const todosArray = useSelector(
    (state: stateType) => state.todosReducer.todos
  );

  return (
    <ul className="todos">
      {todosArray.map((todo) => {
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
