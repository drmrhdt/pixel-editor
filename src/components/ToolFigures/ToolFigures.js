import React from "react";
import { useDispatch } from "react-redux";
import { selectFigure } from "../../store/actions/selectFigure";

export default function ToolFigures() {
  const dispatch = useDispatch();

  let pickFigure = e => {
    dispatch(selectFigure(e.target.value));
  };

  return (
    // <select value={figure} onChange={pickFigure}>
    //   <option value="square">square</option>
    //   <option value="rectangle">rectangle</option>
    //   <option value="circle">circle</option>
    // </select>
    <>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="square" />
        square
      </label>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="rectangle" />
        rectangle
      </label>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="circle" />
        circle
      </label>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="line" />
        line
      </label>
    </>
  );
}
