import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RadioButton from "../RadioButton";
import { selectFigure } from "../../store/actions/selectFigure";
import styles from "./ToolFigures.module.scss";

export default function ToolFigures({ className }) {
  const figure = useSelector(state => state.selectFigure.figure);
  const dispatch = useDispatch();

  const pickFigure = e => {
    dispatch(selectFigure(e.currentTarget.dataset.label));
  };

  return (
    <div className={className}>
      <h3>Figure</h3>
      <RadioButton
        className={styles["radio-button__label_type_circle"]}
        item="circle"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
      <RadioButton
        className={styles["radio-button__label_type_square"]}
        item="square"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
      <RadioButton
        className={styles["radio-button__label_type_rectangle"]}
        item="rectangle"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
      <RadioButton
        className={styles["radio-button__label_type_line"]}
        item="line"
        name="figure"
        selectedItem={figure}
        onClick={pickFigure}
      />
    </div>
  );
}
