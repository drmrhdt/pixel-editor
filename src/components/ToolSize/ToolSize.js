import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSize } from "../../store/actions/selectSize";
import styles from "./ToolSize.module.scss";

export default function ToolSize() {
  const size = useSelector(state => state.selectSize.toolSize);
  const dispatch = useDispatch();

  const pickSize = e => {
    dispatch(selectSize(parseInt(e.target.value)));
  };

  return (
    <label className={styles["tool-size"]}>
      <span>size</span>
      <input
        className={styles["tool-size__input"]}
        type="number"
        value={size}
        max="15"
        onChange={pickSize}
      />
    </label>
  );
}
