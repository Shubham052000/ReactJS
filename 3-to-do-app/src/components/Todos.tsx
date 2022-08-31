import React from "react";
import { stateType } from "../App";
import { useSelector } from "react-redux";

import Todo from "./Todo";

const Todos: React.FC = () => {
  const todosArray = useSelector(
    (state: stateType) => state.todosReducer.todos
  );

  // console.log(todosArray);
  return (
    <ul className="todos">
      {todosArray.length > 0 &&
        todosArray.map((todo) => {
          return (
            <Todo
              key={todo.id}
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
