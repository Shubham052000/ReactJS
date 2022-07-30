import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

export type todoStruct = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [todoArray, setTodoArray] = useState<todoStruct[]>([]);
  const [createTodo, setCreateTodo] = useState(false);

  const addTodoHandler = (p: todoStruct) => {
    setTodoArray((prevTodos) => {
      return [...prevTodos, p];
    });
  };

  const removeTodoHandler = (id: number) => {
    setTodoArray((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <h1>The To-do app</h1>
      <button onClick={(event) => setCreateTodo(!createTodo)}>
        {createTodo ? "Close Todo form" : "Create Todo"}
      </button>
      {createTodo && <TodoForm onAddTodo={(p) => addTodoHandler(p)} />}
      <Todos
        todos={todoArray}
        onRemove={(id: number) => removeTodoHandler(id)}
      />
    </div>
  );
}

export default App;
