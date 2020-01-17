import React from "react";
import { useDispatch } from "react-redux";
import { selectPattern } from "../../store/actions/selectPattern";

export default function ToolPattern() {
  const dispatch = useDispatch();

  let pickPattern = e => {
    dispatch(selectPattern(e.target.value));
  };

  return (
    <>
      <label onChange={pickPattern}>
        <input type="radio" name="pattern" value="bubbles" />
        bubbles
      </label>
      <label onChange={pickPattern}>
        <input type="radio" name="pattern" value="nested" />
        nested
      </label>
    </>
  );
}
