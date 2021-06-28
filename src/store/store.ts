import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import todos from "./todos";
import dictionary from "./dictionary";

const rootReducer = combineReducers({
  todos: todos.reducer,
  dictionary: dictionary.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    debugger;
    return getDefaultMiddleware({
      immutableCheck: false
    });
  }
});

// const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
