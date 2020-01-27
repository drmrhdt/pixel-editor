import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../RadioButton";
import { selectPattern } from "../../store/actions/selectPattern";
import styles from "./ToolPattern.module.scss";

export default function ToolPattern({ className }) {
  const pattern = useSelector(state => state.selectPattern.pattern);
  const dispatch = useDispatch();

  const pickPattern = e => {
    dispatch(selectPattern(e.currentTarget.dataset.label));
  };

  return (
    <div className={className}>
      <h3>Pattern</h3>
      <RadioButton
        className={styles["radio-button__label_type_bubbles"]}
        item="bubbles"
        name="pattern"
        selectedItem={pattern}
        onClick={pickPattern}
      />
      <RadioButton
        className={styles["radio-button__label_type_nested"]}
        item="nested"
        name="pattern"
        selectedItem={pattern}
        onClick={pickPattern}
      />
    </div>
  );
}
