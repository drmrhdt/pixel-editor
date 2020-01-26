import {
  FETCH_COLLECTION_BEGIN,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE
} from "../constants";

const initialState = {
  items: [],
  error: ""
};

export const getGalleryItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_BEGIN:
      return state;
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
