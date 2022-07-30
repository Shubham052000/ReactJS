import React, { useRef } from "react";
import { todoStruct } from "../App";

type TodoFormProps = {
  onAddTodo: (p: todoStruct) => void;
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const createTodoHandler = (event: React.FormEvent) => {
    event.preventDefault(); // Preventing the default behavior of sending request to server

    const enteredTitle = titleRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    props.onAddTodo({
      // Sending data to App.tsx
      id: Date.now(),
      title: enteredTitle,
      description: enteredDescription,
    });

    titleRef.current!.value = ""; // Resetting our refs
    descriptionRef.current!.value = "";
  };
  return (
    <div>
      <form onSubmit={createTodoHandler}>
        <div className="d-inline-flex p-2">
          <label className={"form-label"} htmlFor={"title"}>
            Title
          </label>
          <input
            className="form-control"
            type={"text"}
            id={"id"}
            ref={titleRef}
          ></input>
        </div>
        <div className="d-inline-flex p-2">
          <label htmlFor={"description"}>Description</label>
          <textarea
            className="form-control"
            id={"description"}
            ref={descriptionRef}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-outline-primary" type={"submit"}>
            Create Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
