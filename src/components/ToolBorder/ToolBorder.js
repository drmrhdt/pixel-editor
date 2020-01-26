import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ColorPicker from "../ColorPicker";
import InputNumber from "../InputNumber";
import { selectSize } from "../../store/actions/selectSize";

export default function ToolBorder({ className }) {
  const size = useSelector(state => state.selectSize.toolSize);
  const dispatch = useDispatch();

  const pickSize = e => {
    dispatch(selectSize(parseInt(e.target.value)));
  };

  return (
    <div className={className}>
      <h3>Border</h3>
      <ColorPicker colorParameter="strokeStyle" />
      <InputNumber
        type="number"
        label="size"
        min="0"
        max="15"
        value={size}
        onChange={pickSize}
      />
    </div>
  );
}
