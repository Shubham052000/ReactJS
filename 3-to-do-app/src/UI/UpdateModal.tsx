import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const UpdateModal: React.FC<{
  modal: boolean;
  toggle: (event: React.MouseEvent) => void;
  id: number;
  title: string;
  description: string;
}> = ({ modal, toggle, id, title, description }) => {
  const dispatch = useDispatch();

  const [emptyFields, setEmptyFields] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const updateTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      titleInput.trim().length === 0 ||
      descriptionInput.trim().length === 0
    ) {
      setEmptyFields(true);
      return;
    }

    dispatch(
      todoActions.updateTodo({
        id,
        title: titleInput,
        description: descriptionInput,
      })
    );

    setEmptyFields(false);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Todo</ModalHeader>
      <ModalBody>
        <form onSubmit={updateTodoHandler}>
          <div className="form-group">
            <label className={"form-label"} htmlFor={"title"}>
              Title
            </label>
            <input
              className="form-control"
              type={"text"}
              id={"id"}
              value={titleInput}
              onChange={(e) => {
                setTitleInput(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-group mt-2">
            <label htmlFor={"description"}>Description</label>
            <textarea
              rows={5}
              className="form-control"
              id={"description"}
              value={descriptionInput}
              onChange={(e) => {
                setDescriptionInput(e.target.value);
              }}
            ></textarea>
          </div>
          {emptyFields && (
            <p className="text-danger text-center">
              Eyy!! Please enter Todo's title and Description
            </p>
          )}
          <div className="form-group text-center mt-3">
            <button className="btn btn-outline-primary" type={"submit"}>
              Update Todo
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default UpdateModal;
