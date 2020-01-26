import React from "react";
import ColorPicker from "../ColorPicker";

export default function ToolBackground({ className }) {
  return (
    <div className={className}>
      <h3>Background</h3>
      <ColorPicker colorParameter="fillStyle" />
    </div>
  );
}
