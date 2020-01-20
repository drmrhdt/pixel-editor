const SELECT_OPACITY = "SELECT_OPACITY";

export const selectOpacity = payload => {
  return {
    type: SELECT_OPACITY,
    payload
  };
};
