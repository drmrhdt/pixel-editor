import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "../ColorPicker";

export default function ToolBackground({ className }) {
  return (
    <div className={className}>
      <h3>Background</h3>
      <ColorPicker colorParameter="fillStyle" />
    </div>
  );
}

ToolBackground.defaultProps = {
  className: ""
};

ToolBackground.propTypes = {
  className: PropTypes.string
};
