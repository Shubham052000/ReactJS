import React, { useRef, useState } from "react";
import { todoStruct } from "../App";

type TodoFormProps = {
  onAddTodo: (p: todoStruct) => void;
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [emptyFields, setEmptyFields] = useState(false);

  const createTodoHandler = (event: React.FormEvent) => {
    event.preventDefault(); // Preventing the default behavior of sending request to server

    const enteredTitle = titleRef.current!.value;
    const enteredDescription = descriptionRef.current!.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setEmptyFields(true);
      return;
    }

    props.onAddTodo({
      // Sending data to App.tsx
      id: Date.now(),
      title: enteredTitle,
      description: enteredDescription,
    });

    setEmptyFields(false); // Resetting our states and refs
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
  };
  return (
    <div>
      <form onSubmit={createTodoHandler}>
        <div className="form-group">
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
        <div className="form-group mt-2">
          <label htmlFor={"description"}>Description</label>
          <textarea
            rows={5}
            className="form-control"
            id={"description"}
            ref={descriptionRef}
          ></textarea>
        </div>
        {emptyFields && (
          <p className="text-danger text-center">
            Please enter Todo and Description
          </p>
        )}
        <div className="form-group text-center mt-3">
          <button className="btn btn-outline-primary" type={"submit"}>
            Create Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
