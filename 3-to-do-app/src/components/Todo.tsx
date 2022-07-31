import React from "react";
import Card from "../UI/Card";

type TodoProps = {
  onRemove: (id: number) => void;
  id: number;
  title: string;
  description: string;
};

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <Card key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => props.onRemove(props.id)}
      >
        Remove Todo!
      </button>
    </Card>
  );
};

export default Todo;
