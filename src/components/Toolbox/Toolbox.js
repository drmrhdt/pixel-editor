import React from "react";
import ColorPicker from "../ColorPicker";
import ToolSize from "../ToolSize";
import ToolLineJoin from "../ToolLineJoin";
import "./Toolbox.css";

export default function Toolbox() {
  return (
    <div className="toolbox">
      <ColorPicker />
      <ToolSize />
      <ToolLineJoin />
    </div>
  );
}
