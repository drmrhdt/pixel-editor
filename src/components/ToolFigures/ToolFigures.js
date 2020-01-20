import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { selectFigure } from "../../store/actions/selectFigure";
import styles from "./ToolFigures.module.scss";

export default function ToolFigures(props) {
  const { className } = props;
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
    <div className={classNames(className)}>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="square" />
        sq
      </label>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="rectangle" />
        rect
      </label>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="circle" />
        circ
      </label>
      <label onChange={pickFigure}>
        <input type="radio" name="figure" value="line" />
        line
      </label>
    </div>
  );
}
