import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  items: {
    newState: Record<string, string>
  };
}

export const initialState: Partial<Todo> = {};

const dictionary = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<void>) => {
      let newState: Record<string, string> = {};
      for (let i = 0; i < 1e6; i++) {
        newState[i] = Math.random().toString();
      }
      state = {
        id: Math.random().toString(),
        items: { newState }
      };
      return state;
    }
  }
});

export default dictionary;
