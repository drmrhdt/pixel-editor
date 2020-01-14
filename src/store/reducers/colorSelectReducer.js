const initialState = {
  color: "#000000"
};

export const colorSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_COLOR":
      return {
        ...state,
        color: action.payload
      };
    default:
      return state;
  }
};
