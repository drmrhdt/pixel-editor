import {
  FETCH_COLLECTION_BEGIN,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  UPLOAD_IMAGE_BEGIN,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  ADD_COLLECTION_ITEM_BEGIN,
  ADD_COLLECTION_ITEM_SUCCESS,
  ADD_COLLECTION_ITEM_FAILURE,
  INCREASE_RATING,
  DELETE_ITEM
} from "../constants";

const initialState = {
  items: [],
  error: "",
  uploadedUrl: ""
};

let itemIndex;

const updateItems = (items, item, itemIndex) => {
  if (itemIndex === -1) {
    return [...items, item];
  }
  if (!item) {
    return [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
  }
  return [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
};

const findIndexById = (itemId, targetArray) => {
  const itemIndex = targetArray.findIndex(item => item.id === itemId);
  return itemIndex;
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
      return { items: updateItems(state.items, action.payload, -1) };
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
        uploadedUrl: action.payload // do I need it?
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case INCREASE_RATING:
      const { id, rating } = action.payload;
      itemIndex = findIndexById(id, state.items);
      const oldItem = state.items[itemIndex];
      const newItem = {
        ...oldItem,
        rating: rating
      };
      return { items: updateItems(state.items, newItem, itemIndex) };
    case DELETE_ITEM:
      itemIndex = findIndexById(action.payload, state.items);
      return { items: updateItems(state.items, null, itemIndex) };
    default:
      return state;
  }
};
