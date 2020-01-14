import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLineJoin } from "../../store/actions/selectLineJoin";

export default function ToolLineJoin() {
  const lineJoin = useSelector(state => state.selectLineJoin.lineJoin);
  const dispatch = useDispatch();

  const pickLineJoin = e => {
    dispatch(selectLineJoin(e.target.value));
  };

  return (
    <select value={lineJoin} onChange={pickLineJoin}>
      <option value="round">round</option>
      <option value="bevel">bevel</option>
      <option value="miter">miter</option>
    </select>
  );
}
