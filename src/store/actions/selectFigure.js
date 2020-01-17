const SELECT_SQUARE_TOOL = "SELECT_SQUARE_TOOL";
const SELECT_RECTANGLE_TOOL = "SELECT_RECTANGLE_TOOL";
const SELECT_CIRCLE_TOOL = "SELECT_CIRCLE_TOOL";
const SELECT_TRIANGLE_TOOL = "SELECT_TRIANGLE_TOOL";

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
    case "triangle":
      return {
        type: SELECT_TRIANGLE_TOOL,
        payload
      };
    default:
      return {
        type: SELECT_CIRCLE_TOOL,
        payload
      };
  }
};
