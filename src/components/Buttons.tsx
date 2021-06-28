import { useDispatch } from "react-redux";
import React from "react";
import dictionary from "../store/dictionary";

export const Buttons = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(dictionary.actions.add());
  }

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
