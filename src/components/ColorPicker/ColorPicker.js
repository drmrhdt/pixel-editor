import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectColor } from "../../store/actions/selectColor";

export default function ColorPicker() {
  const color = useSelector(state => state.colorSelect.color);
  const dispatch = useDispatch();

  const pickColor = e => {
    dispatch(selectColor(e.target.value));
  };

  return <input type="color" value={color} onChange={pickColor} />;
}
