import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "React", description: "Learn React basics" },
    { id: 2, title: "TypeScript", description: "Learn TS basics" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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
