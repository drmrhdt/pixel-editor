import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSize } from "../../store/actions/selectSize";

export default function ToolSize() {
  const size = useSelector(state => state.selectSize.toolSize);
  const dispatch = useDispatch();

  const pickSize = e => {
    dispatch(selectSize(parseInt(e.target.value)));
  };

  return <input type="range" value={size} max="15" onChange={pickSize} />;
}
