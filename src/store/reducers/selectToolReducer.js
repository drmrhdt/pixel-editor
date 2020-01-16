const initialState = {
  tool: "line"
};

export const selectToolReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_TOOL_LINE":
      return {
        ...state,
        tool: action.payload
      };
    default:
      return state;
  }
};
