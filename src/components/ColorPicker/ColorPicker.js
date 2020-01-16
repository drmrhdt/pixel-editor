import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import {
  selectFillStyle,
  selectStrokeStyle
} from "../../store/actions/selectColor";
import styles from "./ColorPicker.module.scss";

export default function ColorPicker(props) {
  const { colorParameter } = props;
  const color = useSelector(state => state.colorSelect[colorParameter]);
  const dispatch = useDispatch();
  let pickColor;

  switch (colorParameter) {
    case "strokeStyle":
      pickColor = e => {
        dispatch(selectStrokeStyle(e.target.value));
      };
      break;
    case "fillStyle":
      pickColor = e => {
        dispatch(selectFillStyle(e.target.value));
      };
      break;
    default:
      pickColor = null;
  }

  const style =
    colorParameter === "strokeStyle"
      ? { border: `2px solid ${color}` }
      : { backgroundColor: color, border: `2px solid ${color}` };

  return (
    <>
      <label
        className={classNames(styles.pickColor)}
        style={style}
        for={colorParameter}
      />
      <input
        className={styles.pickColor__input}
        type="color"
        value={color}
        onChange={pickColor}
        id={colorParameter}
      />
    </>
  );
}
