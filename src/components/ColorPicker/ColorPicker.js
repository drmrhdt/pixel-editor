import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  selectFillStyle,
  selectStrokeStyle,
  selectShadowColor
} from "../../store/actions/selectColor";
import styles from "./ColorPicker.module.scss";

export default function ColorPicker({ colorParameter }) {
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
    case "shadowColor":
      pickColor = e => {
        dispatch(selectShadowColor(e.target.value));
      };
      break;
    default:
      pickColor = null;
  }

  return (
    <div className={(classNames(classNames), styles["color-picker"])}>
      <label
        className={styles["color-picker__label"]}
        style={{ backgroundColor: color }}
      >
        <input
          className={styles["color-picker__input"]}
          type="color"
          value={color}
          onChange={pickColor}
        />
      </label>
    </div>
  );
}

ColorPicker.propTypes = {
  colorParameter: PropTypes.string.isRequired
};
