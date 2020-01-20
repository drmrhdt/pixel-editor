import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { selectOpacity } from "../../store/actions/selectOpacity";
import styles from "./ToolOpacity.module.scss";

export default function ToolOpacity(props) {
  const { className } = props;
  const opacity = useSelector(state => state.selectOpacity.opacity);
  const dispatch = useDispatch();

  const pickOpacity = e => {
    dispatch(selectOpacity(parseFloat(e.target.value)));
  };

  return (
    <label className={classNames(styles["tool-opacity"], className)}>
      <span>opacity %</span>
      <input
        type="range"
        value={opacity}
        step="0.01"
        min="0"
        max="1"
        onChange={pickOpacity}
      />
      <input
        className={styles["tool-opacity__input_type_number"]}
        type="number"
        value={opacity}
        step="0.01"
        min="0"
        max="1"
        onChange={pickOpacity}
      />
    </label>
  );
}
