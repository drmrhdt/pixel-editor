import {
  SELECT_SQUARE_TOOL,
  SELECT_RECTANGLE_TOOL,
  SELECT_CIRCLE_TOOL,
  SELECT_LINE_TOOL
} from "../constants";

export const selectFigure = payload => {
  switch (payload) {
    case "square":
      return {
        type: SELECT_SQUARE_TOOL,
        payload
      };
    case "rectangle":
      return {
        type: SELECT_RECTANGLE_TOOL,
        payload
      };
    case "circle":
      return {
        type: SELECT_CIRCLE_TOOL,
        payload
      };
    case "line":
      return {
        type: SELECT_LINE_TOOL,
        payload
      };
    default:
      return {
        type: SELECT_CIRCLE_TOOL,
        payload
      };
  }
};
