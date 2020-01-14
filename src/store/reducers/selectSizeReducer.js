const initialState = {
  toolSize: 1
};

export const selectSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SIZE":
      console.log(action);

      return {
        ...state,
        toolSize: action.payload
      };
    default:
      return state;
  }
};
