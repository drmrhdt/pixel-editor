const SELECT_STROKE_STYLE = "SELECT_STROKE_STYLE";
const SELECT_FILL_STYLE = "SELECT_FILL_STYLE";

export const selectStrokeStyle = payload => {
  return {
    type: SELECT_STROKE_STYLE,
    payload
  };
};

export const selectFillStyle = payload => {
  return {
    type: SELECT_FILL_STYLE,
    payload
  };
};
