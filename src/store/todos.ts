import { v4 as uuid } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  message: string;
  completed: boolean;
}

const todos = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: uuid(), message: action.payload, completed: false });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),
    completeTodo: (state, action: PayloadAction<string>) => {
      const completedTodo = state.find((todo) => todo.id === action.payload);
      completedTodo.completed = true;
      return state;
    },
    sort: (state) => state.sort((a, b) => a.message.localeCompare(b.message))
  }
});

const reducer = (state = [], action) => {
  if (action.type === "addTodo") {
    return [
      ...state,
      { id: uuid(), message: action.payload, completed: false }
    ];
  }

  return state;
};

const actions = {
  addTodo: (data) => ({ type: "addTodo", payload: data })
};

export default {
  reducer,
  actions
};
// export default todos;
