import { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import FormModal from "./UI/FormModal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { fetchTodoData } from "./store/todo-actions";

export type todoStruct = {
  id: number;
  title: string;
  description: string;
};

export type stateType = {
  todosReducer: {
    todos: todoStruct[];
  };
};

function App() {
  const [createTodo, setCreateTodo] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    /*
    To-Do: Fix this (setting types for thunks ) 
    Error: Argument of type '(dispatch: any) => Promise<void>' is not assignable to parameter of type 'AnyAction'.
    dispatch(fetchTodoData());
     */
  }, [dispatch]);
  return (
    <div className="header text-center">
      <h1>The To-do app</h1>

      <button
        className="btn btn-primary mt-2"
        onClick={() => setCreateTodo(!createTodo)}
      >
        Create Todo
      </button>

      <FormModal modal={createTodo} toggle={() => setCreateTodo(!createTodo)}>
        <TodoForm />
      </FormModal>

      <Todos />
    </div>
  );
}

export default App;
