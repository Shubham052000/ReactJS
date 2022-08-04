import React from "react";

import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";
import { todoStruct } from "../App";
import Card from "../UI/Card";

const Todo: React.FC<todoStruct> = (props) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <Card key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => removeTodoHandler(props.id)}
      >
        Remove Todo!
      </button>
    </Card>
  );
};

export default Todo;
