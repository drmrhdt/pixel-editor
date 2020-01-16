import React from "react";
import ColorPicker from "../ColorPicker";
import ToolSize from "../ToolSize";
import ToolLineJoin from "../ToolLineJoin";
import ToolLine from "../ToolLine";
import "./Toolbox.css";

export default function Toolbox() {
  return (
    <div className="toolbox">
      <ColorPicker colorParameter="strokeStyle" />
      <ColorPicker colorParameter="fillStyle" />
      <ToolSize />
      <ToolLineJoin />
      <ToolLine />
    </div>
  );
}
