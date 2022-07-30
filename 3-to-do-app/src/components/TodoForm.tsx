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
        <label htmlFor={"title"}>Title</label>
        <input type={"text"} id={"id"} ref={titleRef}></input>
        <br />
        <label htmlFor={"description"}>Description</label>
        <textarea id={"description"} ref={descriptionRef}></textarea>
        <br />
        <button type={"submit"}>Create Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
