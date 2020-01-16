import React from "react";
import { useDispatch } from "react-redux";

export default function ToolLine() {
  const dispatch = useDispatch();

  const pickLine = e => {
    const target = e.target.value;
    dispatch({ type: "SELECT_TOOL_LINE", target });
  };

  return <button onClick={pickLine}>line</button>;
}
