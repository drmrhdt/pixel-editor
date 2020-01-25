import React, { useState } from "react";
import InputNumber from "../InputNumber";
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
    <>
      <h3>Opacity</h3>
      <div className={className}>
        <InputNumber
          className={styles["tool-opacity__label_type_range"]}
          label="opacity %"
          type="range"
          step="1"
          min="0"
          max="100"
          value={opacityValue}
          onChange={pickOpacity}
        />
        <InputNumber
          type="number"
          step="1"
          min="0"
          max="100"
          value={opacityValue}
          onChange={pickOpacity}
        />
      </div>
    </>
  );
}
