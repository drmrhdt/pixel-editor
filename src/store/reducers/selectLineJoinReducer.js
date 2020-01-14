const initialState = {
  lineJoin: "round"
};

export const selectLineJoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_LINE_JOIN":
      return {
        type: "SELECT_LINE_JOIN",
        lineJoin: action.payload
      };
    default:
      return state;
  }
};
