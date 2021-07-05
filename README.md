# redux-toolkit-experiments
Created with CodeSandbox


tl;dr
```ts
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    });
  }
});
```