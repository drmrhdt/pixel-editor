import React, { useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { selectOpacity } from "../../store/actions/selectOpacity";
import styles from "./ToolOpacity.module.scss";

export default function ToolOpacity(props) {
  const { className } = props;
  const opacity = useSelector(state => state.selectOpacity.opacity);
  const [opacityValue, setOpacityValue] = useState(Math.round(opacity * 100));
  const dispatch = useDispatch();

  const pickOpacity = e => {
    setOpacityValue(Math.round(opacity * 100));
    dispatch(selectOpacity(parseFloat(e.target.value / 100)));
  };

  return (
    <label
      className={classNames(styles["tool-opacity"], className)}
      data-label="opacity %"
    >
      <input
        className={styles["tool-opacity__input_type_range"]}
        type="range"
        value={opacityValue}
        step="1"
        min="0"
        max="100"
        onChange={pickOpacity}
      />
      <input
        className={styles["tool-opacity__input_type_number"]}
        type="number"
        value={opacityValue}
        step="1"
        min="0"
        max="100"
        onChange={pickOpacity}
      />
    </label>
  );
}
