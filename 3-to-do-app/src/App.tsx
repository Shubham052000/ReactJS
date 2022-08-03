import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "./store/todo-slice";

import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import FormModal from "./UI/FormModal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export type todoStruct = {
  id: number;
  title: string;
  description: string;
};

type stateType = {
  todosReducer: {
    todos: todoStruct[];
  };
};

function App() {
  const [createTodo, setCreateTodo] = useState(false);
  const dispatch = useDispatch();

  const todosArray = useSelector(
    (state: stateType) => state.todosReducer.todos
  );

  const addTodoHandler = (p: todoStruct) => {
    dispatch(todoActions.addTodo(p));
  };

  const removeTodoHandler = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <div className="header text-center">
      <h1>The To-do app</h1>

      <button
        className="btn btn-primary mt-2"
        onClick={(event) => setCreateTodo(!createTodo)}
      >
        Create Todo
      </button>

      <FormModal
        modal={createTodo}
        toggle={(event) => setCreateTodo(!createTodo)}
      >
        <TodoForm onAddTodo={(p) => addTodoHandler(p)} />
      </FormModal>

      <Todos
        todos={todosArray}
        onRemove={(id: number) => removeTodoHandler(id)}
      />
    </div>
  );
}

export default App;
