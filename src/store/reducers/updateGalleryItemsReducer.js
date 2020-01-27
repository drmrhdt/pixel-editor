import {
  FETCH_COLLECTION_BEGIN,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  UPLOAD_IMAGE_BEGIN,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  ADD_COLLECTION_ITEM_BEGIN,
  ADD_COLLECTION_ITEM_SUCCESS,
  ADD_COLLECTION_ITEM_FAILURE
} from "../constants";

const initialState = {
  items: [],
  error: "",
  uploadedUrl: ""
};

export const updateGalleryItemsReducer = (state = initialState, action) => {
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
    case ADD_COLLECTION_ITEM_BEGIN:
      return {
        ...state
      };
    case ADD_COLLECTION_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ADD_COLLECTION_ITEM_FAILURE:
      return {
        ...state
      };
    case UPLOAD_IMAGE_BEGIN:
      return {
        ...state
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadedUrl: action.payload
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
