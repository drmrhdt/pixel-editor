import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFigure } from "../../store/actions/selectFigure";

export default function ToolFigures() {
  const figure = useSelector(state => state.selectFigure.figure);
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
        <input type="radio" value="square" />
        square
      </label>
      <label onChange={pickFigure}>
        <input type="radio" value="rectangle" />
        rectangle
      </label>
      <label onChange={pickFigure}>
        <input type="radio" value="circle" />
        circle
      </label>
    </>
  );
}
