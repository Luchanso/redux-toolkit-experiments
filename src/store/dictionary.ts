import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  items: {
    newState: {
      // t: { data: string };
      [key: string]: string;
    };
  };
}

const dictionary = createSlice({
  name: "dictionary",
  initialState: {} as Todo,
  reducers: {
    add: (state, action: PayloadAction<void>) => {
      let start = Date.now();
      let newState = {};
      for (let i = 0; i < 1e6; i++) {
        newState[i] = Math.random().toString();
      }
      state = {
        id: Math.random().toString(),
        items: { newState }
      };
      console.log(Date.now() - start, "ms.");
      return state;
    }
  }
});

const reducer = (state = {}, action) => {
  if (action.type === "add") {
    let start = Date.now();
    let newState = {};
    for (let i = 0; i < 1e6; i++) {
      newState[i] = Math.random().toString();
    }
    const resultState = {
      id: Math.random().toString(),
      items: { newState }
    };
    console.log(Date.now() - start, "ms.");
    return { ...state, ...resultState };
  }

  return state;
};

const actions = {
  add: () => ({
    type: "add"
  })
};

// export default {
//   reducer,
//   actions
// };
export default dictionary;
