import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import dictionary from "./dictionary";

const rootReducer = combineReducers({
  todos: todos.reducer,
  dictionary: dictionary.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    // debugger;
    // return [];
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    });
  }
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
