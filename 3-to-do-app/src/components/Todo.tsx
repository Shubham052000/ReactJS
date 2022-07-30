import React from "react";
import { todoStruct } from "../App";

const Todo: React.FC<todoStruct> = (props) => {
  return (
    <li key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Todo;
