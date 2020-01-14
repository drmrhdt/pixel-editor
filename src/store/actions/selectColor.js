const SELECT_COLOR = "SELECT_COLOR";

export const selectColor = payload => {
  return {
    type: SELECT_COLOR,
    payload
  };
};
