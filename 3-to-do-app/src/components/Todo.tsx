import React from "react";

type TodoProps = {
  onRemove: (id: number) => void;
  id: number;
  title: string;
  description: string;
};

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <li key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => props.onRemove(props.id)}
      >
        Remove Todo!
      </button>
    </li>
  );
};

export default Todo;
