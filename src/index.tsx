import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { Buttons } from "./components/Buttons";

import "./styles.css";

let data = {};

for (let i = 0; i < 1e6; i++) {
  data[i] = Math.random().toString();
}

let start = Date.now();
let bata = {
  pid: "123",
  data
};

let b = {
  id: 123,
  ...bata
};
console.log("row copy performacne", Date.now() - start, "ms");

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>A simple todo list app to experiment with Redux Toolkit</h2>
        <TodoInput />
        <TodoList />
        <hr />
        <h2>Add large amount data in redux</h2>
        <Buttons />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
