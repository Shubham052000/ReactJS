import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";
import { todoStruct } from "../App";
import Card from "../UI/Card";
import UpdateModal from "../UI/UpdateModal";

const Todo: React.FC<todoStruct> = (props) => {
  const dispatch = useDispatch();
  const [updateTodoModalShown, setUpdateTodoModalShown] = useState(false);

  const removeTodoHandler = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <>
      <UpdateModal
        modal={updateTodoModalShown}
        toggle={() => setUpdateTodoModalShown(!updateTodoModalShown)}
        id={props.id}
        title={props.title}
        description={props.description}
      />
      <Card>
        <div onClick={() => setUpdateTodoModalShown(!updateTodoModalShown)}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button
            className="btn btn-danger"
            onClick={() => removeTodoHandler(props.id)}
          >
            Remove Todo!
          </button>
        </div>
      </Card>
    </>
  );
};

export default Todo;
