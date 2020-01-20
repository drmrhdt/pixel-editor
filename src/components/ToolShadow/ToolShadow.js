import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../ColorPicker";
import {
  selectShadowBlur,
  selectShadowOffsetX,
  selectShadowOffsetY
} from "../../store/actions/selectToolShadowParameter";
import styles from "./ToolShadow.module.scss";

export default function ToolShadow(props) {
  const { className } = props;
  const { shadowBlur, shadowOffsetX, shadowOffsetY } = useSelector(
    state => state.selectShadowParameter
  );
  const dispatch = useDispatch();

  const pickShadowBlur = e => {
    dispatch(selectShadowBlur(e.target.value));
  };

  const pickShadowOffsetX = e => {
    dispatch(selectShadowOffsetX(e.target.value));
  };

  const pickShadowOffsetY = e => {
    dispatch(selectShadowOffsetY(e.target.value));
  };

  return (
    <div className={classNames(styles["tool-shadow"], className)}>
      <ColorPicker colorParameter="shadowColor" />
      <label className={styles["tool-shadow__label"]}>
        blur
        <input
          className={styles["tool-shadow__input"]}
          type="number"
          min="-15"
          max="15"
          value={shadowBlur}
          onChange={pickShadowBlur}
        />
      </label>
      <label className={styles["tool-shadow__label"]}>
        offset x
        <input
          className={styles["tool-shadow__input"]}
          type="number"
          min="-15"
          max="15"
          value={shadowOffsetX}
          onChange={pickShadowOffsetX}
        />
      </label>
      <label className={styles["tool-shadow__label"]}>
        offset y
        <input
          className={styles["tool-shadow__input"]}
          type="number"
          min="-15"
          max="15"
          value={shadowOffsetY}
          onChange={pickShadowOffsetY}
        />
      </label>
    </div>
  );
}
