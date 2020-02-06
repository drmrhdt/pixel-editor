import React from "react";
import PropTypes from "prop-types";

function UnicodeIcons({ className, icon }) {
  switch (icon) {
    case "filledHeart":
      return <span className={className}>&#127892;</span>;
    case "filledSquare":
      return <span className={className}>&#9632;</span>;
    case "basket":
      return <span className={className}>&#128465;</span>;
    case "comments":
      return <span className={className}>&#128172;</span>;
    default:
      return "no icon";
  }
}

UnicodeIcons.defaultProps = {
  className: ""
};

UnicodeIcons.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired
};

export default UnicodeIcons;
