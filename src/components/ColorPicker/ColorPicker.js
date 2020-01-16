import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFillStyle,
  selectStrokeStyle
} from "../../store/actions/selectColor";

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

  return <input type="color" value={color} onChange={pickColor} />;
}
