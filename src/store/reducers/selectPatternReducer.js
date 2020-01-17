const initialState = {
  pattern: "bubbles"
};

export const selectPatternReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_BUBBLES_PATTERN":
      return {
        ...state,
        pattern: "bubbles"
      };
    case "SELECT_NESTED_PATTERN":
      return {
        ...state,
        pattern: "nested"
      };
    default:
      return state;
  }
};
