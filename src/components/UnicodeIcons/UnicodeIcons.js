import React from "react";

function UnicodeIcons({ icon }) {
  switch (icon) {
    case "filledHeart":
      return <span>&#127892;</span>;
    case "filledSquare":
      return <span>&#9632;</span>;
    case "basket":
      return <span>&#128465;</span>;
    default:
      return "no icon";
  }
}

export default UnicodeIcons;
