import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSize } from "../../store/actions/selectSize";

export default function ToolSize() {
  const size = useSelector(state => state.selectSize.toolSize);
  console.log(typeof size);
  const dispatch = useDispatch();

  const pickSize = e => {
    dispatch(selectSize(parseInt(e.target.value)));
  };

  return <input type="range" value={size} onChange={pickSize} />;
}
