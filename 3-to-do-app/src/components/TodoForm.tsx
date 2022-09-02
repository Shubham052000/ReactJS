import React, { useRef, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sendTodoData } from "../store/todo-actions";
import { todoActions } from "../store/todo-slice";
import { AppDispatch } from "../store";
import { stateType } from "../App";

const TodoForm: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const [emptyFields, setEmptyFields] = useState(false);

  const dispatch: AppDispatch = useDispatch();

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

    dispatch(
      // Adding todo to our Redux state
      todoActions.addTodo({
        id: Date.now(),
        title: enteredTitle,
        description: enteredDescription,
      })
    );

    setEmptyFields(false); // Resetting our states and refs
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
  };

  return (
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
          Eyy!! Please enter Todo's title and Description
        </p>
      )}
      <div className="form-group text-center mt-3">
        <button className="btn btn-outline-primary" type={"submit"}>
          Create Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
