import React from "react";
import ColorPicker from "../ColorPicker";
import ToolSize from "../ToolSize";
import "./Toolbox.css";

export default function Toolbox() {
  return (
    <div className="toolbox">
      <ColorPicker />
      <ToolSize />
    </div>
  );
}
