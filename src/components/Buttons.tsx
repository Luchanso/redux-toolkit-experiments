import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import dictionary from "../store/dictionary";
import todos from "../store/todos";

export const Buttons = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(dictionary.actions.add());
  }

  useEffect(() => {
    let start = Date.now();
    dispatch(dictionary.actions.add());
    dispatch(todos.actions.addTodo("Todo 3"));
    dispatch(todos.actions.addTodo("Todo 2"));
    dispatch(todos.actions.addTodo("Todo 1"));
    dispatch(todos.actions.sort());
    console.log('Operation take: ', Date.now() - start);
  }, []);

  return (
    <>
      <button onClick={handleClick}>
        Add dictionary 1e6 items in toolkit slice
      </button>
      {/* <button onClick={handleClick}>
        Add dictionary 1e6 items in plain switch
      </button> */}
    </>
  );
};
