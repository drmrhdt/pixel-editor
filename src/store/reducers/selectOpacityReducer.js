const initialState = {
  opacity: 0
};

export const selectOpacityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_OPACITY":
      return {
        ...state,
        opacity: action.payload
      };
    default:
      return state;
  }
};
