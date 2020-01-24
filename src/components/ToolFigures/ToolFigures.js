import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import RadioButton from "../RadioButton";
import { selectFigure } from "../../store/actions/selectFigure";
import styles from "./ToolFigures.module.scss";

export default function ToolFigures(props) {
  const { className } = props;
  const figure = useSelector(state => state.selectFigure.figure);
  const dispatch = useDispatch();

  const pickFigure = e => {
    dispatch(selectFigure(e.currentTarget.dataset.label));
  };

  return (
    <div className={classNames(styles["tool-figures"], className)}>
      <RadioButton
        item="square"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
      <RadioButton
        item="circle"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
      <RadioButton
        item="rectangle"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
      <RadioButton
        item="line"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
    </div>
  );
}
