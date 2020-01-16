const initialState = {
  strokeStyle: "#000000",
  fillStyle: "#000000"
};

export const colorSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_STROKE_STYLE":
      return {
        ...state,
        strokeStyle: action.payload
      };
    case "SELECT_FILL_STYLE":
      return {
        ...state,
        fillStyle: action.payload
      };
    default:
      return state;
  }
};
