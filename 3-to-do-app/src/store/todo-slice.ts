import { createSlice } from "@reduxjs/toolkit";
import { todoStruct } from "../App";

const initialState: { todos: todoStruct[] } = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    replaceTodos(state, { payload }) {
      state.todos = payload.todos;
    },
    addTodo(state, { payload }) {
      state.todos = [...state.todos, payload];
    },
    removeTodo(state, { payload }) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    updateTodo(state, { payload }) {
      const updateTodoIndex = state.todos.findIndex(
        (todo) => todo.id === payload.id
      );
      state.todos[updateTodoIndex] = payload;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
