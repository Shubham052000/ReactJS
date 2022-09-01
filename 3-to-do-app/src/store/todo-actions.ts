import { todoActions } from "./todo-slice";

export const fetchTodoData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://to-do-typescript-59f0a-default-rtdb.firebaseio.com/todos.json/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch todo data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const todoData = await fetchData();
      console.log("Got the todo data as: ", todoData);
      dispatch(
        todoActions.replaceTodos({
          todos: todoData || [],
        })
      );
    } catch (error) {
      throw new Error("Something went wrong while fetching!!!s");
    }
  };
};

export const sendTodoData = (todoData: any) => {
  console.log(todoData);
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://to-do-typescript-59f0a-default-rtdb.firebaseio.com/todos.json/",
        {
          method: "PUT",
          body: JSON.stringify({
            ...todoData,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending todo data failed!!!");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      throw new Error("Something went wrong while sending todo data!!!");
    }
  };
};
