import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todo-slice";

const store = configureStore({
  reducer: {
    todosReducer: todoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
