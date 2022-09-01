import { useState, useEffect } from "react";

import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import FormModal from "./UI/FormModal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoData } from "./store/todo-actions";
import { AppDispatch } from "./store";

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

let isInitial = true;

function App() {
  const [createTodo, setCreateTodo] = useState(false);

  const todos = useSelector((state: stateType) => state.todosReducer.todos);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      console.log("i ran");
      isInitial = false;
      return;
    }
  }, [todos, dispatch]);

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
